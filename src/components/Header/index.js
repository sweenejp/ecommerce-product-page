import React, { useState } from 'react';
import { useGlobalContext } from '../../context';
import Cart from '../Cart';
import MobileMenu from './MobileMenu';
import Nav from './Nav';

const Header = () => {
  const [isMobileMenuDisplayed, setIsMobileMenuDisplayed] = useState(false);
  const [isCartDisplayed, setIsCartDisplayed] = useState(false);
  const { cartTotalItems } = useGlobalContext();

  const toggleMobileMenu = () => {
    setIsMobileMenuDisplayed((prev) => !prev);
  };

  const toggleCart = () => {
    setIsCartDisplayed((prev) => !prev);
  };
  return (
    <header style={{ border: 'solid green' }}>
      <button onClick={toggleMobileMenu}>
        <img src='./assets/images/icon-menu.svg' alt='menu' />
      </button>
      <a href='/'>
        <img src='./assets/images/logo.svg' alt='' />
      </a>
      <Nav />
      <button onClick={toggleCart}>
        <div>
          <img src='./assets/images/icon-cart.svg' alt='' />
          {cartTotalItems !== 0 && <p>{cartTotalItems}</p>}
        </div>
      </button>
      <button>
        <img src='./assets/images/image-avatar.png' alt='' />
      </button>
      {isMobileMenuDisplayed && (
        <MobileMenu close={() => setIsMobileMenuDisplayed(false)} />
      )}
      {isCartDisplayed && (
        <Cart
          close={() => {
            setIsCartDisplayed(false);
          }}
        />
      )}
    </header>
  );
};

export default Header;
