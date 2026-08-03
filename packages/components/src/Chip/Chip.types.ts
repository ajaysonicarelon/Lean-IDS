/**
 * Chip component types
 */

import { ReactNode, ElementType, HTMLAttributes, CSSProperties, MouseEvent } from 'react';

export type ChipSize = 'small' | 'medium' | 'large';

export type ChipVariant = 'filled' | 'outlined';

export type ChipType = 'default' | 'success' | 'warning' | 'error' | 'neutral';

export interface ChipProps extends Omit<HTMLAttributes<HTMLElement>, 'onClick'> {
  /**
   * Chip label text or custom content
   */
  label: string | ReactNode;
  
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
   * Polymorphic component type - render as different HTML element
   * @default 'div'
   */
  as?: ElementType;
  
  /**
   * Leading icon element
   */
  leadingIcon?: ReactNode;
  
  /**
   * Trailing icon element (typically close/remove icon)
   */
  trailingIcon?: ReactNode;
  
  /**
   * Custom render function for leading icon slot
   */
  renderLeadingIcon?: (props: { size: ChipSize; type: ChipType }) => ReactNode;
  
  /**
   * Custom render function for trailing icon slot
   */
  renderTrailingIcon?: (props: { size: ChipSize; type: ChipType }) => ReactNode;
  
  /**
   * Custom render function for label slot
   */
  renderLabel?: (label: string | ReactNode) => ReactNode;
  
  /**
   * Click handler for the chip
   */
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  
  /**
   * Click handler for trailing icon (e.g., remove action)
   */
  onTrailingIconClick?: (e: MouseEvent<HTMLElement>) => void;
  
  /**
   * Remove handler (legacy support)
   * @deprecated Use onTrailingIconClick instead
   */
  onRemove?: () => void;
  
  /**
   * Whether the chip is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Whether the chip is in loading state
   * @default false
   */
  isLoading?: boolean;
  
  /**
   * Whether the chip is in error state
   * @default false
   */
  isInvalid?: boolean;
  
  /**
   * Whether the chip is in active/selected state
   * @default false
   */
  isActive?: boolean;
  
  /**
   * Error message to display
   */
  errorMessage?: string;
  
  /**
   * Loading text for screen readers
   * @default 'Loading'
   */
  loadingText?: string;
  
  /**
   * Custom class name for root container
   */
  className?: string;
  
  /**
   * Custom class name for label
   */
  labelClassName?: string;
  
  /**
   * Custom class name for leading icon wrapper
   */
  leadingIconClassName?: string;
  
  /**
   * Custom class name for trailing icon wrapper
   */
  trailingIconClassName?: string;
  
  /**
   * Custom inline styles
   */
  style?: CSSProperties;
  
  /**
   * Custom width (e.g., '200px', '50%', 'min(90vw, 600px)')
   */
  width?: string;
  
  /**
   * Maximum width constraint
   */
  maxWidth?: string;
  
  /**
   * Minimum width constraint
   */
  minWidth?: string;
  
  /**
   * ARIA label for accessibility
   */
  'aria-label'?: string;
  
  /**
   * ARIA role override
   */
  role?: string;
  
  /**
   * Tab index for keyboard navigation
   */
  tabIndex?: number;
}
