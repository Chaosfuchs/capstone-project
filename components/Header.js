import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.cardfield};
  margin: 0;
  padding: 10px;
  background-color: #290363;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
`;
