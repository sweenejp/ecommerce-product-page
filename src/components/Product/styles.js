import styled from 'styled-components';
import { css } from 'styled-components';
import { LargeButton } from '../shared-styles/LargeButton';

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
  }
`;

export const Thumbnail = styled.button`
  border-radius: 10px;
  overflow: hidden;
  ${({ $selected: selected, theme }) =>
    selected
      ? css`
          box-shadow: 0 0 0 3px ${theme.colors.orange}; // creates a border without adding width - prevents thumbnails from shifting around
          opacity: 0.7;
        `
      : null};
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

export const StyledProductMain = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    color: ${({ theme }) => theme.colors.orange};
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 700;
  }

  h2 {
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  .about {
    color: ${({ theme }) => theme.colors.darkGrayBlue};
  }

  .price-box {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .flex-1 {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .price {
      font-size: 1.5rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.darkBlue};
    }
    .discount {
      color: ${({ theme }) => theme.colors.orange};
      font-size: 0.8rem;
      font-weight: 700;
      background-color: ${({ theme }) => theme.colors.lightGrayBlue};
      padding: 0.1rem 0.5rem;
      border-radius: 5px;
    }
    .original-price {
      text-decoration: line-through;
      font-size: 0.8rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.grayBlue};
    }
  }

  .counter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.lightGrayBlue};
    border-radius: 5px;
    height: 2.5rem;

    button {
      padding: 0.75rem;
    }
  }
`;

export const AddToCartButton = styled(LargeButton)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;

  .cart-icon {
    width: 20px;
    height: 20px;
  }
`;
