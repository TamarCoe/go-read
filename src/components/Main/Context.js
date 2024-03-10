import React, { useState } from 'react'
import errorTypes from 'mock/errorTypes'
import types from 'mock/types'
import Main from './Main'
import { cloneDeep } from 'lodash'
import { keysTypes } from 'mock/types'
import { keysErrors } from 'mock/errorTypes'

const CreateContext = (props) => {
    const [indexTypeError, setIndexTypeError] = useState(null)
    const [indexType, setIndexType] = useState(0)
    const [record, setRecord] = useState(0)
    const [indexMenuItem, setIndexMenuItem] = useState(0)
    const [localRecord, setLocalRecord] = useState(null)

    const changeType = (index) => {
        setIndexTypeError(index)
    }

    const addFlagsToPhoneme = (phoneme, type, word) => {
        const nWord = { ...word }
        const errorType = errorTypes?.[indexTypeError]?.type

        if (phoneme.p_type === type)
            if (phoneme.t_status) {
                nWord.typeBold = true;
                if (phoneme.t_status === errorType) {
                    nWord.errorTypeBold = true
                }
            }
        return nWord
    }

    const filter = (recordsWords, type) => {
        const errorType = errorTypes?.[indexTypeError]?.type

        let words = cloneDeep(recordsWords)

        words.forEach((word, index) => {
            let nWord = { ...word }
            if (nWord.t_status != "CORRECT") {
                nWord.bold = true
                if (nWord.error_type && nWord.error_type[keysErrors.selfCorrection]) {
                    nWord.warningBold = true
                }
                if (nWord.error_type && nWord.error_type[keysErrors.selfCorrection] && errorType === keysErrors.selfCorrection) {
                    nWord.typeBold = true
                    nWord.errorTypeBold = true
                }
                if (nWord.error_type && nWord.error_type[keysErrors.transposition] && errorType === keysErrors.transposition) {
                    nWord.typeBold = true
                    nWord.errorTypeBold = true
                }
                if (nWord.t_status === keysErrors.insertion === errorType) {
                    nWord.typeBold = true
                    nWord.errorTypeBold = true
                }
                else nWord.phoneme_breakdown.forEach((phoneme) => {
                    if (phoneme.phoneme_duo)
                        phoneme.phoneme_duo.forEach((phoneme_duo) =>
                            nWord = addFlagsToPhoneme(phoneme_duo, type, nWord)
                        )
                    else nWord = addFlagsToPhoneme(phoneme, type, nWord)
                })
            }
            words[index] = nWord
        });

        return words
    }

    const getByType = () => {
        const type = types[indexType].type

        const recordsWords = cloneDeep(record.results?.text_score)
        switch (type) {
            case keysTypes.all:
                recordsWords.forEach((word) => {
                    if (word.t_status != "CORRECT") {
                        word.bold = true
                        if (word.error_type && word.error_type?.[keysErrors.selfCorrection]) {
                            word.warningBold = true
                        }
                    }
                })
                break
            case keysTypes.phoneme:
                return filter(recordsWords, keysTypes.phoneme)
            case keysTypes.vowel:
                return filter(recordsWords, keysTypes.vowel)
            case keysTypes.word:
                return filter(recordsWords, keysTypes.word)
        }
        return recordsWords
    }

    const commonState = {
        indexTypeError,
        setIndexTypeError,
        changeType,
        indexType,
        setIndexType,
        getByType,
        record,
        setRecord,
        indexMenuItem,
        setIndexMenuItem,
        localRecord,
        setLocalRecord
    }

    return (
        <Context.Provider value={commonState}>
            <Main />
        </Context.Provider>
    )
}

export default CreateContext

export const Context = React.createContext()

