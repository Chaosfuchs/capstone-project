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
    background-color: ${theme.colors.fifth};
    box-shadow: ${theme.boxShadow.shadow};
  `}
  display: flex;
  max-width: 350px;
  white-space: pre-line;
  word-break: break-word;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;

  ul {
    list-style: none;
  }
`;
