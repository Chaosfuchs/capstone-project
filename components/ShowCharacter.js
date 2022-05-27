import useStore from '../hooks/useStore';
import styled, { css } from 'styled-components';

export default function ShowCharacter() {
  const characters = useStore(state => state.characters);

  return (
    <>
      {characters.map(character => (
        <StyledCard key={character.id}>
          <ul>
            <li>Name: {character.name}</li>
            <li>{character.information}</li>
          </ul>
        </StyledCard>
      ))}
    </>
  );
}

const StyledCard = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.cardfield};
    box-shadow: ${theme.boxShadow.shadowNeon};
    border: ${theme.borders.neonBorder};
  `}
  display: flex;
  max-width: 350px;
  white-space: pre-line;
  word-break: break-word;
  margin: 0px 10px 50px;
  padding: 0;
  border-radius: 10px;

  ul {
    padding: 10px;
    margin: 5px;
    list-style: none;
  }
`;
