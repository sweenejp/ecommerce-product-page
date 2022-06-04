import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { productStatic } from './static';
import { discountAndFormatPrice, toPercent } from '../utils';
import ProductImages from './ProuductImages';
import { StyledProductMain } from './styles';
import AddToCart from './AddToCart';

const Product = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(productStatic);
  }, []);

  return (
    <Wrapper>
      <ProductImages images={product.images} thumbnails={product.thumbnails} />
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.media.minLarge}) {
    padding-top: 3rem;
    max-width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 5rem;
  }
`;
export default Product;
