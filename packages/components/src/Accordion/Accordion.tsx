/**
 * Accordion Component
 * 
 * A collapsible content container with customizable header, content, and footer.
 * 
 * **Features:**
 * - Collapsed and expanded states
 * - Customizable lead icon (24px)
 * - Flexible labels and metadata area (badges, chips, counters, custom content)
 * - Optional description text
 * - Expandable content area
 * - Optional footer with text and action buttons
 * - Supports nested accordions
 * - Controlled or uncontrolled mode
 * 
 * **Design Tokens:**
 * - Colors: neutral[50, 100, 200, 400, 600, 900], primary[400]
 * - Spacing: spacing[3, 5, 6, 7]
 * - Typography: fontSizes[14, 16, 20], fontWeights[regular, semibold]
 * - Border radius: radii.medium (8px)
 */

import React, { useState } from 'react';
import { ExpandMore } from '@mui/icons-material';
import { AccordionProps } from './Accordion.types';
import {
  AccordionContainer,
  AccordionHeader,
  HeaderTopRow,
  HeaderLeftContent,
  IconAndHeading,
  LeadIconWrapper,
  Heading,
  LabelsAndMetadataContainer,
  ExpandIconWrapper,
  Description,
  AccordionContent,
  AccordionFooter,
  FooterText,
  FooterActionsContainer,
} from './Accordion.styles';

export const Accordion: React.FC<AccordionProps> = ({
  heading = 'Accordion Heading',
  description,
  leadIcon,
  showLeadIcon = true,
  labelsAndMetadata,
  children,
  footerText,
  footerActions,
  showFooter = false,
  defaultExpanded = false,
  expanded: controlledExpanded,
  onExpandChange,
  className,
  disabled = false,
}) => {
  // Internal state for uncontrolled mode
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  
  // Use controlled state if provided, otherwise use internal state
  const isExpanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded;
  
  // Handle expand/collapse toggle
  const handleToggle = () => {
    if (disabled) return;
    
    const newExpanded = !isExpanded;
    
    // Update internal state if uncontrolled
    if (controlledExpanded === undefined) {
      setInternalExpanded(newExpanded);
    }
    
    // Call callback if provided
    onExpandChange?.(newExpanded);
  };

  return (
    <AccordionContainer $isExpanded={isExpanded} $disabled={disabled} className={className}>
      {/* Header */}
      <AccordionHeader $isExpanded={isExpanded} onClick={handleToggle}>
        <HeaderTopRow>
          <HeaderLeftContent>
            {/* Icon and Heading */}
            <IconAndHeading>
              {showLeadIcon && leadIcon && (
                <LeadIconWrapper>{leadIcon}</LeadIconWrapper>
              )}
              <Heading>{heading}</Heading>
            </IconAndHeading>
            
            {/* Labels and Metadata (badges, chips, counters, custom content) */}
            {labelsAndMetadata && (
              <LabelsAndMetadataContainer>
                {labelsAndMetadata}
              </LabelsAndMetadataContainer>
            )}
          </HeaderLeftContent>
          
          {/* Expand/Collapse Icon */}
          <ExpandIconWrapper $isExpanded={isExpanded}>
            <ExpandMore />
          </ExpandIconWrapper>
        </HeaderTopRow>
        
        {/* Description */}
        {description && <Description>{description}</Description>}
      </AccordionHeader>

      {/* Content Area */}
      <AccordionContent $isExpanded={isExpanded} $hasFooter={showFooter}>
        {children}
      </AccordionContent>

      {/* Footer */}
      {showFooter && isExpanded && (
        <AccordionFooter>
          {footerText && <FooterText>{footerText}</FooterText>}
          {footerActions && (
            <FooterActionsContainer>{footerActions}</FooterActionsContainer>
          )}
        </AccordionFooter>
      )}
    </AccordionContainer>
  );
};

export default Accordion;
