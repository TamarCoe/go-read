import styled, { css } from "styled-components"
import { WrapScreen, WrapContent, Left, Right } from 'styles/GlobalStyle'

const Wrap = WrapScreen

const Content = styled(WrapContent)`
height: calc(100% - 160px);

.left{
    align-items:center
}
`

export { Wrap, Left, Right, WrapContent, Content }