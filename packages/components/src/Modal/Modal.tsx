/**
 * Modal Component
 * 
 * A modal dialog component with header, body, and footer sections.
 * Based on Figma design: node-id=5144-26614
 */

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { Icon } from '../Icon';

export interface ModalProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Callback when modal should close */
  onClose: () => void;
  /** Modal title */
  title: string;
  /** Modal description */
  description?: string;
  /** Modal body content */
  children: React.ReactNode;
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
  /** Modal width */
  width?: number;
  /** Modal height */
  height?: number;
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
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const ModalContainer = styled.div<{ $width?: number; $height?: number; $isOpen: boolean }>`
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  width: ${({ $width }) => ($width ? `${$width}px` : '600px')};
  max-width: 90vw;
  max-height: 90vh;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transform: ${({ $isOpen }) => ($isOpen ? 'scale(1)' : 'scale(0.95)')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: transform 0.3s ease, opacity 0.3s ease;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #D5D5D5;
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

const Body = styled.div<{ $height?: number }>`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  min-height: ${({ $height }) => ($height ? `${$height}px` : '442px')};
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  border-top: 1px solid #D5D5D5;
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

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
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
  height,
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

  // Prevent body scroll when modal is open
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

  return (
    <Overlay $isOpen={isOpen} onClick={handleOverlayClick}>
      <ModalContainer $width={width} $height={height} $isOpen={isOpen} className={className}>
        {/* Header */}
        <Header>
          <HeaderContent>
            <Title>{title}</Title>
            {description && <Description>{description}</Description>}
          </HeaderContent>
          <CloseButton onClick={onClose} aria-label="Close modal">
            <Icon name="Close" size="medium" />
          </CloseButton>
        </Header>

        {/* Body */}
        <Body $height={height}>{children}</Body>

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
      </ModalContainer>
    </Overlay>
  );
};
