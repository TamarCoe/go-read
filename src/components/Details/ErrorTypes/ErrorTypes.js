import React, { useContext } from 'react'
import ErrorType from 'components/Details/ErrorType'
import errorTypes from 'mock/errorTypes'
import { WrapErrorTypes, WrapErrorType, WrapErrors, Title } from './Style'
import types from 'mock/types'
import { Context } from 'components/Main/Context'

const ErrorTypes = () => {
    const { indexType } = useContext(Context)

    return (
        <WrapErrorTypes>
            <Title>סוגי שגיאות</Title>
            <WrapErrors>
                {types[indexType].menu.map((err, index) =>
                    <ErrorType {...err} index={index} />
                )}
            </WrapErrors>
        </WrapErrorTypes>
    )

}

export default ErrorTypes