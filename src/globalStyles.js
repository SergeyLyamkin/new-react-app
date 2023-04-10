import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    box-sizing: border-box;
    color: #2986cc;
    background-color: #add8e6;
  }

  a {
    text-decoration: none;
    color: #2986cc;
  }

  table {
    border-collapse: collapse;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
