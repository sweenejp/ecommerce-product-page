import React from 'react';
import Icon from './Icon';

const Previous = ({ width = '12', height = '18', stroke = 'currentColor' }) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 12 18">
      <path
        d="M11 1 3 9l8 8"
        stroke={stroke}
        strokeWidth="3"
        fill="none"
        fillRule="evenodd"
      />
    </Icon>
  );
};

export default Previous;
