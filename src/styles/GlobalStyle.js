import styled from "styled-components";
import { Section, Scroll } from 'styles/GlobalCss'
import { dark } from "styles/theme";

const WrapScreen = styled.div`
width:100%;
height:100%;
display: flex;
flex-direction: column;
overflow:hidden
`

const WrapContent = styled.div`
display:flex;
column-gap: 20px;
height: calc(100% - 40px);
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
height: calc(100% - 140px);

`

const DarkButton = styled.div`
:hover{
    box-shadow:${props => !props.disabled && '0px 0px 30px rgba(0, 0, 0, 0.2)'};
    cursor:${props => !props.disabled && 'pointer'};
}
color: ${props => props.selected ? dark : 'white'};
border-radius: 6px;
background:${props => props.selected ? '#F3F6F9' : '#416783'};
opacity:${props => props.disabled && '0.3'};

align-items: center;
display: flex;

`

const Right = styled.div`
overflow: auto;
width:${props => props.size ? props.size : '15%'};    
${Section};
${Scroll};
height: calc(100% - 140px);

`

export { DarkButton, WrapScreen, WrapContent, Left, Right }