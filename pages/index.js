import { Title } from '../components/Header';
import styled, { css } from 'styled-components';
import Navbar from '../components/Navbar';
import Dice from '../components/Dices';

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
          <p>Create: create your Character-Sheet.</p>
          <p>
            Characters: see your created characters where you can edit or delete
            it
          </p>
          <p>Here you can roll a dice for your Roleplay-Round.</p>
        </InfoContainer>
        <Dice />
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
