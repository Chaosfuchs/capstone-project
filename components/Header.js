import styled from 'styled-components';

export const Title = styled.h1`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-size: 30px;
  margin: 0;
  padding: 10px;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
`;
