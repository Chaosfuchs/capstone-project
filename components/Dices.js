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
      <div>20</div>
      <button>Roll</button>
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
