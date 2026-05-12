import React from 'react';
import { PageHeaderProps } from './PageHeader.types';
import { PageHeaderContainer, PageTitle, PageDescription } from './PageHeader.styles';

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <PageHeaderContainer className={className}>
      <PageTitle>{title}</PageTitle>
      {description && <PageDescription>{description}</PageDescription>}
    </PageHeaderContainer>
  );
};
