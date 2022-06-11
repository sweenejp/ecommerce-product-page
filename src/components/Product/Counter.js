import React from 'react';
import styled from 'styled-components';
import { MinusIcon, PlusIcon } from '../icons';

const Counter = ({ onMinusClick, onPlusClick, amount }) => {
  return (
    <Wrapper>
      <button onClick={onMinusClick}>
        <MinusIcon />
      </button>
      <p>{amount}</p>
      <button onClick={onPlusClick}>
        <PlusIcon />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightGrayBlue};
  border-radius: 5px;
  min-height: 2.5rem;

  button {
    padding: 0.75rem;
    color: ${({ theme }) => theme.colors.orange};
  }
`;
export default Counter;
