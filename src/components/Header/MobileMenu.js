import React from 'react';
import Nav from './Nav';

const MobileMenu = ({ close }) => {
  return (
    <div>
      <button onClick={close}>
        <img src='./assets/images/icon-close.svg' alt='close' />
      </button>
      <Nav />
    </div>
  );
};

export default MobileMenu;
