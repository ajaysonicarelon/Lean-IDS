/**
 * Popover component types
 */

import { ReactNode } from 'react';

export type PopoverPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface PopoverProps {
  /** Whether the popover is open */
  isOpen: boolean;
  /** Callback when popover should close */
  onClose: () => void;
  /** The element that triggers the popover */
  trigger: ReactNode;
  /** The content to display in the popover */
  children: ReactNode;
  /** Preferred placement of the popover */
  placement?: PopoverPlacement;
  /** Custom className */
  className?: string;
  /** Whether to close on outside click */
  closeOnOutsideClick?: boolean;
  /** Whether to close on escape key */
  closeOnEscape?: boolean;
}
