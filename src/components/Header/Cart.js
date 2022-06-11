import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context';
import Flex from '../containers/Flex';
import { LargeButton } from '../shared-styles/LargeButton';
import CartItem from './CartItem';
import CloseButton from './CloseButton';

const Cart = ({ close }) => {
  const { cart, cartTotalPrice, cartTotalItems } = useGlobalContext();
  return (
    <StyledCart>
      <div className="cart-header">
        <h3>Cart</h3>
        <CloseButton onClick={close} />
      </div>
      <Flex direction="column" gap="1rem">
        {cart.map(({ price, discount, amount, id, thumbnails, name }) => {
          const itemTotal = (price * discount * amount).toFixed(2);
          return (
            <CartItem
              key={id}
              price={price}
              discount={discount}
              amount={amount}
              id={id}
              thumbnail={thumbnails[0]}
              name={name}
              itemTotal={itemTotal}
            />
          );
        })}
        {cartTotalItems === 0 ? (
          <p className="empty">Your cart is empty</p>
        ) : (
          <>
            <p>Your total: ${cartTotalPrice.toFixed(2)}</p>
            <LargeButton>Checkout</LargeButton>
          </>
        )}
      </Flex>
    </StyledCart>
  );
};

const StyledCart = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  right: 0.5rem;
  transform: translateY(60px);

  border-radius: 10px;
  padding: 1.5rem 1.5rem 2rem 1.5rem;
  background: white;
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.4);

  .cart-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.5rem;

    ::before {
      content: '';
      position: absolute;
      left: 0;
      top: 4rem;
      height: 1px;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  .empty {
    padding: 5rem 0;
    text-align: center;
  }

  @media ${({ theme }) => theme.mediaQueries.minLarge} {
    width: 350px;
    left: initial;
  }
`;

export default Cart;
