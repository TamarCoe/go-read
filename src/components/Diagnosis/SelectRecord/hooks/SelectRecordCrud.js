import { useDispatch, useSelector } from "react-redux"
import { getStatisWords } from "services/static"
import { getWords } from 'services/words'
import actions from "../../../../redux/actions"

const Crud = () => {
    const { wordIndex } = useSelector(state => state.words)
    const dispatch = useDispatch()

    const fillData = async (id, staticWords) => {
        const words = await getWords(id)
        if (words) {
            dispatch(actions.setWords(words))
            if (words?.words[wordIndex]?.phonemes)
                dispatch(actions.setPhonemes(words.words[wordIndex].phonemes))
            else
                dispatch(actions.setPhonemes(staticWords.word_defs[wordIndex].phoneme_defs))
        }
    }

    const fillStatisWords = async (id) => {
        const words = await getStatisWords(id)
        if (words) {
            dispatch(actions.setStaticWords(words))
            if (words?.word_defs.length)
                dispatch(actions.setStaticWord((words.word_defs[wordIndex])))
            return words
        }
        return null
    }

    const getData = async (id = 1) => {
        debugger
        const staticWords = await fillStatisWords(id)
        // if (staticWords)
        fillData(id, staticWords)
    }

    return {
        getData
    }
}

export default Crud