import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Title } from '../../components/Header';
import Toast from '../../components/Toasts';
import EditForm from '../../components/EditForm';

export default function AddCharacter() {
  const router = useRouter();
  const { characterId } = router.query;

  return (
    <Main>
      <Title>
        <img src={'/LogoDragon.svg'} width="35px" />
        Update Character
      </Title>
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
