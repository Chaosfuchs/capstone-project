import { Title } from '../components/Header';
import styled, { css } from 'styled-components';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Title>Welcome to RPG 4-you</Title>
      <InfoContainer>
        <p>This is a Testcard.</p>
        <p>If you can you read this? You should know here will be more soon.</p>
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
    </>
  );
}
const InfoContainer = styled.div`
  background-color: beige;
  width: 300px;
  margin: 20px;
  padding: 10px;
  height: 100px;
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
      background-color: ${theme.colors.cardfield};
      font-size: ${theme.fonts.fontSizeNormal};
    `}
    border-radius: 15px;
    padding: 50px;
  }
`;
