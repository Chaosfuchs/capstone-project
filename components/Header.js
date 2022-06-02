import styled, { css } from 'styled-components';

export const Title = styled.span`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    color: ${theme.colors.primary};
    box-shadow: ${theme.boxShadow.shadowHeavy};
  `}
  text-align: center;
  font-size: 30px;
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
