/**
 * Drawer component types
 */

import { ReactNode } from 'react';

export interface DrawerProps {
  /** Whether the drawer is open */
  isOpen: boolean;
  /** Callback when drawer should close */
  onClose: () => void;
  /** Drawer title */
  title: string;
  /** Drawer description */
  description?: string;
  /** Drawer body content */
  children: ReactNode;
  /** Drawer position */
  position?: 'left' | 'right';
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
  /** Drawer width */
  width?: number;
  /** Close on overlay click */
  closeOnOverlayClick?: boolean;
  /** Close on escape key */
  closeOnEscape?: boolean;
  /** Custom className */
  className?: string;
}
