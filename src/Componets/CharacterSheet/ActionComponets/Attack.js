import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../../Logic/theme";
import CharacterRollDisplay from "../ChracterRollDIsplay";

const { primary, secondary, background } = theme;

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  overflow: scroll;
`;

const Row = styled.div`
  width: 90%;
  height: 4.2em;
  margin: 0 auto;
  display: flex;
  border-bottom: 1px solid ${primary};
`;

const NameBox = styled.div`
  display: block;
  text-align: left;
  margin-left: 1em;
  min-width: 9em;

  @media (max-width: 600px) {
    min-width: 7.9em;
  }
`;

const Title = styled.p`
  font-family: "Dosis";
  color: ${primary};
  font-size: 1.3em;
  margin-bottom: 1;
  @media (max-width: 600px) {
    font-size: 1.2em;
  }
`;

const Type = styled.div`
  font-size: 0.7em;
  margin-top: -1.8em;
  margin-left: 0.5em;
`;

const RangeBox = styled.div`
  margin-top: 1.2em;
  width: 2em;
  @media (max-width: 600px) {
    margin-left: 0.1em;
  }
`;

const NameLabelBox = styled.div`
  margin: 1.2em 0 0 1.2em;
  width: 10em;
  @media (max-width: 600px) {
    width: 50em;
    margin-left: 1em;
    margin-right: 0em;
  }
`;

const LabelBox = styled.div`
  margin-top: 1.2em;
  margin-left: -1.1em;
  margin-right: 2.6em;
  width: 2em;
  @media (max-width: 600px) {
    margin-left: -1.5em;
  }
`;

const Range = styled.p`
  font-size: 0.8em;
  font-weight: bold;
  text-align: left;
`;

const RollBox = styled.div`
  border: 2px solid ${primary};
  border-radius: 5px;
  min-width: 2em;
  height: 2em;
  margin-top: 1.3em;
  margin-left: 1.5em;
  :hover {
    cursor: pointer;
    background-color: ${secondary};
  }

  @media (max-width: 600px) {
    margin-left: 1.1em;
  }
`;

const BoxP = styled.p`
  font-family: "Dosis";
  margin-top: 0.35em;
  color: ${background};
`;

const Attack = ({ attacks }) => {
  const [lastRoll, setLastRoll] = useState("");
  const [lastRoll2, setLastRoll2] = useState("");
  const [numOfRoll, setNumofRoll] = useState(0);
  const [numOfDice, setNumofDice] = useState(undefined);
  const [diceType, setDiceType] = useState(null);

  const rollDC = (name, mod) => {
    const roll = Math.floor(Math.random() * 20) + 1;
    const str = () => {
      if (mod > 0) {
        setLastRoll(`${name} to hit:`);
        setLastRoll2(`Roll ${roll} + Bonus ${mod} = ${roll + mod}`);
      }
      if (mod < 0) {
        setLastRoll(`${name} to hit:`);
        setLastRoll2(`Roll ${roll} - Bonus ${mod} = ${roll + mod}`);
      }
      if ((mod = 0)) {
        setLastRoll(`${name} to hit: Roll ${roll}:`);
        setLastRoll2("");
      }
    };
    str();
    setNumofRoll(numOfRoll + 1);
    setDiceType(undefined);
  };

  const rollAttack = (name, mod, num, type) => {
    const rolls = [];
    let rollStr = "";
    let rollTotal = 0;

    const roll = (type) => {
      rolls.push(Math.floor(Math.random() * type) + 1);
    };

    for (let i = 0; i < num; i++) {
      roll(type);
    }

    for (let j = 0; j < rolls.length; j++) {
      rollStr = `${rollStr} + ${rolls[j]}`;
      rollTotal += rolls[j];
    }

    const str = () => {
      setLastRoll(`${name} damage:`);
      setLastRoll2(
        `Roll: ${rollStr.slice(2)} + mod ${mod} = ${rollTotal + mod}`
      );
    };

    str();
    setNumofRoll(numOfRoll + 1);
    setDiceType(type);
    setNumofDice(rolls.length);
  };

  const clear = () => {
    setLastRoll("");
    setLastRoll2("");
    setNumofRoll(0);
    setDiceType(undefined);
    setNumofDice(null);
  };

  const renderedItems = attacks.map((attacks) => {
    return (
      <Row key={`${attacks.name} row`}>
        <NameBox key={`${attacks.name} name box`}>
          <Title key={attacks.name}>{attacks.name}</Title>
          <Type key={`${attacks.type}`}>{attacks.type}</Type>
        </NameBox>
        <RangeBox key={`${attacks.name} range box`}>
          <Range key={`${attacks.name} range`}>{attacks.range}ft.</Range>
        </RangeBox>
        <RollBox
          onClick={() => rollDC(attacks.name, attacks.hit)}
          key={`${attacks.name} ${attacks.hit} box`}
        >
          <BoxP key={`${attacks.name} ${attacks.hit}`}>+{attacks.hit}</BoxP>
        </RollBox>
        <RollBox
          key={`${attacks.name} damage button box`}
          style={{ paddingLeft: 8, paddingRight: 8 }}
          onClick={() =>
            rollAttack(
              attacks.name,
              attacks.damage.add,
              attacks.damage.num,
              attacks.damage.type
            )
          }
        >
          <BoxP>{`${attacks.damage.num}d${attacks.damage.type} +${attacks.damage.add}`}</BoxP>
        </RollBox>
      </Row>
    );
  });
  return (
    <React.Fragment>
      <Container>
        <Row>
          <NameLabelBox>
            <Range>Attack Name</Range>
          </NameLabelBox>
          <LabelBox>
            <Range>Range</Range>
          </LabelBox>
          <LabelBox>
            <Range>Hit/DC</Range>
          </LabelBox>
          <LabelBox>
            <Range>Damage</Range>
          </LabelBox>
        </Row>
        {renderedItems}
      </Container>
      <CharacterRollDisplay
        key="Attack Roll Display"
        check={lastRoll}
        check2={lastRoll2}
        num={numOfRoll}
        numOfRoll={numOfDice}
        type={diceType}
        onClick={() => clear}
      />
    </React.Fragment>
  );
};

export default Attack;
