import styled from "styled-components";
import { CustomButton, Scroll } from "styles/GlobalCss";

const WrapErrors = styled.div`
display: flex;
flex-direction: column;
row-gap: 20px;
padding-left:20px;
${Scroll};
overflow-y:auto;
overflow-x:hidden;
`

const Error = styled.div`
width:200px;
${CustomButton};


#count{
   font-weight: bold;
color:${props => props.color};
}
`

const WrapTitle = styled.div`
font-weight: bold;
color: #26455a;
`

export { WrapErrors, Error, WrapTitle }