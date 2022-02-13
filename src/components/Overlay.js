import React from 'react';

const Overlay = ({ isOverlay, close }) => {
  const styles = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1,
  };
  if (!isOverlay) {
    return <></>;
  }
  return <div onClick={close} style={styles}></div>;
};

export default Overlay;
