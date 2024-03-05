import styled, { css } from "styled-components"
import { WrapScreen, WrapContent, Left, Right } from 'styles/GlobalStyle'

const Wrap = WrapScreen

const RightSection = styled(Right)`
display: flex;
flex-direction: column;
row-gap: 50px;
`

const WrapErrors = styled.div`
display: flex;
flex-direction: column;
row-gap: 20px;
`

const WrapLeft = styled(Left)`
flex-direction: row;
`

export { WrapErrors, Wrap, WrapLeft, Right, WrapContent, RightSection }