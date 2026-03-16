/**
 * FieldImportance Component
 * 
 * Displays field importance indicators for form inputs:
 * - Mandatory: "(Required)" in red
 * - Optional: "(Optional)" in gray
 * - Asterisk: "*" in red
 */

import React from 'react';
import { FieldImportanceProps } from './FieldImportance.types';
import { FieldImportanceContainer } from './FieldImportance.styles';

export const FieldImportance: React.FC<FieldImportanceProps> = ({
  variant = 'mandatory',
  style = 'normal',
  text,
  className,
}) => {
  const getDisplayText = () => {
    if (variant === 'asterisk') return '*';
    if (variant === 'optional') return text || '(Optional)';
    return text || '(Required)';
  };

  return (
    <FieldImportanceContainer
      $variant={variant}
      $style={style}
      className={className}
    >
      {getDisplayText()}
    </FieldImportanceContainer>
  );
};

FieldImportance.displayName = 'FieldImportance';
