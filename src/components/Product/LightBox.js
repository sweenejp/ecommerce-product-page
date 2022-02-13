import React from 'react';
import styled from 'styled-components';
import Overlay from '../Overlay';

const LightBox = ({ image, handleScroll, close, isDisabled }) => {
  if (isDisabled) {
    return <></>;
  }
  return (
    <Wrapper>
      <Overlay close={close} />
      <div className='image-container'>
        <img src={image} alt='' />
        <button value='prev' onClick={handleScroll}>
          <img src='./assets/images/icon-previous.svg' alt='' />
        </button>
        <button value='next' onClick={handleScroll}>
          <img src='./assets/images/icon-next.svg' alt='' />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .image-container {
    position: fixed;
    top: 50px;
    right: 50px;
    left: 50px;
    z-index: 2;
    border: solid purple;
  }
`;

export default LightBox;
