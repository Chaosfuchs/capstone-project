import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Title } from '../../components/Header';
import DetailedCharacterCard from '../../components/DetailedCharacter';

export default function DetailedCharacter() {
  const router = useRouter();
  const { characterId } = router.query;

  return (
    <Main>
      <Title>
        <img src={'/LogoDragon.svg'} width="35px" />
        My Characters
      </Title>
      <DetailedCharacterCard characterId={characterId} />
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
