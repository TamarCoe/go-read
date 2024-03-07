import regularStyled from "styled-components";
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material'
import { primary, secondary } from "styles/theme";

const StartButton = styled(Button)`

`

const WrapSelectRecord = regularStyled.div`
display:flex;
row-gap:20px;
flex-direction: column;

.selectRecord{
    color:white !important;
}

.uploadRecord{
}

.button{
    display: flex;
    column-gap: 10px;
}

#diagnosis{
}

.uploadButtons{
    margin-top:20px;
    row-gap: 10px;
    display: flex;
    flex-direction: column;
}
`

const UploadButton = regularStyled(Button)`
display: flex;
column-gap: 10px;
background:${primary} !important

`

export { StartButton, UploadButton, WrapSelectRecord }