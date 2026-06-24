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
  /** Additional CSS class */
  className?: string;
}
