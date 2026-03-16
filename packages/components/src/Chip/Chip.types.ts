/**
 * Chip component types
 */

import { ReactNode } from 'react';

export type ChipSize = 'small' | 'medium' | 'large';

export type ChipVariant = 'filled' | 'outlined';

export type ChipType = 'default' | 'success' | 'warning' | 'error' | 'neutral';

export interface ChipProps {
  /**
   * Chip label text
   */
  label: string;
  
  /**
   * Size variant
   * @default 'small'
   */
  size?: ChipSize;
  
  /**
   * Visual variant
   * @default 'filled'
   */
  variant?: ChipVariant;
  
  /**
   * Type/color scheme
   * @default 'default'
   */
  type?: ChipType;
  
  /**
   * Leading icon element
   */
  leadingIcon?: ReactNode;
  
  /**
   * Trailing icon element (typically close/remove icon)
   */
  trailingIcon?: ReactNode;
  
  /**
   * Click handler for the chip
   */
  onClick?: () => void;
  
  /**
   * Click handler for trailing icon (e.g., remove action)
   */
  onTrailingIconClick?: (e: React.MouseEvent) => void;
  
  /**
   * Whether the chip is disabled
   */
  disabled?: boolean;
  
  /**
   * Custom class name
   */
  className?: string;
}
