import React from "react";
import styled from "styled-components";
import theme from "../Logic/theme";
import Logo from "../Images/Logo";
import ElfProfile from "../Images/ProfileImages/ElfProfile";

const { primary, background, primaryFont } = theme;

const Background = styled.div`
  background-color: ${background};
  width: 99vw;
  max-height: 7em;
  display: flex;
  text-align: center;
  position: sticky;
  top: 8px;
  z-index: 3;

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
`;

const Welcome = styled.h1`
  color: ${primaryFont};
  font-size: 1.8rem;

  @media (max-width: 800px) {
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const WelcomeMobile = styled.h1`
  display: none;

  @media (max-width: 600px) {
    display: inline;
    color: #fff;
    font-size: 1.3rem;
    margin-right: 5vw;
  }
`;

const AvatarContainer = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: ${primary};
  align-self: center;
  margin-right: 3vw;
  overflow: hidden;

  @media (max-width: 600px) {
    width: 45px;
    height: 45px;
    margin-top: 5px;
  }
`;

const Header = ({ name }) => {
  return (
    <Background key={"Header Background"}>
      <Logo key={"header logo"} />
      <CenterContainer key={"header center container"}>
        <Welcome key={`welcome ${name}`}>Welcome {name}</Welcome>
        <WelcomeMobile key={`mobile welcome ${name}`}>{name}</WelcomeMobile>
      </CenterContainer>
      <AvatarContainer const={`avatar container`}>
        <ElfProfile
          height="95%"
          style={{ marginTop: "5px" }}
          key={"profile img"}
        />
      </AvatarContainer>
    </Background>
  );
};
export default Header;
