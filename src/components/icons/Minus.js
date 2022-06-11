import React from 'react';
import Icon from './Icon';

const Minus = ({ width = '12', height = '4', fill = 'currentColor' }) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 12 4">
      <path
        d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
        fill={fill}
        fillRule="nonzero"
      />
    </Icon>
  );
};

export default Minus;
