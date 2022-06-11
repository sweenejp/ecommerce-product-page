import React from 'react';
import styled from 'styled-components';

const Flex = ({
  children,
  direction = 'row',
  alignItems,
  justifyContent,
  gap = 0,
}) => {
  return (
    <SFlex
      direction={direction}
      alignItems={alignItems}
      justifyContent={justifyContent}
      gap={gap}
    >
      {children}
    </SFlex>
  );
};

const SFlex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  gap: ${({ gap }) => gap};
`;

export default Flex;
