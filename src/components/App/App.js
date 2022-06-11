import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { GlobalProvider } from '../../context';
import GlobalStyles from '../../GlobalStyles';
import { theme } from '../../theme';
import Header from '../Header/Header';
import Product from '../Product/Product';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalProvider>
          <Wrapper>
            <GlobalStyles />
            <Header />
            <Product />
          </Wrapper>
        </GlobalProvider>
      </ThemeProvider>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  @media ${({ theme }) => theme.mediaQueries.minLarge} {
    max-width: 1200px;
    position: relative;
  }
`;

export default App;
