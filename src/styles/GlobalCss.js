import { css } from 'styled-components'

const Hover = css`
:hover{
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);;
  cursor:pointer;
}
`

const Scroll = css`

&::-webkit-scrollbar {
  
  width: 6px;
  height: 3px !important;
}

&::-webkit-scrollbar-track {
  border-radius: 30px;
  box-shadow: inset 0 0 5px rgba(51, 102, 255, 0.155731);
}

&::-webkit-scrollbar-thumb {
  border-radius: 30px;
  background: #3366ff5b;
}

& ::-webkit-scrollbar-thumb:hover {
  background: #3366ff;
}




`

const WrapScreen = css`
width:100%;
height:100%;
display: flex;
row-gap: 20px;
flex-direction: column;
`


const Section = css`
background: #FFFFFF;
border-radius: 16px;
padding:20px;
`

const CustomButton = css`
padding: 15px;
color:#416783;
text-align: right;
border-radius: 10px;
border: 1px solid ${props => props.selected ? 'black' : '#D7D7D7'};
display: flex;
align-items: center;
column-gap: 10px;
background:${props => props.selected && '#F3F3F3'};
opacity:${props => props.disabled && '0.5'};
`

export { Scroll, CustomButton, Hover, WrapScreen, Section }