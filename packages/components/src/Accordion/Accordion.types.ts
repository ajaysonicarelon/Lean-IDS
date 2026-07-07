import { ReactNode } from 'react';

export interface AccordionProps {
  /** Accordion heading text */
  heading?: string;
  /** Description text below heading */
  description?: string;
  /** Lead icon (24px) - shown before heading */
  leadIcon?: ReactNode;
  /** Show/hide lead icon */
  showLeadIcon?: boolean;
  /** Custom content for labels and metadata area (badges, chips, counters, etc.) */
  labelsAndMetadata?: ReactNode;
  /** Content to display when expanded */
  children?: ReactNode;
  /** Footer text */
  footerText?: string;
  /** Footer action buttons */
  footerActions?: ReactNode;
  /** Show/hide footer */
  showFooter?: boolean;
  /** Initially expanded state */
  defaultExpanded?: boolean;
  /** Controlled expanded state */
  expanded?: boolean;
  /** Callback when expand/collapse state changes */
  onExpandChange?: (expanded: boolean) => void;
  /** Additional CSS class */
  className?: string;
  /** Disable the accordion */
  disabled?: boolean;
}
