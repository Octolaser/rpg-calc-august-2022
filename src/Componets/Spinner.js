import React from "react";
import styled, { keyframes } from "styled-components";

const SpinnerPositioner = styled.div`
  height: 50px;
  width: 50px;
  position: relative;
  margin: 0 calc(50% - 25px);
  top: calc(50% -45px);
`;

const SpinAnimation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const Spin = styled.div`
  &:before {
    margin: auto 0;
    text-align: center;
    animation: 0.8s linear infinite ${SpinAnimation};
    animation-play-state: inherit;
    border: solid 5px #662d91;
    border-bottom-color: #b4a1c9;
    border-radius: 50%;
    content: "";
    height: 30px;
    width: 30px;
    position: absolute;
  }
`;

const Spinner = () => {
  return (
    <SpinnerPositioner>
      <Spin />
    </SpinnerPositioner>
  );
};

export default Spinner;
