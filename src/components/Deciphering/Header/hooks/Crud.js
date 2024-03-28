import actions from '../../../../redux/actions'
import WordRM from 'models/RM/Word';
import { saveWord } from 'services/word';
import { useDispatch, useSelector } from "react-redux";
import { SelectRecordCrud } from 'components/Diagnosis/SelectRecord/hooks';

const Crud = () => {
    const dispatch = useDispatch()
    const { vowelCode, letterAddOn } = useSelector(state => state.static)
    const { words, phonemes, word, staticWords, wordIndex, staticWord, changeWord } = useSelector(state => state.words)
    const { fillData } = SelectRecordCrud()

    const changeWordIndex = (value) => {
        dispatch(actions.setWordIndex(value))
        dispatch(actions.setStaticWord(staticWords.word_defs[value]))
        dispatch(actions.setWord(words.words[value]))
        if (words?.words[value]?.phonemes)
            dispatch(actions.setPhonemes(words.words[value].phonemes))
        else
            dispatch(actions.setPhonemes(staticWords.word_defs[value].phoneme_defs))
    }

    const prevWord = () => {
        changeWordIndex(wordIndex - 1)
    }

    const nextWord = () => {
        changeWordIndex(wordIndex + 1)
    }

    const saveData = async () => {
        let nStaticWord = { ...staticWord }
        nStaticWord.word_def = nStaticWord.id
        delete nStaticWord.id
        let saveWordsData = new WordRM({ ...nStaticWord, ...word }, phonemes, vowelCode, letterAddOn)
        const res = await saveWord(1, saveWordsData)
        if (res) {
            await fillData()
            if (wordIndex != staticWords.length - 1) {
                nextWord()
                return
            }
        }

        else return
    }

    return {
        prevWord,
        nextWord,
        saveData
    }
}

export default Crud