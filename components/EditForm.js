import styled, { css } from 'styled-components';
import { ButtonsEdit } from './Buttons';
import useStore from '../hooks/useStore';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function EditForm({ characterId }) {
  const findCharacter = useStore(state => state.findCharacter);
  const [inputName, setInputName] = useState(
    findCharacter(characterId)?.name ?? ''
  );
  const [inputType, setInputType] = useState(
    findCharacter(characterId)?.type ?? ''
  );
  const [inputInformation, setInputInformation] = useState(
    findCharacter(characterId)?.information ?? ''
  );
  const { push } = useRouter();
  const editCharacter = useStore(state => state.editCharacter);

  const [image, setImage] = useState(findCharacter(characterId)?.image ?? null);

  function submitForm(event) {
    event.preventDefault();
    editCharacter({
      id: characterId,
      name: inputName,
      type: inputType,
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
      <StyledInputField
        required
        type="text"
        value={inputType}
        name="type"
        maxLength={30}
        placeholder="RPG-Name"
        onChange={event => {
          setInputType(event.target.value);
        }}
      />
      <StyledImage>
        {image && (
          <Image src={image.url} height={image.height} width={image.width} />
        )}
      </StyledImage>

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
  margin: 10px;
  padding: 5px;
  position: relative;
`;

const StyledInputField = styled.input`
  ${({ theme }) => css`
    background-image: ${theme.backgroundImage.form};
    font-size: ${theme.fonts.fontSizeNormal};
    box-shadow: ${theme.boxShadow.shadowHeavy};
    border: ${theme.borders.dark};
  `}
  width: 50%;
  height: 30px;
  padding: 5px;
  border-radius: 10px;
`;

const StyledTextarea = styled.textarea`
  ${({ theme }) => css`
    background-image: ${theme.backgroundImage.form};
    font-size: ${theme.fonts.fontSizeNormal};
    box-shadow: ${theme.boxShadow.shadowHeavy};
    border: ${theme.borders.dark};
  `}
  resize: none;
  padding: 10px;
  border-radius: 10px;
`;

const StyledImage = styled.div`
  position: absolute;
  top: 10px;
  right: 30px;
  max-width: 70px;
`;
