import styled from "styled-components";
import { CustomButton } from "styles/GlobalCss";

const WrapErrors = styled.div`
display: flex;
flex-direction: column;
row-gap: 20px;
`

const Error = styled.div`
width:200px;
${CustomButton};


#count{
   font-weight: bold;
color:${props => props.color};
}
`

export { WrapErrors, Error }