import React from "react";
import styled from "styled-components";
import D20 from "../Images/Dice/D20";
import D12 from "../Images/Dice/D12";
import D10 from "../Images/Dice/D10";
import D8 from "../Images/Dice/D8";
import D6 from "../Images/Dice/D6";
import D4 from "../Images/Dice/D4";

const StyledD20 = styled(D20)`
  margin-top: 55px;
  height: 180px;
  user-select: none;
  :hover {
    cursor: pointer;
  }
`;

const StyledD12 = styled(D12)`
  margin-top: 58px;
  height: 180px;
  padding-bottom: 8px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  user-select: none;

  :hover {
    cursor: pointer;
  }
`;

const StyledD10 = styled(D10)`
  margin-top: 55px;
  height: 175px;
  user-select: none;

  :hover {
    cursor: pointer;
  }
`;

const StyledD8 = styled(D8)`
  margin-top: 55px;
  height: 180px;
  user-select: none;
  :hover {
    cursor: pointer;
  }
`;

const StyledD6 = styled(D6)`
  margin-top: 75px;
  height: 160px;
  padding-bottom: 20px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  user-select: none;
  :hover {
    cursor: pointer;
  }
`;
const StyledD4 = styled(D4)`
  margin-top: 60px;
  height: 150px;
  user-select: none;
  :hover {
    cursor: pointer;
  }
`;

const DiceDisplay = ({ dice, rolled, onClick }) => {
  if (dice === 20) {
    return (
      <StyledD20 key={`DisplayDiceID${dice}`} crit={rolled} onClick={onClick} />
    );
  }
  if (dice === 12) {
    return <StyledD12 key={`DisplayDiceID${dice}`} onClick={onClick} />;
  }
  if (dice === 10) {
    return <StyledD10 key={`DisplayDiceID${dice}`} onClick={onClick} />;
  }
  if (dice === 8) {
    return <StyledD8 key={`DisplayDiceID${dice}`} onClick={onClick} />;
  }
  if (dice === 6) {
    return <StyledD6 key={`DisplayDiceID${dice}`} onClick={onClick} />;
  }

  if (dice === 6) {
    return <StyledD6 key={`DisplayDiceID${dice}`} onClick={onClick} />;
  }
  if (dice === 4) {
    return <StyledD4 key={`DisplayDiceID${dice}`} onClick={onClick} />;
  }
};

export default DiceDisplay;
