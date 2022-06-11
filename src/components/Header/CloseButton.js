import React from 'react';
import styled from 'styled-components';
import { CloseIcon } from '../icons';

const CloseButton = ({ onClick }) => {
  return (
    <SCloseButton onClick={onClick}>
      <CloseIcon />
    </SCloseButton>
  );
};

const SCloseButton = styled.button`
  color: ${({ theme }) => theme.colors.grayBlue};
  :hover {
    color: ${({ theme }) => theme.colors.darkGrayBlue};
  }
`;

export default CloseButton;
