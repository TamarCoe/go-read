import React from 'react'
import Deciphering from '../Deciphering'
import Header from 'components/Deciphering/Header/Header'
import OtherParams from 'components/Deciphering/OtherParams'
import { Content } from './Style'
import { useSelector } from 'react-redux'

const Main = () => {
    const { phonemes } = useSelector(state => state.words)

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