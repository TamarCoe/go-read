import { combineReducers } from 'redux'
import words from './words'
import general from './general'
import staticData from './static'

// Combine with other reducers we may add in the future
const appReducers = combineReducers({
    words: words,
    general: general,
    static: staticData
})

export default appReducers

