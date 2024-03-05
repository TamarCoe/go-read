import React from 'react'
import ErrorTypes from 'components/Details/ErrorTypes'
import DetailedView from 'components/Details/DetailedView'
import Header from 'components/Details/Header'
import { Wrap, Left, Right, WrapContent } from './Style'

const Main = () => {

    return (
        <>
            <Header />
            <WrapContent>
                <Right>
                    <ErrorTypes />

                </Right>
                <Left>
                    <DetailedView />
                </Left>
            </WrapContent>
        </>
    )


}

export default Main


