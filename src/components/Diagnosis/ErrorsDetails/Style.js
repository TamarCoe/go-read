import styled from "styled-components";
import { CustomButton, Scroll } from "styles/GlobalCss";
import { dark, primary, secondary } from "styles/theme";

const WrapErrors = styled.div`
display: flex;
flex-direction: column;
row-gap: 35px;
padding-left:20px;
${Scroll};

.Flex-item {
   line-height: 40px;
}

.wrapError{
   width:200px;
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

`

const Conut = styled.span`
font-weight: bold !important;
color:${secondary} !important;
`

const WrapTitle = styled.div`
font-weight: bold;
color: ${secondary};
margin-bottom:10px;
font-size:16px;
`

export { Conut, WrapErrors, Error, WrapTitle }