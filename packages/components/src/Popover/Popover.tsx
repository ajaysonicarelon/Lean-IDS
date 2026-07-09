/**
 * Popover Component
 * A utility component for displaying content in an overlay positioned relative to a trigger element
 */

import React, { useEffect, useRef } from 'react';
import { PopoverProps } from './Popover.types';
import {
  PopoverContainer,
  PopoverTrigger,
  PopoverContent,
  PopoverBackdrop,
} from './Popover.styles';

export const Popover: React.FC<PopoverProps> = ({
  isOpen,
  onClose,
  trigger,
  children,
  placement = 'bottom',
  className,
  closeOnOutsideClick = true,
  closeOnEscape = true,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

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

  // Handle outside click
  const handleBackdropClick = () => {
    if (closeOnOutsideClick) {
      onClose();
    }
  };

  return (
    <PopoverContainer className={className}>
      <PopoverTrigger>{trigger}</PopoverTrigger>
      
      <PopoverBackdrop $isOpen={isOpen} onClick={handleBackdropClick} />
      
      <PopoverContent ref={contentRef} $isOpen={isOpen}>
        {children}
      </PopoverContent>
    </PopoverContainer>
  );
};
