import styled from 'styled-components';

interface StyledBreadcrumbProps {
  $isActive: boolean;
}

export const StyledBreadcrumb = styled.span<StyledBreadcrumbProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 16px;
  color: ${({ $isActive, theme }) =>
    $isActive
      ? theme.colors.palette.primary[500]
      : theme.colors.palette.neutral[400]};
  cursor: ${({ $isActive }) => ($isActive ? 'default' : 'pointer')};
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ $isActive, theme }) =>
      $isActive
        ? theme.colors.palette.primary[500]
        : theme.colors.palette.primary[400]};
  }
`;
