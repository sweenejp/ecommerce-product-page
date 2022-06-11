import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context';
import { discountAndFormatPrice } from '../utils';
import DeleteButton from './DeleteButton';

const CartItem = ({
  id,
  name,
  thumbnail,
  price,
  discount,
  amount,
  itemTotal,
}) => {
  const { removeFromCart } = useGlobalContext();
  return (
    <SCartItem>
      <div className="item-main">
        <img className="thumbnail" src={thumbnail} alt="" />
        <div>
          <p>{name}</p>
          <p>
            ${discountAndFormatPrice(price, discount)} x {amount}{' '}
            <span>${itemTotal}</span>
          </p>
        </div>
      </div>
      <DeleteButton onClick={() => removeFromCart(id)} />
    </SCartItem>
  );
};

const SCartItem = styled.div`
  display: flex;
  justify-content: space-between;

  .item-main {
    display: flex;
    gap: 0.75rem;
    align-items: center;

    span {
      font-weight: 600;
    }
  }

  .thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
`;

export default CartItem;
