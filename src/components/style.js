import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0px;
    padding: 0px;
    color: #fff;
  }

  h3 {
    width: 100%;
    color: #0d468a;
    font: bold;
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    .app {
        width: 1280px;
    }
  }
  @media (min-width: 1281px) {
    .app {
        min-width: 1280px;
    }
  }
`;

export default GlobalStyle;
