import styled from 'styled-components';

export const LargeButton = styled.button`
  width: 100%;
  padding: 1rem 0;
  text-align: center;
  font-weight: 600;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.orange};
  color: white;

  &:hover {
    opacity: 0.7;
    box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.38);
  }
`;
