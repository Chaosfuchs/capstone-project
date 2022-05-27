import styled, { css } from 'styled-components';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <StyledNavbar>
        <Link passHref href="/">
          <StyledButtonNavbar as="a">Home</StyledButtonNavbar>
        </Link>
        <Link passHref href="/create-character">
          <StyledButtonNavbar as="a">Create</StyledButtonNavbar>
        </Link>
        <Link passHref href="/characters">
          <StyledButtonNavbar as="a">Characters</StyledButtonNavbar>
        </Link>
      </StyledNavbar>
    </>
  );
}

const StyledNavbar = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #290363;
  z-index: 0;
  height: 70px;
`;

const StyledButtonNavbar = styled.button`
  background-image: url(/wood.png);
  color: white;
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  text-decoration: none;
  padding: 15px;
  margin: 5px;
  border-radius: 10px;
  border: 1px solid black;
  width: 130px;
`;
