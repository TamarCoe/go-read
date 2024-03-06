import styled from "styled-components";
import { Hover } from "styles/GlobalCss";


const WrapHeader = styled.div`
justify-content: space-between;
display:flex;
background:#26445A;
position:absolute;
transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);

padding: 15px;
height:50px;
width:calc(100% - 30px);
top:0;

div{
display: flex;
flex-direction: row;
column-gap: 10px;
}
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