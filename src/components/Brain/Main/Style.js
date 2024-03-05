import styled, { css } from "styled-components"
import { Section, Scroll } from "styles/GlobalCss"
import { WrapScreen, WrapContent, Left, Right } from 'styles/GlobalStyle'

const Wrap = WrapScreen

const WrapBrain = styled.div`
${Section};
width:100%;
background:#26445A;
overflow:auto;
min-height:350px

${Scroll};
`

export { Wrap, Left, Right, WrapContent, WrapBrain }