import React from 'react';
import styled from 'styled-components';
import { LogoIcon } from '../icons';

const Logo = () => {
  return (
    <SLogo href="/">
      <LogoIcon />
    </SLogo>
  );
};

const SLogo = styled.a`
  color: ${({ theme }) => theme.colors.darkBlue};
`;

export default Logo;
