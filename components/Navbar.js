import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  return (
    <>
      <StyledNavbar>
        <Link passHref href="/">
          <StyledLink isActive={router.pathname === '/'}>Home</StyledLink>
        </Link>
        <Link passHref href="/create-character">
          <StyledLink isActive={router.pathname === '/create-character'}>
            Create
          </StyledLink>
        </Link>
        <Link passHref href="/characters">
          <StyledLink isActive={router.pathname === '/characters'}>
            Characters
          </StyledLink>
        </Link>
      </StyledNavbar>
    </>
  );
}

const StyledNavbar = styled.nav`
  ${({ theme }) => css`
    background-image: ${theme.gradient.layout};
  `}
  display: flex;
  position: fixed;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  height: 70px;
  border-radius: 20px 20px 0 0;
`;

const StyledLink = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.fonts.fontSizeNormal};
    background-image: ${theme.backgroundImage.wood1};
  `}
  color: ${({ isActive }) => (isActive ? '#8FF0F5' : 'white')};
  box-shadow: ${({ isActive }) => (isActive ? '5px 5px 10px #436066' : 'none')};
  font-family: 'Joan', serif;
  text-align: center;
  text-decoration: none;
  padding: 10px;
  margin: 5px;
  border-radius: 15px;
  border: 1px solid black;
  width: 100px;
`;
