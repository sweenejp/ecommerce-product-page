import React from 'react';
import styled from 'styled-components';
import { MobileMenuIcon } from '../icons';

const MobileMenuButton = ({ onClick }) => {
  return (
    <SMobileMenuButton onClick={onClick}>
      <MobileMenuIcon />
    </SMobileMenuButton>
  );
};

const SMobileMenuButton = styled.button`
  color: ${({ theme }) => theme.colors.darkGrayBlue};

  :hover {
    color: ${({ theme }) => theme.colors.grayBlue};
  }

  @media ${({ theme }) => theme.mediaQueries.minLarge} {
    display: none;
  }
`;

export default MobileMenuButton;
