import styled, { css } from 'styled-components';
import { ButtonsForm } from './Buttons';
import useStore from '../hooks/useStore';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function AddForm() {
  const [inputName, setInputName] = useState('');
  const [inputInformation, setInputInformation] = useState('');
  const addCharacter = useStore(state => state.addCharacter);

  const { push } = useRouter();

  function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('id', nanoid());
    const formValues = Object.fromEntries(formData);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    console.log(formValues);
    axios.post('/api/image', formValues, config);
    /*addCharacter(formValues);
    setInputName('');
    setInputInformation('');
    push('/characters'); 
    */
  }

  function handleReset(event) {
    event.preventDefault();
    setInputName('');
    setInputInformation('');
  }

  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadImage = event => {
    if (event.target.files && event.target.files[0]) {
      image = event.target.files[0];

      setImage(image);
      setCreateObjectURL(URL.createObjectURL(image));
    }
  };

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
        maxLength={30}
        placeholder="Name"
        onChange={event => {
          setInputName(event.target.value);
        }}
      />
      <StyledImageContainer>
        <img type="file" src={createObjectURL} />
        <input type="file" name="myImage" onChange={uploadImage} />
      </StyledImageContainer>
      <StyledTextarea
        required
        type="text"
        value={inputInformation}
        name="information"
        maxLength={3000}
        rows={10}
        placeholder="Write here some informations about your Character..."
        onChange={event => {
          setInputInformation(event.target.value);
        }}
      />
      <ButtonsForm />
    </StyledFormContainer>
  );
}

const StyledFormContainer = styled.form`
  display: grid;
  gap: 20px;
  margin: 0 10px;
  padding: 5px;

  div {
    display: flex;
    gap: 30px;
  }
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

const StyledImageContainer = styled.div`
  display: flex;
  flex-direction: column;

  img {
    position: fixed;
    top: 80px;
    right: 10%;
    width: 80px;
    border-radius: 10px;
  }
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
