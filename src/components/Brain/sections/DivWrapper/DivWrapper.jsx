import React from "react";
import styled from "styled-components";

const StyledDivWrapper = styled.div`
  height: 239px;
  left: 26px;
  position: absolute;
  top: 195px;
  transform: rotate(180deg);
  width: 347px;

  & .overlap-6 {
    // background-color: #eac2bd;
    // border-radius: 228px;
    // height: 239px;
    // left: 0;
    // position: absolute;
    // top: 0;
    // width: 240px;
  }

  & .group-4 {
    background-color: #ffffff52;
    border: 3px solid;
    border-color: #f1d6d2;
    border-radius: 228px;
    box-shadow: 0px 4px 4px #00000040;
    height: 110px;
    left: 53px;
    position: relative;
    top: 124px;
    width: 110px;
  }

  & .text-wrapper-9 {
    color: #c98342;
    direction: rtl;
    font-family: "Poppins", Helvetica;
    font-size: 28px;
    font-weight: 700;
    left: 242px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 81px;
    transform: rotate(-180deg);
    width: 103px;
  }
`;

export const DivWrapper = () => {
  return (
    <StyledDivWrapper>
      <div className="overlap-6">
        <div className="group-4" />
      </div>
      <div className="text-wrapper-9">פענוח</div>
    </StyledDivWrapper>
  );
};
