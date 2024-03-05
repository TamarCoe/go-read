import React, { useContext } from 'react'
import header from 'mock/header'
import { useNavigate } from "react-router-dom";
import { Context } from 'components/Main/Context'
import { WrapHeader, Button, ButtonType } from './Style'

const Header = (props) => {
    const { record, indexMenuItem, setIndexMenuItem } = useContext(Context)
    const navigate = useNavigate()

    const onClickItem = ({ route }, index) => {
        setIndexMenuItem(index)
        navigate(route)
    }

    return (
        <WrapHeader>
            {header.map((item, index) => {
                const disabled = index != 0 && indexMenuItem === 0 && !record
                return (
                    <ButtonType
                        key={item.key}
                        onClick={() => !disabled && onClickItem(item, index)}
                        selected={indexMenuItem === index}
                        disabled={disabled}
                    >
                        <Button>
                            {item.label}
                        </Button>
                    </ButtonType>
                )
            }
            )}
        </WrapHeader>
    )

}

export default Header