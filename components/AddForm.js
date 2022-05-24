import styled from 'styled-components';
import Buttons from './Buttons';
import useStore from '../hooks/useStore';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function AddForm() {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const addCharacter = useStore(state => state.addCharacter);

  function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('id', nanoid());
    const formValues = Object.fromEntries(formData);
    addCharacter(formValues);
    setInputValue1('');
    setInputValue2('');
  }

  function handleReset(event) {
    event.preventDefault();
    setInputValue1('');
    setInputValue2('');
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
        value={inputValue1}
        name="name"
        maxLength={20}
        placeholder="Name"
        onChange={event => {
          setInputValue1(event.target.value);
        }}
      />
      <StyledTextarea
        required
        type="text"
        value={inputValue2}
        name="information"
        maxLength={255}
        rows={10}
        placeholder="Enter here your information...
        Attributes, Skills, Characteristics, Items, Character-Story, etc."
        onChange={event => {
          setInputValue2(event.target.value);
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
  ${({ theme }) => `background-color:  ${theme.colors.fivth};
  font-size: ${theme.fonts.fontSizeNormal};
  box-shadow: ${theme.boxShadow.grey};`}
  width: 50%;
  height: 40px;
  padding: 5px;
  border-radius: 10px;
`;

const StyledTextarea = styled.textarea`
  ${({ theme }) => `background-color: ${theme.colors.fivth};
  font-size: ${theme.fonts.fontSizeNormal};
  box-shadow: ${theme.boxShadow.grey};`}
  resize: none;
  width: unset;
  padding: 5px;
  border-radius: 10px;
`;
