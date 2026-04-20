/**
 * Textarea Component Types
 */

export type TextareaSize = 'default';

export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
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
}
