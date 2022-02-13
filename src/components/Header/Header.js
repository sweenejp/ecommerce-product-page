import React, { useState } from 'react';
import { MIN_LARGE_SCREEN_SIZE } from '../../constants';
import { useGlobalContext } from '../../context';
import useWindowSize from '../useWindowSize';
import Cart from './Cart';
import MobileMenu from './MobileMenu';
import Nav from './Nav';
import { StyledHeader } from './styles';

const Header = () => {
  const [isMobileMenuDisplayed, setIsMobileMenuDisplayed] = useState(false);
  const [isCartDisplayed, setIsCartDisplayed] = useState(false);
  const { cartTotalItems } = useGlobalContext();
  const windowSize = useWindowSize();

  const toggleMobileMenu = () => {
    setIsMobileMenuDisplayed((prev) => !prev);
  };

  const toggleCart = () => {
    setIsCartDisplayed((prev) => !prev);
  };
  return (
    <StyledHeader>
      <div className='nav-section'>
        <button className='nav-toggle' onClick={toggleMobileMenu}>
          <img src='./assets/images/icon-menu.svg' alt='menu' />
        </button>
        <a href='/'>
          <img src='./assets/images/logo.svg' alt='' />
        </a>
        <div className='large-nav'>
          <Nav />
        </div>
      </div>
      <div className='user-section'>
        <button className='cart-button' onClick={toggleCart}>
          <div>
            <img src='./assets/images/icon-cart.svg' alt='' />
            {cartTotalItems !== 0 && (
              <p className='items-bubble'>{cartTotalItems}</p>
            )}
          </div>
        </button>
        <button className='avatar'>
          <img src='./assets/images/image-avatar.png' alt='' />
        </button>
        {isCartDisplayed && (
          <Cart
            close={() => {
              setIsCartDisplayed(false);
            }}
          />
        )}
      </div>
      <MobileMenu
        isOpen={isMobileMenuDisplayed && windowSize < MIN_LARGE_SCREEN_SIZE}
        close={() => setIsMobileMenuDisplayed(false)}
      />
    </StyledHeader>
  );
};

export default Header;
