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

const Bonus = ({ bonusAttack, reactions }) => {
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

  const renderedBonusAttacks = bonusAttack.map((bonusAttack) => {
    return (
      <Row key={`${bonusAttack.name} row`}>
        <NameBox key={`${bonusAttack.name} name box`}>
          <Title key={bonusAttack.name}>{bonusAttack.name}</Title>
          <Type key={`${bonusAttack.type}`}>{bonusAttack.type}</Type>
        </NameBox>
        <RangeBox key={`${bonusAttack.name} range box`}>
          <Range key={`${bonusAttack.name} range`}>
            {bonusAttack.range}ft.
          </Range>
        </RangeBox>
        <RollBox
          onClick={() => rollDC(bonusAttack.name, bonusAttack.hit)}
          key={`${bonusAttack.name} ${bonusAttack.hit} box`}
        >
          <BoxP key={`${bonusAttack.name} ${bonusAttack.hit}`}>
            +{bonusAttack.hit}
          </BoxP>
        </RollBox>
        <RollBox
          key={`${bonusAttack.name} damage button box`}
          style={{ paddingLeft: 8, paddingRight: 8 }}
          onClick={() =>
            rollAttack(
              bonusAttack.name,
              bonusAttack.damage.add,
              bonusAttack.damage.num,
              bonusAttack.damage.type
            )
          }
        >
          <BoxP>{`${bonusAttack.damage.num}d${bonusAttack.damage.type} +${bonusAttack.damage.add}`}</BoxP>
        </RollBox>
      </Row>
    );
  });

  const renderedReactions = reactions.map((reactions) => {
    return (
      <Row key={`${reactions.name} row`}>
        <NameBox key={`${reactions.name} name box`}>
          <Title key={reactions.name}>{reactions.name}</Title>
          <Type key={`${reactions.type}`}>{reactions.type}</Type>
        </NameBox>
        <RangeBox key={`${reactions.name} range box`}>
          <Range key={`${reactions.name} range`}>{reactions.range}ft.</Range>
        </RangeBox>
        <RollBox
          onClick={() => rollDC(reactions.name, reactions.hit)}
          key={`${reactions.name} ${reactions.hit} box`}
        >
          <BoxP key={`${reactions.name} ${reactions.hit}`}>
            +{reactions.hit}
          </BoxP>
        </RollBox>
        <RollBox
          key={`${reactions.name} damage button box`}
          style={{ paddingLeft: 8, paddingRight: 8 }}
          onClick={() =>
            rollAttack(
              reactions.name,
              reactions.damage.add,
              reactions.damage.num,
              reactions.damage.type
            )
          }
        >
          <BoxP>{`${reactions.damage.num}d${reactions.damage.type} +${reactions.damage.add}`}</BoxP>
        </RollBox>
      </Row>
    );
  });
  return (
    <React.Fragment>
      <Container>
        <Row>
          <NameLabelBox>
            <Range>Bonus Attack</Range>
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
        {renderedBonusAttacks}
        <Row>
          <NameLabelBox>
            <Range>Reactions</Range>
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
        {renderedReactions}
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

export default Bonus;
