import { Title } from '../components/Header';
import styled, { css } from 'styled-components';
import Toast from '../components/Toasts';
import AddForm from '../components/AddForm';
import Navbar from '../components/Navbar';

export default function AddCharacter() {
  return (
    <Main>
      <Title>Create Character</Title>
      <AddForm />
      <Toast />
      <Navbar />
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
