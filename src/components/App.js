import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalProvider } from '../context';
import GlobalStyles from '../GlobalStyles';
import { theme } from '../theme';
import Header from './Header/Header';
import Product from './Product/Product';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalProvider>
          <GlobalStyles />
          <Header />
          <Product />
        </GlobalProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
