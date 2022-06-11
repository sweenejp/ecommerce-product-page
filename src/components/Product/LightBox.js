import React from 'react';
import styled from 'styled-components';
import Overlay from '../Overlay';
import ArrowButton from './ArrowButton';
import { Thumbnail } from '../shared-styles/ThumbNail';

const LightBox = ({
  image,
  handleScroll,
  close,
  isOpen,
  isDisabled,
  thumbnails = [],
  handleThumbnailClick,
  selectedThumbnail,
}) => {
  if (isDisabled) {
    return <></>;
  }
  return (
    <StyledLightBox>
      <Overlay isOverlay={isOpen} close={close} />
      <div className="light-box-wrapper">
        <div className="light-box-main-image-wrapper">
          <img src={image} alt="" />
          <div className="lightbox-arrow-btn-container lightbox-arrow-btn-container--left">
            <ArrowButton handleClick={handleScroll} value="prev" />
          </div>
          <div className="lightbox-arrow-btn-container lightbox-arrow-btn-container--right">
            <ArrowButton handleClick={handleScroll} value="next" />
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
      </div>
    </StyledLightBox>
  );
};

const StyledLightBox = styled.div`
  .light-box-wrapper {
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    top: 50px;
    right: 50px;
    left: 50px;
    bottom: 50px;
    z-index: 998;
    max-width: 525px;
    margin: 0 auto;
  }

  .light-box-main-image-wrapper {
    position: relative;
  }

  img {
    border-radius: 10px;
  }

  .lightbox-arrow-btn-container {
    position: absolute;
    top: 50%;
    z-index: 999;

    &--left {
      left: 0;
      transform: translate(-50%, -50%);
    }

    &--right {
      right: 0;
      transform: translate(50%, -50%);
    }
  }
`;
export default LightBox;
