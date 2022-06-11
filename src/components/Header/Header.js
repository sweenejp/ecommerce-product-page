import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { useGlobalContext } from '../../context';
import useWindowSize from '../useWindowSize';
import Cart from './Cart';
import MobileMenu from './MobileMenu';
import MobileMenuButton from './MobileMenuButton';
import Logo from './Logo';
import Avatar from './Avatar';
import CartButton from './CartButton';
import LargeNav from './LargeNav';
import Flex from '../containers/Flex';
import Box from '../containers/Box';

const Header = () => {
  const [isMobileMenuDisplayed, setIsMobileMenuDisplayed] = useState(false);
  const [isCartDisplayed, setIsCartDisplayed] = useState(false);
  const { cartTotalItems } = useGlobalContext();
  const windowSize = useWindowSize();
  const { media } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuDisplayed((prev) => !prev);
  };

  const toggleCart = () => {
    setIsCartDisplayed((prev) => !prev);
  };
  return (
    <SHeader>
      <Flex alignItems="center" gap="1rem">
        <MobileMenuButton onClick={toggleMobileMenu} />
        <Box p="0 1rem 0 0">
          <Logo />
        </Box>
        <LargeNav />
      </Flex>
      <Flex alignItems="center">
        <CartButton onClick={toggleCart} bubble={cartTotalItems} />
        <Avatar />
        {isCartDisplayed && (
          <Cart
            close={() => {
              setIsCartDisplayed(false);
            }}
          />
        )}
      </Flex>
      <MobileMenu
        isOpen={isMobileMenuDisplayed && windowSize < media.minLarge}
        close={() => setIsMobileMenuDisplayed(false)}
      />
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 996;

  @media ${({ theme }) => theme.mediaQueries.minLarge} {
    padding-bottom: 2rem;
    border-bottom: solid 1px ${({ theme }) => theme.colors.lightGrayBlue};
    position: static;
  }
`;

export default Header;
