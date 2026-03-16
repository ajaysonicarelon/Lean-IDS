export type BadgeType = 'info' | 'success' | 'warning' | 'error' | 'neutral';

export type BadgeStyle = 'default' | 'subdued' | 'outlined';

export interface BadgeProps {
  label: string;
  type?: BadgeType;
  style?: BadgeStyle;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  showLeadingIcon?: boolean;
  showTrailingIcon?: boolean;
  className?: string;
}
