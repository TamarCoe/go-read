import React, { useEffect } from 'react'
import Router from 'components/Router'
import Header from 'components/Header'
import Record from 'components/Record'
import axios from 'axios'
import { Crud } from './hooks'
import { Buffer } from "buffer"
import { WrapContent } from './Style'
import { WrapScreen } from 'styles/GlobalStyle'

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


