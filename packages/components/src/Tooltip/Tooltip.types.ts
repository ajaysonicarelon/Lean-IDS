/**
 * Tooltip component types
 */

import { CSSProperties, ElementType, HTMLAttributes, ReactNode } from 'react';

export type TooltipVariant = 'default' | 'pointer';
export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  // ============================================================================
  // CONTENT
  // ============================================================================
  
  /** Tooltip heading (main text) */
  heading?: string;
  
  /** Tooltip description (secondary text) */
  description?: string;
  
  /** Custom heading content (render prop) */
  customHeading?: ReactNode | ((props: any) => ReactNode);
  
  /** Custom description content (render prop) */
  customDescription?: ReactNode | ((props: any) => ReactNode);
  
  // ============================================================================
  // POSITIONING
  // ============================================================================
  
  /** X position in pixels (screen coordinates) */
  x?: number;
  
  /** Y position in pixels (screen coordinates) */
  y?: number;
  
  /** Tooltip variant - 'default' (rectangular) or 'pointer' (with triangle) */
  variant?: TooltipVariant;
  
  /** Position of the pointer triangle (only for 'pointer' variant) */
  pointerPosition?: TooltipPosition;
  
  // ============================================================================
  // STATES
  // ============================================================================
  
  /** Whether the tooltip is visible */
  visible?: boolean;
  
  /** Loading state */
  isLoading?: boolean;
  
  /** Empty state */
  isEmpty?: boolean;
  
  /** Error state */
  isInvalid?: boolean;
  
  /** Disabled state */
  disabled?: boolean;
  
  /** Empty state message */
  emptyMessage?: string;
  
  /** Error message */
  errorMessage?: string;
  
  // ============================================================================
  // POLYMORPHISM & COMPOSITION
  // ============================================================================
  
  /** Render as different element */
  as?: ElementType;
  
  // ============================================================================
  // STYLING OVERRIDES
  // ============================================================================
  
  /** Custom className for container */
  className?: string;
  
  /** Custom className for heading */
  headingClassName?: string;
  
  /** Custom className for description */
  descriptionClassName?: string;
  
  /** Custom inline styles */
  style?: CSSProperties;
  
  /** Max width override (uses design tokens by default) */
  maxWidth?: string;
  
  // ============================================================================
  // EVENT CALLBACKS
  // ============================================================================
  
  /** Called when tooltip opens */
  onOpen?: () => void;
  
  /** Called when tooltip closes */
  onClose?: () => void;
  
  /** Called after tooltip open animation completes */
  onAfterOpen?: () => void;
  
  /** Called after tooltip close animation completes */
  onAfterClose?: () => void;
  
  /** Called on mouse enter */
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
  
  /** Called on mouse leave */
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
  
  /** Called on Escape key press */
  onEscape?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}
