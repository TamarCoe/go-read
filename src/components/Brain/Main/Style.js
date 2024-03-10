import styled, { css } from "styled-components"
import { Section ,Scroll} from "styles/GlobalCss"
import { WrapScreen, WrapContent, Left, Right } from 'styles/GlobalStyle'
import { dark } from "styles/theme"

const Wrap = WrapScreen

const WrapBrain = styled.div`
${Section};
width:100%;
background:${dark};
overflow-y: auto;
overflow-x: hidden;
// height: calc(100% - 140px);
${Scroll};
height: auto;
`

export { Wrap, Left, Right, WrapContent, WrapBrain }