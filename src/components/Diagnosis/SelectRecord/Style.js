import regularStyled from "styled-components";
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material'

const StartButton = styled(Button)`

`

const WrapSelectRecord = regularStyled.div`
display:flex;
row-gap:20px;
flex-direction: column;
`

const UploadButton = regularStyled(Button)`
display: flex;
column-gap: 10px;
background:#8BBC01 !important

`

export { StartButton, UploadButton, WrapSelectRecord }