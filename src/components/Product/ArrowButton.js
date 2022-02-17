import React from 'react';
import { StyledArrowButton } from './styles';

const ArrowButton = ({ handleClick, value }) => {
  if (value === 'prev') {
    return (
      <StyledArrowButton onClick={handleClick} value={value}>
        {' '}
        <img src='./assets/images/icon-previous.svg' alt='' />
      </StyledArrowButton>
    );
  } else {
    return (
      <StyledArrowButton onClick={handleClick} value={value}>
        {' '}
        <img src='./assets/images/icon-next.svg' alt='' />
      </StyledArrowButton>
    );
  }
};

export default ArrowButton;
