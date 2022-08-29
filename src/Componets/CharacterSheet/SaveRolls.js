import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../Logic/theme";
import CharacterRollDisplay from "./ChracterRollDIsplay";

const { primary, secondary, tri, quad, background } = theme;

const Container = styled.div`
  width: calc(100% - 0.35em);
  margin-left: 0.5em;
  height: 6.5em;
  grid-area: save;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 0.25em;

  @media (max-width: 600px) {
    width: 95%;
    margin: 0 auto;
  }
`;

const SaveContainer = styled.div`
  width: 11em;
  height: 2.5em;
  background-color: #fff;
  border: solid 3px ${primary};
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;

  :hover {
    cursor: pointer;
    background-color: ${secondary};
  }
`;

const ModBox = styled.div`
  border: solid 2px ${primary};
  border-radius: 5px;
  width: 1.5em;
  height: 1.5em;
  margin-top: 0.5em;
`;

const IsPro = styled.div`
  width: 0.5em;
  height: 0.5em;
  margin-top: 1em;
  border: 1.5px solid ${quad};
  border-radius: 25px;
  background-color: ${tri};
`;

const NotPro = styled.div`
  width: 0.5em;
  height: 0.5em;
  margin-top: 1em;
  border: 2px solid ${quad};
  border-radius: 25px;
  background-color: none;
`;

const StyledP = styled.p`
  font-family: "Dosis";
  font-size: 1.1em;
  color: ${background};
  margin-top: 0.45em;
`;

const SaveRolls = ({ saves }) => {
  const [lastRoll, setLastRoll] = useState("");
  const [numOfRoll, setNumofRoll] = useState(0);

  const saveCheck = (name, mod) => {
    const roll = Math.floor(Math.random() * 20) + 1;
    const str = () => {
      if (mod >= 0) {
        return `${name.slice(0, 3)} Save: Roll ${roll} + Mod ${mod} = ${
          roll + mod
        }`;
      }
      if (mod < 0) {
        return `${name.slice(0, 3)} Save: Roll ${roll} - Mod ${mod
          .toString()
          .substring(1)} = ${roll + mod}`;
      }
    };
    setLastRoll(str());
    setNumofRoll(numOfRoll + 1);
  };

  const clear = () => {
    setLastRoll("");
    setNumofRoll(0);
  };

  const renderedSaves = saves.map((saves) => {
    return (
      <SaveContainer
        onClick={() => saveCheck(saves.name, saves.save)}
        key={`${saves.name} save roll container`}
      >
        {saves.pro ? (
          <IsPro key={`${saves.name} is pro`} />
        ) : (
          <NotPro key={`${saves.name} is not pro`} />
        )}
        <StyledP key={`${saves.name} label`}>
          {`${saves.name.slice(0, 3).toUpperCase()} save`}
        </StyledP>
        <ModBox key={`${saves.name} mod box`}>
          <StyledP key={`${saves.name} mod`} style={{ marginTop: 0 }}>
            {saves.save >= 0 ? `+${saves.save}` : saves.save}
          </StyledP>
        </ModBox>
      </SaveContainer>
    );
  });
  return (
    <React.Fragment>
      <Container>{renderedSaves}</Container>
      <CharacterRollDisplay
        key="Save rolls display check"
        check={lastRoll}
        num={numOfRoll}
        onClick={() => clear}
      />
    </React.Fragment>
  );
};

export default SaveRolls;
