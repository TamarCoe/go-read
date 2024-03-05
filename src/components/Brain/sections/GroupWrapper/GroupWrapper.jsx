import React from "react";
import styled from "styled-components";

const StyledGroupWrapper = styled.div`
  height: 193px;
  left: 628px;
  position: absolute;
  top: 26px;
  width: 203px;

  & .overlap-5 {
    height: 201px;
    left: -4px;
    position: relative;
    width: 209px;
  }

  & .rectangle-3 {
    height: 118px;
    left: 91px;
    position: absolute;
    top: 0;
    width: 118px;
  }

  & .rectangle-4 {
    height: 118px;
    left: 0;
    position: absolute;
    top: 10px;
    width: 118px;
  }

  & .rectangle-5 {
    height: 118px;
    left: 54px;
    position: absolute;
    top: 83px;
    width: 118px;
  }

  & .text-wrapper-8 {
    color: #26445a;
    direction: rtl;
    font-family: "Poppins", Helvetica;
    font-size: 23px;
    font-weight: 600;
    left: 100px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 40px;
    width: 99px;
  }
`;

export const GroupWrapper = () => {
  return (
    <StyledGroupWrapper>
      {/* <div className="overlap-5">
        <img className="rectangle-3" alt="Rectangle" src="https://c.animaapp.com/kK1bBxLU/img/rectangle-1595-1.svg" />
        <img className="rectangle-4" alt="Rectangle" src="https://c.animaapp.com/kK1bBxLU/img/rectangle-1596.svg" />
        <img className="rectangle-5" alt="Rectangle" src="https://c.animaapp.com/kK1bBxLU/img/rectangle-1597.svg" />
        <div className="text-wrapper-8">בקרה</div>
      </div> */}
    </StyledGroupWrapper>
  );
};
