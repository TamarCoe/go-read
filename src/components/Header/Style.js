import styled from "styled-components";
import { dark } from "styles/theme";
import { Button } from "@mui/material";

const WrapHeader = styled.div`
justify-content: space-between;
display:flex;
background:${dark};
position:absolute;
transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);

padding: 15px;
height:35px;
width:calc(100% - 30px);
top:0;

div{
display: flex;
flex-direction: row;
column-gap: 10px;
align-items: center;
}
`

const ButtonType = styled(Button)`

height:30px;
opacity:${props => props.disabled && '0.3'};
color: ${props => props.selected ? dark : 'white'} !important;
border-radius: 8px;
background:${props => props.selected ? '#F3F6F9' : '#647A8A'} !important;

align-items: center;
display: flex;
border:none !important;
`


export { WrapHeader, ButtonType }