import React from 'react';
import styled from 'styled-components';
import { NextIcon, PreviousIcon } from '../icons';

const ArrowButton = ({ handleClick, value }) => {
  if (value === 'prev') {
    return (
      <StyledArrowButton onClick={handleClick} value={value}>
        <PreviousIcon />
      </StyledArrowButton>
    );
  } else {
    return (
      <StyledArrowButton onClick={handleClick} value={value}>
        <NextIcon />
      </StyledArrowButton>
    );
  }
};

const StyledArrowButton = styled.button`
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  padding: 0.75rem;
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.colors.darkBlue};

  svg {
    top: 50%;
    position: absolute;
    left: ${({ value }) => (value === 'prev' ? '50%' : null)};
    right: ${({ value }) => (value === 'next' ? '50%' : null)};
    transform: ${({ value }) =>
      value === 'prev' ? 'translate(-70%, -50%)' : null};
    transform: ${({ value }) =>
      value === 'next' ? 'translate(50%, -50%)' : null};
  }
`;

export default ArrowButton;
