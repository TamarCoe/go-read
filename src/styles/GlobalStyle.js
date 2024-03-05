import styled from "styled-components";
import { Section,Scroll } from 'styles/GlobalCss'

const WrapScreen = styled.div`
width:100%;
height:100%;
display: flex;
row-gap: 20px;
flex-direction: column;
`

const WrapContent = styled.div`
display:flex;
column-gap: 20px;
overflow: auto;
height:100%;
${Scroll};
`

const Left = styled.div`
width:${props => props.size ? props.size : '85%'};  
overflow: auto;
${Section}
row-gap: 20px;
display: flex;
flex-direction: column;
${Scroll};
`

const DarkButton = styled.div`
:hover{
    box-shadow:${props => !props.disabled && '0px 0px 30px rgba(0, 0, 0, 0.2)'};
    cursor:${props => !props.disabled && 'pointer'};
}
color: ${props => props.selected ? '#26445A' : 'white'};
border-radius: 6px;
background:${props => props.selected ? '#F3F6F9' : '#416783'};
opacity:${props => props.disabled && '0.3'};

align-items: center;
display: flex;
`

const Right = styled.div`
width:${props => props.size ? props.size : '15%'};    
${Section};
`

export { DarkButton, WrapScreen, WrapContent, Left, Right }