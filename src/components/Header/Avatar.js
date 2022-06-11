import React from 'react';
import styled from 'styled-components';

const Avatar = () => {
  return (
    <SAvatar className="avatar">
      <img src="./assets/images/image-avatar.png" alt="" />
    </SAvatar>
  );
};

const SAvatar = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  &:hover {
    outline: solid 2px ${({ theme }) => theme.colors.orange};
  }
`;

export default Avatar;
