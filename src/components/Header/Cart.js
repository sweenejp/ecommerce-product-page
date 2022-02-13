import React from 'react';
import { useGlobalContext } from '../../context';
import { LargeButton } from '../shared-styles/LargeButton';
import { discountAndFormatPrice } from '../utils';
import { StyledCart } from './styles';

const Cart = ({ close }) => {
  const { cart, cartTotalPrice, cartTotalItems, removeFromCart } =
    useGlobalContext();
  return (
    <StyledCart>
      <div className='cart-header'>
        <h3>Cart</h3>
        <button onClick={close}>
          <img src='./assets/images/icon-close.svg' alt='' />
        </button>
      </div>
      {cart.map(({ price, discount, amount, id, thumbNails, name }) => {
        const itemTotal = (price * discount * amount).toFixed(2);
        return (
          <div className='item' key={id}>
            <div className='item-main'>
              <img className='thumbnail' src={thumbNails[0]} alt='' />
              <div>
                <p>{name}</p>
                <p>
                  ${discountAndFormatPrice(price, discount)} x {amount}{' '}
                  <span>${itemTotal}</span>
                </p>
              </div>
            </div>
            <button onClick={() => removeFromCart(id)}>
              <img src='./assets/images/icon-delete.svg' alt='' />
            </button>
          </div>
        );
      })}
      {cartTotalItems === 0 ? (
        <p className='total'>Your cart is empty</p>
      ) : (
        <p className='total'>Your total: ${cartTotalPrice.toFixed(2)}</p>
      )}
      <LargeButton>Checkout</LargeButton>
    </StyledCart>
  );
};

export default Cart;
