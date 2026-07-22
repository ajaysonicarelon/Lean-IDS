/**
 * Textarea Component Types
 */

import { ElementType, CSSProperties } from 'react';

export type TextareaSize = 'default';

export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /**
   * Polymorphic prop - render as different element
   * @default 'textarea'
   */
  as?: ElementType;
  /** Label text for the textarea */
  label?: string;
  
  /** Helper text displayed below the textarea */
  helperText?: string;
  
  /** Error message - overrides helperText when present */
  errorMessage?: string;
  
  /** Whether the textarea is required */
  required?: boolean;
  
  /** Whether the textarea is disabled */
  disabled?: boolean;
  
  /** Whether the textarea has an error state */
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
   * @default 'No data available'
   */
  emptyMessage?: string;
  
  /** Whether to show the label */
  showLabel?: boolean;
  
  /** Whether to show the field importance indicator (asterisk) */
  showFieldImportance?: boolean;
  
  /** Field importance variant */
  fieldImportanceVariant?: 'mandatory' | 'optional';
  
  /** Whether to show helper/error text */
  showInlineText?: boolean;
  
  /** Icon to display at the start of the textarea */
  leadingIcon?: React.ReactNode;
  
  /** Icon to display at the end of the textarea (resize handle area) */
  trailingIcon?: React.ReactNode;
  
  /** Whether the textarea should take full width of container */
  fullWidth?: boolean;
  
  /** Minimum number of rows */
  rows?: number;
  
  /** Maximum number of rows before scrolling */
  maxRows?: number;
  
  /** Whether the textarea is resizable */
  resizable?: boolean;
  
  /**
   * Custom inline styles for root container
   */
  style?: CSSProperties;
  
  /**
   * Custom class name for label
   */
  labelClassName?: string;
  
  /**
   * Custom class name for textarea wrapper
   */
  wrapperClassName?: string;
  
  /**
   * Custom class name for textarea element
   */
  textareaClassName?: string;
  
  /**
   * Custom class name for helper text
   */
  helperTextClassName?: string;
  
  /**
   * Callback fired after focus animation completes
   */
  onAfterFocus?: () => void;
  
  /**
   * Callback fired after blur animation completes
   */
  onAfterBlur?: () => void;
  
  /**
   * Callback fired when textarea value is cleared
   */
  onClear?: () => void;
  
  /**
   * Callback fired on Escape key press
   */
  onEscape?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}
