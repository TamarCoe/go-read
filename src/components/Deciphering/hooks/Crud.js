import actions from '../../../redux/actions'
import { v4 as uuid } from 'uuid'
import { keys } from "mock/types";
import { keysSourceChanges } from 'mock/sourceChanges';
import { addItem } from 'utils/array';
import { useDispatch, useSelector } from 'react-redux';

const Crud = () => {
    const dispatch = useDispatch()
    const { phonemes, staticWord } = useSelector(state => state.words)

    const handlePlus = (index) => {
        const nPhonemesSave = addItem(phonemes, index, {
            id: uuid(),
            type: keys.letter,
            vowel_code: null,
            letter_add_on: null,
            phoneme: null,
            vowel_status: keysSourceChanges.insertion,
            letter_status: keysSourceChanges.insertion,
        })
        const nStaicPhonemes = addItem(staticWord.phoneme_defs, index, { id: uuid() })
        dispatch(actions.setPhonemes(nPhonemesSave))
        dispatch(actions.setStaticWord({ ...staticWord, phoneme_defs: nStaicPhonemes }))
    }

    const savePhoneme = (value, index) => {
        let newPhonemes = [...phonemes]
        newPhonemes[index].phoneme = value
        dispatch(actions.setPhonemes(newPhonemes))
    }

    const getVowel = ({ keyVowel, items, phoneme, index, type }) => {
        let nItem = { ...items[keyVowel] }//get the object of char
        let strKeyVowel = keyVowel.toString()

        //for insertion phonemes
        if (phoneme.vowel_status === keysSourceChanges.insertion) {
            if (!phoneme.letter)
                nItem.disabled = true
            else if (strKeyVowel === phoneme?.vowel_code?.toString()) {
                nItem.insertionError = true
            }
        }

        else {
            if (strKeyVowel === staticWord.phoneme_defs?.[index]?.vowel_code?.toString()) {
                nItem.defaultVowel = true
                if (phoneme.vowel_code != strKeyVowel)
                    nItem.defualtDisabled = true
            }
            else if (strKeyVowel === phoneme?.vowel_code?.toString()) {
                nItem.error = true
            }
        }

        return nItem
    }

    const getOther = ({ keyVowel, items, phoneme, index, type }) => {
        let nItem = { ...items[keyVowel] }//get the object of char
        let strKeyVowel = keyVowel.toString()

        //for insertion phonemes
        if (phoneme.letter_status === keysSourceChanges.insertion) {
            if (!phoneme.letter)
                nItem.disabled = true
            if (strKeyVowel === phoneme?.letter_add_on?.toString()) {
                nItem.insertionError = true
            }
        }

        else {
            if (strKeyVowel === staticWord.phoneme_defs?.[index]?.letter_add_on?.toString()) {
                nItem.defaultVowel = true
                if (phoneme?.letter_add_on?.toString() != strKeyVowel)
                    nItem.defualtDisabled = true
            }
            if (strKeyVowel === phoneme?.letter_add_on?.toString() && !nItem.defaultVowel)
                nItem.error = true
        }

        return nItem
    }

    const getLetter = ({ keyVowel, items, phoneme, index }) => {
        let nItem = { ...items[keyVowel] }//get the object of char

        //for insertion phonemes
        if (phoneme.letter_status === keysSourceChanges.insertion) {
            nItem.disabled = true
        }

        else if (phoneme?.letter_status === nItem?.status)
            if (phoneme.phoneme_def_letter ?
                //for substitution 
                phoneme.phoneme_def_letter != phoneme.letter && phoneme.phoneme_def_letter
                //for ommison
                : phoneme?.vowel_status === nItem?.status
            )
                nItem.error = true

        return nItem
    }

    const getClarity = ({ keyVowel, items, phoneme, index }) => {
        let nItem = { ...items[keyVowel] }//get the object of char

        //for insertion phonemes
        if (phoneme.letter_status === keysSourceChanges.insertion) {
            nItem.disabled = true
        }

        else if (phoneme[nItem.type] === keysSourceChanges.na)
            nItem.error = true

        return nItem
    }

    const renderRow = (type, keyVowel, items, phoneme, index) => {
        const obj = { keyVowel, items, phoneme, index, type }
        switch (type) {
            case 'vowel':
                return getVowel(obj)
            case 'other':
                return getOther(obj)
            case 'letter':
                return getLetter(obj)
            case 'clarity':
                return getClarity(obj)
        }
    }

    const onChangeLetter = ({ target }, index) => {
        const { value } = target

        let nPhonemesSave = [...phonemes]

        if (!nPhonemesSave[index].phoneme_def_letter)
            nPhonemesSave[index].phoneme_def_letter = nPhonemesSave[index].phoneme

        if (value != nPhonemesSave[index].phoneme_def_letter && value)
            nPhonemesSave[index].letter_status = keysSourceChanges.substitution
        else {
            nPhonemesSave[index].letter_status = null
        }
        nPhonemesSave[index].phoneme = value

        dispatch(actions.setPhonemes(nPhonemesSave))
    }


    return {
        savePhoneme,
        handlePlus,
        renderRow,
        getVowel,
        onChangeLetter
    }
}

export default Crud