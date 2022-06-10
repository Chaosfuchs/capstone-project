import styled, { css } from 'styled-components';
import { ButtonsForm } from './Buttons';
import useStore from '../hooks/useStore';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useRouter } from 'next/router';
import axios from 'axios';
import Image from 'next/image';

export default function AddForm() {
  const [inputName, setInputName] = useState('');
  const [inputType, setInputType] = useState('');
  const [inputInformation, setInputInformation] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const addCharacter = useStore(state => state.addCharacter);

  const { push } = useRouter();

  async function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('id', nanoid());
    const { file, ...formValues } = Object.fromEntries(formData);

    try {
      if (file.name) {
        const response = await axios.post(
          '/api/upload',
          { file },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        addCharacter({
          ...formValues,
          image: {
            url: response.data.url,
            height: response.data.height,
            width: response.data.width,
          },
        });
      } else {
        addCharacter(formValues);
      }
      setInputName('');
      setInputInformation('');
      push('/characters');
    } catch (error) {
      setError(error);
    }
  }

  function handleReset(event) {
    event.preventDefault();
    setInputName('');
    setInputType('');
    setInputInformation('');
  }

  return (
    <StyledFormContainer
      id="myForm"
      onSubmit={submitForm}
      onReset={handleReset}
    >
      <div>
        {data && (
          <>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            <pre>{JSON.stringify(data, null, 4)}</pre>
          </>
        )}
      </div>
      {error && <div>{error.message}</div>}

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
        <input type="file" name="file" />
      </StyledImageContainer>

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
    background-color: ${theme.colors.background};
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
    background-color: ${theme.colors.background};
    font-size: ${theme.fonts.fontSizeNormal};
    box-shadow: ${theme.boxShadow.shadowNeon};
    border: ${theme.borders.neonBorder};
  `}
  resize: none;
  padding: 10px;
  border-radius: 10px;
`;
