import React, { useContext } from 'react'
import errors from 'mock/errors.json'
import { Context } from 'components/Main/Context'
import { WrapErrors, Error, WrapTitle } from './Style'

const ErrorsDetails = (props) => {
    const { record = {} } = useContext(Context),
        { results = {} } = record
    const { items, title } = props

    return (
        <>
            <WrapTitle>
                {title}
            </WrapTitle>

            <WrapErrors className='Flex-item'>

                {items?.map((item) =>
                    <Error disabled={item.disabled} color={item.color}>
                        {item.label}
                        {"  "}
                        <span id="count">
                            {results[item.key]}
                        </span>
                    </Error>
                )}
            </WrapErrors>
        </>
    )
}

export default ErrorsDetails