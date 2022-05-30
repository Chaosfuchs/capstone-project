import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  return (
    <>
      <StyledNavbar>
        <Link passHref href="/">
          <StyledButtonNavbar isActive={router.pathname === '/'}>
            Home
          </StyledButtonNavbar>
        </Link>
        <Link passHref href="/create-character">
          <StyledButtonNavbar
            isActive={router.pathname === '/create-character'}
          >
            Create
          </StyledButtonNavbar>
        </Link>
        <Link passHref href="/characters">
          <StyledButtonNavbar isActive={router.pathname === '/characters'}>
            Characters
          </StyledButtonNavbar>
        </Link>
      </StyledNavbar>
    </>
  );
}

const StyledNavbar = styled.nav`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
  `}
  display: flex;
  position: fixed;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  height: 70px;
`;

const StyledButtonNavbar = styled.button`
  ${({ theme }) => css`
    font-size: ${theme.fonts.fontSizeButton};
  `}
  background-image: url(/wood.png);
  color: white;
  font-weight: 800;
  text-align: center;
  text-decoration: none;
  padding: 15px;
  margin: 5px;
  border-radius: 10px;
  border: 1px solid black;
  width: 130px;

  &:active {
    color: ${({ theme }) => theme.colors.button};
  }
  color: ${({ isActive }) => (isActive ? '#3AFD18' : 'white')};
`;
