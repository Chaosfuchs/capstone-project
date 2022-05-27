import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.fontSizeBig};
  color: ${({ theme }) => theme.colors.primary};
`;
