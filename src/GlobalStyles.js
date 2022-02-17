import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, ::before, ::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Kumbh Sans', sans-serif;
  }

  img {
    display: block;
    width: 100%;
  }
  
  a {
    text-decoration: none;
  }

  button {
    border: none;
    display: block;
    background-color: transparent;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyles;
