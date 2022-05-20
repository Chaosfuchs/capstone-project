import styled from 'styled-components';

export default function AddCharacterForm() {
  return (
    <StyledContainer>
      <StyledInputField
        type="text"
        maxLength={20}
        placeholder="Name"
      ></StyledInputField>
      <StyledTextarea
        type="text"
        maxLength={255}
        placeholder="Enter here your information...
        Attributes, Skills, Characteristics, Items, Character-Story, etc."
      ></StyledTextarea>
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
  margin: 10px;

  div {
    margin: 10px;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 30px;
  margin: 10px;
  padding: 5px;

  button {
    background-color: #038c8c;
    width: 40%;
    height: 40px;
    border-radius: 10px;
    font-size: 20px;
    box-shadow: 5px 5px 5px lightgrey;

    &:hover {
      background-color: #252140;
      color: white;
    }
  }
`;

const StyledInputField = styled.input`
  background-color: #04d99d;
  width: 50%;
  margin: 10px;
  height: 30px;
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border: 3px solid #03a678;
  border-radius: 10px;
  box-shadow: 5px 5px 5px lightgrey;
`;

const StyledTextarea = styled.textarea`
  background-color: #04d99d;
  resize: none;
  max-width: 100vw;
  margin: 10px;
  height: 200px;
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border: 3px solid #03a678;
  border-radius: 10px;
  box-shadow: 5px 5px 5px lightgrey;
`;
