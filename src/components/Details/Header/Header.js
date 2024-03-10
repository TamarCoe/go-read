import React, { useContext } from 'react'
import types from 'mock/types'
import { Context } from 'components/Main/Context'
import { WrapHeader, Button, ButtonType } from './Style'

const Header = (props) => {
    const { indexType, setIndexType, setIndexTypeError } = useContext(Context)

    const changeType = (type, index) => {
        if (!type.disabled)
            setIndexType(index)
        if (!index) {
            setIndexTypeError(null)
        }
    }

    return (
        <WrapHeader>
            {types.map((type, index) =>
                <ButtonType
                    key={index}
                    variant={indexType === index ? "contained" : "outlined"}
                    onClick={() => changeType(type, index)}
                    selected={indexType === index}
                    key={type.id}
                    disabled={type.disabled}>
                    {type.label}
                </ButtonType>
            )}
        </WrapHeader>
    )

}

export default Header