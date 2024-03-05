import styled from "styled-components";
import { Hover } from "styles/GlobalCss";


const WrapHeader = styled.div`
border-radius: 8px;
display: flex;
flex-direction: row;
column-gap: 10px;
padding: 15px;
`

const ButtonType = styled.div`

:hover{
    box-shadow:${props => !props.disabled && '0px 0px 2px rgba(2, 1, 0, 0.1)'};
    cursor:${props => !props.disabled && 'pointer'};
}
border-radius: 6px;
background:${props => props.selected ? '#e72d5d' : 'white'};

opacity:${props => props.disabled && '0.3'};
color: ${props => props.disabled ? '#26445A' : 'white'};
color: ${props => props.selected ? 'white' : '#26445A'};

align-items: center;
display: flex;
`

const Button = styled.div`
padding: 10px;
padding-left: 15px;
padding-right: 15px;
`

export { WrapHeader, ButtonType, Button }