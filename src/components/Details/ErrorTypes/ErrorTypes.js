import React, { useContext } from 'react'
import ErrorType from 'components/Details/ErrorType'
import types from 'mock/types'
import { WrapErrorTypes, WrapErrorType, WrapErrors, Title } from './Style'
import { Context } from 'components/Main/Context'

const ErrorTypes = () => {
    const { indexType } = useContext(Context)

    return (
        <WrapErrorTypes>
            <Title>סוגי שגיאות</Title>
            <WrapErrors>
                {types[indexType].menu.map((err, index) =>
                    <ErrorType key={index}{...err} index={index} />
                )}
            </WrapErrors>
        </WrapErrorTypes>
    )

}

export default ErrorTypes