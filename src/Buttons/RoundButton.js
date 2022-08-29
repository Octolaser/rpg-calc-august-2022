import React from "react";
import styled from "styled-components";
import theme from "../Logic/theme";

const { primary, quad, primaryFont } = theme;

const RoundButton = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: ${primary};
  border: 2px solid ${quad};
  font-size: 12px;
  color: ${primaryFont};

  :hover {
    background-color: ${quad};
    cursor: pointer;
  }
`;

const Button = (props) => {
  return <RoundButton onClick={props.onClick} />;
};

export default Button;
