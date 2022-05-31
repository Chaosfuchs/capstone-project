import useStore from '../hooks/useStore';
import styled, { css } from 'styled-components';
import useHydration from '../hooks/useHydration';

export default function ShowCharacter() {
  const characters = useStore(state => state.characters);

  const hydrated = useHydration();

  return (
    <Main>
      {hydrated &&
        characters.map(character => (
          <StyledCard key={character.id}>
            <ul>
              <StyledName>{character.name}</StyledName>
              <br />
              <li>{character.information}</li>
            </ul>
            <div>
              <button>
                <img src={'/pencil-outline.svg'} width="20px" />
              </button>
              <button>
                <img src={'/trash-can-outline.svg'} width="20px" />
              </button>
            </div>
          </StyledCard>
        ))}
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;

  @media (min-width: 750px) {
    flex-direction: row;
    flex-wrap: wrap;
    overflow-x: scroll;
  }
`;

const StyledCard = styled.div`
  ${({ theme }) => css`
    background-image: ${theme.backgroundImage.paper};
    box-shadow: ${theme.boxShadow.shadowNeon};
    border: ${theme.borders.neonBorder};
  `}
  display: flex;
  flex-direction: column;
  max-width: 350px;
  white-space: pre-line;
  word-break: break-word;
  margin: 10px 10px 30px;
  padding: 0;
  border-radius: 10px;

  ul {
    padding: 10px;
    margin: 5px;
    list-style: none;
  }

  @media (min-width: 400px) {
    min-width: 350px;
    height: 100%;
  }

  div {
    display: flex;
    justify-content: space-between;
    padding: 15px;

    button {
      ${({ theme }) => css`
        background-color: ${theme.colors.card};
      `};
      margin: 5px 30px;
      padding: 5px;
      border-radius: 999px;
    }
  }
`;

const StyledName = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.background};
  `};
  font-size: 20px;
  text-align: center;
  font-weight: 800;
`;
