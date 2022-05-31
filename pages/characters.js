import { Title } from '../components/Header';
import ShowCharacter from '../components/ShowCharacter';
import Navbar from '../components/Navbar';
import useStore from '../hooks/useStore';

export default function Characters() {
  const _hasHydrated = useStore(state => state._hasHydrated);
  console.log(_hasHydrated);
  return (
    <>
      <Title>My Characters</Title>
      {_hasHydrated && <ShowCharacter />}
      <Navbar />
    </>
  );
}
