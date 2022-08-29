import React from "react";
import styled, { keyframes } from "styled-components";
import theme from "../../Logic/theme";
import D20 from "../../Images/Dice/D20Icon";
import D12 from "../../Images/Dice/D12Icon";
import D10 from "../../Images/Dice/D10Icon";
import D8 from "../../Images/Dice/D8Icon";
import D6 from "../../Images/Dice/D6Icon";
import D4 from "../../Images/Dice/D4Icon";

const { primary, background } = theme;

const rollAnimation = keyframes`
 0%
  {
    transform: rotate(0deg);
  }
  25%
  {
    transform: rotate(45deg);
  }
  50%
  {
    transform: rotate(-140deg)
  }
  75%
  {
    transform: rotate(120deg);
  }
  100%
  {
    transform: rotate(0deg);
  }
`;

const TempRollDisplay = styled.div`
  width: 300px;
  min-height: 125px;
  border: 3px solid ${primary};
  border-radius: 5px;
  background-color: #fff;
  position: fixed;
  right: 3vw;
  bottom: 3vh;
  z-index: 8;

  @media (max-width: 600px) {
    bottom: 8vh;
  }
`;

const StyledP = styled.p`
  font-family: "Dosis";
  margin-top: 5px;
  font-size: 1.5em;
  padding: 5px;
`;

const StyledP2 = styled.p`
  font-family: "Dosis";
  font-size: 1.5em;
  margin-top: -1.1em;
`;

const StyledD20 = styled(D20)`
  width: 3em;
  margin: -2.2em 0.5em 0 0.5em;
  animation-name: ${rollAnimation};
  animation-iteration-count: 1;
  animation-duration: 0.4s;

  @media (max-width: 600px) {
    margin-top: -19px;
  }
`;

const StyledD12 = styled(D12)`
  width: 3em;
  margin: -2.2em 0.5em 0 0.5em;
  animation-name: ${rollAnimation};
  animation-iteration-count: 1;
  animation-duration: 0.4s;

  @media (max-width: 600px) {
    margin-top: -19px;
  }
`;

const StyledD10 = styled(D10)`
  width: 3em;
  margin: -2.2em 0.5em 0 0.5em;
  animation-name: ${rollAnimation};
  animation-iteration-count: 1;
  animation-duration: 0.4s;

  @media (max-width: 600px) {
    margin-top: -19px;
  }
`;

const StyledD8 = styled(D8)`
  width: 3em;
  margin: -2.2em 0.5em 0 0.5em;
  animation-name: ${rollAnimation};
  animation-iteration-count: 1;
  animation-duration: 0.4s;

  @media (max-width: 600px) {
    margin-top: -19px;
  }
`;

const StyledD6 = styled(D6)`
  width: 3em;
  margin: -2.2em 0.5em 0 0.5em;
  animation-name: ${rollAnimation};
  animation-iteration-count: 1;
  animation-duration: 0.4s;

  @media (max-width: 600px) {
    margin-top: -19px;
  }
`;

const StyledD4 = styled(D4)`
  width: 3em;
  margin: -2.2em 0.5em 0 0.5em;
  animation-name: ${rollAnimation};
  animation-iteration-count: 1;
  animation-duration: 0.4s;

  @media (max-width: 600px) {
    margin-top: -19px;
  }
`;

const X = styled.p`
  font-family: "Dosis";
  margin-top: 0px;
  font-size: 1.5em;
  margin-left: 90%;
  font-weight: bold;
  color: ${primary};
  :hover {
    cursor: pointer;
    color: ${background};
  }

  @media (max-width: 600px) {
    font-size: 1.8em;
    margin-bottom: 0px;
  }
`;

const MultiDiceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CharacterRollDisplay = ({
  check,
  check2,
  num,
  numOfRoll,
  type,
  onClick,
}) => {
  const renderedDice = (numOfDice) => {
    let e = [];
    for (let i = 0; i < numOfDice; i++) {
      if (type === 4) e.push(<StyledD4 key={`D4 ${i}`} />);
      if (type === 6) e.push(<StyledD6 key={`D6 ${i}`} />);
      if (type === 8) e.push(<StyledD8 key={`D8 ${i}`} />);
      if (type === 10) e.push(<StyledD10 key={`D10 ${i}`} />);
      if (type === 12) e.push(<StyledD12 key={`D12 ${i}`} />);
      if (type === 20) e.push(<StyledD20 key={`D20 ${i}`} />);
    }
    return e;
  };

  if (!check && !check2) {
    return <div />;
  }
  if (check && type === undefined) {
    return (
      <TempRollDisplay key="Checks Display">
        <X key="Check Display Exit" onClick={onClick()}>
          X
        </X>
        <StyledD20 key={num} />
        <StyledP key={check}>{check}</StyledP>
        {check2 ? <StyledP2 key={check2}>{check2}</StyledP2> : null}
      </TempRollDisplay>
    );
  }
  return (
    <TempRollDisplay key="Multi check Disp">
      <X key={"Check Attack Disp Exit"} onClick={onClick()}>
        X
      </X>
      <MultiDiceContainer key={`Dice Roll Disp ${num}`}>
        {renderedDice(numOfRoll)}
      </MultiDiceContainer>
      <StyledP key={check}>{check}</StyledP>
      <StyledP2 key={check2}>{check2}</StyledP2>
    </TempRollDisplay>
  );
};

export default CharacterRollDisplay;
