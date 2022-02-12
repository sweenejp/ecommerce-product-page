import React from 'react';
import { useGlobalContext } from '../context';
import { discountAndFormatPrice } from '../utils';

const Cart = () => {
  const { cart, cartTotalPrice, cartTotalItems, removeFromCart } =
    useGlobalContext();
  return (
    <div>
      <h3>Cart</h3>
      {cart.map(({ price, discount, amount, id, thumbNails, name }) => {
        const itemTotal = (price * discount * amount).toFixed(2);
        return (
          <div key={id}>
            <img src={thumbNails[0]} alt='' />
            <div>
              <p>{name}</p>
              <p>
                ${discountAndFormatPrice(price, discount)} x {amount}{' '}
                <span>${itemTotal}</span>
              </p>
            </div>
            <button onClick={() => removeFromCart(id)}>
              <img src='./assets/images/icon-delete.svg' alt='' />
            </button>
          </div>
        );
      })}
      {cartTotalItems === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <p>${cartTotalPrice.toFixed(2)}</p>
      )}
    </div>
  );
};

export default Cart;
