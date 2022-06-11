import React from 'react';
import styled from 'styled-components';
import { TrashIcon } from '../icons';

const DeleteButton = ({ onClick }) => {
  return (
    <SDeleteButton onClick={onClick}>
      <TrashIcon />
    </SDeleteButton>
  );
};

const SDeleteButton = styled.button`
  color: ${({ theme }) => theme.colors.orange};

  :hover {
    opacity: 0.5;
  }
`;

export default DeleteButton;
