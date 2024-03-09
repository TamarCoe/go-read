import styled, { css } from "styled-components"
import { WrapScreen, WrapContent, Left, Right } from 'styles/GlobalStyle'

const Wrap = WrapScreen

const RightSection = styled(Right)`
display: flex;
flex-direction: column;
row-gap: 50px;
height: calc(100% - 123px);
`

const Content = styled(WrapContent)`
height: calc(100% - 100px);
`

const WrapErrors = styled.div`
display: flex;
flex-direction: column;
row-gap: 20px;
`

const WrapLeft = styled(Left)`
flex-direction: row;
justify-content: space-around;
overflow: auto;
height: calc(100% - 123px);
`

export { WrapErrors, Wrap, WrapLeft, Right, Content, WrapContent, RightSection }