/**
 * Drawer Component
 * 
 * A side panel drawer component with header, body, and footer sections.
 * Based on Figma design: node-id=5237-14086
 */

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { Icon } from '../Icon';

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
  children: React.ReactNode;
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
  customFooter?: React.ReactNode;
  /** Drawer width */
  width?: number;
  /** Close on overlay click */
  closeOnOverlayClick?: boolean;
  /** Close on escape key */
  closeOnEscape?: boolean;
  /** Custom className */
  className?: string;
}

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
  z-index: 1000;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const DrawerContainer = styled.div<{ $width?: number; $position: 'left' | 'right'; $isOpen: boolean }>`
  position: fixed;
  top: 0;
  ${({ $position }) => ($position === 'right' ? 'right: 0' : 'left: 0')};
  bottom: 0;
  width: ${({ $width }) => ($width ? `${$width}px` : '600px')};
  max-width: 90vw;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  z-index: 1001;
  box-shadow: ${({ $position }) =>
    $position === 'right'
      ? '-4px 0 6px -1px rgba(0, 0, 0, 0.1)'
      : '4px 0 6px -1px rgba(0, 0, 0, 0.1)'};
  transform: ${({ $isOpen, $position }) =>
    $isOpen
      ? 'translateX(0)'
      : $position === 'right'
      ? 'translateX(100%)'
      : 'translateX(-100%)'};
  transition: transform 0.3s ease;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #D5D5D5;
  flex-shrink: 0;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const Title = styled.h2`
  margin: 0;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: #222222;
`;

const Description = styled.p`
  margin: 0;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: #909090;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 8px;
  background: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #222222;
  transition: background 0.2s;

  &:hover {
    background: #F5F5F5;
  }

  &:active {
    background: #E5E5E5;
  }
`;

const Body = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px 34px;
  border-top: 1px solid #D5D5D5;
  flex-shrink: 0;
`;

const FooterLeft = styled.div`
  display: flex;
  align-items: center;
`;

const FooterRight = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

// ============================================================================
// COMPONENT
// ============================================================================

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  position = 'right',
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
  customFooter,
  width,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className,
}) => {
  // Handle escape key
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeOnEscape, onClose]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      onClose();
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={handleOverlayClick} />
      <DrawerContainer $width={width} $position={position} $isOpen={isOpen} className={className}>
        {/* Header */}
        <Header>
          <HeaderContent>
            <Title>{title}</Title>
            {description && <Description>{description}</Description>}
          </HeaderContent>
          <CloseButton onClick={onClose} aria-label="Close drawer">
            <Icon name="Close" size="medium" />
          </CloseButton>
        </Header>

        {/* Body */}
        <Body>{children}</Body>

        {/* Footer */}
        <Footer>
          {customFooter ? (
            customFooter
          ) : (
            <>
              <FooterLeft>
                {showReset && (
                  <Button
                    variant="tertiary"
                    size="medium"
                    onClick={onReset}
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
                  >
                    {submitLabel}
                  </Button>
                )}
              </FooterRight>
            </>
          )}
        </Footer>
      </DrawerContainer>
    </>
  );
};
