import { Title } from '../components/Header';
import AddForm from '../components/AddForm';
import ShowCharacter from '../components/ShowCharacter';
import Link from 'next/link';

export default function AddCharacter() {
  return (
    <>
      <Title>Create Character</Title>
      <AddForm />
      <ShowCharacter />
      <Link passHref href="/characters">
        <button as="a">Show Characters</button>
      </Link>
    </>
  );
}
