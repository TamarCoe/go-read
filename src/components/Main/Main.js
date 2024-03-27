import React from 'react'
import ProfileDetails from 'components/Details/ProfileDetails'
import Router from 'components/Router'
import { WrapScreen } from 'styles/GlobalStyle'
import Header from 'components/Header'
import { WrapContent } from './Style'
import Record from 'components/Record'
import { sequence } from 'hebrew-transliteration'

const Main = () => {
    let x = "\u{5B0}"
    console.log(sequence(`ב${x}\u{5BC}ר\u{5B5}\u{5D0}\u{5E9}\u{5B4}\u{5C1}\u{596}\u{5D9}\u{5EA}`))

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


