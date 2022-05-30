import { Title } from '../components/Header';
import styled, { css } from 'styled-components';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <Main>
      <Title>RPG Sheet-Creator</Title>
      <InfoContainer>
        <h3>Welcome to RPG Sheet-Creator!</h3>
        <p>Update-News:</p>
        <p>Soon it's possible to keep saved Characters after refresh.</p>
      </InfoContainer>
      <HomeContainer>
        <Link passHref href="/create-character">
          <button type="radio">Create Character</button>
        </Link>
        <Link passHref href="/characters">
          <button type="radio">Characters</button>
        </Link>
      </HomeContainer>
      <Navbar />
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoContainer = styled.div`
  ${({ theme }) => css`
    box-shadow: ${theme.boxShadow.shadowHeavy};
    background-image: ${theme.backgroundImage.paper};
  `};
  width: 300px;
  margin: 15px;
  padding: 0px 10px;
  border-radius: 10px;
  border: 2px solid black;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  gap: 20px;

  button {
    ${({ theme }) => css`
      background-color: ${theme.colors.card};
      font-size: ${theme.fonts.fontSizeNormal};
      box-shadow: ${theme.boxShadow.shadowHeavy};
    `}
    border-radius: 15px;
    padding: 50px;
  }
`;
