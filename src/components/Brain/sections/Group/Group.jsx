import React from "react";
import styled from "styled-components";

const StyledGroup = styled.div`
  height: 1128px;
  left: 618px;
  position: absolute;
  top: 0;
  width: 623px;

  & .overlap-group-2 {
    height: 239px;
    left: 0;
    position: absolute;
    top: 0;
    width: 362px;
  }

  & .rectangle {
    background-color: #8cb9c9;
    // border: 1px solid;
    border-radius: 228px;
    height: 150px;
    left: 0;
    position: absolute;
    top: 0;
    width:150px;
  }

  & .rectangle-2 {
    background-color: #8cb9c959;
    border-radius: 228px;
    height: 85px;
    left: 55px;
    position: absolute;
    top: 147px;
    width: 85px;
  }

  & .text-wrapper {
    color: #82acbb;
    direction: rtl;
    font-family: "Poppins", Helvetica;
    font-size: 27px;
    font-weight: 700;
    left: 222px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 42px;
    width: 140px;
  }

  & .text-wrapper-2 {
    color: #e9d09c;
    direction: rtl;
    font-family: "Poppins", Helvetica;
    font-size: 27px;
    font-weight: 700;
    left: 426px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 561px;
    width: 140px;
  }

  & .text-wrapper-3 {
    color: #eac2bd;
    direction: rtl;
    font-family: "Poppins", Helvetica;
    font-size: 27px;
    font-weight: 700;
    left: 414px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 273px;
    width: 201px;
  }

  & .text-wrapper-4 {
    color: #eac2bd;
    direction: rtl;
    font-family: "Poppins", Helvetica;
    font-size: 27px;
    font-weight: 700;
    left: 17px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 1029px;
    width: 201px;
  }
`;

export const Group = () => {
  return (
    <StyledGroup>
      <div className="overlap-group-2">
        <div className="rectangle" />
        <div className="rectangle-2" />
        <div className="text-wrapper">תפקודי ניהול</div>
      </div>
      <div className="text-wrapper-2">תפקודי זכרון</div>
      <div className="text-wrapper-3">תפקוד שמיעתי (פונולוגיה)</div>
      <div className="text-wrapper-4">תפקוד חזותי (אורתוגרפיה)</div>
    </StyledGroup>
  );
};
