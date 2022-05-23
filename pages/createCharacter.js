import { Title } from '../components/Header';
import AddForm from '../components/AddForm';
import ShowCharacter from '../components/ShowCharacter';

export default function AddCharacter() {
  return (
    <>
      <Title>Create Character</Title>
      <AddForm />
      <ShowCharacter />
    </>
  );
}
