import React from 'react';
import styled from 'styled-components';
import { CartIcon } from '../icons';

const CartButton = ({ onClick, bubble }) => {
  return (
    <SCartButton onClick={onClick}>
      <CartIcon />
      {bubble !== 0 && <p className="items-bubble">{bubble}</p>}
    </SCartButton>
  );
};

const SCartButton = styled.button`
  position: relative;
  margin-right: 1rem;
  height: fit-content;
  color: ${({ theme }) => theme.colors.darkGrayBlue};

  :hover {
    color: ${({ theme }) => theme.colors.grayBlue};
  }

  .items-bubble {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -10px;
    left: 5px;
    border-radius: 10px;
    font-size: 0.7rem;
    font-weight: 700;
    height: 1rem;
    padding: 0 0.5rem;
    background: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default CartButton;
