/**
 * Drawer Component
 * 
 * Enterprise-grade side panel drawer with comprehensive accessibility,
 * customization, and state management.
 * 
 * Based on Figma design: node-id=5237-14086
 * 
 * @example
 * ```tsx
 * <Drawer
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   title="Settings"
 * >
 *   <Typography variant="body">Content goes here</Typography>
 * </Drawer>
 * ```
 */

import React, { useEffect, useRef, useCallback, useMemo, forwardRef } from 'react';
import styled from 'styled-components';
import { DrawerProps } from './Drawer.types';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Typography } from '../Typography';

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1100; /* Drawer overlay - above Modal (1000) */
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const DrawerContainer = styled.div<{ 
  $width?: string; 
  $maxWidth?: string;
  $minWidth?: string;
  $position: 'left' | 'right'; 
  $isOpen: boolean;
  $disabled?: boolean;
}>`
  position: fixed;
  top: 0;
  ${({ $position }) => ($position === 'right' ? 'right: 0' : 'left: 0')};
  bottom: 0;
  width: ${({ $width }) => $width || 'min(90vw, 37.5rem)'};
  max-width: ${({ $maxWidth }) => $maxWidth || '90vw'};
  min-width: ${({ $minWidth }) => $minWidth};
  background: ${({ theme }) => theme.colors.semantic.background.secondary};
  display: flex;
  flex-direction: column;
  z-index: 1101; /* Drawer container - above Drawer overlay (1100) */
  box-shadow: ${({ theme, $position }) =>
    $position === 'right'
      ? theme.shadows.xl || '-4px 0 6px -1px rgba(0, 0, 0, 0.1)'
      : theme.shadows.xl || '4px 0 6px -1px rgba(0, 0, 0, 0.1)'};
  transform: ${({ $isOpen, $position }) =>
    $isOpen
      ? 'translateX(0)'
      : $position === 'right'
      ? 'translateX(100%)'
      : 'translateX(-100%)'};
  transition: transform 0.3s ease;
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing[8]} ${theme.spacing[10]}`};
  border-bottom: ${({ theme }) => theme.borderWidth[1]} solid ${({ theme }) => theme.colors.semantic.border.default};
  flex-shrink: 0;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  flex: 1;
  min-width: 0;
`;

const Description = styled.div`
  color: ${({ theme }) => theme.colors.semantic.text.secondary};
`;

const CloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ theme }) => theme.spacing[12]};
  min-height: ${({ theme }) => theme.spacing[12]};
  padding: ${({ theme }) => theme.spacing[3]};
  background: none;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.semantic.text.primary};
  transition: background 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background: ${({ theme }) => theme.colors.semantic.background.secondary};
  }

  &:focus-visible {
    outline: ${({ theme }) => theme.borderWidth[2]} solid ${({ theme }) => theme.colors.semantic.focus.indicator};
    outline-offset: ${({ theme }) => theme.spacing[1]};
  }

  &:active {
    background: ${({ theme }) => theme.colors.semantic.background.tertiary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Body = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing[4]};
  overflow-y: auto;
  overflow-x: hidden;
  
  /* Smooth scrolling */
  scroll-behavior: smooth;
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.spacing[3]};
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.semantic.background.secondary};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.semantic.border.default};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.semantic.border.hover};
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing[6]} ${theme.spacing[10]} ${theme.spacing[11]}`};
  border-top: ${({ theme }) => theme.borderWidth[1]} solid ${({ theme }) => theme.colors.semantic.border.default};
  flex-shrink: 0;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const FooterRight = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[5]};
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[12]};
  text-align: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const ErrorState = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.palette.error[50]};
  border: ${({ theme }) => theme.borderWidth[1]} solid ${({ theme }) => theme.colors.semantic.border.error};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.semantic.text.error};
`;

const EmptyText = styled.div`
  color: ${({ theme }) => theme.colors.semantic.text.secondary};
`;

const LoadingText = styled.div`
  color: ${({ theme }) => theme.colors.semantic.text.secondary};
`;

// ============================================================================
// COMPONENT
// ============================================================================

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      // Required
      isOpen,
      onClose,
      title,
      children,
      
      // Polymorphism
      as,
      
      // Content & Layout
      description,
      position = 'right',
      width,
      maxWidth,
      minWidth,
      
      // States
      isLoading = false,
      isInvalid = false,
      errorMessage,
      isEmpty = false,
      emptyMessage = 'No content available',
      disabled = false,
      
      // Visibility Controls
      showHeader = true,
      showFooter = true,
      
      // Footer Buttons
      showReset = true,
      resetLabel = 'Reset',
      onReset,
      showCancel = true,
      cancelLabel = 'Cancel',
      onCancel,
      showSubmit = true,
      submitLabel = 'Submit',
      onSubmit,
      submitType = 'default',
      isSubmitting = false,
      
      // Customization Slots
      customHeader,
      customFooter,
      customLoadingOverlay,
      customEmptyState,
      customErrorState,
      
      // Behavior
      closeOnOverlayClick = true,
      closeOnEscape = true,
      autoFocus = true,
      returnFocus = true,
      preventBodyScroll = true,
      
      // Event Callbacks
      onOpen,
      onAfterOpen,
      onAfterClose,
      onOverlayClick,
      onEscapeKeyDown,
      
      // Styling Overrides
      className,
      style,
      overlayClassName,
      overlayStyle,
      headerClassName,
      headerStyle,
      bodyClassName,
      bodyStyle,
      footerClassName,
      footerStyle,
      
      // Accessibility
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      'aria-describedby': ariaDescribedby,
      
      // Rest props
      ...restProps
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const previousFocusRef = useRef<HTMLElement | null>(null);
    const titleId = useRef(`drawer-title-${Math.random().toString(36).substr(2, 9)}`);
    const descriptionId = useRef(`drawer-description-${Math.random().toString(36).substr(2, 9)}`);

    // ============================================================================
    // CALLBACKS
    // ============================================================================

    const handleOverlayClick = useCallback(
      (e: React.MouseEvent) => {
        if (e.target === e.currentTarget && closeOnOverlayClick && !disabled) {
          onOverlayClick?.();
          onClose();
        }
      },
      [closeOnOverlayClick, disabled, onClose, onOverlayClick]
    );

    const handleCancel = useCallback(() => {
      if (disabled) return;
      if (onCancel) {
        onCancel();
      } else {
        onClose();
      }
    }, [disabled, onCancel, onClose]);

    const handleEscapeKey = useCallback(
      (e: KeyboardEvent) => {
        if (e.key === 'Escape' && !disabled) {
          onEscapeKeyDown?.();
          onClose();
        }
      },
      [disabled, onClose, onEscapeKeyDown]
    );

    // ============================================================================
    // EFFECTS
    // ============================================================================

    // Handle open/close lifecycle
    useEffect(() => {
      if (isOpen) {
        onOpen?.();
        
        // Trigger after-open callback after animation
        const timer = setTimeout(() => {
          onAfterOpen?.();
        }, 300);
        
        return () => clearTimeout(timer);
      } else {
        // Trigger after-close callback after animation
        const timer = setTimeout(() => {
          onAfterClose?.();
        }, 300);
        
        return () => clearTimeout(timer);
      }
    }, [isOpen, onOpen, onAfterOpen, onAfterClose]);

    // Handle escape key
    useEffect(() => {
      if (!isOpen || !closeOnEscape) return;

      document.addEventListener('keydown', handleEscapeKey);
      return () => document.removeEventListener('keydown', handleEscapeKey);
    }, [isOpen, closeOnEscape, handleEscapeKey]);

    // Prevent body scroll when drawer is open
    useEffect(() => {
      if (!preventBodyScroll) return;
      
      if (isOpen) {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      } else {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
      }

      return () => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
      };
    }, [isOpen, preventBodyScroll]);

    // Focus management
    useEffect(() => {
      if (!isOpen) return;

      // Store previous focus
      if (returnFocus) {
        previousFocusRef.current = document.activeElement as HTMLElement;
      }

      // Auto-focus first focusable element
      if (autoFocus) {
        const timer = setTimeout(() => {
          const firstFocusable = containerRef.current?.querySelector<HTMLElement>(
            'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])'
          );
          firstFocusable?.focus();
        }, 100);
        
        return () => clearTimeout(timer);
      }
      
      return undefined;
    }, [isOpen, autoFocus, returnFocus]);

    // Return focus on close
    useEffect(() => {
      if (!isOpen && returnFocus && previousFocusRef.current) {
        previousFocusRef.current.focus();
        previousFocusRef.current = null;
      }
    }, [isOpen, returnFocus]);

    // Focus trap
    useEffect(() => {
      if (!isOpen) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;

        const focusableElements = containerRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])'
        );

        if (!focusableElements || focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    // ============================================================================
    // MEMOIZED VALUES
    // ============================================================================

    const renderHeader = useMemo(() => {
      if (customHeader) {
        return typeof customHeader === 'function' ? customHeader({ onClose }) : customHeader;
      }

      return (
        <Header className={headerClassName} style={headerStyle}>
          <HeaderContent>
            <Typography 
              variant="headingM" 
              weight="semibold" 
              as="h2"
            >
              {title}
            </Typography>
            {description && (
              <Description>
                <Typography 
                  variant="body"
                >
                  {description}
                </Typography>
              </Description>
            )}
          </HeaderContent>
          <CloseButton 
            onClick={onClose} 
            aria-label="Close drawer"
            disabled={disabled}
          >
            <Icon name="Close" size="medium" />
          </CloseButton>
        </Header>
      );
    }, [customHeader, onClose, title, description, headerClassName, headerStyle, disabled]);

    const renderFooter = useMemo(() => {
      if (customFooter) {
        return typeof customFooter === 'function' ? customFooter({ onClose }) : customFooter;
      }

      return (
        <Footer className={footerClassName} style={footerStyle}>
          <FooterLeft>
            {showReset && (
              <Button
                variant="tertiary"
                size="medium"
                onClick={onReset}
                disabled={disabled}
              >
                {resetLabel}
              </Button>
            )}
          </FooterLeft>
          <FooterRight>
            {showCancel && (
              <Button
                variant="secondary"
                size="medium"
                leadingIcon={<Icon name="Close" size="small" />}
                onClick={handleCancel}
                disabled={disabled}
              >
                {cancelLabel}
              </Button>
            )}
            {showSubmit && (
              <Button
                variant="primary"
                size="medium"
                buttonType={submitType}
                leadingIcon={<Icon name="Check" size="small" />}
                onClick={onSubmit}
                disabled={disabled}
                isLoading={isSubmitting}
              >
                {submitLabel}
              </Button>
            )}
          </FooterRight>
        </Footer>
      );
    }, [
      customFooter,
      onClose,
      showReset,
      resetLabel,
      onReset,
      showCancel,
      cancelLabel,
      handleCancel,
      showSubmit,
      submitLabel,
      submitType,
      onSubmit,
      isSubmitting,
      disabled,
      footerClassName,
      footerStyle,
    ]);

    // ============================================================================
    // RENDER
    // ============================================================================

    if (!isOpen) return null;

    return (
      <>
        <Overlay 
          $isOpen={isOpen} 
          onClick={handleOverlayClick}
          className={overlayClassName}
          style={overlayStyle}
          aria-hidden="true"
        />
        <DrawerContainer
          ref={(node: HTMLDivElement) => {
            // Combine refs
            if (containerRef) {
              (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
            }
            if (typeof ref === 'function') {
              ref(node);
            } else if (ref) {
              (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
            }
          }}
          as={as}
          $width={width}
          $maxWidth={maxWidth}
          $minWidth={minWidth}
          $position={position}
          $isOpen={isOpen}
          $disabled={disabled}
          className={className}
          style={style}
          role="dialog"
          aria-modal="true"
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby || (!ariaLabel ? titleId.current : undefined)}
          aria-describedby={ariaDescribedby || (description ? descriptionId.current : undefined)}
          {...restProps}
        >
          {/* Header */}
          {showHeader && renderHeader}

          {/* Body */}
          <Body className={bodyClassName} style={bodyStyle}>
            {/* Error State */}
            {isInvalid && errorMessage && (
              customErrorState || (
                <ErrorState role="alert">
                  <Typography variant="body" weight="medium">
                    {errorMessage}
                  </Typography>
                </ErrorState>
              )
            )}

            {/* Empty State */}
            {isEmpty && !isLoading ? (
              customEmptyState || (
                <EmptyState>
                  <EmptyText>
                    <Typography variant="body">
                      {emptyMessage}
                    </Typography>
                  </EmptyText>
                </EmptyState>
              )
            ) : (
              children
            )}
          </Body>

          {/* Footer */}
          {showFooter && renderFooter}

          {/* Loading Overlay */}
          {isLoading && (
            customLoadingOverlay || (
              <LoadingOverlay>
                <LoadingText>
                  <Typography variant="body">
                    Loading...
                  </Typography>
                </LoadingText>
              </LoadingOverlay>
            )
          )}
        </DrawerContainer>
      </>
    );
  }
);

Drawer.displayName = 'Drawer';
