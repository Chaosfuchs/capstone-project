import styled, { css } from 'styled-components';

export function ButtonsForm() {
  return (
    <StyledButtonContainer>
      <button type="submit">Save</button>
      <button type="reset">Reset Form</button>
    </StyledButtonContainer>
  );
}

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 30px;
  margin: 5px;
  padding: 5px;

  button {
    ${({ theme }) => css`
      font-size: ${theme.fonts.fontSizeNormal};
      box-shadow: ${theme.boxShadow.shadowLight};
      background-color: ${theme.colors.button};
    `}
    width: 140px;
    height: 40px;
    border-radius: 10px;
    color: white;
  }
`;
