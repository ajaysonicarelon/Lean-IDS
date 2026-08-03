import { ReactNode } from 'react';

export type SegmentControllerSize = 'small' | 'medium' | 'large';

export interface SegmentControllerProps {
  value?: string | number;
  size?: SegmentControllerSize;
  selected?: boolean;
  disabled?: boolean;
  leadIcon?: ReactNode;
  trailIcon?: ReactNode;
  showLeadIcon?: boolean;
  showTrailIcon?: boolean;
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  'aria-selected'?: boolean;
  'aria-disabled'?: boolean;
  role?: string;
  tabIndex?: number;
  id?: string;
  [key: string]: any;
}

export interface SegmentControllerGroupProps {
  size?: SegmentControllerSize;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (value: string | number) => void;
  disabled?: boolean;
  children: ReactNode;
  orientation?: 'horizontal' | 'vertical';
  width?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

export type SegmentControllerItemProps = SegmentControllerProps;
