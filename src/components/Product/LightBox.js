import React from 'react';
import styled from 'styled-components';

const LightBox = ({ image, handleScroll, close, isDisabled }) => {
  if (isDisabled) {
    return <></>;
  }
  return (
    <Wrapper>
      <div className='overlay' onClick={close}></div>
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
  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

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
