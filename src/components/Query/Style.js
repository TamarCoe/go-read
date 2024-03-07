import styled from "styled-components";
import { Left, Right, WrapContent, } from "styles/GlobalStyle";
import { dark } from "styles/theme";


const WrapQuery = styled.div`
height:100%;

#title{
    color:${dark};
    font-size:20px;
    padding:20px;
    font-weight: bold;
}
`

const WrapLeft = styled(Left)`
width:50%;
height:100%;
display: flex;
flex-direction: column;
row-gap: 20px;

#select{
    width:50px !imporant;
}
`

const WrapRight = styled(Right)`
width:50%;
height:100%

`

const Content = styled(WrapContent)`
#select{
    width:50px !imporant;
}
`

export { WrapQuery, WrapLeft, WrapRight, Content }