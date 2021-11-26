import { createGlobalStyle } from "styled-components";
import background from "../assets/background.png";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;  // 14px
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;  // 13px
    }
  }

  html {
    background: url(${background}) no-repeat center center fixed;
    background-size: cover;
    height: 100%;
    overflow: hidden;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;
  }

  body, input, textarea, button, span {
    font: 500 1rem Inter, sans-serif;
    color: #0e2138;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: Inter, sans-serif;
    color: #0e2138;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }
`;
