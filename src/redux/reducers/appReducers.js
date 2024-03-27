import { combineReducers } from 'redux'
import words from './words'
import general from './general'

// Combine with other reducers we may add in the future
const appReducers = combineReducers({
    words: words,
    general: general
})

export default appReducers

