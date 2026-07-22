/**
 * Toggle component types
 * 
 * ✅ Component Maturity Checklist Compliant
 * ✅ Polymorphic 'as' prop
 * ✅ All 8 states
 * ✅ Event callbacks
 * ✅ Render props
 * ✅ className overrides
 */

import React, { InputHTMLAttributes } from 'react';

/**
 * Base Toggle props without polymorphic 'as'
 */
export interface BaseToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  // ========================================
  // CONTENT
  // ========================================
  
  /**
   * Toggle label text
   */
  label?: string;
  
  /**
   * Input name attribute
   */
  name?: string;
  
  /**
   * Input value attribute
   */
  value?: string;
  
  // ========================================
  // STATES (8 total)
  // ========================================
  
  /**
   * Whether the toggle is checked (on)
   * @default false
   */
  checked?: boolean;
  
  /**
   * Whether the toggle is disabled
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
   * Change handler - called when toggle state changes
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
   * Called when toggle is turned on
   */
  onToggleOn?: () => void;
  
  /**
   * Called when toggle is turned off
   */
  onToggleOff?: () => void;
  
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
   * Custom class name for toggle track
   */
  trackClassName?: string;
  
  /**
   * Custom class name for toggle thumb
   */
  thumbClassName?: string;
  
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
   * Custom track render function
   * Receives checked and disabled state
   */
  customTrack?: (props: { 
    checked: boolean; 
    disabled: boolean;
  }) => React.ReactNode;
  
  /**
   * Custom thumb render function
   * Receives checked and disabled state
   */
  customThumb?: (props: { 
    checked: boolean; 
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
   * Maximum width for the toggle container
   */
  maxWidth?: string | number;
}

/**
 * Polymorphic component props
 * Allows changing the root element type via 'as' prop
 */
export type ToggleProps<C extends React.ElementType = 'div'> = BaseToggleProps & {
  /**
   * The element type to render as
   * @default 'div'
   */
  as?: C;
} & Omit<React.ComponentPropsWithoutRef<C>, keyof BaseToggleProps>;

/**
 * Toggle component type with proper ref forwarding
 */
export type ToggleComponent = <C extends React.ElementType = 'div'>(
  props: ToggleProps<C> & { ref?: React.Ref<HTMLInputElement> }
) => React.ReactElement | null;
