import React from "react";
import styled from "styled-components";
import diceRollResults from "../Logic/DiceRollResults";
import D4Icon from "../Images/Dice/D4Icon";
import D6Icon from "../Images/Dice/D6Icon";
import D8Icon from "../Images/Dice/D8Icon";
import D10Icon from "../Images/Dice/D10Icon";
import D12Icon from "../Images/Dice/D12Icon";
import D20Icon from "../Images/Dice/D20Icon";

const TotalsTable = styled.div`
  margin: 0 auto;
  width: 95%;
`;
const TotalsContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    width: 85%;
  }
`;

const Divider = styled.hr`
  border: 1px #662d91 solid;
  width: 95%;

  @media (max-width: 900px) {
    width: 85%;
    margin-top: -5px;
  }
`;

const Row = styled.div`
  display: flex;
  border: 1px solid #662d91;
  min-width: 100%;
`;

const DiceIconBox = styled.div`
  height: 59px;
  width: 59px;
  background-color: #662d91;
  border-bottom: 1px solid #fff;
`;

const RollDispContainer = styled.div`
  width: calc(100% - 59px);
  max-height: 59px;
  text-align: left;
`;

const SumIconBox = styled.div`
  height: 59px;
  width: 59px;
  background-color: #662d91;
  border-bottom: 1px solid #fff;
`;

const RollTotalsText = styled.p`
  margin-left: 15px;
  font-size: 1.15em;
`;

const RollSumText = styled.p`
  font-size: 1.15em;
  color: #fff;
`;

const TotalsDisplay = ({ lastRoll }) => {
  const rollsInfo = [
    {
      type: "D20",
      el: <D20Icon width={42} style={{ marginTop: 7 }} />,
    },
    {
      type: "D12",
      el: <D12Icon width={42} style={{ marginTop: 7 }} />,
    },
    {
      type: "D10",
      el: <D10Icon width={42} style={{ marginTop: 7 }} />,
    },
    {
      type: "D8",
      el: <D8Icon width={42} style={{ marginTop: 7 }} />,
    },
    {
      type: "D6",
      el: <D6Icon width={42} style={{ marginTop: 7 }} />,
    },
    {
      type: "D4",
      el: <D4Icon width={42} style={{ marginTop: 7 }} />,
    },
  ];

  const foundIndex = rollsInfo.findIndex((object) => {
    return object.type === lastRoll;
  });

  const foundRoll = rollsInfo[foundIndex];
  rollsInfo.splice(foundIndex, 1);
  rollsInfo.unshift(foundRoll);

  const infoArr = (type) => {
    let rollsInfo = "";
    for (const e of diceRollResults[type]) {
      rollsInfo = `${rollsInfo} + ${e}`;
    }
    return rollsInfo.slice(3);
  };

  const rollsTotal = (type) => {
    let total = 0;
    for (const e of diceRollResults[type]) {
      total += e;
    }
    return total;
  };

  const rollTableRender = rollsInfo.map(({ type, el }, index) => {
    return (
      <TotalsContainer
        style={{ backgroundColor: index % 2 ? "#d0bee4" : "lightgray" }}
        key={`${index} total container`}
      >
        <Row key={`${type} + ${el}`}>
          <DiceIconBox key={`${type} icon box`}>{el}</DiceIconBox>
          <RollDispContainer key={`${type} Disp Container`}>
            <RollTotalsText key={`Totals text ${type}`}>
              {infoArr(type)}
            </RollTotalsText>
          </RollDispContainer>
          <SumIconBox key={`${type} sum box`}>
            <RollSumText key={`${type} sum total`}>
              = {rollsTotal(type)}
            </RollSumText>
          </SumIconBox>
        </Row>
      </TotalsContainer>
    );
  });

  return (
    <React.Fragment>
      <Divider />
      <p style={{ marginBottom: 5 }}>Totals</p>
      <TotalsTable>{rollTableRender}</TotalsTable>
    </React.Fragment>
  );
};

export default TotalsDisplay;
