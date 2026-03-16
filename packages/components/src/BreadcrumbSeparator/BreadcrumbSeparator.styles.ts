import styled from 'styled-components';

export const StyledSeparator = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.colors.palette.neutral[400]};
  user-select: none;

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`;
