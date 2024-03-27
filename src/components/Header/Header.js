import React, { useContext } from 'react'
import header from 'mock/header'
import Group from 'assets/Group.png'
import { useNavigate } from "react-router-dom";
import { Context } from 'components/Main/Context'
import { WrapHeader, Button, ButtonType } from './Style'
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/actions';

const Header = () => {
    const dispatch = useDispatch()
    const { record } = useContext(Context)
    const navigate = useNavigate()

    const { menuIndex } = useSelector(state => state.general)

    const onClickItem = ({ route }, index) => {
        dispatch(actions.setMenuIndex(index))
        navigate(route)
    }

    return (
        <WrapHeader>
            <div>
                {header.map((item, index) => {
                    const disabled = index != 0 && menuIndex === 0 && !record
                    return (
                        <ButtonType
                            variant={menuIndex === index ? "contained" : "outlined"}
                            key={item.id}
                            onClick={() => !disabled && onClickItem(item, index)}
                            selected={menuIndex === index}
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