import useStore from '../hooks/useStore';
import styled, { css } from 'styled-components';
import { useState } from 'react';

export default function Dice() {
  const dices = useStore(state => state.dices);
  const rollDice = useStore(state => state.rollDice);
  const currentRoll = useStore(state => state.currentRoll);

  const [diceId, setDiceId] = useState(null);

  return (
    <StyledDiceContainer>
      <select
        onChange={event => {
          setDiceId(event.target.value);
          rollDice();
        }}
      >
        <option value="">Choose a Dice...</option>
        {dices.map(dice => (
          <option key={dice.id} value={dice.id}>
            {dice.name}
          </option>
        ))}
      </select>
      <div>{currentRoll >= 0 ? currentRoll : ''}</div>
      <button onClick={() => rollDice(diceId)}>Roll</button>
    </StyledDiceContainer>
  );
}

const StyledDiceContainer = styled.div`
  ${({ theme }) => css`
    box-shadow: ${theme.boxShadow.shadowHeavy};
  `};
  background-image: url(/dice-desk-texture.png);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border-radius: 40px;
  border: 3px solid #6d5001;
  height: 240px;

  select {
    margin: 10px;
    padding: 5px;
    box-shadow: 5px 5px 10px black;
  }

  div {
    ${({ theme }) => css`
      font-size: ${theme.fonts.fontSizeBig};
    `};
    background-image: url(/dice-texture.png);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    color: white;
    text-align: center;
    margin: 10px;
    padding: 30px;
    width: 40px;
    height: 40px;
  }

  button {
    ${({ theme }) => css`
      font-size: ${theme.fonts.fontSizeButton};
      background-color: ${theme.colors.button};
      box-shadow: ${theme.boxShadow.shadowHeavy};
    `};
    color: white;
    display: flex;
    justify-content: center;
    width: 150px;
    margin: 10px 30px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 999px;
  }
`;
