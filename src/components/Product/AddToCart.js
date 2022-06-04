import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context';
import Counter from './Counter';
import { AddToCartButton } from './styles';

const AddToCart = ({ product }) => {
  const [amountToAddToCart, setAmountToAddToCart] = useState(0);
  const { addToCart } = useGlobalContext();

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
    <Wrapper>
      <Counter
        onMinusClick={handleMinus}
        onPlusClick={handlePlus}
        amount={amountToAddToCart}
        className="full-height"
      />
      <AddToCartButton onClick={handleAddToCart}>
        <>
          <img
            className="cart-icon"
            src="./assets/images/icon-cart.svg"
            alt=""
          />
          <p>Add to cart</p>
        </>
      </AddToCartButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.media.minLarge}) {
    flex-direction: row;
  }
`;

export default AddToCart;
