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
  background-image: url(/dice-desk-texture.png);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border-radius: 40px;
  border: 2px solid black;
  height: 240px;

  select {
    margin: 10px;
    padding: 5px;
    box-shadow: 5px 5px 10px black;
  }

  div {
    background-image: url(/dice-texture.png);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    color: white;
    font-size: 2rem;
    text-align: center;
    margin: 10px;
    padding: 30px;
    width: 40px;
    height: 40px;
  }

  button {
    ${({ theme }) => css`
      background-color: ${theme.colors.button};
      box-shadow: ${theme.boxShadow.shadowHeavy};
    `};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    margin: 10px 30px;
    padding: 10px;
    border: 2px solid black;
    border-radius: 999px;
  }
`;
