import React, { useEffect, useState } from 'react'
import ErrorTypes from 'components/Details/ErrorTypes'
import DetailedView from 'components/Details/DetailedView'
import Header from 'components/Details/Header'
import { Wrap, Left, Right, Content } from './Style'

const Main = () => {

    return (
        <>
            <Header />
            <Content>
                <Right>
                    <ErrorTypes />
                </Right>
                <Left className='left'>
                    <DetailedView />
                </Left>
            </Content>
        </>
    )


}

export default Main


