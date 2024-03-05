import React from "react";
import styled from "styled-components";

const StyledOverlapWrapper = styled.div`
  background-color: #eac2bd;
  border-radius: 228px;
  height: 239px;
  left: 792px;
  position: absolute;
  top: 190px;
  width: 150px;

  & .overlap-2 {
    height: 209px;
    left: 16px;
    position: relative;
    top: 3px;
    width: 157px;
  }

  & .group-2 {
    background-color: #ffffff52;
    border: 3px solid;
    border-color: #f1d6d2;
    border-radius: 228px;
    box-shadow: 0px 4px 4px #00000040;
    height: 110px;
    left: 47px;
    position: absolute;
    top: 0;
    width: 110px;
  }

  & .group-3 {
    background-color: #ffffff52;
    border: 3px solid;
    border-color: #f1d6d2;
    border-radius: 228px;
    box-shadow: 0px 4px 4px #00000040;
    height: 110px;
    left: 0;
    position: absolute;
    top: 99px;
    width: 110px;
  }
`;

export const OverlapWrapper = () => {
  return (
    <StyledOverlapWrapper>
      <div className="overlap-2">
        <div className="group-2" />
        <div className="group-3" />
      </div>
    </StyledOverlapWrapper>
  );
};
