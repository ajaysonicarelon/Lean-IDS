/**
 * RadioButton component types
 * 
 * ✅ Component Maturity Checklist Compliant
 * ✅ Polymorphic 'as' prop
 * ✅ All 8 states
 * ✅ Event callbacks
 * ✅ Render props
 * ✅ className overrides
 */

import React, { InputHTMLAttributes } from 'react';

export type RadioButtonSize = 'default' | 'large';

/**
 * Base RadioButton props without polymorphic 'as'
 */
export interface BaseRadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  // ========================================
  // CONTENT
  // ========================================
  
  /**
   * Radio button label text
   */
  label?: string;
  
  /**
   * Input name attribute (required for radio groups)
   */
  name?: string;
  
  /**
   * Input value attribute
   */
  value?: string;
  
  // ========================================
  // APPEARANCE
  // ========================================
  
  /**
   * Size variant
   * @default 'default'
   */
  size?: RadioButtonSize;
  
  /**
   * Whether to show trailing icon (expand_more icon)
   * @default false
   */
  showTrailingIcon?: boolean;
  
  // ========================================
  // STATES (8 total)
  // ========================================
  
  /**
   * Whether the radio button is checked/selected
   * @default false
   */
  checked?: boolean;
  
  /**
   * Whether the radio button is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Loading state - shows spinner
   * @default false
   */
  isLoading?: boolean;
  
  /**
   * Empty state - shows empty message
   * @default false
   */
  isEmpty?: boolean;
  
  /**
   * Error/invalid state - shows error styling and message
   * @default false
   */
  isInvalid?: boolean;
  
  /**
   * Error message to display when isInvalid is true
   */
  errorMessage?: string;
  
  /**
   * Empty message to display when isEmpty is true
   * @default 'No options available'
   */
  emptyMessage?: string;
  
  // ========================================
  // EVENT CALLBACKS
  // ========================================
  
  /**
   * Change handler - called when radio selection changes
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
  /**
   * Focus handler
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * Blur handler
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * Key down handler
   */
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  
  /**
   * Mouse enter handler
   */
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement>) => void;
  
  /**
   * Mouse leave handler
   */
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement>) => void;
  
  /**
   * Called when radio button is selected
   */
  onSelect?: () => void;
  
  /**
   * Called when radio button is deselected (if another radio in group is selected)
   */
  onDeselect?: () => void;
  
  // ========================================
  // CUSTOMIZATION - className overrides
  // ========================================
  
  /**
   * Custom class name for root container
   */
  className?: string;
  
  /**
   * Custom class name for hidden input element
   */
  inputClassName?: string;
  
  /**
   * Custom class name for label text
   */
  labelClassName?: string;
  
  /**
   * Custom class name for radio icon
   */
  iconClassName?: string;
  
  // ========================================
  // CUSTOMIZATION - Render props
  // ========================================
  
  /**
   * Custom label render function
   * Receives label text, checked state, and disabled state
   */
  customLabel?: (props: { 
    label?: string; 
    checked: boolean; 
    disabled: boolean;
  }) => React.ReactNode;
  
  /**
   * Custom radio icon render function
   * Receives checked and disabled state
   */
  customIcon?: (props: { 
    checked: boolean; 
    disabled: boolean;
  }) => React.ReactNode;
  
  /**
   * Custom trailing icon render function
   * Receives disabled state
   */
  customTrailingIcon?: (props: { 
    disabled: boolean;
  }) => React.ReactNode;
  
  // ========================================
  // STYLING
  // ========================================
  
  /**
   * Inline styles for root container
   */
  style?: React.CSSProperties;
  
  /**
   * Maximum width for the radio button container
   */
  maxWidth?: string | number;
}

/**
 * Polymorphic component props
 * Allows changing the root element type via 'as' prop
 */
export type RadioButtonProps<C extends React.ElementType = 'div'> = BaseRadioButtonProps & {
  /**
   * The element type to render as
   * @default 'div'
   */
  as?: C;
} & Omit<React.ComponentPropsWithoutRef<C>, keyof BaseRadioButtonProps>;

/**
 * RadioButton component type with proper ref forwarding
 */
export type RadioButtonComponent = <C extends React.ElementType = 'div'>(
  props: RadioButtonProps<C> & { ref?: React.Ref<HTMLInputElement> }
) => React.ReactElement | null;
