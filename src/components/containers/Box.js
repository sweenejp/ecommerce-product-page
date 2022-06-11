import React from 'react';
import styled from 'styled-components';

const Box = ({ children, m, p }) => {
  return (
    <SBox m={m} p={p}>
      {children}
    </SBox>
  );
};

const SBox = styled.div`
  margin: ${({ m }) => m};
  padding: ${({ p }) => p};
`;

export default Box;
