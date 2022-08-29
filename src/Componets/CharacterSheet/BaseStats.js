import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../Logic/theme";
import CharacterRollDisplay from "./ChracterRollDIsplay";

const { primary, secondary, background, primaryFont } = theme;

const Container = styled.div`
  width: 80px;
  height: 80px;
  margin: -30px 0 0 -3px;
  background-color: #fff;
  border: solid 3px ${primary};
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    width: 57px;
    height: 80px;
  }
`;
const RearContainer = styled.div`
  width: 80px;
  height: 80px;
  margin: 40px 0px 0 8px;
  background-color: ${background};
  border: solid 3px ${primary};
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    width: 57px;
    height: 75px;
    margin: 30px 2px 0px 3px;
  }
`;

const P = styled.p`
  font-size: 0.9em;
  margin-top: 10px;
  color: ${background};
  @media (max-width: 600px) {
    display: none;
  }
`;

const Pmobile = styled.p`
  display: none;
  @media (max-width: 600px) {
    display: block;
    margin-top: 6px;
  }
`;

const BaseP = styled.p`
  color: ${primaryFont};
  font-size: 0.75em;
  margin-top: 5px;

  @media (max-width: 600px) {
    margin-top: 2px;
  }
`;

const ModBox = styled.div`
  width: 50%;
  height: 35px;
  margin: 0 auto;
  border: 3px solid ${primary};
  margin-top: -8px;
  :hover {
    background-color: ${secondary};
  }

  @media (max-width: 600px) {
    margin-top: -15px;
  }
`;

const Mod = styled.p`
  font-family: "Dosis";
  font-size: 2em;
  text-align: center;
  color: ${primary};
  margin-top: -3px;

  @media (max-width: 600px) {
    font-size: 1.7em;
    margin-top: 0px;
  }
`;

const BaseStats = ({ stats }) => {
  const [lastRoll, setLastRoll] = useState("");
  const [numOfRoll, setNumofRoll] = useState(0);
  const statCheck = (name, mod) => {
    const roll = Math.floor(Math.random() * 20) + 1;
    const str = () => {
      if (mod >= 0) {
        return `${name.slice(0, 3)} Check: Roll ${roll} + Mod ${mod} = ${
          roll + mod
        }`;
      }
      if (mod < 0) {
        return `${name.slice(0, 3)} Check: Roll ${roll} - Mod ${mod
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

  const renderedStats = stats.map((stats) => {
    return (
      <React.Fragment key={`${stats.name} fragment`}>
        <RearContainer
          key={`${stats.name} rear`}
          onClick={() => statCheck(stats.name, stats.mod)}
        >
          <Container key={`${stats.name} front container`}>
            <P key={`${stats.name} text`}>{stats.name}</P>
            <Pmobile key={`${stats.name} text mobile`}>
              {stats.name.slice(0, 3)}
            </Pmobile>
            <ModBox key={`${stats.mod} container`}>
              <Mod key={`${stats.mod} disp`}>
                {stats.mod >= 0 ? `+${stats.mod}` : stats.mod}
              </Mod>
            </ModBox>
          </Container>
          <BaseP key={`Base ${stats.base}`}>{`Base ${stats.base}`}</BaseP>
        </RearContainer>
        <CharacterRollDisplay
          key="Rolls and checks display"
          check={lastRoll}
          num={numOfRoll}
          onClick={() => clear}
        />
      </React.Fragment>
    );
  });
  return <React.Fragment>{renderedStats}</React.Fragment>;
};

export default BaseStats;
