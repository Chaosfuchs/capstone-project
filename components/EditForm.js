import styled, { css } from 'styled-components';
import { ButtonsEdit } from './Buttons';
import useStore from '../hooks/useStore';
import { useState } from 'react';

export default function AddForm({ characterId }) {
  const [inputName, setInputName] = useState(characterId);
  const [inputInformation, setInputInformation] = useState(characterId);

  const editCharacter = useStore(state => state.editCharacter);
  const toggleToast = useStore(state => state.toggleToast);

  function submitForm(event, character) {
    event.preventDefault();
    editCharacter(character);
    toggleToast(2, true);
    setTimeout(() => toggleToast(2, false), 3000);
  }

  return (
    <StyledFormContainer id="myForm" onSubmit={submitForm}>
      <StyledInputField
        required
        type="text"
        value={inputName}
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
        value={inputInformation}
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
