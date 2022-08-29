import React from "react";
import styled from "styled-components";
import theme from "../Logic/theme";

const { primary, quad } = theme;

const SideMenuButton = (props) => {
  let color = primary;
  if (props.active) {
    color = quad;
  }
  return (
    <svg data-name="Layer 1" viewBox="0 0 217 145" {...props}>
      <path
        d="M144.5.5H.5v144h144a72 72 0 000-144z"
        fill={color}
        stroke="#231f20"
        strokeMiterlimit={10}
      />
      <circle
        cx={144.5}
        cy={72.5}
        r={63}
        fill="#fff"
        stroke={color}
        strokeMiterlimit={10}
      />
    </svg>
  );
};

const StyledButton = styled(SideMenuButton)`
  width: 85px;
  position: fixed;
  left: 0;
  &:hover {
    cursor: pointer;
  }
`;

export default StyledButton;
