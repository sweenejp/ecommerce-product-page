import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const LargeNav = () => {
  return (
    <SLargeNav>
      <Nav />
    </SLargeNav>
  );
};

const SLargeNav = styled.div`
  display: none;

  @media ${({ theme }) => theme.mediaQueries.minLarge} {
    display: block;
  }
`;

export default LargeNav;
