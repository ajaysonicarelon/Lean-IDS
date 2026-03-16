import React from 'react';
import { BreadcrumbSeparatorProps } from './BreadcrumbSeparator.types';
import { StyledSeparator } from './BreadcrumbSeparator.styles';

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SlashIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2L6 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const BreadcrumbSeparator: React.FC<BreadcrumbSeparatorProps> = ({
  variant = 'slash',
  className,
}) => {
  return (
    <StyledSeparator className={className} aria-hidden="true">
      {variant === 'arrow' ? <ArrowIcon /> : <SlashIcon />}
    </StyledSeparator>
  );
};
