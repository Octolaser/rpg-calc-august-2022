import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../Logic/theme";
import ProfileIMG from "../../Images/ProfileImages/TavadarPlaceholder.jpeg";

const { primary, background, primaryFont } = theme;

const Container = styled.div`
  display: flex;
  height: 63px;
  grid-area: header;
  background-color: ${background};
  border-bottom: 4px solid ${primary};

  @media (max-width: 600px) {
    height: 50px;
  }
`;

const LevelsInfo = styled.div`
  display: block;
  margin-left: 13px;
`;

const StyledP = styled.p`
  margin-top: 15px;
  color: ${primaryFont};
  @media (max-width: 600px) {
    margin-top: 10px;
  }
`;

const SmallText = styled.p`
  margin: -10px 0 0px -20px;
  font-size: 0.7em;
  color: ${primaryFont};

  @media (max-width: 600px) {
    margin: -15px 0 0px -20px;
  }
`;

const HPcontainer = styled.div`
  width: 150px;
  height: 40px;
  position: absolute;
  display: flex;
  right: 30px;
  margin-top: 8px;

  @media (max-width: 600px) {
    right: -15px;
  }
`;

const HPinput = styled.input`
  width: 35px;
  height: 20px;
  margin-left: 10px;
  margin-top: 9px;
  background-color: ${background};
  border: ${primary} 2px solid;
  color: white;
  padding-left: 8px;
  padding-top: 3px;
  font-size: 1em;

  @media (max-width: 600px) {
    margin-top: 2px;
    padding-top: 5px;
  }
`;

const CharacterHeader = ({ race, hp, charClass }) => {
  const [currentHP, setCurrentHP] = useState(hp.current);

  const levelTotal = () => {
    let total = 0;
    charClass.forEach((e) => {
      total += e.level;
    });
    return total;
  };

  const classBreakdown = () => {
    let str = "";
    charClass.forEach((e) => {
      str += ` / ${e.class} ${e.level}`;
    });
    return str.slice(3);
  };
  return (
    <Container>
      <img src={ProfileIMG} alt="Profile Img" />
      <LevelsInfo>
        <StyledP>{`${race} | Level ${levelTotal()}`}</StyledP>
        <SmallText>{`(${classBreakdown()})`}</SmallText>
      </LevelsInfo>
      <HPcontainer>
        <StyledP>HP: </StyledP>
        <HPinput
          value={currentHP}
          type="number"
          pattern="[0-9]*"
          onChange={(e) => setCurrentHP(e.target.value)}
        ></HPinput>
        <StyledP>{`\u2008 / ${hp.max}`}</StyledP>
      </HPcontainer>
    </Container>
  );
};

export default CharacterHeader;
