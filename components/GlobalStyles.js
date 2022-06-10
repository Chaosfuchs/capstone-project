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
    button: '#2F97C1',
    background: '#AEFFFF',
    toast: '#9AFFFB',
    characterName: '#2F97C1',
  },

  boxShadow: {
    shadowLight: '5px 5px 10px grey',
    shadowHeavy: '5px 7px 10px black',
    shadowNeon: '5px 5px 10px #00FFFF',
  },
  fonts: {
    fontSizeButton: '1rem',
    fontsSizeSmall: '0.8rem',
    fontSizeNormal: '1.2rem',
    fontSizeBig: '2rem',
  },
  borders: {
    purpleBorder: '3px solid #4C428C',
    darkBorder: '3px solid #201026',
    neonBorder: '3px solid #2AFFFF',
  },
  backgroundImage: {
    paper: 'url(/old-paper.jpeg)',
    stars: 'url(/background.jpeg)',
    dice: 'url(/dice-texture2.png)',
  },
};
