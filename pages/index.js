import styled, { css } from 'styled-components';
import { Title } from '../components/Header';
import LoginButton from '../components/LoginButton';

export default function Index() {
  return (
    <Main>
      <Title>
        <img src={'/LogoDragon.svg'} width="35px" />
        RPG Sheet-Creator
      </Title>
      <LoginSection>
        <LoginButton></LoginButton>
      </LoginSection>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 10px;
  width: 350px;
`;
