import { ReactNode, ElementType, HTMLAttributes, CSSProperties } from 'react';

/**
 * Accordion Component Props
 * 
 * A collapsible content container with customizable header, content, and footer.
 * Supports controlled/uncontrolled modes, nested accordions, and full accessibility.
 */
export interface AccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  // ===== POLYMORPHISM =====
  /**
   * Render the accordion as a different HTML element or custom component.
   * @default 'div'
   * @example as="section"
   * @example as={CustomContainer}
   */
  as?: ElementType;

  // ===== CONTENT =====
  /**
   * Accordion heading text.
   * @default 'Accordion Heading'
   */
  heading?: string;
  
  /**
   * Description text below heading.
   * Optional secondary text for additional context.
   */
  description?: string;
  
  /**
   * Content to display when expanded.
   * Can be any React node or component.
   */
  children?: ReactNode;

  // ===== ICONS & METADATA =====
  /**
   * Lead icon (24px) shown before heading.
   * Typically a Material Icon component.
   * @example leadIcon={<CheckCircleOutlined />}
   */
  leadIcon?: ReactNode;
  
  /**
   * Show/hide lead icon.
   * @default true
   */
  showLeadIcon?: boolean;
  
  /**
   * Custom content for labels and metadata area.
   * Supports badges, chips, counters, timestamps, or any custom content.
   * @example labelsAndMetadata={<><Badge variant="info">New</Badge><Chip label="Tag" /></>}
   */
  labelsAndMetadata?: ReactNode;

  // ===== FOOTER =====
  /**
   * Show/hide footer section.
   * @default false
   */
  showFooter?: boolean;
  
  /**
   * Footer text content.
   * Displayed on the left side of the footer.
   */
  footerText?: string;
  
  /**
   * Footer action buttons or custom content.
   * Displayed on the right side of the footer.
   * @example footerActions={<Button variant="primary">Save</Button>}
   */
  footerActions?: ReactNode;

  // ===== SLOTS (Render Props) =====
  /**
   * Custom header renderer.
   * Provides full control over header rendering.
   * @param props - Header props including isExpanded, disabled, onClick
   * @example customHeader={(props) => <CustomHeader {...props} />}
   */
  customHeader?: (props: {
    isExpanded: boolean;
    disabled: boolean;
    onClick: () => void;
    heading?: string;
    description?: string;
    leadIcon?: ReactNode;
  }) => ReactNode;
  
  /**
   * Custom content renderer.
   * Provides full control over content area rendering.
   * @param props - Content props including isExpanded, children
   * @example customContent={(props) => <CustomContent {...props} />}
   */
  customContent?: (props: {
    isExpanded: boolean;
    children?: ReactNode;
  }) => ReactNode;
  
  /**
   * Custom footer renderer.
   * Provides full control over footer rendering.
   * @param props - Footer props including footerText, footerActions
   * @example customFooter={(props) => <CustomFooter {...props} />}
   */
  customFooter?: (props: {
    footerText?: string;
    footerActions?: ReactNode;
  }) => ReactNode;

  // ===== STATES =====
  /**
   * Initially expanded state (uncontrolled mode).
   * @default false
   */
  defaultExpanded?: boolean;
  
  /**
   * Controlled expanded state.
   * When provided, component operates in controlled mode.
   * @example expanded={isOpen}
   */
  expanded?: boolean;
  
  /**
   * Disable the accordion.
   * Prevents interaction and applies disabled styling.
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Loading state.
   * Shows loading indicator in content area.
   * @default false
   */
  isLoading?: boolean;
  
  /**
   * Error state.
   * Shows error styling and optional error message.
   * @default false
   */
  isInvalid?: boolean;
  
  /**
   * Empty state.
   * Shows empty state message when content is empty.
   * @default false
   */
  isEmpty?: boolean;
  
  /**
   * Error message to display when isInvalid is true.
   */
  errorMessage?: string;
  
  /**
   * Empty state message to display when isEmpty is true.
   * @default 'No content available'
   */
  emptyMessage?: string;
  
  /**
   * Loading message to display when isLoading is true.
   * @default 'Loading...'
   */
  loadingMessage?: string;

  // ===== EVENT CALLBACKS =====
  /**
   * Callback when expand/collapse state changes.
   * @param expanded - New expanded state
   * @example onExpandChange={(expanded) => console.log('Expanded:', expanded)}
   */
  onExpandChange?: (expanded: boolean) => void;
  
  /**
   * Callback when accordion starts opening.
   * Called before animation starts.
   */
  onOpen?: () => void;
  
  /**
   * Callback when accordion starts closing.
   * Called before animation starts.
   */
  onClose?: () => void;
  
  /**
   * Callback after accordion finishes opening.
   * Called after animation completes.
   */
  onAfterOpen?: () => void;
  
  /**
   * Callback after accordion finishes closing.
   * Called after animation completes.
   */
  onAfterClose?: () => void;

  // ===== STYLING OVERRIDES =====
  /**
   * Additional CSS class for the root container.
   */
  className?: string;
  
  /**
   * Inline styles for the root container.
   */
  style?: CSSProperties;
  
  /**
   * Additional CSS class for the header.
   */
  headerClassName?: string;
  
  /**
   * Inline styles for the header.
   */
  headerStyle?: CSSProperties;
  
  /**
   * Additional CSS class for the content area.
   */
  contentClassName?: string;
  
  /**
   * Inline styles for the content area.
   */
  contentStyle?: CSSProperties;
  
  /**
   * Additional CSS class for the footer.
   */
  footerClassName?: string;
  
  /**
   * Inline styles for the footer.
   */
  footerStyle?: CSSProperties;

  // ===== ACCESSIBILITY =====
  /**
   * ARIA label for the accordion.
   * Overrides default aria-label.
   */
  'aria-label'?: string;
  
  /**
   * ID of element that labels the accordion.
   */
  'aria-labelledby'?: string;
  
  /**
   * ID of element that describes the accordion.
   */
  'aria-describedby'?: string;
  
  /**
   * Unique ID for the accordion.
   * Used for ARIA relationships.
   */
  id?: string;
}
