import React from "react";
import styled from "styled-components";
import theme from "../Logic/theme";
import GridIMG from "../Images/grid.svg";
import CharacterSheet from "./Pages/CharacterSheet";
import DiceRoller from "./Pages/DiceRoller";

const GridBackground = styled.div`
  background-color: rgba(79, 79, 79, 0.5);
  min-height: 75vh;
  height: 100%;
  border: 3px solid ${theme.primary};
`;

const Container = styled.div`
  width: 99vw;
  min-height: 75vh;
  margin-top: 10px;
  background-image: url(${GridIMG});

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

const MainPlayContainer = ({ character, page }) => {
  const setPage = (page) => {
    if (page === "freeroll") {
      return <DiceRoller key={"Dice Roller Page"} />;
    }
    if (page === "character") {
      return (
        <CharacterSheet
          character={character}
          key={`{character ${character.name} page}`}
        />
      );
    }
  };

  return (
    <Container key={"play container"}>
      <GridBackground key={"grid background"}>{setPage(page)}</GridBackground>
    </Container>
  );
};

export default MainPlayContainer;
