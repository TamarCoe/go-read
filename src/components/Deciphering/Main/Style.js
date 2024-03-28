import styled from "styled-components";
import { Scroll } from "styles/GlobalCss";
import { WrapContent } from "styles/GlobalStyle";


const Content = styled(WrapContent)`
height:calc(100% - 160px);
display: flex;
flex-direction: column;
row-gap: 10px;

.deciphering{
    height:calc(100% - 120px);
    display:flex;
    justify-content: space-between;
    column-gap: 15px;
    overflow:auto;

    ${Scroll};
}
`

export { Content }