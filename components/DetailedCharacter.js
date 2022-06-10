import useStore from '../hooks/useStore';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function DetailedCharacterCard({ characterId }) {
  const { push } = useRouter();

  function handleClose(e) {
    e.stopPropagation();
    push('/characters');
  }

  const character = useStore(state =>
    state.characters.find(character => characterId === character.id)
  );
  const deleteCharacter = useStore(state => state.deleteCharacter);

  return (
    <StyledOverlay>
      {character && (
        <StyledCard>
          <StyledCloseButton onClick={handleClose}>X</StyledCloseButton>
          <ul>
            <StyledName>{character.name}</StyledName>
            {character.image && (
              <li style={{ width: '50px' }}>
                <Image
                  src={character.image.url}
                  height={character.image.height}
                  width={character.image.width}
                />
              </li>
            )}
            <br />
            <li>{character.information}</li>
            <br />
            <li>Rpg-Name: {character.type}</li>
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
                setShowDetailedCharacter(false);
              }}
            >
              <img src={'/trash-can-outline.svg'} width="20px" /> Delete
            </button>
          </div>
        </StyledCard>
      )}
    </StyledOverlay>
  );
}

const StyledOverlay = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50px;
  left: 0;
  bottom: 0;
`;

const StyledCloseButton = styled.button`
  ${({ theme }) => css`
    font-size: ${theme.fonts.fontSizeSmall};
    background-color: ${theme.colors.button};
    box-shadow: ${theme.boxShadow.shadowLight};
  `};
  border: 1px solid black;
  width: 30px;
  margin: 20px;
  padding: 5px;
  border-radius: 999px;
`;

const StyledCard = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fonts.fontSizeSmall};
    background-image: ${theme.backgroundImage.paper};
    box-shadow: ${theme.boxShadow.shadowHeavy};
  `}
  display: flex;
  flex-direction: column;
  max-width: 350px;
  white-space: pre-line;
  word-break: break-word;
  margin: 10px;
  padding: 0;
  border-radius: 10px;
  overflow-y: auto;
  border: 1px solid black;
  max-height: 70vh;

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
        background-color: ${theme.colors.button};
        box-shadow: ${theme.boxShadow.shadowLight};
      `};
      border: 1px solid black;
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

  font-weight: 800;
`;
