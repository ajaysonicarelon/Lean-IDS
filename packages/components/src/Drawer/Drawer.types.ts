/**
 * Drawer component types
 */

import { ReactNode, HTMLAttributes, CSSProperties, ElementType } from 'react';

export interface DrawerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  // ============================================================================
  // REQUIRED PROPS
  // ============================================================================
  
  /** Whether the drawer is open */
  isOpen: boolean;
  
  /** Callback when drawer should close */
  onClose: () => void;
  
  /** Drawer title */
  title: string;
  
  /** Drawer body content */
  children: ReactNode;
  
  // ============================================================================
  // POLYMORPHISM
  // ============================================================================
  
  /** Render drawer container as a different element */
  as?: ElementType;
  
  // ============================================================================
  // CONTENT & LAYOUT
  // ============================================================================
  
  /** Drawer description/subtitle */
  description?: string;
  
  /** Drawer position */
  position?: 'left' | 'right';
  
  /** 
   * Drawer width (e.g., '400px', '50%', 'min(90vw, 600px)')
   * @default 'min(90vw, 37.5rem)' (600px max)
   */
  width?: string;
  
  /** 
   * Maximum width constraint
   * @default '90vw'
   */
  maxWidth?: string;
  
  /** Minimum width constraint */
  minWidth?: string;
  
  // ============================================================================
  // STATES
  // ============================================================================
  
  /** Loading state - shows spinner overlay */
  isLoading?: boolean;
  
  /** Error state - shows error message */
  isInvalid?: boolean;
  
  /** Error message to display when isInvalid is true */
  errorMessage?: string;
  
  /** Empty state - shows empty message */
  isEmpty?: boolean;
  
  /** Empty state message */
  emptyMessage?: string;
  
  /** Disabled state - prevents all interactions */
  disabled?: boolean;
  
  // ============================================================================
  // VISIBILITY CONTROLS
  // ============================================================================
  
  /** 
   * Show header section
   * @default true
   */
  showHeader?: boolean;
  
  /** 
   * Show footer section
   * @default true
   */
  showFooter?: boolean;
  
  // ============================================================================
  // FOOTER BUTTONS
  // ============================================================================
  
  /** Show reset button */
  showReset?: boolean;
  
  /** Reset button label */
  resetLabel?: string;
  
  /** Reset button callback */
  onReset?: () => void;
  
  /** Show cancel button */
  showCancel?: boolean;
  
  /** Cancel button label */
  cancelLabel?: string;
  
  /** Cancel button callback */
  onCancel?: () => void;
  
  /** Show submit button */
  showSubmit?: boolean;
  
  /** Submit button label */
  submitLabel?: string;
  
  /** Submit button callback */
  onSubmit?: () => void;
  
  /** Submit button type */
  submitType?: 'default' | 'safe' | 'warning' | 'alert';
  
  /** Submit button loading state */
  isSubmitting?: boolean;
  
  // ============================================================================
  // CUSTOMIZATION SLOTS
  // ============================================================================
  
  /** Custom header content (replaces default header) */
  customHeader?: ReactNode | ((props: { onClose: () => void }) => ReactNode);
  
  /** Custom footer content (replaces default footer) */
  customFooter?: ReactNode | ((props: { onClose: () => void }) => ReactNode);
  
  /** Custom loading overlay */
  customLoadingOverlay?: ReactNode;
  
  /** Custom empty state */
  customEmptyState?: ReactNode;
  
  /** Custom error state */
  customErrorState?: ReactNode;
  
  // ============================================================================
  // BEHAVIOR
  // ============================================================================
  
  /** Close on overlay click */
  closeOnOverlayClick?: boolean;
  
  /** Close on escape key */
  closeOnEscape?: boolean;
  
  /** Auto-focus first focusable element on open */
  autoFocus?: boolean;
  
  /** Return focus to trigger element on close */
  returnFocus?: boolean;
  
  /** Prevent body scroll when drawer is open */
  preventBodyScroll?: boolean;
  
  // ============================================================================
  // EVENT CALLBACKS
  // ============================================================================
  
  /** Callback fired when drawer starts opening */
  onOpen?: () => void;
  
  /** Callback fired after drawer finishes opening (after animation) */
  onAfterOpen?: () => void;
  
  /** Callback fired after drawer finishes closing (after animation) */
  onAfterClose?: () => void;
  
  /** Callback fired when overlay is clicked */
  onOverlayClick?: () => void;
  
  /** Callback fired when escape key is pressed */
  onEscapeKeyDown?: () => void;
  
  // ============================================================================
  // STYLING OVERRIDES
  // ============================================================================
  
  /** Custom className for drawer container */
  className?: string;
  
  /** Custom inline styles for drawer container */
  style?: CSSProperties;
  
  /** Custom className for overlay */
  overlayClassName?: string;
  
  /** Custom inline styles for overlay */
  overlayStyle?: CSSProperties;
  
  /** Custom className for header */
  headerClassName?: string;
  
  /** Custom inline styles for header */
  headerStyle?: CSSProperties;
  
  /** Custom className for body */
  bodyClassName?: string;
  
  /** Custom inline styles for body */
  bodyStyle?: CSSProperties;
  
  /** Custom className for footer */
  footerClassName?: string;
  
  /** Custom inline styles for footer */
  footerStyle?: CSSProperties;
  
  // ============================================================================
  // ACCESSIBILITY
  // ============================================================================
  
  /** ARIA label for the drawer */
  'aria-label'?: string;
  
  /** ID of element that labels the drawer */
  'aria-labelledby'?: string;
  
  /** ID of element that describes the drawer */
  'aria-describedby'?: string;
}
