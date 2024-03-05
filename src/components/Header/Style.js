import styled from "styled-components";
import { Hover } from "styles/GlobalCss";


const WrapHeader = styled.div`
background:#26445A;
border-radius: 8px;
display: flex;
flex-direction: row;
column-gap: 10px;
padding: 15px;
`

const ButtonType = styled.div`

:hover{
    box-shadow:${props => !props.disabled && '0px 0px 30px rgba(0, 0, 0, 0.2)'};
    cursor:${props => !props.disabled && 'pointer'};
}
opacity:${props => props.disabled && '0.3'};
color: ${props => props.selected ? '#26445A' : 'white'};
border-radius: 8px;
background:${props => props.selected ? '#F3F6F9' : '#647A8A;'};

align-items: center;
display: flex;
`

const Button = styled.div`
padding: 10px;
padding-left: 15px;
padding-right: 15px;
`

export { WrapHeader, ButtonType, Button }