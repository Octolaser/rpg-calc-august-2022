import React from "react";
import styled from "styled-components";

import ButtonShell from "./SideMenuButton";
import Scroll from "../Images/Scroll";

const Button = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const ButtonOutline = styled(ButtonShell)`
  top: 70vh;

  @media (max-width: 850px) {
    top: 73vh;
  }

  @media (max-width: 600px) {
    top: 71vh;
    left: -1.1em;
  }
`;

const ScrollIcon = styled(Scroll)`
  width: 39px;
  position: fixed;
  left: 39px;
  top: 71.25vh;

  @media (max-width: 900px) {
    top: 74vh;
  }

  @media (max-width: 600px) {
    top: 72.25vh;
    left: 1.3em;
  }
`;

const HistoryButton = ({ active }) => {
  if (active === "history") {
    return (
      <Button>
        <ButtonOutline active="yes" />
        <ScrollIcon active="yes" />
      </Button>
    );
  }
  return (
    <Button>
      <ButtonOutline />
      <ScrollIcon />
    </Button>
  );
};

export default HistoryButton;
