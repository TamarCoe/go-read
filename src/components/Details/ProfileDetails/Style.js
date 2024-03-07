import styled from "styled-components";
import { dark } from "styles/theme";

const Wrap = styled.div`
background: white;
flex-direction: row;
padding: 15px;
border-radius:12px;
display: flex;
column-gap: 20px;
align-items: center;
`

const AgeAndGrade = styled.div`
color:#416783;
display: flex;
align-items: center;
column-gap: 20px;
flex-direction: row;
font-size:14px
`

const Details = styled.div`
flex-direction: column;
display: flex;
row-gap: 5px;
`

const Avatar = styled.img`

`


const Name = styled.div`
font-size: 20px;
font-weight: bold;
color:${dark};
`

export { AgeAndGrade, Name, Details, Wrap, Avatar }