import React, { useState } from 'react';
import LightBox from './LightBox';
import useWindowSize from '../useWindowSize';
import { StyledProductImages, Thumbnail } from './styles';
import ArrowButton from './ArrowButton';
import { MIN_LARGE_SCREEN_SIZE } from '../../constants';

const ProductImages = ({ images = [], thumbnails = [] }) => {
  const [displayedImage, setDisplayedImage] = useState(images[0]);
  const [selectedThumbnail, setSelectedThumbnail] = useState(thumbnails[0]);
  const [isLightBoxDisplayed, setIsLightBoxDisplayed] = useState(false);
  const windowSize = useWindowSize();

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

  const handleThumbnailClick = (index) => {
    setSelectedThumbnail(thumbnails[index]);
    setDisplayedImage(images[index]);
  };

  return (
    <StyledProductImages>
      <div className="displayed-image-container">
        <button
          className="displayed-image-btn"
          onClick={() => setIsLightBoxDisplayed(true)}
          disabled={windowSize < MIN_LARGE_SCREEN_SIZE}
        >
          <img src={displayedImage} alt="" />
        </button>
        <div className="arrow-btn-container arrow-btn-container--left">
          <ArrowButton value="prev" handleClick={handleScroll}></ArrowButton>
        </div>
        <div className="arrow-btn-container arrow-btn-container--right">
          <ArrowButton value="next" handleClick={handleScroll}></ArrowButton>
        </div>
      </div>
      <div className="thumbnails">
        {thumbnails.map((thumbnail, index) => (
          <Thumbnail
            className="thumbnail"
            $selected={thumbnail === selectedThumbnail}
            key={thumbnail}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={thumbnail} alt="" />
          </Thumbnail>
        ))}
      </div>
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
    </StyledProductImages>
  );
};

export default ProductImages;
