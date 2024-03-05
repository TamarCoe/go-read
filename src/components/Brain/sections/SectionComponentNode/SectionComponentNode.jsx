import React from "react";
import styled from "styled-components";

const StyledSectionComponentNode = styled.div`
  height: 110px;
  left: 157px;
  position: absolute;
  top: 305px;
  transform: rotate(180deg);
  width: 112px;

  & .overlap-7 {
    height: 118px;
    left: -4px;
    position: relative;
    top: -8px;
    width: 118px;
  }

  & .rectangle-6 {
    height: 118px;
    left: 0;
    position: absolute;
    top: 0;
    transform: rotate(-180deg);
    width: 118px;
  }

  & .text-wrapper-11 {
    color: #26445a;
    direction: rtl;
    font-family: "Poppins", Helvetica;
    font-size: 25px;
    font-weight: 600;
    height: 35px;
    left: 19px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: justify;
    top: 50px;
    transform: rotate(-180deg);
    width: 93px;
  }
`;

export const SectionComponentNode = () => {
  return (
    <StyledSectionComponentNode>
      <div className="overlap-7">
        <img className="rectangle-6" alt="Rectangle" src="https://c.animaapp.com/kK1bBxLU/img/rectangle-1595-2.svg" />
        <div className="text-wrapper-11">תנועות</div>
      </div>
    </StyledSectionComponentNode>
  );
};
