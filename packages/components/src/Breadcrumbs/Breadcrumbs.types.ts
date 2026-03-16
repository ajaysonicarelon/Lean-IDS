import { SeparatorVariant } from '../BreadcrumbSeparator/BreadcrumbSeparator.types';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: SeparatorVariant;
  className?: string;
}
