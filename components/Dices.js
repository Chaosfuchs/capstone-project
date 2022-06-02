import useStore from '../hooks/useStore';
import styled, { css } from 'styled-components';

export default function Dices() {
  return (
    <StyledDiceContainer>
      <select>
        <option>Choose a Dice yout want to roll...</option>
        <option>Dice 1</option>
        <option>Dice 2</option>
        <option>Dice 3</option>
      </select>
      <span>You rolled a ....</span>
      <div>This will be the displayed Dice.</div>
      <button>Roll</button>
    </StyledDiceContainer>
  );
}

const StyledDiceContainer = styled.div`
  background-color: lightgreen;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  border: 2px solid black;
  height: 240px;

  div {
    padding: 30px;
    border: 2px solid black;
  }
`;
