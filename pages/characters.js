import { Title } from '../components/Header';
import ShowCharacter from '../components/ShowCharacter';
import Link from 'next/link';

export default function Characters() {
  return (
    <>
      <Title>My Characters</Title>
      <ShowCharacter />
      <Link passHref href="/createCharacter">
        <button as="a">Back to Create Character</button>
      </Link>
    </>
  );
}
