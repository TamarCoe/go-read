import React from 'react'
import ProfileDetails from 'components/Details/ProfileDetails'
import Router from 'components/Router'
import { WrapScreen } from 'styles/GlobalStyle'
import Header from 'components/Header'

const Main = () => {

    return (
        <WrapScreen>
            {/* <AppBar position="static">
                <Toolbar variant="dense">
                   
                </Toolbar>
            </AppBar> */}
            <ProfileDetails />
            <Header />
            <Router />
        </WrapScreen>
    )
}

export default Main


