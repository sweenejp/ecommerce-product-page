import React, { useEffect, useState } from 'react';
import LightBox from './LightBox';
import useWindowSize from '../useWindowSize';
import { MIN_LARGE_SCREEN_SIZE } from '../../constants';

const ProductImages = ({ images = [], thumbNails = [] }) => {
  const [displayedImage, setDisplayedImage] = useState('');
  const [isLightBoxDisplayed, setIsLightBoxDisplayed] = useState(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    setDisplayedImage(images[0]);
  }, [images]);

  const handleScroll = (e) => {
    const { value } = e.currentTarget;
    const index = images.indexOf(displayedImage);
    if (value === 'prev') {
      if (index === 0) {
        setDisplayedImage(images[images.length - 1]);
      } else {
        setDisplayedImage(images[index - 1]);
      }
    } else {
      if (index === images.length - 1) {
        setDisplayedImage(images[0]);
      } else {
        setDisplayedImage(images[index + 1]);
      }
    }
  };

  return (
    <div style={{ border: 'solid red' }}>
      <button
        onClick={() => setIsLightBoxDisplayed(true)}
        disabled={windowSize < MIN_LARGE_SCREEN_SIZE}
      >
        <img src={displayedImage} alt='' />
      </button>
      <button value='prev' onClick={handleScroll}>
        <img src='./assets/images/icon-previous.svg' alt='' />
      </button>
      <button value='next' onClick={handleScroll}>
        <img src='./assets/images/icon-next.svg' alt='' />
      </button>
      {thumbNails.map((thumbNail, index) => (
        <button
          key={thumbNail}
          onClick={() => setDisplayedImage(images[index])}
        >
          <img src={thumbNail} alt='' />
        </button>
      ))}
      {isLightBoxDisplayed && (
        <LightBox
          isOpen={isLightBoxDisplayed}
          isDisabled={windowSize < MIN_LARGE_SCREEN_SIZE}
          image={displayedImage}
          handleScroll={handleScroll}
          open={() => setIsLightBoxDisplayed(true)}
          close={() => setIsLightBoxDisplayed(false)}
        />
      )}
    </div>
  );
};

export default ProductImages;
