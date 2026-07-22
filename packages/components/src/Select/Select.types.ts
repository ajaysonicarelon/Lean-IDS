/**
 * Select component types
 */

import { ElementType, CSSProperties, HTMLAttributes } from 'react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Polymorphic prop - render as different element
   * @default 'div'
   */
  as?: ElementType;
  
  /** Field label */
  label: string;
  
  /** Placeholder text */
  placeholder?: string;
  
  /** Array of options */
  options: SelectOption[];
  
  /** Selected value(s) */
  value?: string | string[];
  
  /** Change handler */
  onChange?: (value: string | string[]) => void;
  
  /** Enable multiple selection */
  multiple?: boolean;
  
  /** Enable search/filter */
  searchable?: boolean;
  
  /** Show leading search icon */
  showLeadingIcon?: boolean;
  
  /** Show trailing dropdown icon */
  showTrailingIcon?: boolean;
  
  /** Required field */
  required?: boolean;
  
  /** Disabled state */
  disabled?: boolean;
  
  /** Error state */
  error?: boolean;
  
  /**
   * Invalid state (alias for error)
   * @default false
   */
  isInvalid?: boolean;
  
  /**
   * Loading state - shows loading indicator
   * @default false
   */
  isLoading?: boolean;
  
  /**
   * Empty state - shows empty state message
   * @default false
   */
  isEmpty?: boolean;
  
  /**
   * Empty state message
   * @default 'No options available'
   */
  emptyMessage?: string;
  
  /** Helper text */
  helperText?: string;
  
  /** Helper text state */
  helperTextState?: 'default' | 'info' | 'warning' | 'error';
  
  /** Size */
  size?: 'xsmall' | 'small' | 'default' | 'large';
  
  /** Custom className for root container */
  className?: string;
  
  /** Custom inline styles for root container */
  style?: CSSProperties;
  
  /** Custom className for label */
  labelClassName?: string;
  
  /** Custom className for dropdown container */
  dropdownClassName?: string;
  
  /** Custom className for option items */
  optionClassName?: string;
  
  /** Custom className for helper text */
  helperTextClassName?: string;
  
  /** Show selection indicator (radio/checkbox) */
  showSelectionIndicator?: boolean;
  
  /** Callback fired when dropdown opens */
  onOpen?: () => void;
  
  /** Callback fired when dropdown closes */
  onClose?: () => void;
  
  /** Callback fired after dropdown open animation completes */
  onAfterOpen?: () => void;
  
  /** Callback fired after dropdown close animation completes */
  onAfterClose?: () => void;
  
  /** Callback fired when search query changes */
  onSearchChange?: (query: string) => void;
  
  /** Callback fired on Enter key press */
  onEnter?: (event: React.KeyboardEvent) => void;
  
  /** Callback fired on Escape key press */
  onEscape?: (event: React.KeyboardEvent) => void;
}
