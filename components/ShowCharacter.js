import useStore from '../hooks/useStore';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import DetailedCharacterCard from '../pages/detailed-character/[characterId]';

export default function ShowCharacter() {
  const characters = useStore(state => state.characters);
  const [character, setCharacter] = useState(null);
  const [showDetailedCharacter, setShowDetailedCharacter] = useState(false);

  const { push } = useRouter();

  return (
    <Main>
      {showDetailedCharacter && <DetailedCharacterCard character={character} />}
      {characters.map(character => (
        <StyledCard
          key={character.id}
          onClick={() => {
            setShowDetailedCharacter(true);
            setCharacter(character);
            push(`/detailed-character/${character.id}`);
          }}
        >
          <ul>
            <div>
              <StyledName>{character.name}</StyledName>
              {character.image && (
                <StyledImage>
                  <Image
                    src={character.image.url}
                    height={character.image.height}
                    width={character.image.width}
                  />
                </StyledImage>
              )}
            </div>
            <li>{character.type}</li>
          </ul>
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
    box-shadow: ${theme.boxShadow.shadowHeavy};
  `}
  display: flex;
  flex-direction: column;
  max-width: 350px;
  white-space: pre-line;
  word-break: break-word;
  margin: 10px 10px 30px;
  padding: 0;
  border-radius: 10px;
  overflow-y: auto;
  max-height: 80vh;

  ul {
    padding: 10px;
    margin: 5px;
    list-style: none;

    li {
      margin: 5px;
    }

    div {
      padding: 0;
    }
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

const StyledImage = styled.li`
  width: 50px;
`;

const StyledName = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.characterName};
    font-size: ${theme.fonts.fontSizeNormal};
  `};

  font-weight: 800;
`;
