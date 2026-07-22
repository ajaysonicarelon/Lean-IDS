import styled from 'styled-components';

export const AccordionContainer = styled.div<{ 
  $isExpanded: boolean; 
  $disabled: boolean;
  $isInvalid: boolean;
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
  
  /* Error state */
  ${({ $isInvalid, theme }) => $isInvalid && `
    border: 1px solid ${theme.colors.semantic.border.error};
    border-radius: ${theme.borderRadius.md};
  `}
`;

export const AccordionHeader = styled.button<{ $isExpanded: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]}; /* 10px */
  padding: ${({ theme }) => theme.spacing[7]}; /* 16px */
  background-color: ${({ theme }) => theme.colors.palette.neutral[50]}; /* white */
  border: 1px solid ${({ theme, $isExpanded }) =>
    $isExpanded ? theme.colors.palette.primary[400] : theme.colors.palette.neutral[400]};
  border-radius: ${({ theme, $isExpanded }) =>
    $isExpanded
      ? `${theme.borderRadius.md} ${theme.borderRadius.md} 0 0` /* 8px top corners only */
      : theme.borderRadius.md}; /* 8px all corners */
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  text-align: left;

  /* Hover state */
  &:hover:not(:disabled) {
    border-color: ${({ theme, $isExpanded }) =>
      $isExpanded ? theme.colors.palette.primary[400] : theme.colors.palette.neutral[500]};
    background-color: ${({ theme }) => theme.colors.semantic.background.secondary};
  }
  
  /* Focus-visible state */
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
  
  /* Active state */
  &:active:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.semantic.background.tertiary};
  }
  
  /* Disabled state */
  &:disabled {
    cursor: not-allowed;
  }
`;

export const HeaderTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderLeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[6]}; /* 14px */
  flex: 1;
`;

export const IconAndHeading = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[5]}; /* 12px */
`;

export const LeadIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
  }
`;

/* Removed - Use Typography component instead */

export const LabelsAndMetadataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[6]}; /* 14px */
`;

export const ExpandIconWrapper = styled.div<{ $isExpanded: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  transition: transform 0.2s ease;
  transform: ${({ $isExpanded }) => ($isExpanded ? 'rotate(180deg)' : 'rotate(0deg)')};

  svg {
    width: 24px;
    height: 24px;
  }
`;

/* Removed - Use Typography component instead */

export const AccordionContent = styled.div<{ $isExpanded: boolean; $hasFooter: boolean }>`
  display: ${({ $isExpanded }) => ($isExpanded ? 'flex' : 'none')};
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.palette.neutral[200]}; /* #f8f8f8 */
  border-left: 1px solid ${({ theme }) => theme.colors.palette.primary[400]};
  border-right: 1px solid ${({ theme }) => theme.colors.palette.primary[400]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.palette.primary[400]};
  border-radius: ${({ theme, $hasFooter }) =>
    $hasFooter ? '0' : `0 0 ${theme.borderRadius.md} ${theme.borderRadius.md}`}; /* 8px bottom corners if no footer */
  min-height: ${({ theme }) => theme.spacing[20]}; /* 100px */
  padding: ${({ theme }) => theme.spacing[7]}; /* 16px */
  position: relative;
`;

export const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.palette.neutral[50]};
  opacity: 0.9;
  z-index: 1;
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[10]};
  gap: ${({ theme }) => theme.spacing[4]};
  text-align: center;
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.colors.palette.error[50]};
  border: 1px solid ${({ theme }) => theme.colors.semantic.border.error};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.semantic.text.error};
`;

export const AccordionFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing[7]} ${({ theme }) => theme.spacing[8]}; /* 16px 20px */
  background-color: ${({ theme }) => theme.colors.palette.neutral[100]}; /* #fdfdfd */
  border-left: 1px solid ${({ theme }) => theme.colors.palette.primary[400]};
  border-right: 1px solid ${({ theme }) => theme.colors.palette.primary[400]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.palette.primary[400]};
  border-radius: 0 0 ${({ theme }) => theme.borderRadius.md} ${({ theme }) => theme.borderRadius.md}; /* 8px bottom corners */
`;

/* Removed - Use Typography component instead */

export const FooterActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]}; /* 8px */
`;
