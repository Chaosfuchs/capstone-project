import styled from 'styled-components';
import Buttons from './Buttons';

export default function AddForm() {
  return (
    <StyledFormContainer>
      <StyledInputField
        required
        type="text"
        name="nameInput"
        maxLength={20}
        placeholder="Name"
      />
      <StyledTextarea
        required
        type="text"
        name="informationInput"
        maxLength={255}
        rows={10}
        placeholder="Enter here your information...
        Attributes, Skills, Characteristics, Items, Character-Story, etc."
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
  ${({ theme }) => `background-color:  ${theme.colors.pastellgreen};
  font-size: ${theme.fonts.fontSizeNormal};
  box-shadow: ${theme.boxShadow.grey};`}
  width: 50%;
  height: 40px;
  padding: 5px;
  border-radius: 10px;
`;

const StyledTextarea = styled.textarea`
  ${({ theme }) => `background-color: ${theme.colors.pastellgreen};
  font-size: ${theme.fonts.fontSizeNormal};
  box-shadow: ${theme.boxShadow.grey};`}
  resize: none;
  width: unset;
  padding: 5px;
  border-radius: 10px;
`;
