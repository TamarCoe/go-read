import { Button } from "@mui/material";
import styled from "styled-components";


const WrapDetails = styled.div`
// display: grid;
// grid-template-columns: 1fr 1fr 1fr;
// grid-auto-flow: column;
// // grid-template-rows: 35px 35px 35px 35px;
// // grid-auto-flow: row;
// justify-items: center;
// grid-row-gap: 1em;
// grid-column-gap: 3em;
// grid-auto-rows: 35px;
// display: grid;
// grid-auto-flow: column;

// display: flex;
//   flex-wrap: wrap;
//   align-items: center;


  display: grid;
	grid-auto-flow: column;
	grid-gap: 15px;
	grid-template-columns: repeat(3, 1fr); 
	grid-template-rows: repeat(20, auto);    
  padding:20px;
// @media (max-width: 1700px) {
  //   grid-template-columns: repeat(4, 1fr);
  // }

  // @media (max-width: 1200px) {
  //   grid-template-columns: repeat(3, 1fr);
  // }

  // @media (max-width: 900px) {
  //   grid-template-columns: repeat(2, 1fr);
  // }

  // @media (max-width: 700px) {
  //   grid-template-columns: repeat(1, 1fr);
  // }

`

const WrapDetail = styled(Button)`
border:1px solid #DDDDDD !important;;
border:${props => props.bold && '1px solid #000000 !important'};
padding:8px;
width: 100%;
text-align:center;
border-radius:16px;
color:#000000 !important;
width:140px;
border-color:${props => props.typeBold && '#FF0000'};
background:${props => props.errorTypeBold && props.bg};
border-color:${props => props.errorTypeBold && props.color};
font-size:17px !important;

#bold{
    color:#FF0000 !important;;
}

#line{
    color:#E2E2E2 !important;
    margin-right:5px !important;
    margin-left:5px !important;
}

`

export { WrapDetails, WrapDetail }