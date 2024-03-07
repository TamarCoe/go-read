import styled from "styled-components"
import { dark } from "styles/theme"

const WrapButton = styled.div`

:hover{
    box-shadow:${props => !props.disabled && '0px 0px 30px rgba(0, 0, 0, 0.2)'};
    cursor:${props => !props.disabled && 'pointer'};
}
color: ${props => props.selected ? dark : 'white'};
border-radius: 6px;
background:${props => props.selected ? '#F3F6F9' : '#416783'};
opacity:${props => props.disabled && '0.3'};

align-items: center;
display: flex;
width:${props => props.size && props.size}
`

const Button = styled.div`
padding: 10px;
padding-left: 15px;
padding-right: 15px;
display: flex;
width: 100%;
align-items: center;
justify-content: space-between;
`

export { Button, WrapButton }