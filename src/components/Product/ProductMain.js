import React from 'react';
import styled from 'styled-components';
import AddToCart from './AddToCart';
import { discountAndFormatPrice, toPercent } from '../utils';

const ProductMain = ({ product }) => {
  return (
    <StyledProductMain>
      <h3>{product.company}</h3>
      <h2>{product.name}</h2>
      <p className="about">{product.about}</p>
      <div className="price-box">
        <div className="flex-1">
          <p className="price">
            ${discountAndFormatPrice(product.price, product.discount)}
          </p>
          {product.discount && (
            <p className="discount">{toPercent(product.discount)}%</p>
          )}
        </div>
        <div className="flex-2">
          {' '}
          {product.discount && (
            <p className="original-price">
              ${discountAndFormatPrice(product.price)}
            </p>
          )}
        </div>
      </div>
      <AddToCart product={product} />
    </StyledProductMain>
  );
};

const StyledProductMain = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 432px;
  margin: auto;

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
`;

export default ProductMain;
