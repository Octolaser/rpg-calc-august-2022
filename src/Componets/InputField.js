import React, { useState } from "react";
import styled from "styled-components";
import theme from "../Logic/theme";

const { primary, background } = theme;

const StyledInput = styled.input`
  width: 95%;
  height: 25px;
  border: 1px solid ${primary};
  border-radius: 4px;
  margin: 3px;
  &:focus {
    border-color: ${background};
  }
`;

const InputField = ({ placeholder, type }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <React.Fragment>
      <StyledInput
        placeholder={placeholder}
        type={type}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </React.Fragment>
  );
};

export default InputField;
