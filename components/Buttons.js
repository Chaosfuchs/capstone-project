import styled from 'styled-components';

export default function Buttons() {
  return (
    <StyledButtonContainer>
      <button type="submit">Save</button>
      <button type="button">Reset Form</button>
    </StyledButtonContainer>
  );
}

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 30px;
  margin: 10px;
  padding: 5px;

  button {
    ${({ theme }) => `background-color: ${theme.colors.lightgreen};
    font-size: ${theme.fonts.fontSizeNormal};
    box-shadow: ${theme.boxShadow.grey};
    `}
    width: 140px;
    height: 40px;
    border-radius: 10px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.dark};
      color: white;
    }
  }
`;
