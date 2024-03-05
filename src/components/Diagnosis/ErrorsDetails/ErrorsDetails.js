import React, { useContext } from 'react'
import errors from 'mock/errors.json'
import { Context } from 'components/Main/Context'
import { WrapErrors, Error } from './Style'

const ErrorsDetails = () => {
    const { record = {} } = useContext(Context),
        { results = {} } = record

    return (
        <WrapErrors>
            {errors.map((err) =>
                <Error color={err.color}>
                    {err.label}
                    {"  "}
                    <span id="count">
                        {results[err.key]}
                    </span>
                </Error>
            )}
        </WrapErrors>
    )
}

export default ErrorsDetails