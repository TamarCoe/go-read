import React, { useContext } from 'react'
import header from 'mock/header'
import Group from 'assets/Group.png'
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
            <div>
                {header.map((item, index) => {
                    const disabled = index != 0 && indexMenuItem === 0 && !record
                    return (
                        <ButtonType
                            variant={indexMenuItem === index ? "contained" : "outlined"}
                            key={item.id}
                            onClick={() => !disabled && onClickItem(item, index)}
                            selected={indexMenuItem === index}
                            disabled={disabled || (index != 0 && !record?.results?.text_score)}
                        >
                            {item.label}
                        </ButtonType>
                    )
                }
                )}
            </div>
            <img src={Group} />
        </WrapHeader>
    )

}

export default Header