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
min-height: 350px;

${Scroll};
`

export { Wrap, Left, Right, WrapContent, WrapBrain }