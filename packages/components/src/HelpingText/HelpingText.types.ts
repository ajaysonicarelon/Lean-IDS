/**
 * HelpingText component types
 */

export type HelpingTextState = 'default' | 'info' | 'warning' | 'error';

export type HelpingTextSize = 'default' | 'large';

export interface HelpingTextProps {
  /**
   * Helper text message
   */
  text: string;
  
  /**
   * State of the helper text
   * @default 'default'
   */
  state?: HelpingTextState;
  
  /**
   * Size variant
   * @default 'default'
   */
  size?: HelpingTextSize;
  
  /**
   * Whether to show the leading icon
   * @default true
   */
  showIcon?: boolean;
  
  /**
   * Custom class name
   */
  className?: string;
}
