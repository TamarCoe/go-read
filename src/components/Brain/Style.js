import styled from "styled-components";
import { dark } from "styles/theme";


const WrapImg = styled.div`
width:250px;
height:250px;

.brain{
    width:100%;
    height:100%;
    object-fit: contain;
}
`

const Round = styled.div`
position: relative;
left:${props => props.left}px;
right:${props => props.right}px;
top:${props => props.top}px;
width:120px;
height:120px;
background:${props => props.color};
border-radius: 100px;
`

const SubRound = styled.div`
position: relative;
right: ${props => props.right}px;
top: ${props => props.top}px;
background: transparent;
box-shadow: 0px 4px 4px #00000040;
height: 50px;
width: 50px;
border-radius: 100px;
display: flex;
align-items: center;
justify-content: center;
color:${dark};
font-size:12px;
text-align: center;
border:${props => props.error && '2px solid red'}

`

const WrapBrain = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
position: relative;
right: 340px;
`

export { WrapImg, WrapBrain, Round, SubRound }