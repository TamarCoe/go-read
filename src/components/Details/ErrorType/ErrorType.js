import React, { useContext } from 'react'
import { Context } from 'components/Main/Context'
import { Dot, WrapError, WrapButton } from './Style'

const ErrorType = (props) => {
    const { bg, color, label, index } = props
    const { changeType, indexTypeError, indexType } = useContext(Context)

    const disabled = props.disabled || !indexType
    const selected = indexTypeError === index

    return (
        <WrapError
            disabled={disabled}
            onClick={() => !disabled && changeType(index)}
            selected={selected}
            bg={bg}
            variant="outlined"
            customColor={color}
        >
            <Dot customColor={color} selected={selected} />
            {label}
        </WrapError>
    )
}

export default ErrorType