import React, { useContext } from 'react'
import errors from 'mock/errors.json'
import { Context } from 'components/Main/Context'
import { WrapErrors, Error, WrapTitle, Conut } from './Style'
import { Card as WrapError } from 'styles/GlobalStyle'

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

                {items?.map((item, index) =>
                    <div className='wrapError' key={index}>
                        <WrapError disabled notActive={item.disabled} align="start">
                            {item.label}
                            {"  "}
                            <Conut>
                                {results[item.key]}
                            </Conut>
                        </WrapError>
                    </div>
                )}
            </WrapErrors>
        </>
    )
}

export default ErrorsDetails