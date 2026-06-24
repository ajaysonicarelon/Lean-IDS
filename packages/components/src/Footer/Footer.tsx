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
      <LastUpdated>
        Last Updated on {lastUpdated}
      </LastUpdated>
      
      <Version>
        Version {version}
      </Version>
      
      <FeedbackSection>
        Facing any issues?{' '}
        <FeedbackLink 
          href={feedbackUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={handleFeedbackClick}
        >
          {feedbackText}
        </FeedbackLink>
      </FeedbackSection>
    </StyledFooter>
  );
};
