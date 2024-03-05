import React from "react";
import styled from "styled-components";

const StyledOverlapGroupWrapper = styled.div`
  height: 168px;
  left: 808px;
  position: absolute;
  top: 221px;
  width: 221px;

  & .overlap-3 {
    height: 176px;
    position: relative;
    width: 219px;

    & .overlap-4 {
      height: 176px;
      left: 55px;
      position: absolute;
      top: 0;
      width: 164px;

      & .img {
        height: 118px;
        left: 46px;
        position: absolute;
        top: 58px;
        width: 118px;
      }

      & .text-wrapper-5 {
        color: #26445a;
        direction: rtl;
        font-family: "Poppins", Helvetica;
        font-size: 20px;
        font-weight: 600;
        left: 60px;
        letter-spacing: 0;
        line-height: 25px;
        position: absolute;
        text-align: center;
        top: 87px;
        width: 93px;
      }

      & .text-wrapper-6 {
        color: #26445a;
        direction: rtl;
        font-family: "Poppins", Helvetica;
        font-size: 20px;
        font-weight: 600;
        left: 0;
        letter-spacing: 0;
        line-height: 25px;
        position: absolute;
        text-align: center;
        top: 0;
        width: 99px;
      }
    }

    & .text-wrapper-7 {
      color: #26445a;
      direction: rtl;
      font-family: "Poppins", Helvetica;
      font-size: 20px;
      font-weight: 600;
      left: 0;
      letter-spacing: 0;
      line-height: 25px;
      position: absolute;
      text-align: center;
      top: 94px;
      width: 99px;
    }
  }
`;

export const OverlapGroupWrapper = () => {
  return (
    <StyledOverlapGroupWrapper>
      {/* <div className="overlap-3">
        <div className="overlap-4">
          <img className="img" alt="Rectangle" src="https://c.animaapp.com/kK1bBxLU/img/rectangle-1595.svg" />
          <div className="text-wrapper-5">תפיסה שמיעתית</div>
          <div className="text-wrapper-6">זכרון שמיעתי</div>
        </div>
        <div className="text-wrapper-7">אבחנה שמיעתית</div>
      </div> */}
    </StyledOverlapGroupWrapper>
  );
};
