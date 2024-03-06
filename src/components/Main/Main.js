import React from 'react'
import ProfileDetails from 'components/Details/ProfileDetails'
import Router from 'components/Router'
import { WrapScreen } from 'styles/GlobalStyle'
import Header from 'components/Header'
import { WrapContent } from './Style'
import Record from 'components/Record'

const Main = () => {

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


