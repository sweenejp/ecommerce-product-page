import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context';
import { productStatic } from './static';
import { discountAndFormatPrice, toPercent } from '../utils';
import ProductImages from './ProuductImages';
import { StyledProductMain } from './styles';
import { AddToCartButton } from './styles';

const Product = () => {
  const [product, setProduct] = useState({});
  const [amountToAddToCart, setAmountToAddToCart] = useState(0);
  const { addToCart } = useGlobalContext();

  useEffect(() => {
    setProduct(productStatic);
  }, []);

  const handleMinus = () => {
    if (amountToAddToCart === 0) {
      setAmountToAddToCart(0);
    } else {
      setAmountToAddToCart((prev) => prev - 1);
    }
  };

  const handlePlus = () => {
    setAmountToAddToCart((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    if (amountToAddToCart > 0) {
      addToCart(product, amountToAddToCart);
      setAmountToAddToCart(0);
    }
  };

  return (
    <>
      <ProductImages images={product.images} thumbNails={product.thumbNails} />
      <StyledProductMain>
        <h3>{product.company}</h3>
        <h2>{product.name}</h2>
        <p className='about'>{product.about}</p>
        <div className='price-box'>
          <div className='flex-1'>
            <p className='price'>
              ${discountAndFormatPrice(product.price, product.discount)}
            </p>
            {product.discount && (
              <p className='discount'>{toPercent(product.discount)}%</p>
            )}
          </div>
          <div className='flex-2'>
            {' '}
            {product.discount && (
              <p className='original-price'>
                ${discountAndFormatPrice(product.price)}
              </p>
            )}
          </div>
        </div>
        <div>
          <div className='counter'>
            <button value='minus' onClick={handleMinus}>
              <img src='./assets/images/icon-minus.svg' alt='' />
            </button>
            <p>{amountToAddToCart}</p>
            <button value='plus' onClick={handlePlus}>
              <img src='./assets/images/icon-plus.svg' alt='' />
            </button>
          </div>
          <AddToCartButton onClick={handleAddToCart}>
            <div>
              <img src='./assets/images/icon-cart.svg' alt='' />
              <p>Add to cart</p>
            </div>
          </AddToCartButton>
        </div>
      </StyledProductMain>
    </>
  );
};

export default Product;
