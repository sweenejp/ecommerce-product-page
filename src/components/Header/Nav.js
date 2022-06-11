import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <a href="/">
          <li>Collections</li>
        </a>
        <a href="/">
          <li>Men</li>
        </a>
        <a href="/">
          <li>Women</li>
        </a>
        <a href="/">
          <li>About</li>
        </a>
        <a href="/">
          <li>Contact</li>
        </a>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  li {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.grayBlue};
    position: relative;

    &:hover {
      color: ${({ theme }) => theme.colors.darkGrayBlue};
    }
  }

  @media ${({ theme }) => theme.mediaQueries.minLarge} {
    ul {
      flex-direction: row;
      align-items: center;
    }

    li::after {
      content: '';
      position: absolute;
      left: 0;
      height: 3px;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.orange};
      top: 60px;
      transform: scaleX(0);
      transition: transform 200ms ease-in-out;
    }

    li:hover::after {
      transform: scaleX(1);
    }
  }
`;

export default Nav;
