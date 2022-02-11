import React from 'react';

const MobileMenu = ({ close }) => {
  return (
    <div>
      <button onClick={close}>
        <img src='./assets/images/icon-close.svg' alt='close' />
      </button>
      <ul>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default MobileMenu;
