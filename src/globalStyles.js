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

    &:hover {
      filter: brightness(75%);
      transition-duration: 500ms;
    }
  }

  table {
    border-collapse: collapse;
  }

  button {
    cursor: pointer;

    &:hover {
      filter: brightness(85%);
      transition-duration: 500ms;
    }
  }
`;

export default GlobalStyle;
