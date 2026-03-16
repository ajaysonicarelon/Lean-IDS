import React from 'react';
import { BreadcrumbsProps } from './Breadcrumbs.types';
import { StyledBreadcrumbs } from './Breadcrumbs.styles';
import { Breadcrumb } from '../Breadcrumb';
import { BreadcrumbSeparator } from '../BreadcrumbSeparator';

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator = 'slash',
  className,
}) => {
  return (
    <StyledBreadcrumbs aria-label="Breadcrumb" className={className}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <Breadcrumb
              label={item.label}
              href={item.href}
              onClick={item.onClick}
              isActive={isLast}
            />
            {!isLast && <BreadcrumbSeparator variant={separator} />}
          </React.Fragment>
        );
      })}
    </StyledBreadcrumbs>
  );
};
