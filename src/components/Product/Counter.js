import React from 'react';
import styled from 'styled-components';

const Counter = ({ onMinusClick, onPlusClick, amount }) => {
  return (
    <Wrapper>
      <button value="minus" onClick={onMinusClick}>
        <img src="./assets/images/icon-minus.svg" alt="" />
      </button>
      <p>{amount}</p>
      <button value="plus" onClick={onPlusClick}>
        <img src="./assets/images/icon-plus.svg" alt="" />
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
  }
`;
export default Counter;
