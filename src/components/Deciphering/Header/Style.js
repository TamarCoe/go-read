import styled, { css } from "styled-components";
import { Section } from "styles/GlobalCss";
import { IconButton } from '@mui/material'

const Letter = css`
color: var(--Black, #000);
text-align: right;
font-family: Poppins;
font-size: 28px;
font-style: normal;
font-weight: 600;
line-height: normal;
display:flex;
column-gap: 2px;

`

const StyleIconButton = styled(IconButton)`
display: flex !important;
// margin-top: 7px !important;
width: 30px !important;
height: 30px !important;
padding: 12px 16px !important;
justify-content: center !important;
align-items: center !important;
gap: 10px !important;
flex-shrink: 0;
border-radius: 8px !important;
background: #37940C !important;

.play-icon{
display: flex;
width: 20px  !important;
height: 20px  !important;
justify-content: center;
align-items: center  !important;
color:white  !important;
flex-shrink: 0 ;
border-raduis:10px  !important;
}
`

const Word = css`
height:100px;
`

const WrapHeader = styled.div`
${Section};

.words{
    display: flex;
    column-gap: 30px;
}

.playAudio{
    display:flex;
}

min-height: 90px;
max-height: 90px;
display:flex;
justify-content: space-between;
align-items:center;

.rightWord{
${Letter};
${Word};
}

.word{
    letter-spacing: 4px;
    display: flex;
    column-gap: 2px;
}

.wordType{
column-gap: 10px;
color: #7D7D7D;
text-align: right;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 100;
line-height: normal;
text-transform: capitalize;
height:40px;
display: flex;
align-items: center;
}

.letter{
    position: relative;
}

.vowelCode{
    color:${props => props.bold && 'red'}}
}

.wrap-letter{
    background: #C7C4C4;
    padding:2px;
    min-width:20px;
    height: 100%;
    display: flex;
    align-items: center;
}

.wordAndType{
    display: flex;
    row-gap: 10px;
    column-gap: 3px;
    height:40px;
    align-items: center;
    justify-content: center;

    ${Letter};
}

.worngWord{
    display:flex;
    ${Letter};
    align-items: center;
    padding: 1px;
    column-gap: 3px;
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    ${Word};
 
}

.btn{
    height:40px !important;
}

.buttons{
    display: flex;
    column-gap: 10px;
}

.save{
    width:190px !important;
}
`



export { WrapHeader, StyleIconButton }