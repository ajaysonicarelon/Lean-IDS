export interface BreadcrumbProps {
  label: string;
  isActive?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
}
