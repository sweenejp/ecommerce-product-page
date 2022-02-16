import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.media.minLarge}) {
    max-width: 1200px;
  }
`;
