import { Title } from '../components/Header';
import styled, { css } from 'styled-components';
import Toast from '../components/Toasts';
import EditForm from '../components/EditForm';

export default function AddCharacter() {
  return (
    <Main>
      <Title>Update Character</Title>
      <EditForm />
      <Toast />
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
