import React from "react";
import styled from "styled-components";
import theme from "../../Logic/theme";
import D20 from "../../Images/Dice/D20Icon";
import D12 from "../../Images/Dice/D12Icon";
import D10 from "../../Images/Dice/D10Icon";
import D8 from "../../Images/Dice/D8Icon";
import D6 from "../../Images/Dice/D6Icon";
import D4 from "../../Images/Dice/D4Icon";

const { primary, quad, primaryFont } = theme;

const RollButton = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  border-radius: 50%;
  background-color: ${primary};
  border: 3px solid ${quad};
  margin: 0 auto;
  user-select: none;
  filter: drop-shadow(1px 3px 4px rgba(0, 0, 0, 0.6));

  :hover {
    background-color: ${quad};
    cursor: pointer;
  }

  @media (max-width: 600px) {
    margin-bottom: 10px;
    width: 70px;
    height: 70px;
  }
`;

const Label = styled.p`
  color: ${primaryFont};
  font-size: 13px;
  position: relative;
  top: -69%;

  @media (max-width: 600px) {
    top: -75%;
    font-size: 11px;
  }
`;

const StyledD20 = styled(D20)`
  margin-top: 9px;
  width: 55px;

  @media (max-width: 600px) {
    margin-top: 11px;
    width: 43px;
    padding-bottom: 6px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`;

const StyledD12 = styled(D12)`
  margin-top: 9px;
  width: 58px;
  padding-bottom: 2px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  @media (max-width: 600px) {
    margin-top: 12px;
    width: 45px;
    padding-bottom: 7px;
  }
`;

const StyledD10 = styled(D10)`
  width: 50px;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding-top: 13px;

  @media (max-width: 600px) {
    margin-top: -2px;
    width: 45px;
  }
`;

const StyledD8 = styled(D8)`
  margin-top: 11px;
  width: 52px;
  padding-bottom: 2px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  @media (max-width: 600px) {
    margin-top: 12px;
    width: 42px;
    padding-bottom: 4px;
  }
`;

const StyledD6 = styled(D6)`
  margin-top: 18px;
  width: 45px;
  padding-bottom: 9px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  @media (max-width: 600px) {
    margin-top: 17px;
    width: 38px;
    padding-bottom: 11px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`;

const StyledD4 = styled(D4)`
  margin-top: 11px;
  width: 48px;

  @media (max-width: 600px) {
    margin-top: 10px;
    width: 43px;
    padding-bottom: 11px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`;

const ClearCaption = styled.div`
  margin-top: 87px;

  @media (max-width: 600px) {
    margin-top: 80px;
  }
`;

const ButtonShell = ({ dice, onClick }) => {
  if (dice === 20) {
    return (
      <React.Fragment>
        <RollButton onClick={onClick}>
          <StyledD20 button="yes" />
          <Label>20</Label>
        </RollButton>
      </React.Fragment>
    );
  }
  if (dice === 12) {
    return (
      <React.Fragment>
        <RollButton onClick={onClick}>
          <StyledD12 button="yes" />
          <Label>12</Label>
        </RollButton>
      </React.Fragment>
    );
  }
  if (dice === 8) {
    return (
      <React.Fragment>
        <RollButton onClick={onClick}>
          <StyledD8 button="yes" />
          <Label>8</Label>
        </RollButton>
      </React.Fragment>
    );
  }
  if (dice === 6) {
    return (
      <React.Fragment>
        <RollButton onClick={onClick}>
          <StyledD6 button="yes" />
          <Label>6</Label>
        </RollButton>
      </React.Fragment>
    );
  }
  if (dice === 4) {
    return (
      <React.Fragment>
        <RollButton onClick={onClick}>
          <StyledD4 button="yes" />
          <Label>4</Label>
        </RollButton>
      </React.Fragment>
    );
  }
  if (dice === 10) {
    return (
      <React.Fragment>
        <RollButton onClick={onClick}>
          <StyledD10 button="yes" />
          <Label>10</Label>
        </RollButton>
      </React.Fragment>
    );
  }
  if (dice === "clear") {
    return (
      <React.Fragment>
        <RollButton onClick={onClick}>
          <ClearCaption />
          <Label>Clear</Label>
        </RollButton>
      </React.Fragment>
    );
  }
};
export default ButtonShell;
