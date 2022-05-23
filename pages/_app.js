import { createGlobalStyle, ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Open Sans', sans-serif;;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    dark: '#201026',
    darkgreen: '#2C594C',
    green: '#02734A',
    lightgreen: '#038C3E',
    pastellgreen: '#77D9A1',
  },
  boxShadow: {
    grey: '5px 5px 5px lightgrey',
  },
  fonts: {
    fontSizeNormal: '20px',
  },
  borders: {
    purpleBorder: '3px solid #4C428C',
    darkBorder: '3px solid #201026',
  },
};
