import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import LightBox from './LightBox';
import useWindowSize from '../useWindowSize';
import { Thumbnail } from '../shared-styles/ThumbNail';
import ArrowButton from './ArrowButton';

const ProductImages = ({ images = [], thumbnails = [] }) => {
  const { media } = useTheme();
  const [displayedImage, setDisplayedImage] = useState(images[0]);
  const [selectedThumbnail, setSelectedThumbnail] = useState(thumbnails[0]);
  const [isLightBoxDisplayed, setIsLightBoxDisplayed] = useState(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    setDisplayedImage(images[0]);
    setSelectedThumbnail(thumbnails[0]);
  }, [images, thumbnails]);

  useEffect(() => {
    if (windowSize < media.minLarge) {
      setIsLightBoxDisplayed(false);
    }
  }, [windowSize, media.minLarge]);

  const handleScroll = (e) => {
    const { value } = e.currentTarget;
    const index = images.indexOf(displayedImage);
    if (value === 'prev') {
      if (index === 0) {
        setDisplayedImage(images[images.length - 1]);
        setSelectedThumbnail(thumbnails[thumbnails.length - 1]);
      } else {
        setDisplayedImage(images[index - 1]);
        setSelectedThumbnail(thumbnails[index - 1]);
      }
    } else {
      if (index === images.length - 1) {
        setDisplayedImage(images[0]);
        setSelectedThumbnail(thumbnails[0]);
      } else {
        setDisplayedImage(images[index + 1]);
        setSelectedThumbnail(thumbnails[index + 1]);
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
          disabled={windowSize < media.minLarge}
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
          isDisabled={windowSize < media.minLarge}
          image={displayedImage}
          handleScroll={handleScroll}
          open={() => setIsLightBoxDisplayed(true)}
          close={() => setIsLightBoxDisplayed(false)}
          handleThumbnailClick={handleThumbnailClick}
          selectedThumbnail={selectedThumbnail}
          thumbnails={thumbnails}
        />
      )}
    </StyledProductImages>
  );
};

const StyledProductImages = styled.div`
  max-width: 400px;
  margin: 0 auto;

  .displayed-image-container {
    position: relative;
  }

  .displayed-image-btn {
    cursor: default;
  }

  .arrow-btn-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &--left {
      left: 1rem;
    }

    &--right {
      right: 1rem;
    }
  }

  .thumbnails {
    display: none;
  }

  @media ${({ theme }) => theme.mediaQueries.minLarge} {
    .displayed-image-btn {
      cursor: pointer;
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 1rem;
    }

    .arrow-btn-container {
      display: none;
    }

    .thumbnails {
      display: flex;
      gap: 1rem;
    }
  }
`;

export default ProductImages;
