/**
 * Popover Component Styles
 */

import styled from 'styled-components';

export const PopoverContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const PopoverTrigger = styled.div`
  display: inline-block;
  cursor: pointer;
`;

export const PopoverContent = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  z-index: 1000;
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: opacity 0.2s ease, visibility 0.2s ease;
  margin-top: ${({ theme }) => theme.spacing[2]};
`;

export const PopoverBackdrop = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`;
