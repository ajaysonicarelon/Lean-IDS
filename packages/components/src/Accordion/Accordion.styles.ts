import styled from 'styled-components';

export const AccordionContainer = styled.div<{ $isExpanded: boolean; $disabled: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
`;

export const AccordionHeader = styled.div<{ $isExpanded: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 9px;
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

  &:hover {
    border-color: ${({ theme, $isExpanded }) =>
      $isExpanded ? theme.colors.palette.primary[400] : theme.colors.palette.neutral[500]};
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

export const Heading = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[20]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.palette.neutral[900]};
  white-space: nowrap;
`;

export const LabelsAndMetadataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
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

export const Description = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[16]};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 19px;
  color: ${({ theme }) => theme.colors.palette.neutral[600]};
  width: 100%;
`;

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
  min-height: 100px;
  padding: ${({ theme }) => theme.spacing[7]}; /* 16px */
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

export const FooterText = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 16px;
  color: ${({ theme }) => theme.colors.palette.neutral[900]};
  white-space: nowrap;
`;

export const FooterActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]}; /* 8px */
`;
