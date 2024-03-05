import React from 'react'
import ErrorType from 'components/Details/ErrorType'
import errorTypes from 'mock/errorTypes'
import { WrapErrorTypes, WrapErrorType, WrapErrors, Title } from './Style'

const ErrorTypes = () => {

    return (
        <WrapErrorTypes>
            <Title>סוגי שגיאות</Title>
            <WrapErrors>
                {errorTypes.map((err, index) =>
                    <ErrorType {...err} index={index} />
                )}
            </WrapErrors>
        </WrapErrorTypes>
    )

}

export default ErrorTypes