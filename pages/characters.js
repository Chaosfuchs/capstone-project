import { Title } from '../components/Header';
import ShowCharacter from '../components/ShowCharacter';
import Link from 'next/link';

export default function Characters() {
  return (
    <>
      <Title>My Characters</Title>
      <ShowCharacter />
      <Link passHref href="/createCharacter">
        <a>Back to Create Character</a>
      </Link>
    </>
  );
}
