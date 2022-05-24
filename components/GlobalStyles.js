import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Open Sans', sans-serif;;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {

  }

  a {
    
  }
`;

export const theme = {
  colors: {
    primary: '#201026',
    secondary: '#2C594C',
    third: '#02734A',
    fourth: '#038C3E',
    fifth: '#77D9A1',
  },
  boxShadow: {
    shadow: '5px 5px 5px #2C594C',
  },
  fonts: {
    fontSizeNormal: '20px',
  },
  borders: {
    purpleBorder: '3px solid #4C428C',
    darkBorder: '3px solid #201026',
  },
};
