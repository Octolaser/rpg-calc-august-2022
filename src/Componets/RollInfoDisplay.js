import React from "react";
import styled from "styled-components";
import theme from "../Logic/theme";
import diceRollResults from "../Logic/DiceRollResults";
import RollsTotalsDisplay from "./RollTotalsDisplay";
import D4Icon from "../Images/Dice/D4Icon";
import D6Icon from "../Images/Dice/D6Icon";
import D8Icon from "../Images/Dice/D8Icon";
import D10Icon from "../Images/Dice/D10Icon";
import D12Icon from "../Images/Dice/D12Icon";
import D20Icon from "../Images/Dice/D20Icon";

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-top: 35px;
  margin-bottom: 25px;
  background-color: #fff;
  border: 3px solid ${theme.primary};

  @media (max-width: 600px) {
    width: 85%;
    margin-right: 10px;
    float: right;
    margin-top: 05px;
  }
`;

const CountContainer = styled.div`
  margin: 0 auto;
  width: 50%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1100px) {
    width: 68%;
  }

  @media (max-width: 900px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 80%;
    flex-flow: wrap;
    margin-top: -8px;
  }
`;

const DiceDisplay = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const Count = styled.p`
  margin-left: 10px;
`;

const RollInfoDisplay = ({ lastRoll }) => {
  const rollDisplay = [
    {
      dice: <D4Icon width={50} key="D4Icon" />,
      rollNum: diceRollResults.D4,
      id: 4,
    },
    {
      dice: <D6Icon width={50} key="D6Icon" />,
      rollNum: diceRollResults.D6,
      id: 6,
    },
    {
      dice: <D8Icon width={50} key="D8Icon" />,
      rollNum: diceRollResults.D8,
      id: 8,
    },
    {
      dice: <D10Icon width={50} key="D10Icon" />,
      rollNum: diceRollResults.D10,
    },
    {
      dice: <D12Icon width={50} key="D12Icon" />,
      rollNum: diceRollResults.D12,
      id: 12,
    },
    {
      dice: <D20Icon width={50} key="D20Icon" />,
      rollNum: diceRollResults.D20,
      id: 20,
    },
  ];

  const rollCounterDisplay = rollDisplay.map(({ dice, rollNum, id }, index) => {
    return (
      <DiceDisplay key={`${id} display`}>
        {dice}
        <Count key={`${index} + ${rollNum} Count`}>x {rollNum.length}</Count>
      </DiceDisplay>
    );
  });

  return (
    <Container key="Roll Info Display">
      <div key="Roll info Dispay Div">
        <p key="num of rolls">Number of Rolls</p>
        <CountContainer key="CounterContainer">
          {rollCounterDisplay}
        </CountContainer>
      </div>
      <div style={{ paddingBottom: 25 }} key="Roll total Display Div">
        <RollsTotalsDisplay key={lastRoll} lastRoll={lastRoll} />
      </div>
    </Container>
  );
};

export default RollInfoDisplay;
