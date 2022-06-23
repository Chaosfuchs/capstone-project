import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../components/GlobalStyles';
import useStore from '../hooks/useStore';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    useStore.getState().loadCharacters();
  }, []);

  return (
    <>
      <GlobalStyle />
      <SessionProvider session={session}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
