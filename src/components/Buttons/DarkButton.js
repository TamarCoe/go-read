import React from 'react'
import { WrapButton, Button } from 'components/Buttons/Style'

const DarkButton = (props) => {
    const { size, children, action, disabled, selected } = props

    return (
        <WrapButton
            size={size}
            onClick={() => !disabled && action(props)}
            selected={selected}
            disabled={disabled}
        >
            <Button>
                {children}
            </Button>
        </WrapButton>
    )
}

export default DarkButton