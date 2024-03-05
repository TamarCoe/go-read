import styled from "styled-components";
import { Hover, CustomButton } from 'styles/GlobalCss'

const WrapError = styled.div`
${props => !props.disabled && Hover};
border-radius: 10px;
`

const WrapButton = styled.div`
${CustomButton};
font-weight: bold;
background:${props => props.selected && props.bg};
border-color:${props => props.selected && props.color};
color:${props => props.selected && props.color};
`

const Dot = styled.div`
background:${props => props.color};
height: 10px;
width: 10px;
border-radius: 30px;
opacity: ${props => !props.selected && '20%'};
`


export { WrapError, Dot, WrapButton }