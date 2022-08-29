import React from "react";
import styled from "styled-components";
import CharacterHeader from "../../Componets/CharacterSheet/CharacterHeader";
import BaseStats from "../../Componets/CharacterSheet/BaseStats";
import Skills from "../../Componets/CharacterSheet/Skills";
import MiscStats from "../../Componets/CharacterSheet/MiscStats";
import SaveRolls from "../../Componets/CharacterSheet/SaveRolls";
import ActionsContainer from "../../Componets/CharacterSheet/ActionsContainer";

const DisplayGrid = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 65px 1fr 4fr;
  row-gap: 0.5em;
  grid-template-areas:
    " header header header header header header"
    "BaseStat misc misc misc misc Base"
    "save skill skill actions actions actions";

  @media (max-width: 600px) {
    grid-template-rows: 65px 1fr 4.5fr 1.5fr;
    grid-template-columns: repeat(4, 1fr);

    grid-template-areas:
      "header header header header"
      "BaseStat BaseStat BaseStat BaseStat"
      "misc misc skill skill"
      "save save save save"
      "actions actions actions actions"
      "Base Base Base Base";
  }
`;

const BaseStatsContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: -0.5em;
  grid-area: BaseStat;

  @media (max-width: 600px) {
    margin-top: -1em;
  }
`;

const TempBase = styled.div`
  background-color: darkgreen;
  grid-area: Base;
  width: 100%;
`;
const SkillsContainer = styled.div`
  grid: skill;
  text-align: center;
  width: 100%;
  margin-left: -1em;
  @media (max-width: 600px) {
    width: 100%;
    margin-left: 0em;
  }
`;

const CharacterSheet = ({ character }) => {
  return (
    <DisplayGrid>
      <CharacterHeader
        hp={character.hp}
        charClass={character.class}
        race={character.race}
      />
      <BaseStatsContainer>
        <BaseStats stats={character.stats} />
      </BaseStatsContainer>
      <SkillsContainer />
      <TempBase>I am temp base</TempBase>
      <SkillsContainer>
        <Skills skills={character.skills} />
      </SkillsContainer>
      <SaveRolls saves={character.stats} />
      <MiscStats misc={character.misc} />
      <ActionsContainer
        attacks={character.attacks}
        spells={character.spells}
        bonusAttack={character.bonusAttack}
        reactions={character.reactions}
      />
    </DisplayGrid>
  );
};

export default CharacterSheet;
