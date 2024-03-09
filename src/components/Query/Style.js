import styled, { css } from "styled-components";
import { Left, Right, WrapContent, } from "styles/GlobalStyle";
import { dark, primary, secondary } from "styles/theme";
import { IconButton, Select } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Section as CardSection, Scroll } from 'styles/GlobalCss'

const WrapFooterButtons = styled.div`
display: flex;
justify-content: space-between;
`

const StyledAddCircleOutlineIcon = styled(AddIcon)`
font-size:25px !important;
color:#8C8C8C;
`

const StyledIconButton = styled(IconButton)`
width:50px !important;
height:50px !important;
background:#F3F6F9 !important;
`

const WrapQuery = styled.div`
height: calc(100% - 200px);
display: flex;
row-gap: 10px;
flex-direction: column;
overflow:auto;

${Scroll};

.footerButtons{
}

#title{
    color:${dark};
    font-size:20px;
    padding-bottom:10px;
}
`

const WrapSection = styled.div`
${CardSection};

display:flex;
row-gap: 10px;
flex-direction: column;
height:120px;

.overallSummary{
display:flex;
justify-content: center;
align-items: center;
column-gap: 15px;
row-gap: 15px;
}

.titleConclusion{
    font-weight: bold;
    width:140px
}

.conclusion{
    width:750px;
    padding:13px 50px 13px 40px;
    border: 1px solid #c4c4c4;
    border-radius: 4px;
    font-weight: 100;
    height:30px;
    align-items: center;
    display: flex;
}
`

const Section = css`
width:50%;
height:240px;
display: flex;
flex-direction: column;
row-gap: 20px;
overflow:hidden;

.row{
    display: flex;
    column-gap: 10px;
    justify-content: center;
`

const WrapLeft = styled(Left)`
.ifTitle{
    color:${secondary};
    font-size:18px;
    font-weight: bold;
}
${Section};
`

const WrapRight = styled(Right)`
.indicateTitle{
    color:${primary};
    font-size:18px;
    font-weight: bold;
}

${Section};
`

const Content = styled(WrapContent)`

#select{
    width:50px !imporant;
}
`

export { WrapFooterButtons, WrapSection, StyledIconButton, StyledAddCircleOutlineIcon, WrapQuery, WrapLeft, WrapRight, Content }