import { Title } from '../components/Header';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Title>Welcome to RPG 4-you</Title>
      <MainContainer>
        <p>This is a Testcard.</p>
        <p>If you can you read this? You should know here will be more soon.</p>
      </MainContainer>
      <Navbar />
    </>
  );
}
const MainContainer = styled.div`
  background-color: beige;
  width: 300px;
  margin: 20px;
  padding: 10px;
  height: 100px;
  border-radius: 10px;
  border: 2px solid black;
`;
