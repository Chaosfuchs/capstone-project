import styled, { css } from 'styled-components';
import Buttons from './Buttons';
import useStore from '../hooks/useStore';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function AddForm() {
  const [inputName, setInputName] = useState('');
  const [inputInformation, setInputInformation] = useState('');
  const addCharacter = useStore(state => state.addCharacter);
  const toggleToast = useStore(state => state.toggleToast);

  function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('id', nanoid());
    const formValues = Object.fromEntries(formData);
    addCharacter(formValues);
    setInputName('');
    setInputInformation('');
    toggleToast(1, true);
    setTimeout(() => toggleToast(1, false), 3000);
  }

  function handleReset(event) {
    event.preventDefault();
    setInputName('');
    setInputInformation('');
  }

  return (
    <StyledFormContainer
      id="myForm"
      onSubmit={submitForm}
      onReset={handleReset}
    >
      <StyledInputField
        required
        type="text"
        value={inputName}
        name="name"
        maxLength={20}
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
        placeholder="Enter here your information...
        Attributes, Skills, Characteristics, Items, Character-Story, more..."
        onChange={event => {
          setInputInformation(event.target.value);
        }}
      />
      <Buttons />
    </StyledFormContainer>
  );
}

const StyledFormContainer = styled.form`
  display: grid;
  gap: 20px;
  margin: 10px;
  padding: 10px;
`;

const StyledInputField = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.colors.fifth};
    font-size: ${theme.fonts.fontSizeNormal};
    box-shadow: ${theme.boxShadow.shadow};
  `}
  width: 50%;
  height: 40px;
  padding: 5px;
  border-radius: 10px;
`;

const StyledTextarea = styled.textarea`
  ${({ theme }) => css`
    background-color: ${theme.colors.fifth};
    font-size: ${theme.fonts.fontSizeNormal};
    box-shadow: ${theme.boxShadow.shadow};
  `}
  resize: none;
  width: unset;
  padding: 5px;
  border-radius: 10px;
`;
