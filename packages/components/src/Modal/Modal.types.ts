/**
 * Modal component types
 */

import { ReactNode, CSSProperties, HTMLAttributes, ElementType } from 'react';

/**
 * Explicit TypeScript interface for Modal props
 * Meets Component Maturity Checklist requirements
 */
export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'children'> {
  // ============================================================================
  // REQUIRED PROPS
  // ============================================================================
  
  /** Whether the modal is open */
  isOpen: boolean;
  
  /** Callback when modal should close */
  onClose: () => void;
  
  /** Modal title - can be string or ReactNode for custom rendering */
  title: ReactNode;
  
  /** Modal body content - supports any ReactNode */
  children: ReactNode;

  // ============================================================================
  // POLYMORPHISM & COMPOSITION
  // ============================================================================
  
  /** Polymorphic 'as' prop to render as different element */
  as?: ElementType;
  
  // ============================================================================
  // CONTENT & SLOTS
  // ============================================================================
  
  /** Modal description/subtitle */
  description?: ReactNode;
  
  /** Custom header content (replaces default header) */
  customHeader?: ReactNode | ((props: { onClose: () => void }) => ReactNode);
  
  /** Custom footer content (replaces default footer) */
  customFooter?: ReactNode | ((props: { onClose: () => void; onSubmit?: () => void; onReset?: () => void }) => ReactNode);
  
  /** Custom close button (replaces default close button) */
  customCloseButton?: ReactNode | ((props: { onClose: () => void }) => ReactNode);

  // ============================================================================
  // LAYOUT & RESPONSIVENESS (NO HARDCODED PIXELS)
  // ============================================================================
  
  /** Modal width - use CSS units (%, rem, vw) or 'auto' for intrinsic sizing */
  width?: string;
  
  /** Modal max-width - defaults to responsive value */
  maxWidth?: string;
  
  /** Modal height - use CSS units (%, rem, vh) or 'auto' for intrinsic sizing */
  height?: string;
  
  /** Modal max-height - defaults to responsive value */
  maxHeight?: string;
  
  /** Modal size preset (overrides width/height) */
  size?: 'small' | 'medium' | 'large' | 'fullscreen';

  // ============================================================================
  // BUTTON CONFIGURATION
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
  
  /** Disable submit button */
  submitDisabled?: boolean;
  
  /** Disable cancel button */
  cancelDisabled?: boolean;
  
  /** Disable reset button */
  resetDisabled?: boolean;

  // ============================================================================
  // BEHAVIOR
  // ============================================================================
  
  /** Close on overlay click */
  closeOnOverlayClick?: boolean;
  
  /** Close on escape key */
  closeOnEscape?: boolean;
  
  /** Prevent body scroll when modal is open */
  preventBodyScroll?: boolean;
  
  /** Enable focus trap (keeps focus within modal) */
  enableFocusTrap?: boolean;
  
  /** Auto-focus first focusable element on open */
  autoFocus?: boolean;
  
  /** Return focus to trigger element on close */
  returnFocus?: boolean;

  // ============================================================================
  // STATES (Component Maturity Requirement)
  // ============================================================================
  
  /** Loading state - shows loading indicator */
  isLoading?: boolean;
  
  /** Invalid/error state - shows error styling */
  isInvalid?: boolean;
  
  /** Error message to display when isInvalid is true */
  errorMessage?: string;
  
  /** Empty state - shows when no content */
  isEmpty?: boolean;
  
  /** Empty state message */
  emptyMessage?: string;

  // ============================================================================
  // EVENT CALLBACKS (Explicit)
  // ============================================================================
  
  /** Called when modal opens */
  onOpen?: () => void;
  
  /** Called after modal animation completes */
  onAfterOpen?: () => void;
  
  /** Called after modal closes */
  onAfterClose?: () => void;
  
  /** Called when overlay is clicked */
  onOverlayClick?: (event: React.MouseEvent) => void;
  
  /** Called when escape key is pressed */
  onEscapeKeyDown?: (event: KeyboardEvent) => void;

  // ============================================================================
  // OVERRIDES & THEMING (Component Maturity Requirement)
  // ============================================================================
  
  /** Custom className for modal container */
  className?: string;
  
  /** Custom inline styles for modal container */
  style?: CSSProperties;
  
  /** Custom className for overlay */
  overlayClassName?: string;
  
  /** Custom inline styles for overlay */
  overlayStyle?: CSSProperties;
  
  /** Custom className for header */
  headerClassName?: string;
  
  /** Custom className for body */
  bodyClassName?: string;
  
  /** Custom className for footer */
  footerClassName?: string;

  // ============================================================================
  // ACCESSIBILITY (Component Maturity Requirement)
  // ============================================================================
  
  /** ARIA label for modal */
  'aria-label'?: string;
  
  /** ARIA labelledby (references title element) */
  'aria-labelledby'?: string;
  
  /** ARIA describedby (references description element) */
  'aria-describedby'?: string;
  
  /** ARIA modal attribute */
  'aria-modal'?: boolean;
  
  /** Role attribute */
  role?: string;

  // ============================================================================
  // ANIMATION
  // ============================================================================
  
  /** Animation duration in milliseconds */
  animationDuration?: number;
  
  /** Disable animations */
  disableAnimation?: boolean;
}
