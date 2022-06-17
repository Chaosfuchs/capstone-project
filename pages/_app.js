import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../components/GlobalStyles';
import useStore from '../hooks/useStore';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    useStore.getState().loadCharacters();
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
