import React, { useState } from "react";
import styled from "styled-components";
import Route from "./Componets/Route";
import Header from "./Container/Header";
import Footer from "./Container/Footer";
import RollButton from "./Buttons/RollMenuItem";
import HistoryButton from "./Buttons/HistoryMenuItem";
import CharacterButton from "./Buttons/CharacterMenuItem";
import MainPlayArea from "./Container/MainPlayArea";
import Login from "./Container/Pages/Login";
import Character from "./Logic/tavadar";

const PlayContainer = styled.div`
  text-align: center;
  @media (max-width: 600px) {
    width: calc(100% - 14px);
  }
`;

const App = () => {
  const [character] = useState(Character);

  const container = (page) => {
    return (
      <PlayContainer>
        <Header name={character.name} />
        <MainPlayArea character={character} page={page} />
        <Footer />
        <RollButton active={page} />
        <HistoryButton active={page} />
        <CharacterButton active={page} />
      </PlayContainer>
    );
  };

  return (
    <div>
      <Route path="/">
        <Login />
      </Route>
      <Route path="/freeroll">{container("freeroll")}</Route>
      <Route path="/character">{container("character")}</Route>
    </div>
  );
};

export default App;

//
