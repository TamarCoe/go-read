import React, { useContext, useEffect } from 'react'
import Deciphering from '../Deciphering'
import Header from 'components/Deciphering/Header/Header'
import OtherParams from 'components/Deciphering/OtherParams'
import { Content } from './Style'
import { Crud as MainCrud } from './hooks'
import { Context } from './Context'
import { Context as MainContext } from 'components/Main/Context'
import { useSelector } from 'react-redux'

const Main = () => {
    const { setVowelCode, setLetterAddOn, vowelCode, letterAddOn } = useContext(Context)
    const { phonemes, setWords, words, staticWords, wordIndex } = useSelector(state => state.words)
    const { fillVowelCode, fillLetterAddOn, getStaticData } = MainCrud()
    const { record } = useContext(MainContext)

    useEffect(() => {
        // if (staticWords) {
        //     setStaticWord(staticWords.word_defs[wordIndex])
        //     if (words?.words[wordIndex])
        //         setPhonemesSave(words.words[wordIndex].phonemes)
        //     else
        //         setPhonemesSave(staticWords.word_defs[wordIndex].phoneme_defs)
        // }
    }, [wordIndex, staticWords])

    useEffect(() => {
        async function init() {
            // fillStaticData()
            // fillPhonemesSave()
            if (!vowelCode) setVowelCode(await fillVowelCode())
            if (!letterAddOn) setLetterAddOn(await fillLetterAddOn())
        }
        init()
    }, [])

    return (
        <>
            <Content>
                <Header />
                <div className='deciphering'>
                    {phonemes ?
                        <>
                            <Deciphering />
                            <OtherParams />
                        </>
                        : null}
                </div>
            </Content>
        </>
    )
}

export default Main