import styled from "styled-components";
import { Section, Scroll } from 'styles/GlobalCss'
import { dark } from "styles/theme";
import { Button } from '@mui/material'

const WrapScreen = styled.div`
width:100%;
height:100%;
display: flex;
flex-direction: column;
overflow:hidden
`

const Card = styled(Button)`
border:1px solid #DDDDDD !important;
border:${props => props.bold && '1px solid #000000 !important'};
display: flex !important;
justify-content: center !important;
column-gap: 10px !important;
align-items: center !important;
width: 100% !important;
text-align:center;
border-radius:16px;
color:#000000 !important;
width:140px;
border-color:${props => props.typeBold && '#FF0000'} !important;
background:${props => props.errorTypeBold && props.bg} !important;
border-color:${props => props.errorTypeBold && props.customColor} !important;
font-size:17px !important;

#bold{
    color:${props => props.warningBold ? '#FB7401' : '#FF0000'} !important;;
}

#line{
    color:#E2E2E2 !important;
    margin-right:5px !important;
    margin-left:5px !important;
}

`

const WrapContent = styled.div`
display:flex;
column-gap: 10px;
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

export { Card, DarkButton, WrapScreen, WrapContent, Left, Right }