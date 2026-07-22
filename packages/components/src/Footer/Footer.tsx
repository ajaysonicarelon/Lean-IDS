/**
 * Footer Component
 * 
 * A footer bar that displays last updated date, version number,
 * and a feedback link.
 * 
 * Features:
 * - Last updated timestamp
 * - Version display
 * - Feedback link
 * - Responsive layout
 * - Configurable visibility for each section
 * - Support for custom content before/after default items
 * 
 * @example
 * ```tsx
 * // Show only version and feedback
 * <Footer 
 *   version="2.0" 
 *   showLastUpdated={false}
 * />
 * 
 * // Add custom content
 * <Footer 
 *   customContentBefore={<div>Custom Info</div>}
 *   customContentAfter={<div>Additional Links</div>}
 * />
 * 
 * // Minimal footer with only custom content
 * <Footer 
 *   showLastUpdated={false}
 *   showVersion={false}
 *   showFeedback={false}
 *   customContentBefore={<div>My Custom Footer</div>}
 * />
 * ```
 */

import React from 'react';
import { FooterProps } from './Footer.types';
import {
  StyledFooter,
  LastUpdated,
  Version,
  FeedbackSection,
  FeedbackLink,
} from './Footer.styles';

export const Footer: React.FC<FooterProps> = ({
  lastUpdated = 'Sept 23, 2024',
  version = '1.0',
  feedbackUrl = '#',
  feedbackText = 'Send us a Feedback here',
  onFeedbackClick,
  showLastUpdated = true,
  showVersion = true,
  showFeedback = true,
  customContentBefore,
  customContentAfter,
  className,
}) => {
  const handleFeedbackClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onFeedbackClick) {
      e.preventDefault();
      onFeedbackClick();
    }
  };

  return (
    <StyledFooter className={className} role="contentinfo">
      {customContentBefore}
      
      {showLastUpdated && (
        <LastUpdated>
          Last Updated on {lastUpdated}
        </LastUpdated>
      )}
      
      {showVersion && (
        <Version>
          Version {version}
        </Version>
      )}
      
      {showFeedback && (
        <FeedbackSection>
          <span>Facing any issues?</span>
          <FeedbackLink 
            href={feedbackUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={handleFeedbackClick}
          >
            {feedbackText}
          </FeedbackLink>
        </FeedbackSection>
      )}
      
      {customContentAfter}
    </StyledFooter>
  );
};
