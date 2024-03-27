import { produce } from 'immer'
import createReducer from "./reducerUtils"

const initialState = {
    menuIndex: 0
}

const config = {
    setMenuIndex(state, action) {
        state.menuIndex = action.payload
    }
}

export default produce(
    (state, action) => createReducer(state, action, config),
    initialState
)

