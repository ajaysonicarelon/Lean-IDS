/**
 * Type definitions for TableRow component
 */

import React, { ElementType } from 'react';

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  /** Polymorphic component type (default: 'tr') */
  as?: ElementType;
  /** Selected state */
  selected?: boolean;
  /** Hover state */
  hoverable?: boolean;
  /** Clickable state */
  clickable?: boolean;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLTableRowElement>) => void;
  /** Custom className */
  className?: string;
  /** Custom style */
  style?: React.CSSProperties;
  /** Children */
  children?: React.ReactNode;
  /** Disabled state */
  disabled?: boolean;
  /** ARIA role */
  role?: string;
  /** ARIA selected */
  'aria-selected'?: boolean;
  /** ARIA label */
  'aria-label'?: string;
}
