/**
 * Modal component types
 */

import { ReactNode } from 'react';

export interface ModalProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Callback when modal should close */
  onClose: () => void;
  /** Modal title */
  title: string;
  /** Modal description */
  description?: string;
  /** Modal body content */
  children: ReactNode;
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
  /** Custom footer content */
  customFooter?: ReactNode;
  /** Modal width */
  width?: number;
  /** Modal height */
  height?: number;
  /** Close on overlay click */
  closeOnOverlayClick?: boolean;
  /** Close on escape key */
  closeOnEscape?: boolean;
  /** Custom className */
  className?: string;
}
