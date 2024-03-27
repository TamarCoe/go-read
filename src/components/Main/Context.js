import React, { useState } from 'react'
import errorTypes from 'mock/errorTypes'
import types from 'mock/types'
import Main from './Main'
import { cloneDeep, keyBy } from 'lodash'
import { keysTypes } from 'mock/types'
import { keysErrors } from 'mock/errorTypes'
import { useSelector } from 'react-redux'

const CreateContext = (props) => {
    const [indexTypeError, setIndexTypeError] = useState(null)
    const [indexType, setIndexType] = useState(0)
    const [record, setRecord] = useState(0)
    const [indexMenuItem, setIndexMenuItem] = useState(0)
    const [localRecord, setLocalRecord] = useState(null)
    const [wavesurfer, setWavesurfer] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const { words } = useSelector(state => state.words)

    const onPlayPause = () => {
        wavesurfer && wavesurfer.playPause()
    }

    const onReadyPlay = (ws) => {
        setWavesurfer(ws)
        setIsPlaying(false)
    }

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
        const errorType = types[indexType].menu[indexTypeError]?.type

        let words = cloneDeep(recordsWords)

        words?.forEach((word, index) => {
            let nWord = { ...word }
            if (nWord.status != "CORRECT") {
                nWord.bold = true
                if (nWord.errors) {
                    const errors = keyBy(word.errors, 'type')

                    if (errors[keysErrors.selfCorrection]) {
                        nWord.warningBold = true
                    }
                    if (errors[keysErrors.selfCorrection] && errorType === keysErrors.selfCorrection) {
                        nWord.typeBold = true
                        nWord.errorTypeBold = true
                    }
                    if (errors[keysErrors.transposition] && errorType === keysErrors.transposition) {
                        nWord.typeBold = true
                        nWord.errorTypeBold = true
                    }
                    if (errors[keysErrors.hesitation] && errorType === keysErrors.hesitation) {
                        nWord.typeBold = true
                        nWord.errorTypeBold = true
                    }
                    if (errors[keysErrors.rootInflection] && type === keysTypes.special) {
                        nWord.typeBold = true;
                    }
                    if (errors[keysErrors.rootInflection] && errorType === keysErrors.rootInflection) {
                        nWord.errorTypeBold = true
                        nWord.typeBold = true;
                    }
                }
                if (nWord.status === keysErrors.insertion === errorType) {
                    nWord.typeBold = true
                    nWord.errorTypeBold = true
                }
                else nWord.phonemes.forEach((phoneme) => {
                    nWord = addFlagsToPhoneme(phoneme, type, nWord)
                })
            }
            words[index] = nWord
        });

        return words
    }

    const getByType = () => {
        const type = types[indexType].type

        if (words) {
            const recordsWords = cloneDeep(words.words)
            switch (type) {
                case keysTypes.all:
                    recordsWords.forEach((word) => {
                        if (word.status != "CORRECT") {
                            word.bold = true
                            if (word.errors) {
                                const errors = keyBy(word.errors, 'type')
                                if (errors?.[keysErrors.selfCorrection]) {
                                    word.warningBold = true
                                }
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
                case keysTypes.special:
                    return filter(recordsWords, keysTypes.special)
            }
            return recordsWords
        }
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
        setLocalRecord,
        onReadyPlay,
        onPlayPause,
        isPlaying,
        setIsPlaying
    }

    return (
        <Context.Provider value={commonState}>
            <Main />
        </Context.Provider>
    )
}

export default CreateContext

export const Context = React.createContext()

