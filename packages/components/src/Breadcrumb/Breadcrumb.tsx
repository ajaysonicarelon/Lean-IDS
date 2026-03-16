import React from 'react';
import { BreadcrumbProps } from './Breadcrumb.types';
import { StyledBreadcrumb } from './Breadcrumb.styles';

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  label,
  isActive = false,
  href,
  onClick,
  className,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (isActive) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  if (href && !isActive) {
    return (
      <StyledBreadcrumb
        as="a"
        href={href}
        $isActive={isActive}
        onClick={handleClick}
        className={className}
        aria-current={isActive ? 'page' : undefined}
      >
        {label}
      </StyledBreadcrumb>
    );
  }

  return (
    <StyledBreadcrumb
      $isActive={isActive}
      onClick={handleClick}
      className={className}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </StyledBreadcrumb>
  );
};
