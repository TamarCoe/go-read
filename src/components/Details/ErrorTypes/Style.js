import styled from 'styled-components'
import { Hover, Scroll } from 'styles/GlobalCss'

const WrapErrorTypes = styled.div`
row-gap:20px;
height:100%;
display:flex;
flex-direction: column;
`

const WrapErrorType = styled.div`
${Hover};
`

const Title = styled.div`
color:#26445A;
text-align:right;
// padding:10px;
`

const WrapErrors = styled.div`
overflow: auto;
height:100%;
row-gap:15px;
display:flex;
flex-direction: column;
padding-left:10px;
${Scroll};
`

export { WrapErrorType, WrapErrorTypes, Title, WrapErrors }