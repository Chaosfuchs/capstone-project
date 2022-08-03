import { useSession, signIn, signOut } from 'next-auth/react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';

export default function LoginButton() {
  const { push } = useRouter();
  const { data: session } = useSession();

  if (session) {
    return (
      <Container>
        <p>Signed in as {session.user.email} </p>
        <StyledLoginButton
          onClick={() => {
            signOut();
            push('/');
          }}
        >
          Sign out
        </StyledLoginButton>
      </Container>
    );
  }
  return (
    <Container>
      <p>Not signed in</p>
      <StyledLoginButton
        onClick={() => {
          signIn();
          push('/home');
        }}
      >
        Sign in
      </StyledLoginButton>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => css`
    box-shadow: ${theme.boxShadow.shadowHeavy};
    background-image: ${theme.backgroundImage.paper};
  `};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
  margin: 10px;
  padding: 10px 15px;
  border-radius: 10px;
  max-width: 300px;
`;

const StyledLoginButton = styled.button`
  ${({ theme }) => css`
    font-size: ${theme.fonts.fontSizeButton};
    box-shadow: ${theme.boxShadow.shadowHeavy};
    background-color: ${theme.colors.button};
  `}
  border-radius: 10px;
  min-width: 80px;
  height: 50px;
  margin: 0;
  padding: 5px;
`;
