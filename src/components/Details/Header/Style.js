import styled from "styled-components";
import { Hover } from "styles/GlobalCss";
import { dark, primary } from "styles/theme";
import { Button } from "@mui/material";

const WrapHeader = styled.div`
border-radius: 8px;
display: flex;
flex-direction: row;
column-gap: 10px;
padding-bottom: 10px;
padding-top:0
`

const ButtonType = styled(Button)`
border-radius: 6px;
align-items: center;
display: flex;
`


export { WrapHeader, ButtonType, Button }