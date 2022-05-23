import { Title } from '../components/header';
import AddForm from '../components/addForm';
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
