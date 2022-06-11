import React from 'react';
import Icon from './Icon';

const Next = ({ width = '13', height = '18', stroke = 'currentColor' }) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 13 18">
      <path
        d="m2 1 8 8-8 8"
        stroke={stroke}
        strokeWidth="3"
        fill="none"
        fillRule="evenodd"
      />
    </Icon>
  );
};

export default Next;
