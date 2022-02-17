import React from 'react';
import Overlay from '../Overlay';
import ArrowButton from './ArrowButton';
import { StyledLightBox } from './styles';

const LightBox = ({ image, handleScroll, close, isOpen, isDisabled }) => {
  if (isDisabled) {
    return <></>;
  }
  return (
    <StyledLightBox>
      <Overlay isOverlay={isOpen} close={close} />
      <div className='image-container'>
        <img src={image} alt='' />
        <div className='lightbox-arrow-btn-container lightbox-arrow-btn-container--left'>
          <ArrowButton handleClick={handleScroll} value='prev' />
        </div>
        <div className='lightbox-arrow-btn-container lightbox-arrow-btn-container--right'>
          <ArrowButton handleClick={handleScroll} value='next' />
        </div>
      </div>
    </StyledLightBox>
  );
};

export default LightBox;
