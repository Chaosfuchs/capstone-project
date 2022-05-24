import { Title } from '../components/Header';
import AddForm from '../components/AddForm';
import Link from 'next/link';

export default function AddCharacter() {
  return (
    <>
      <Title>Create Character</Title>
      <AddForm />
      <Link passHref href="/characters">
        <a>Show Characters</a>
      </Link>
    </>
  );
}
