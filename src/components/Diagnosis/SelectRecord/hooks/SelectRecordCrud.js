import { useDispatch, useSelector } from "react-redux"
import { getStatisWords } from "services/static"
import { getWords } from 'services/words'
import actions from "../../../../redux/actions"
import WordVM from 'models/VM/Word'
import { cloneDeep, sortBy } from "lodash"

const Crud = () => {
    const { wordIndex, staticWords } = useSelector(state => state.words)
    const dispatch = useDispatch()

    const fillData = async (id, staticData) => {
        let nStaticWords = staticData || staticWords
        const words = await getWords(id)

        const nWords = []
        nStaticWords.word_defs.forEach((word_def, index) => {
            let flag = false

            words.words.forEach(word => {
                if (word.word_def_index === word_def.index) {
                    nWords.push(word)
                    flag = true
                }
            });
            if (!flag) {
                let word = new WordVM(nStaticWords.word_defs[index])
                nWords.push(word)
            }
        });
        if (words) {
            const wordsSort = sortBy(nWords, "word_def_index")
            dispatch(actions.setWords({ ...words, words: wordsSort }))
            if (wordsSort[wordIndex]?.phonemes)
                dispatch(actions.setPhonemes(wordsSort[wordIndex].phonemes))
            else
                dispatch(actions.setPhonemes(nStaticWords.word_defs[wordIndex].phoneme_defs))
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
        const staticWords = await fillStatisWords(id)
        if (staticWords)
            fillData(id, staticWords)
    }

    return {
        getData,
        fillData
    }
}

export default Crud