import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../Logic/theme";
import CharacterRollDisplay from "./ChracterRollDIsplay";

const { primary, secondary, tri, quad } = theme;

const Container = styled.div`
  font-family: "Dosis";
  font-size: 1.2em;
  width: 100%;
  max-width: 15em;
  max-height: 55vh;
  border: 3px solid ${primary};
  border-radius: 5px;
  background-color: #fff;
  overflow-y: scroll;

  @media (max-width: 600px) {
    position: relative;
    width: 95%;
    margin-right: 0.25em;
  }
`;

const StyledP = styled.p`
  margin-top: -0em;

  @media (max-width: 600px) {
    font-size: 1em;
    padding: 0 0.2em;
  }
`;

const SkillContainer = styled.div`
  margin-top: 1.5em;
  width: 100%;
  display: flex;
`;

const ProBox = styled.div`
  width: 0.75em;
  margin-left: 1em;
  margin-right: 0.1em;
`;

const ModBox = styled.div`
  width: 3.5em;
`;

const SkillBox = styled.div`
  height: 25px;
  width: calc(100% - 5em);
  margin: 0 0.15em 0.25em;
  text-align: center;
`;

const BonusBox = styled.div`
  width: 2em;
  height: 1.5em;
  margin-top: -0.25em;
  margin-right: 1em;
  padding-top: 0.25em;
  text-align: center;
  border: 2px solid ${primary};
  border-radius: 5px;

  :hover {
    cursor: pointer;
    background-color: ${secondary};
  }
`;

const IsPro = styled.div`
  width: 8px;
  height: 8px;
  margin: 0.4em 10px 0;
  border: 1.5px solid ${quad};
  border-radius: 25px;
  background-color: ${tri};
`;

const NotPro = styled.div`
  width: 8px;
  height: 8px;
  margin: 0.4em 10px 0;
  border: 2px solid ${quad};
  border-radius: 25px;
  background-color: none;
`;

const Hr = styled.hr`
  width: 98;
  border: 0.5px solid ${primary};
`;

const Skills = ({ skills }) => {
  const [lastRoll, setLastRoll] = useState("");
  const [lastRoll2, setLastRoll2] = useState("");

  const [numOfRoll, setNumofRoll] = useState(0);

  const skillCheck = (name, bonus) => {
    const roll = Math.floor(Math.random() * 20) + 1;
    const str = () => {
      if (bonus >= 0) {
        setLastRoll(`${name} Check:`);
        setLastRoll2(`Roll ${roll} + Bonus ${bonus} = ${roll + bonus}`);
      }
      if (bonus < 0) {
        setLastRoll(`${name} Check:`);
        setLastRoll2(
          `Roll ${roll} - Bonus ${bonus.toString().substring(1)} = ${
            roll + bonus
          }`
        );
      }
    };
    str();
    setNumofRoll(numOfRoll + 1);
  };

  const clear = () => {
    setLastRoll("");
    setLastRoll2("");
    setNumofRoll(0);
  };

  const RenderedSkills = skills.map((skills) => {
    return (
      <React.Fragment key={`${skills.name} fragment`}>
        <Hr key={`${skills.name} hr`} />
        <SkillContainer key={`${skills} cont`}>
          <ProBox key={`${skills.name} probox`}>
            {skills.pro ? <IsPro /> : <NotPro />}
          </ProBox>
          <ModBox key={`${skills.name} modbox`}>
            <StyledP key={`${skills.name} mod text`}>{skills.mod}</StyledP>
          </ModBox>
          <SkillBox key={`${skills.name} skillbox`}>
            <StyledP key={`${skills.name} skillbox text`}>
              {skills.name}
            </StyledP>
          </SkillBox>
          <BonusBox
            key={`${skills.name} bonusbox`}
            onClick={() => skillCheck(skills.name, skills.bonus)}
          >
            {skills.bonus >= 0 ? `+${skills.bonus}` : skills.bonus}
          </BonusBox>
        </SkillContainer>
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      <Container>
        <SkillContainer style={{ marginBottom: -15 }}>
          <ProBox>
            <StyledP>Pro</StyledP>
          </ProBox>
          <ModBox>
            <StyledP style={{ marginLeft: 20 }}>Mod</StyledP>
          </ModBox>
          <SkillBox>
            <StyledP>Skill</StyledP>
          </SkillBox>
          <ModBox>
            <StyledP style={{ marginRight: 10 }}>Bonus</StyledP>
          </ModBox>
        </SkillContainer>
        {RenderedSkills}
      </Container>
      <CharacterRollDisplay
        key="Rolls and checks display"
        check={lastRoll}
        check2={lastRoll2}
        num={numOfRoll}
        onClick={() => clear}
      />
    </React.Fragment>
  );
};

export default Skills;
