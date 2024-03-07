import styled from "styled-components";
import { CustomButton, Scroll } from "styles/GlobalCss";
import { dark, primary } from "styles/theme";

const WrapErrors = styled.div`
display: flex;
flex-direction: column;
row-gap: 35px;
padding-left:20px;
${Scroll};
overflow-y:auto;
overflow-x:hidden;

.Flex-item {
   line-height: 40px;
}

.Flex-item + .Flex-item {
   border-left: solid 1px white;
}
`

const Error = styled.div`
width:200px;
opacity:${props => props.disabled && '0.5'};
color:${dark};
font-size:15px;

#count{
   margin-right:7px;
   font-weight: bold;
   color:${props => props.color};
}
`

const WrapTitle = styled.div`
font-weight: bold;
color: ${dark};
margin-bottom:10px;
font-size:16px;
`

export { WrapErrors, Error, WrapTitle }