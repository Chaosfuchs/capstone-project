import styled, { css } from 'styled-components';
import Link from 'next/link';

export function ButtonsForm() {
  return (
    <StyledButtonContainer>
      <button type="submit">Save</button>
      <button type="reset">Reset Form</button>
    </StyledButtonContainer>
  );
}

export function ButtonsEdit() {
  return (
    <StyledButtonContainer>
      <button type="submit">Update</button>
      <Link passHref href="/characters">
        <button>Cancel</button>
      </Link>
    </StyledButtonContainer>
  );
}

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
  margin: 5px;
  padding: 5px;

  button {
    ${({ theme }) => css`
      font-size: ${theme.fonts.fontSizeButton};
      box-shadow: ${theme.boxShadow.shadowHeavy};
      background-color: ${theme.colors.button};
    `}
    width: 140px;
    height: 50px;
    border-radius: 10px;
    color: white;
  }
`;
