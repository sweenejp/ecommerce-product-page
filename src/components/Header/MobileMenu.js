import React from 'react';
import Overlay from '../Overlay';
import Nav from './Nav';
import { StyledMobileMenu } from './styles';

const MobileMenu = ({ close, isOpen }) => {
  return (
    <>
      <Overlay isOverlay={isOpen} close={close} />
      <StyledMobileMenu isOpen={isOpen}>
        <button className='close-btn' onClick={close}>
          <img src='./assets/images/icon-close.svg' alt='close' />
        </button>
        <Nav />
      </StyledMobileMenu>
    </>
  );
};

export default MobileMenu;
