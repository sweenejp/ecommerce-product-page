import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context';
import ProductImages from '../ProductImages';
import { productStatic } from './static';
import { discountAndFormatPrice, toPercent } from '../utils';

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
      <div style={{ border: 'solid gold' }}>
        <h3>{product.company}</h3>
        <h2>{product.name}</h2>
        <p>{product.about}</p>
        <div>
          <p>${discountAndFormatPrice(product.price, product.discount)}</p>
          {product.discount && (
            <>
              <p>{toPercent(product.discount)}%</p>
              <p>${discountAndFormatPrice(product.price)}</p>
            </>
          )}
        </div>
        <div>
          <div>
            <button value='minus' onClick={handleMinus}>
              <img src='./assets/images/icon-minus.svg' alt='' />
            </button>
            <p>{amountToAddToCart}</p>
            <button value='plus' onClick={handlePlus}>
              <img src='./assets/images/icon-plus.svg' alt='' />
            </button>
          </div>
          <button onClick={handleAddToCart}>
            <div>
              <img src='./assets/images/icon-cart.svg' alt='' />
              <p>Add to cart</p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
