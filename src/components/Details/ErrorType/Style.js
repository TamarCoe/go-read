import styled from "styled-components";
import { Hover, CustomButton } from 'styles/GlobalCss'
import { Button } from "@mui/material";
import { dark } from "styles/theme";

const WrapError = styled(Button)`
background:${props => props.selected && props.bg} !important;
border-color:${props => !props.disabled && (props.selected ? props.customColor : '#D7D7D7')} !important;
color:${props => !props.disabled && (props.selected ? props.customColor : dark)} !important;
display: flex !important;
justify-content: start !important;
column-gap: 10px !important;
`

const WrapButton = styled.div`
${CustomButton};
font-weight: bold;
background:${props => props.selected && props.bg};
border-color:${props => props.selected && props.color};
color:${props => props.selected && props.color};
`

const Dot = styled.div`
background:${props => props.customColor};
height: 10px;
width: 10px;
border-radius: 30px;
opacity: ${props => !props.selected && '20%'};
`


export { WrapError, Dot, WrapButton }