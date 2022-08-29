import React from "react";
import styled from "styled-components";
import theme from "../Logic/theme";

const { primary, quad, primaryFont } = theme;

const StyledButton = styled.div`
  background-color: ${primary};
  color: ${primaryFont};
  border-radius: 25px;
  min-width: 80px;
  max-width: 250px;
  border: 1px solid ${quad};
  min-height: 10px;
  max-height: 35px;
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: ${quad};
  }
`;

const StyledText = styled.p`
  margin: auto;
  margin: 10px 0;
  font-size: 0.9em;
`;

const Link = styled.a`
  text-decoration: none;
`;

const Button = ({ text, href }) => {
  return (
    <Link href={href}>
      <StyledButton>
        <StyledText>{text}</StyledText>
      </StyledButton>
    </Link>
  );
};

export default Button;
