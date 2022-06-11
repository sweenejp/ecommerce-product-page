import React from 'react';
import Icon from './Icon';

const MobileMenu = ({ fill = 'currentColor', width = '22', height = '20' }) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 16 15">
      <path
        d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
        fill={fill}
        fillRule="evenodd"
      />
    </Icon>
  );
};

export default MobileMenu;
