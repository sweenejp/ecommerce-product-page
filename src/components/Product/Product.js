import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { productStatic } from './static';
import ProductImages from './ProuductImages';
import ProductMain from './ProductMain';

const Product = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(productStatic);
  }, []);

  return (
    <Wrapper>
      <ProductImages images={product.images} thumbnails={product.thumbnails} />
      <ProductMain product={product} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media ${({ theme }) => theme.mediaQueries.minLarge} {
    padding-top: 3rem;
    max-width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 5rem;
  }
`;
export default Product;
