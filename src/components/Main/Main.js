import React, { useEffect } from 'react'
import ProfileDetails from 'components/Details/ProfileDetails'
import Router from 'components/Router'
import { WrapScreen } from 'styles/GlobalStyle'
import Header from 'components/Header'
import { WrapContent } from './Style'
import Record from 'components/Record'
import { sequence } from 'hebrew-transliteration'
import { Crud } from './hooks'

const Main = () => {
    const { init } = Crud()

    useEffect(() => {
        init()
    }, [])

    return (
        <WrapScreen>
            <Header />
            <WrapContent>
                <Record />
                <Router />
            </WrapContent>
        </WrapScreen>
    )
}

export default Main


