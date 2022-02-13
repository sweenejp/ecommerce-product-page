import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, ::before, ::after {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Kumbh Sans', sans-serif;
  }

  img {
    display: block;
    width: 100%;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyles;
