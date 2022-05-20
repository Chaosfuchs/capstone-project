import styled from 'styled-components';
import AddCharacterForm from '../components/addForm';
import { Title } from '../components/header';

export default function AddCharacter() {
  return (
    <>
      <Title>Create Character</Title>
      <AddCharacterForm />
    </>
  );
}
