import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../components/GlobalStyles';
import Toast from '../components/toasts';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <Toast />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
