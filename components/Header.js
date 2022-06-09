import styled, { css } from 'styled-components';

export const Title = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fonts.fontSizeBig};
    background-image: ${theme.backgroundImage.dice};
    color: ${theme.colors.primary};
    box-shadow: ${theme.boxShadow.shadowHeavy};
  `}
  color: white;
  border-radius: 0 0 30px 30px;
  text-align: center;
  margin: 0;
  padding: 10px;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;

  img {
    position: fixed;
    left: 0;
    top: 0;
    margin: 5px;
    padding: 5px;
  }
`;
