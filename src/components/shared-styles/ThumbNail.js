import styled, { css } from 'styled-components';

export const Thumbnail = styled.button`
  border-radius: 10px;
  overflow: hidden;
  ${({ $selected: selected, theme }) =>
    selected
      ? css`
          box-shadow: 0 0 0 3px ${theme.colors.orange}; // creates a border without adding width - prevents thumbnails from shifting around
          opacity: 0.7;
        `
      : null};
  &:hover {
    opacity: 0.7;
  }
`;
