import { useContext } from "react"
import { saveWord } from 'services/word';
import { Context } from "components/Deciphering/Main/Context"
import WordRM from 'models/RM/Word';
import { useDispatch, useSelector } from "react-redux";
import actions from '../../../../redux/actions'

const Crud = () => {
    const dispatch = useDispatch()
    const { vowelCode, letterAddOn } = useContext(Context)
    const { words, phonemes, word, staticWords, wordIndex, staticWord } = useSelector(state => state.words)

    const changeWordIndex = (value) => {
        dispatch(actions.setWordIndex(value))
        dispatch(actions.setStaticWord(staticWords.word_defs[value]))
        if (words?.words[wordIndex]?.phonemes)
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
        let saveWordsData = new WordRM({ ...staticWord, ...word }, phonemes,vowelCode,letterAddOn)
        console.log(saveWordsData)
        // const res = await saveWord(saveWordsData)
        // if (res)
        if (wordIndex != staticWords.length - 1)
            nextWord()

        return
    }

    return {
        prevWord,
        nextWord,
        saveData
    }
}

export default Crud