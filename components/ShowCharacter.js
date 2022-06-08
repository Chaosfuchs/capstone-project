import useStore from '../hooks/useStore';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import useHydration from '../hooks/useHydration';

export default function ShowCharacter() {
  const characters = useStore(state => state.characters);
  const hydrated = useHydration();
  const deleteCharacter = useStore(state => state.deleteCharacter);

  return (
    <Main>
      {hydrated &&
        characters.map(character => (
          <StyledCard key={character.id}>
            <ul>
              <StyledName>{character.name}</StyledName>
              <li>{character.myImage}</li>
              <br />
              <li>{character.information}</li>
            </ul>
            <div>
              <Link passHref href={`/update-character/${character.id}`}>
                <button>
                  <img src={'/pencil-outline.svg'} width="20px" /> Edit
                </button>
              </Link>
              <button
                type="button"
                onClick={() => {
                  deleteCharacter(character.id);
                }}
              >
                <img src={'/trash-can-outline.svg'} width="20px" /> Delete
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
    font-size: ${theme.fonts.fontSizeSmall};
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
        font-size: ${theme.fonts.fontSizeSmall};
        background-color: ${theme.colors.card};
        box-shadow: ${theme.boxShadow.shadowLight};
      `};
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      width: 80px;
      margin: 5px 30px;
      padding: 5px;
      border-radius: 999px;
    }
  }
`;

const StyledName = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.characterName};
    font-size: ${theme.fonts.fontSizeNormal};
  `};
  text-align: center;
  font-weight: 800;
`;
