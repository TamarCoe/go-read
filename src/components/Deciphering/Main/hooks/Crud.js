import { useContext } from 'react'
import { getLetterAddOn, getStatisWords, getVowelCode } from 'services/static'
import { Context } from '../Context'
import { keysSourceChanges } from 'mock/sourceChanges'
import { changeItem } from 'utils/array'
import { useDispatch, useSelector } from 'react-redux'
import Error from 'models/RM/Error'
import actions from '../../../../redux/actions'

const Crud = () => {
    const dispatch = useDispatch()
    const { staticWord, word, phonemes } = useSelector(state => state.words)

    const fillVowelCode = async () => {
        const vowel_code = await getVowelCode()
        return vowel_code
    }

    const fillLetterAddOn = async () => {
        const letter_add_on = await getLetterAddOn()
        return letter_add_on
    }

    const getStaticData = async (id) => {
        const words = await getStatisWords(id)
        return words
    }

    const handleClickVowelRow = (phoneme, vowel, phonemeIndex) => {
        let nPhonemesSave = [...phonemes]
        if (vowel != phoneme.vowel_code) {
            nPhonemesSave[phonemeIndex] = {
                ...nPhonemesSave[phonemeIndex],
                vowel_code: vowel,
                vowelEdited: true,
                phoneme_def: staticWord.phoneme_defs[phonemeIndex].id,
                phoneme_def_vowel_code: phoneme.phoneme_def_vowel_code || phoneme.vowel_code,
            }
            if (nPhonemesSave[phonemeIndex].letter_status != keysSourceChanges.insertion) {
                nPhonemesSave[phonemeIndex].vowel_status = keysSourceChanges.substitution
            }
        }
        dispatch(actions.setPhonemes(nPhonemesSave))
    }

    const handleClickOtherRow = (phoneme, vowel, phonemeIndex) => {
        let nPhonemesSave = [...phonemes]
        if (vowel != phoneme.letter_add_on) {
            nPhonemesSave[phonemeIndex] = {
                ...nPhonemesSave[phonemeIndex],
                letterEdited: true,
                phoneme_def: staticWord.phoneme_defs[phonemeIndex].id,
                letter_add_on: vowel,
                phoneme_def_letter_add_on: phoneme.phoneme_def_letter_add_on || phoneme.letter_add_on,
            }
            if (nPhonemesSave[phonemeIndex].letter_status != keysSourceChanges.insertion)
                nPhonemesSave[phonemeIndex].letter_status = keysSourceChanges.substitution
        }

        dispatch(actions.setPhonemes(nPhonemesSave))
    }

    const handleClickLetterRow = (phoneme, keyVowel, phonemeIndex, items) => {
        let vowel = { ...items[keyVowel] }//get the object of char

        const nPhoneme = vowel.action(phoneme, vowel, staticWord.phoneme_defs[phonemeIndex])
        if (nPhoneme) {
            let newPhonemesSave = changeItem(phonemes, phonemeIndex, nPhoneme)
            dispatch(actions.setPhonemes(newPhonemesSave))
        }
    }

    const handleClickClarityRow = (phoneme, keyVowel, index, items) => {
        let vowel = { ...items[keyVowel] }//get the object of char

        let nPhonemesSave = [...phonemes]
        if (nPhonemesSave[index][vowel.type] === keysSourceChanges.na)
            nPhonemesSave[index][vowel.type] = null
        else nPhonemesSave[index][vowel.type] = keysSourceChanges.na
        dispatch(actions.setPhonemes(nPhonemesSave))
    }

    const addOtherParams = (value, index) => {
        let errors = word.errors || [{}, {}]

        errors[index] = new Error(value.type)
        dispatch(actions.setWord({ ...word, errors: errors }))
    }

    return {
        fillVowelCode,
        addOtherParams,
        fillLetterAddOn,
        getStaticData,
        handleClickVowelRow,
        handleClickOtherRow,
        handleClickLetterRow,
        handleClickClarityRow
    }
}

export default Crud