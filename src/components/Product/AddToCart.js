import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context';
import { CartIcon } from '../icons';
import { LargeButton } from '../shared-styles/LargeButton';
import Counter from './Counter';

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
          <CartIcon />
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

  @media ${({ theme }) => theme.mediaQueries.minLarge} {
    flex-direction: row;
  }
`;

const AddToCartButton = styled(LargeButton)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;

  &:hover {
    opacity: 0.7;
    box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.38);
  }
`;

export default AddToCart;
