import regularStyled from "styled-components";
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material'

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

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

export { UploadButton, VisuallyHiddenInput, WrapSelectRecord }