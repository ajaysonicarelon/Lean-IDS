export interface FooterProps {
  /** Last updated date */
  lastUpdated?: string;
  /** Version number */
  version?: string;
  /** Feedback link URL */
  feedbackUrl?: string;
  /** Feedback link text */
  feedbackText?: string;
  /** Click handler for feedback link */
  onFeedbackClick?: () => void;
  /** Show/hide last updated section (default: true) */
  showLastUpdated?: boolean;
  /** Show/hide version section (default: true) */
  showVersion?: boolean;
  /** Show/hide feedback section (default: true) */
  showFeedback?: boolean;
  /** Custom content to render before default footer items */
  customContentBefore?: React.ReactNode;
  /** Custom content to render after default footer items */
  customContentAfter?: React.ReactNode;
  /** Additional CSS class */
  className?: string;
}
