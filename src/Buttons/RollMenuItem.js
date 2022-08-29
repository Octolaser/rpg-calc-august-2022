import React from "react";
import styled from "styled-components";
import ButtonShell from "./SideMenuButton";
import D20Icon from "../Images/Dice/D20Icon";

const Button = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const ButtonOutline = styled(ButtonShell)`
  top: 80vh;

  @media (max-width: 600px) {
    left: -1.1em;
  }
`;

const DiceIcon = styled(D20Icon)`
  width: 35px;
  position: fixed;
  left: 40px;
  top: 81.1vh;

  @media (max-width: 900px) {
    top: 80.75vh;
  }

  @media (max-width: 600px) {
    top: 81.05vh;
    left: 1.375em;
  }
`;

const RollButton = ({ active }) => {
  if (active === "freeroll") {
    return (
      <a href="./freeroll">
        <Button>
          <ButtonOutline active="yes" />
          <DiceIcon active="yes" />
        </Button>
      </a>
    );
  } else {
    return (
      <a href="./freeroll">
        <Button>
          <ButtonOutline />
          <DiceIcon />
        </Button>
      </a>
    );
  }
};

export default RollButton;
