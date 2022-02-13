import React from 'react';
import styled from 'styled-components';

const Overlay = ({ isOverlay, close }) => {
  if (!isOverlay) {
    return <></>;
  }
  return <StyledOverlay onClick={close}></StyledOverlay>;
};

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.lightbox};
  z-index: 1;
`;

export default Overlay;
