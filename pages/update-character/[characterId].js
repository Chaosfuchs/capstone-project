import { Title } from '../../components/Header';
import styled, { css } from 'styled-components';
import Toast from '../../components/Toasts';
import EditForm from '../../components/EditForm';
import { useRouter } from 'next/router';

export default function AddCharacter() {
  const router = useRouter();
  const { characterId } = router.query;

  return (
    <Main>
      <Title>Update Character</Title>
      <EditForm characterId={characterId} />
      <Toast />
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
