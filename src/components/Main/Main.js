import React, { useEffect } from 'react'
import ProfileDetails from 'components/Details/ProfileDetails'
import Router from 'components/Router'
import { WrapScreen } from 'styles/GlobalStyle'
import Header from 'components/Header'
import { WrapContent } from './Style'
import Record from 'components/Record'
import { sequence } from 'hebrew-transliteration'
import { Crud } from './hooks'
import { Buffer } from "buffer"
import axios from 'axios'

const Main = () => {
    const { init } = Crud()

    const encoded = Buffer.from(process.env.REACT_APP_USERNAME + ':' + process.env.REACT_APP_PASSWORD).toString('base64');

    const axioxSetting = async () => {
        await axios.interceptors.request.use((config) => {
            config.headers.Authorization = 'Basic ' + encoded
            return config;
        }, (error) => {
            return Promise.reject(error);
        });
    }

    useEffect(() => {
        const initData = async () => {
            axioxSetting()
            init()
        }
        initData()
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


