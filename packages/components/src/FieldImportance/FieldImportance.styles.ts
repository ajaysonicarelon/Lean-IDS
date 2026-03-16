/**
 * FieldImportance styled components
 */

import styled from 'styled-components';
import { FieldImportanceVariant, FieldImportanceStyle } from './FieldImportance.types';

interface StyledFieldImportanceProps {
  $variant: FieldImportanceVariant;
  $style: FieldImportanceStyle;
}

export const FieldImportanceContainer = styled.span<StyledFieldImportanceProps>`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  line-height: ${({ theme }) => theme.lineHeights[16]};
  white-space: nowrap;
  
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-style: ${({ $style }) => ($style === 'italic' ? 'italic' : 'normal')};
  
  color: ${({ theme, $variant }) =>
    $variant === 'optional'
      ? theme.colors.palette.neutral[600]
      : theme.colors.palette.error[500]};
`;
