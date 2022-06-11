import React from 'react';
import styled from 'styled-components';
import Overlay from '../Overlay';
import CloseButton from './CloseButton';
import Nav from './Nav';

const MobileMenu = ({ close, isOpen }) => {
  return (
    <>
      <Overlay isOverlay={isOpen} close={close} />
      <StyledMobileMenu isOpen={isOpen}>
        <CloseButton onClick={close} className="close-btn" />
        <Nav />
      </StyledMobileMenu>
    </>
  );
};

const StyledMobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: white;
  padding: 1rem;
  width: 250px;
  z-index: 999;
  transform: ${({ isOpen }) => (isOpen ? 'translate(0)' : 'translate(-500px)')};
  transition: transform 200ms ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  .close-btn {
    .icon {
      fill: red;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.minLarge} {
    nav {
      display: none;
    }
  }
`;

export default MobileMenu;
