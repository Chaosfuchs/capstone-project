import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    color: ${theme.colors.primary};
  `}
  box-shadow: 5px 5px 20px black;
  text-align: center;
  font-size: 30px;
  margin: 0;
  padding: 10px;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
`;
