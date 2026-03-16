/**
 * FieldImportance component types
 */

export type FieldImportanceVariant = 'mandatory' | 'optional' | 'asterisk';

export type FieldImportanceStyle = 'normal' | 'italic';

export interface FieldImportanceProps {
  /**
   * Importance variant
   * @default 'mandatory'
   */
  variant?: FieldImportanceVariant;
  
  /**
   * Text style
   * @default 'normal'
   */
  style?: FieldImportanceStyle;
  
  /**
   * Custom text (only for mandatory and optional variants)
   */
  text?: string;
  
  /**
   * Custom class name
   */
  className?: string;
}
