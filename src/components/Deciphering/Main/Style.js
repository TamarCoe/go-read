import styled from "styled-components";
import { WrapContent } from "styles/GlobalStyle";


const Content = styled(WrapContent)`
height:calc(100% - 190px);
display: flex;
flex-direction: column;
row-gap: 10px;

.deciphering{
    height:calc(100% - 120px);
    display:flex;
    justify-content: space-between;
    column-gap: 15px;
}
`

export { Content }