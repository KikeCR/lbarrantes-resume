import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #fafafa;
  }
`;

export default GlobalStyle;
