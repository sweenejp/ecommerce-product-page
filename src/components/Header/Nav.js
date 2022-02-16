import React from 'react';
import { StyledNav } from './styles';

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <a href='/'>
          <li>Collections</li>
        </a>
        <a href='/'>
          <li>Men</li>
        </a>
        <a href='/'>
          <li>Women</li>
        </a>
        <a href='/'>
          <li>About</li>
        </a>
        <a href='/'>
          <li>Contact</li>
        </a>
      </ul>
    </StyledNav>
  );
};

export default Nav;
