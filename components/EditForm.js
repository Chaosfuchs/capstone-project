import styled, { css } from 'styled-components';
import { ButtonsEdit } from './Buttons';
import useStore from '../hooks/useStore';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function AddForm() {
  const [inputName, setInputName] = useState('');
  const [inputInformation, setInputInformation] = useState('');
  const editCharacter = useStore(state => state.editCharacter);
  const character = useStore(state => state.characters);
  const toggleToast = useStore(state => state.toggleToast);

  function submitForm(event, characters) {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('id', nanoid());
    const formValues = Object.fromEntries(formData);
    editCharacter(formValues);
    setInputName(characters.name);
    setInputInformation(characters.information);
    toggleToast(2, true);
    setTimeout(() => toggleToast(2, false), 3000);
  }

  return (
    <StyledFormContainer id="myForm" onSubmit={submitForm}>
      <StyledInputField
        required
        type="text"
        value={character.name}
        name="name"
        maxLength={30}
        placeholder="Name"
        onChange={event => {
          setInputName(event.target.value);
        }}
      />
      <StyledTextarea
        required
        type="text"
        value={character.information}
        name="information"
        maxLength={3000}
        rows={10}
        placeholder="Update your Character..."
        onChange={event => {
          setInputInformation(event.target.value);
        }}
      />
      <ButtonsEdit />
    </StyledFormContainer>
  );
}

const StyledFormContainer = styled.form`
  display: grid;
  gap: 20px;
  margin: 0 10px;
  padding: 5px;
`;

const StyledInputField = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.colors.card};
    font-size: ${theme.fonts.fontSizeNormal};
    box-shadow: ${theme.boxShadow.shadowNeon};
    border: ${theme.borders.neonBorder};
  `}
  width: 50%;
  height: 30px;
  padding: 5px;
  border-radius: 10px;
`;

const StyledTextarea = styled.textarea`
  ${({ theme }) => css`
    background-color: ${theme.colors.card};
    font-size: ${theme.fonts.fontSizeNormal};
    box-shadow: ${theme.boxShadow.shadowNeon};
    border: ${theme.borders.neonBorder};
  `}
  resize: none;
  padding: 10px;
  border-radius: 10px;
`;
