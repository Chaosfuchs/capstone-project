import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../components/GlobalStyles';
import Toast from '../components/Toasts';
import useHasHydrated from '../hooks/useHasHydrated';

function MyApp({ Component, pageProps }) {
  const isHydrated = useHasHydrated();
  return (
    <>
      {isHydrated && (
        <>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <Toast />
          </ThemeProvider>
        </>
      )}
    </>
  );
}

export default MyApp;
