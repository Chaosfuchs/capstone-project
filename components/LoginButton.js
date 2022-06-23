import { useSession, signIn, signOut } from 'next-auth/react';
import styled, { css } from 'styled-components';

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <Container>
        <p>Signed in as {session.user.email} </p>
        <StyledLoginButton onClick={() => signOut()}>
          Sign out
        </StyledLoginButton>
      </Container>
    );
  }
  return (
    <Container>
      <p>Not signed in</p>
      <StyledLoginButton onClick={() => signIn()}>Sign in</StyledLoginButton>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => css`
    box-shadow: ${theme.boxShadow.shadowHeavy};
    background-image: ${theme.backgroundImage.paper};
  `};
  margin: 10px;
  padding: 0 30px 15px 30px;
  border-radius: 10px;
  max-width: 300px;

  p {
    font-weight: 800;
    letter-spacing: 2px;
  }
`;

const StyledLoginButton = styled.button`
  ${({ theme }) => css`
    font-size: ${theme.fonts.fontSizeButton};
    box-shadow: ${theme.boxShadow.shadowHeavy};
    background-color: ${theme.colors.button};
  `}
  border-radius: 10px;
  width: 100px;
  margin: 0;
  padding: 5px;
`;
