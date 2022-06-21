import useStore from '../hooks/useStore';
import styled, { css } from 'styled-components';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Dice() {
  const dices = useStore(state => state.dices);
  const rollDice = useStore(state => state.rollDice);
  const currentRoll = useStore(state => state.currentRoll);

  const [diceId, setDiceId] = useState(null);
  const [rotate, setRotate] = useState(false);

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
      <motion.div animate={{ rotate: rotate ? 360 : 0 }}>
        {currentRoll >= 0 ? currentRoll : ''}
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          rollDice(diceId);
          setRotate(!rotate);
        }}
      >
        Roll
      </motion.button>
    </StyledDiceContainer>
  );
}

const StyledDiceContainer = styled.div`
  ${({ theme }) => css`
    box-shadow: ${theme.boxShadow.shadowHeavy};
  `};
  background-image: url(/wood-table.jpeg);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 10px;
  padding: 10px;
  border-radius: 10px;
  height: 250px;

  select {
    ${({ theme }) => css`
      box-shadow: ${theme.boxShadow.shadowHeavy};
      background-image: ${theme.backgroundImage.paper};
    `};
    border-radius: 5px;
    text-align: center;
    margin: 10px;
    padding: 5px;
  }

  div {
    ${({ theme }) => css`
      font-size: ${theme.fonts.fontSizeBig};
      background-image: ${theme.backgroundImage.dice};
    `};
    // clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    font-family: 'Joan', serif;
    border-radius: 15px;
    color: white;
    text-align: center;
    margin: 20px;
    padding: 20px;
    width: 40px;
    height: 40px;
  }

  button {
    ${({ theme }) => css`
      font-size: ${theme.fonts.fontSizeButton};
      background-image: ${theme.backgroundImage.wood2};
      box-shadow: ${theme.boxShadow.shadowHeavy};
    `};
    color: white;
    font-weight: 800;
    display: flex;
    justify-content: center;
    width: 80px;
    margin: 10px 30px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;
  }
`;
