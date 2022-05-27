import { Title } from '../components/Header';
import ShowCharacter from '../components/ShowCharacter';
import Link from 'next/link';

export default function Characters() {
  return (
    <>
      <Title>My Characters</Title>
      <Link passHref href="/create-character">
        <a>Back to Create Character</a>
      </Link>
      <ShowCharacter />
    </>
  );
}
