import useStore from '../hooks/useStore';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function DetailedCharacterCard({ characterId }) {
  const { push } = useRouter();

  function handleClose(event) {
    event.stopPropagation();
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
            <li>{character.information}</li>
            {character.image && (
              <StyledImage>
                <Image
                  src={character.image.url}
                  height={character.image.height}
                  width={character.image.width}
                />
              </StyledImage>
            )}
            <li>Rpg-Name: {character.type}</li>
          </ul>
          <div>
            <Link passHref href={`/update-character/${character.id}`}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src={'/pencil-outline.svg'} width="20px" /> Edit
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              onClick={() => {
                deleteCharacter(character.id);
                push('/characters');
              }}
            >
              <img src={'/trash-can-outline.svg'} width="20px" /> Delete
            </motion.button>
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
  margin: 10px 0px 10px 10px;
  padding: 5px;
  border-radius: 999px;
`;

const StyledImage = styled.li`
  width: 150px;
  padding: 0;
  margin: 0;
`;

const StyledCard = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fonts.fontSizeSmall};
    background-image: ${theme.backgroundImage.paper};
    box-shadow: ${theme.boxShadow.shadowHeavy};
  `}
  display: grid;
  grid-template-rows: 50px 1fr 50px;
  width: 350px;
  white-space: pre-line;
  word-break: break-word;
  margin: 10px;
  padding: 0;
  border-radius: 10px;
  overflow-y: auto;
  max-height: 70vh;

  ul {
    padding: 10px;
    margin: 5px;
    list-style: none;
    overflow-y: auto;

    li {
      padding: 10px;
    }
  }

  @media (min-width: 400px) {
    min-width: 350px;
    height: 100%;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    height: 40px;

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
      height: 30px;
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
  font-size: 2rem;
  font-weight: 800;
`;
