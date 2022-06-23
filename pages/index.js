import styled, { css } from 'styled-components';
import { Title } from '../components/Header';
import Navbar from '../components/Navbar';
import Dice from '../components/Dices';
import LoginButton from '../components/LoginButton';

export default function Home() {
  return (
    <Main>
      <Title>
        <img src={'/LogoDragon.svg'} width="35px" />
        RPG Sheet-Creator
      </Title>
      <HomeSection>
        <LoginButton></LoginButton>
        <InfoContainer>
          <h3>Welcome to RPG Sheet-Creator!</h3>
          <p>Create: Create your Character-Sheet.</p>
          <p>
            Characters: See your created characters where you can edit or delete
            it
          </p>
          <p>Here you can roll a dice for your Roleplay-Round.</p>
        </InfoContainer>
        <Dice />
      </HomeSection>
      <Navbar />
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 10px;
  width: 350px;
`;

const InfoContainer = styled.div`
  ${({ theme }) => css`
    box-shadow: ${theme.boxShadow.shadowHeavy};
    background-image: ${theme.backgroundImage.paper};
  `};
  margin: 10px;
  padding: 0px 10px;
  border-radius: 10px;
`;
