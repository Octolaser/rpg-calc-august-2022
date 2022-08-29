import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../Logic/theme";
import Action from "./ActionComponets/Action";
import Spells from "./ActionComponets/Spells";
import Attack from "./ActionComponets/Attack";
import Bonus from "./ActionComponets/Bonus";
import Other from "./ActionComponets/Other";

const { primary, tri, primaryFont, background } = theme;

const Container = styled.div`
  grid-area: actions;
  min-width: 32vw;
  min-height: 55vh;
  width: 98%;
  height: 150%;
  margin-right: 6em;
  height: 40vh;
  background-color: ${background};
  border: 3px solid ${primary};
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    margin: 0 auto;
    min-height: 10em;
    max-height: 20em;
    width: 95%;
    flex-wrap: wrap-reverse;
  }
`;

const Panel = styled.div`
  width: 95%;
  height: 85%;
  margin: 0.25em auto 0;
  background-color: ${primaryFont};
  border-radius: 5px;
  overflow-y: scroll;
  @media (max-width: 600px) {
    height: 80%;
    margin-top: -0.25em;
  }
`;

const Menu = styled.div`
  margin: 0.25em auto 0;
  display: flex;
  align-items: center;
`;

const MenuItem = styled.div`
  border: 2px solid ${primary};
  border-radius: 5px;
  width: 3em;
  margin: 0 0.25em;
  padding: 0.25em;
  color: ${primaryFont};
  :hover {
    background-color: ${tri};
    cursor: pointer;
  }
  @media (max-width: 600px) {
    margin-bottom: 0.25em;
  }
`;

const ActiveMenuItem = styled.div`
  border: 2px solid ${primary};
  border-radius: 5px;
  width: 3em;
  margin: 0 0.25em;
  padding: 0.25em;
  background-color: ${tri};
  color: ${background};
  :hover {
    cursor: pointer;
  }
  @media (max-width: 600px) {
    margin-bottom: 0.25em;
  }
`;

const ActionsContainer = ({ attacks, spells, bonusAttack, reactions }) => {
  const [active, setActive] = useState("Action");

  const changeScreen = (type) => {
    setActive(type);
  };

  const actionButton = () => {
    if (active === "Action") return <ActiveMenuItem>Action</ActiveMenuItem>;
    return <MenuItem onClick={() => changeScreen("Action")}>Action</MenuItem>;
  };

  const attackButton = () => {
    if (active === "Attack") return <ActiveMenuItem>Attack</ActiveMenuItem>;
    return <MenuItem onClick={() => changeScreen("Attack")}>Attack</MenuItem>;
  };

  const spellsButton = () => {
    if (active === "Spells") return <ActiveMenuItem>Spells</ActiveMenuItem>;
    return <MenuItem onClick={() => changeScreen("Spells")}>Spells</MenuItem>;
  };

  const bonusButton = () => {
    if (active === "Bonus") return <ActiveMenuItem>Bonus</ActiveMenuItem>;

    return <MenuItem onClick={() => changeScreen("Bonus")}>Bonus</MenuItem>;
  };

  const otherButton = () => {
    if (active === "Other") return <ActiveMenuItem>Other</ActiveMenuItem>;
    return <MenuItem onClick={() => changeScreen("Other")}>Other</MenuItem>;
  };

  const renderPanel = (attacks, spells, bonusAttack, reactions) => {
    if (active === "Action") return <Action />;
    if (active === "Spells") return <Spells spells={spells} />;
    if (active === "Attack") return <Attack attacks={attacks} />;
    if (active === "Bonus")
      return <Bonus bonusAttack={bonusAttack} reactions={reactions} />;
    if (active === "Other") return <Other />;
  };

  return (
    <Container>
      <Menu>
        {actionButton()}
        {attackButton()}
        {spellsButton()}
        {bonusButton()}
        {otherButton()}
      </Menu>
      <Panel>{renderPanel(attacks, spells, bonusAttack, reactions)}</Panel>
    </Container>
  );
};

export default ActionsContainer;
