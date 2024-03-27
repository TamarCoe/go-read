import { produce } from 'immer'
import createReducer from "./reducerUtils"

const initialState = {
    vowelCode: null,
    letterAddOn: null
}

const config = {
    setVowelCode(state, action) {
        state.vowelCode = action.payload
    },
    setLetterAddOn(state, action) {
        state.letterAddOn = action.payload
    }
}

export default produce(
    (state, action) => createReducer(state, action, config),
    initialState
)

