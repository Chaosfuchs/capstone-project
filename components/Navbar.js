import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  return (
    <>
      <StyledNavbar>
        <Link passHref href="/">
          <StyledLinkNavbar isActive={router.pathname === '/'}>
            Home
          </StyledLinkNavbar>
        </Link>
        <Link passHref href="/create-character">
          <StyledLinkNavbar isActive={router.pathname === '/create-character'}>
            Create
          </StyledLinkNavbar>
        </Link>
        <Link passHref href="/characters">
          <StyledLinkNavbar isActive={router.pathname === '/characters'}>
            Characters
          </StyledLinkNavbar>
        </Link>
      </StyledNavbar>
    </>
  );
}

const StyledNavbar = styled.nav`
  ${({ theme }) => css`
    background-image: ${theme.backgroundImage.dice};
  `}
  display: flex;
  position: fixed;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  height: 60px;
`;

const StyledLinkNavbar = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.fonts.fontSizeButton};
  `}
  color: ${({ isActive }) => (isActive ? '#2F97C1' : 'white')};
  box-shadow: ${({ isActive }) =>
    isActive ? '5px 5px 10px darkblue' : 'none'};
  background-image: url(/wood.png);
  text-align: center;
  text-decoration: none;
  padding: 15px;
  margin: 5px;
  border-radius: 15px;
  border: 1px solid black;
  width: 130px;
`;
