import React, { useEffect, useState } from 'react'
import Main from './Main'
import Error from 'models/RM/Error'
import { Crud as MainCrud } from './hooks'

const CreateContext = () => {
    const [staticWords, setStaticWords] = useState(null)
    const [wordIndex, setWordIndex] = useState(0)
    const [staticWord, setStaticWord] = useState({})
    const [currentWords, setCurrentWords] = useState(null)
    const [phonemesSave, setPhonemesSave] = useState(null)
    const [errorWordsSave, setErrorWordsSave] = useState({})
    const [wordSave, setWordSave] = useState({})
    const [vowelCode, setVowelCode] = useState(null)
    const [letterAddOn, setLetterAddOn] = useState(null)




    const commonState = {
        staticWord,
        setStaticWord,
        setWordIndex,
        wordIndex,
        phonemesSave,
        setPhonemesSave,
        staticWords,
        wordSave,
        vowelCode,
        setVowelCode,
        letterAddOn,
        setLetterAddOn,
        setStaticWords,
        errorWordsSave,
        setErrorWordsSave,
        currentWords,
        setCurrentWords
    }

    return (
        <Context.Provider value={commonState}>
            <Main />
        </Context.Provider>
    )
}

export default CreateContext

export const Context = React.createContext()

