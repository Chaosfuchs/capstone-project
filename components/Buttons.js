import styled from 'styled-components';

export default function Buttons() {
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
  margin: 10px;
  padding: 5px;

  button {
    ${({ theme }) => `
    font-size: ${theme.fonts.fontSizeNormal};
    box-shadow: ${theme.boxShadow.shadow};
    `}
    background-image: url(/wood.png);
    width: 140px;
    height: 40px;
    border-radius: 10px;
    color: white;

    &:hover {
      color: ${({ theme }) => theme.colors.fourth};
    }
  }
`;
