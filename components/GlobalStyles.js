import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Open Sans', sans-serif;;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const theme = {
  colors: {
    primary: '#201026',
    secondary: '#2C594C',
    button: '#02734A',
    background: '#038C3E',
    cardfield: '#77D9A1',
  },
  boxShadow: {
    shadowHeavy: '5px 5px 5px #2C594C',
    shadowLight: '3px 3px 3px grey',
  },
  fonts: {
    fontSizeNormal: '20px',
    fontSizeBig: '40px',
  },
  borders: {
    purpleBorder: '3px solid #4C428C',
    darkBorder: '3px solid #201026',
  },
};
