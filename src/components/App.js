import React from 'react';
import { GlobalProvider } from '../context';
import GlobalStyles from '../GlobalStyles';
import Header from './Header';
import Product from './Product';

const App = () => {
  return (
    <>
      <GlobalProvider>
        <GlobalStyles />
        <Header />
        <Product />
      </GlobalProvider>
    </>
  );
};

export default App;
