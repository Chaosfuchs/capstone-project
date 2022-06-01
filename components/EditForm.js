import styled, { css } from 'styled-components';
import { ButtonsEdit } from './Buttons';
import useStore from '../hooks/useStore';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AddForm({ characterId }) {
  const findCharacter = useStore(state => state.findCharacter);
  const [inputName, setInputName] = useState(
    findCharacter(characterId)?.name ?? ''
  );
  const [inputInformation, setInputInformation] = useState(
    findCharacter(characterId)?.information ?? ''
  );

  const { push } = useRouter();
  const editCharacter = useStore(state => state.editCharacter);

  function submitForm(event) {
    event.preventDefault();
    editCharacter({
      id: characterId,
      name: inputName,
      information: inputInformation,
    });
    push('/characters');
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
