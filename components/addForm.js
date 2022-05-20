import styled from 'styled-components';

export default function AddCharacterForm() {
  return (
    <StyledContainer>
      <StyledInputField></StyledInputField>
      <StyledTextarea></StyledTextarea>
      <StyledButtonContainer>
        <button>Save</button>
        <button>Reset Form</button>
      </StyledButtonContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: grid;
  gap: 5px;
  margin: 20px;
  padding: 10px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
  margin: 10px;
  padding: 5px;

  button {
    width: 50%;
    height: 40px;
    border-radius: 10px;
  }
`;

const StyledInputField = styled.input`
  width: 40%;
  margin: 10px;
  height: 30px;
`;

const StyledTextarea = styled.textarea`
  resize: none;
  max-width: 100vw;
  margin: 10px;
  height: 200px;
`;
