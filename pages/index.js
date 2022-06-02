import { Title } from '../components/Header';
import styled, { css } from 'styled-components';
import Navbar from '../components/Navbar';
import Dices from '../components/Dices';
import Link from 'next/link';

export default function Home() {
  return (
    <Main>
      <Title>
        <img src={'/LogoDragon.svg'} width="35px" />
        RPG Sheet-Creator
      </Title>
      <HomeContainer>
        <InfoContainer>
          <h3>Welcome to RPG Sheet-Creator!</h3>
          <p>
            Update-News: <br />
            You can create a Character and can write whatever you want. You can
            edit it and also delete it. Have fun to try out! :) The Buttons in
            the Homepage will be replaced in next time with the special new
            feature! There will be a Dice soon!
          </p>
        </InfoContainer>
        <Dices />
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
  margin: 10px;
  padding: 0px 10px;
  border-radius: 10px;
  border: 2px solid black;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  gap: 10px;
  width: 350px;

  a {
    ${({ theme }) => css`
      background-color: ${theme.colors.card};
      font-size: ${theme.fonts.fontSizeNormal};
      box-shadow: ${theme.boxShadow.shadowHeavy};
    `}
    color: black;
    text-align: center;
    text-decoration: none;
    border-radius: 15px;
    padding: 50px;
  }
`;
