import styled from 'styled-components';

export const StyledProductImages = styled.div`
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

  @media (min-width: ${({ theme }) => theme.media.minLarge}) {
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

    .thumbnail {
      border-radius: 10px;
      overflow: hidden;
    }
  }
`;

export const StyledLightBox = styled.div`
  .image-container {
    position: fixed;
    top: 50px;
    right: 50px;
    left: 50px;
    z-index: 998;
    max-width: 700px;
    margin: 0 auto;
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

export const StyledArrowButton = styled.button`
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  padding: 0.75rem;
  width: 40px;
  height: 40px;

  img {
    top: 50%;
    position: absolute;
    height: 1rem;
    width: 0.7rem;
    left: ${({ value }) => (value === 'prev' ? '50%' : null)};
    right: ${({ value }) => (value === 'next' ? '50%' : null)};
    transform: ${({ value }) =>
      value === 'prev' ? 'translate(-70%, -50%)' : null};
    transform: ${({ value }) =>
      value === 'next' ? 'translate(50%, -50%)' : null};
  }
`;
