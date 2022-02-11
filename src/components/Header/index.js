import React, { useState } from 'react';
import Cart from '../Cart';
import MobileMenu from '../MobileMenu';

const Header = () => {
  const [isMobileMenuDisplayed, setIsMobileMenuDisplayed] = useState(false);
  const [isCartDisplayed, setIsCartDisplayed] = useState(false);

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
      <button onClick={toggleCart}>
        <img src='./assets/images/icon-cart.svg' alt='' />
      </button>
      <button>
        <img src='./assets/images/image-avatar.png' alt='' />
      </button>
      {isMobileMenuDisplayed && (
        <MobileMenu close={() => setIsMobileMenuDisplayed(false)} />
      )}
      {isCartDisplayed && <Cart />}
    </header>
  );
};

export default Header;
