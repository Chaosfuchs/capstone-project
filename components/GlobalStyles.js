import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
  * {
  font-family: 'Open Sans', sans-serif;
  }
  
  body {
    background-image: url(/map.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    margin: 70px 10px;
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
    card: '#77D9A1',
  },
  boxShadow: {
    shadowLight: '5px 5px 10px grey',
    shadowHeavy: '5px 5px 10px black',
    shadowNeon: '5px 5px 10px #39ff14',
  },
  fonts: {
    fontSizeButton: '15px',
    fontSizeNormal: '20px',
    fontSizeBig: '40px',
  },
  borders: {
    purpleBorder: '3px solid #4C428C',
    darkBorder: '3px solid #201026',
    neonBorder: '3px solid #39ff14',
  },
  backgroundImage: {
    paper: 'url(/old-paper.jpeg)',
  },
};
