import { produce } from 'immer'
import createReducer from "./reducerUtils"

const initialState = {
    staticWords: null,
    staticWord: {},
    wordIndex: 0,

    words: null,
    word: {
        errors: [null,null]
    },
    phonemes: null
}

const config = {
    setStaticWords(state, action) {
        state.staticWords = action.payload
    },
    setStaticWord(state, action) {
        state.staticWord = action.payload
    },
    setWordIndex(state, action) {
        state.wordIndex = action.payload
    },
    setWords(state, action) {
        state.words = action.payload
    },
    setWord(state, action) {
        state.word = action.payload
    },
    setPhonemes(state, action) {
        state.phonemes = action.payload
    },
}

export default produce(
    (state, action) => createReducer(state, action, config),
    initialState
)

