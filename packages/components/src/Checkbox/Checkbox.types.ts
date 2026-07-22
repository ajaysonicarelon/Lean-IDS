/**
 * Checkbox Component Types
 * 
 * Enterprise-grade checkbox following Component Maturity Checklist.
 */

export type CheckboxSize = 'default' | 'large';

/**
 * Checkbox Props
 * 
 * @example
 * ```tsx
 * <Checkbox
 *   label="Accept terms"
 *   checked={accepted}
 *   onChange={handleChange}
 * />
 * ```
 */
export interface CheckboxProps extends Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
  // ============================================================================
  // POLYMORPHISM & COMPOSITION
  // ============================================================================
  
  /**
   * Polymorphic prop - change the root element type
   * @default 'div'
   */
  as?: React.ElementType;
  
  // ============================================================================
  // CORE PROPS
  // ============================================================================
  
  /**
   * Checkbox label text
   */
  label?: string;
  
  /**
   * Size variant
   * @default 'default'
   */
  size?: CheckboxSize;
  
  /**
   * Whether the checkbox is checked
   * @default false
   */
  checked?: boolean;
  
  /**
   * Input name attribute
   */
  name?: string;
  
  /**
   * Input value attribute
   */
  value?: string;
  
  /**
   * Whether to show trailing icon (info icon)
   * @default false
   */
  showTrailingIcon?: boolean;
  
  // ============================================================================
  // STATES (8 States Required)
  // ============================================================================
  
  /**
   * Disabled state - prevents interaction
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
   * Invalid/error state - shows error styling
   * @default false
   */
  isInvalid?: boolean;
  
  /**
   * Error message to display in error state
   */
  errorMessage?: string;
  
  /**
   * Empty message to display in empty state
   */
  emptyMessage?: string;
  
  // ============================================================================
  // CUSTOMIZATION & OVERRIDES
  // ============================================================================
  
  /**
   * Additional CSS class for root container
   */
  className?: string;
  
  /**
   * Additional CSS class for checkbox input
   */
  inputClassName?: string;
  
  /**
   * Additional CSS class for label
   */
  labelClassName?: string;
  
  /**
   * Additional CSS class for trailing icon
   */
  iconClassName?: string;
  
  /**
   * Inline styles for root container
   */
  style?: React.CSSProperties;
  
  /**
   * Maximum width for checkbox container
   */
  maxWidth?: string;
  
  // ============================================================================
  // RENDER PROPS & CUSTOMIZATION
  // ============================================================================
  
  /**
   * Custom label renderer
   * @param props - Label props including label text
   * @returns Custom label element
   */
  customLabel?: (props: { label?: string; checked: boolean; disabled: boolean }) => React.ReactNode;
  
  /**
   * Custom checkbox icon renderer
   * @param props - Icon props including checked state
   * @returns Custom icon element
   */
  customIcon?: (props: { checked: boolean; disabled: boolean }) => React.ReactNode;
  
  /**
   * Custom trailing icon renderer
   * @param props - Icon props
   * @returns Custom trailing icon element
   */
  customTrailingIcon?: (props: { disabled: boolean }) => React.ReactNode;
  
  // ============================================================================
  // EVENT CALLBACKS
  // ============================================================================
  
  /**
   * Change handler
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
   * Called when checkbox becomes checked
   */
  onCheck?: () => void;
  
  /**
   * Called when checkbox becomes unchecked
   */
  onUncheck?: () => void;
}
