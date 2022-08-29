import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../Logic/theme";
import CharacterRollDisplay from "./ChracterRollDIsplay";
import InspirationIcon from "../../Images/InspirationIcon";

const { primary, secondary, quad, background, primaryFont } = theme;

const Container = styled.div`
  grid-area: misc;
  width: 100%;
  margin-top: 0.5em;
  max-height: 10em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media (max-width: 600px) {
    position: relative;
    left: 1em;
    width: 120%;
    height: 100%;
    margin-top: 0.25em;
  }
`;

const Box = styled.div`
  width: 5.5em;
  height: 5.5em;
  margin: 0.5em;
  background-color: ${background};
  border: 3px solid ${primary};
  border-radius: 5px;

  @media (max-width: 600px) {
    width: 10em;
    height: 4em;
    margin: 0.3em;
    height: 4.5em;
  }
`;

const InitBox = styled.div`
  width: 5.5em;
  height: 5.5em;
  margin: 0.5em;
  background-color: ${background};
  border: 3px solid ${primary};
  border-radius: 5px;
  :hover {
    cursor: pointer;
    background-color: ${quad};
  }

  @media (max-width: 600px) {
    width: 6em;
    height: 4.5em;
    margin: 0.3em;
  }
`;

const StyledP = styled.p`
  font-size: 1em;
  margin-top: 0.5em;
  color: ${primaryFont};
  @media (max-width: 600px) {
    font-size: 0.9em;
    margin-top: 0.5em;
  }
`;

const BotomP = styled.p`
  font-size: 1em;
  margin-top: -2.2em;
  color: ${primaryFont};

  @media (max-width: 600px) {
    font-size: 0.9em;
    margin-top: -2.1em;
  }
`;

const Stat = styled.p`
  font-family: "Dosis";
  color: ${secondary};
  font-size: 2em;
  margin-top: -0.55em;

  @media (max-width: 600px) {
    font-size: 1.6em;
    margin-top: -0.7em;
  }
`;

const StyledInspirationIcon = styled(InspirationIcon)`
  margin-top: 0.2em;
  width: 1.65em;
`;

const MiscStats = ({ misc }) => {
  const [lastRoll, setLastRoll] = useState("");
  const [numOfRoll, setNumofRoll] = useState(0);
  const [isInspired, setIsInspiried] = useState(misc.inspiration);

  const rollInit = (mod) => {
    const roll = Math.floor(Math.random() * 20) + 1;
    const str = () => {
      if (mod >= 0) {
        return `Inititive Roll: ${roll} + Mod: ${mod} = ${roll + mod}`;
      }
      if (mod < 0) {
        return `Inititive Roll: ${roll} - Mod: ${mod} = ${roll + mod}`;
      }
    };
    setLastRoll(str());
    setNumofRoll(numOfRoll + 1);
  };

  const clear = () => {
    setLastRoll("");
    setNumofRoll(0);
  };

  return (
    <React.Fragment>
      <Container>
        <InitBox onClick={() => setIsInspiried(!isInspired)}>
          <StyledP>Inspired</StyledP>
          <Stat>{isInspired ? <StyledInspirationIcon /> : ""}</Stat>
        </InitBox>
        <InitBox onClick={() => rollInit(misc.initiative)}>
          <StyledP>Initiative</StyledP>
          <Stat>{`+${misc.initiative}`}</Stat>
        </InitBox>
        <InitBox>
          <StyledP>Rest</StyledP>
          <Stat>ZZZ</Stat>
        </InitBox>
        <Box>
          <StyledP>Walking</StyledP>
          <Stat>{`${misc.speed} ft.`}</Stat>
          <BotomP>Speed</BotomP>
        </Box>
        <Box>
          <StyledP>Armor</StyledP>
          <Stat>{misc.ac}</Stat>
          <BotomP>Class</BotomP>
        </Box>
      </Container>
      <CharacterRollDisplay
        key="Init Roll Display"
        check={lastRoll}
        num={numOfRoll}
        onClick={() => clear}
      />
    </React.Fragment>
  );
};

export default MiscStats;
