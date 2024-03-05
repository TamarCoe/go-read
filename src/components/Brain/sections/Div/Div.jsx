import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: #c98342;
  border-radius: 228px;
  height:150px;
  left: 131px;
  position: absolute;
  top: 195px;
  transform: rotate(180deg);
  width: 150px;

  & .group-5 {
    height: 110px;
    left: 53px;
    position: relative;
    top: 124px;
    width: 112px;
  }

  & .overlap-group-3 {
    background-color: #ffffff52;
    border: 3px solid;
    border-color: #ffffff08;
    border-radius: 228px;
    box-shadow: 0px 4px 4px #00000040;
    height: 110px;
    position: relative;
    width: 110px;
  }

  & .text-wrapper-10 {
    color: #26445a;
    direction: rtl;
    font-family: "Poppins", Helvetica;
    font-size: 25px;
    font-weight: 600;
    height: 35px;
    left: 6px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 32px;
    transform: rotate(-180deg);
    width: 93px;
  }
`;

export const Div = () => {
  return (
    <StyledDiv>
      {/* <div className="group-5">
        <div className="overlap-group-3">
          <div className="text-wrapper-10">אותיות</div>
        </div>
      </div> */}
    </StyledDiv>
  );
};
