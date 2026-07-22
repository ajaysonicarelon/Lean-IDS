import styled from 'styled-components';

export const StyledTableRow = styled.tr<{
  $selected?: boolean;
  $hoverable?: boolean;
  $clickable?: boolean;
  $disabled?: boolean;
}>`
  background: ${({ $selected, theme }) =>
    $selected ? theme.colors.palette.primary[50] : theme.colors.semantic.background.primary};
  
  ${({ $hoverable, $disabled, theme }) =>
    $hoverable && !$disabled &&
    `
    &:hover {
      background: ${theme.colors.palette.neutral[50]};
    }
  `}
  
  ${({ $clickable, $disabled }) =>
    $clickable && !$disabled &&
    `
    cursor: pointer;
  `}
  
  ${({ $disabled, theme }) =>
    $disabled &&
    `
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  `}
  
  transition: background 150ms ease;
  
  /* Border between rows */
  & + & {
    border-top: ${({ theme }) => theme.borderWidth[1]} solid ${({ theme }) => theme.colors.palette.neutral[200]};
  }
`;
