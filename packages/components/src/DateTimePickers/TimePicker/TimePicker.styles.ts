/**
 * TimePicker Component Styles
 */

import styled from 'styled-components';

export const TimePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 308px;
  background: ${({ theme }) => theme.colors.palette.neutral[50]};
  border: 1px solid ${({ theme }) => theme.colors.palette.neutral[400]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0px 16px 32px 0px rgba(23, 37, 76, 0.12);
  overflow: visible;
  position: relative;
  z-index: 1;
`;

export const TimeDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: ${({ theme }) => `${theme.spacing[5]} ${theme.spacing[8]}`};
  background: ${({ theme }) => theme.colors.palette.primary[50]};
  border-radius: ${({ theme }) => `${theme.borderRadius.md} ${theme.borderRadius.md} 0 0`};
`;

export const TimeLabel = styled.div`
  font-family: ${({ theme }) => theme.typography.body.medium.fontFamily};
  font-size: ${({ theme }) => theme.typography.body.medium.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.medium.fontWeight};
  line-height: ${({ theme }) => theme.typography.body.medium.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.body.medium.letterSpacing};
  color: ${({ theme }) => theme.colors.palette.neutral[900]};
  white-space: nowrap;
`;

export const SelectedTime = styled.div`
  font-family: ${({ theme }) => theme.typography.body.semibold.fontFamily};
  font-size: ${({ theme }) => theme.typography.body.semibold.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.semibold.fontWeight};
  line-height: ${({ theme }) => theme.typography.body.semibold.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.body.semibold.letterSpacing};
  color: ${({ theme }) => theme.colors.palette.primary[400]};
  white-space: nowrap;
`;

export const TimeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
  padding: ${({ theme }) => theme.spacing[7]};
`;

export const TimeFieldsRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[5]};
  width: 100%;
`;

export const TimeFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  flex: 1;
  min-width: 0;
`;

export const FieldLabel = styled.label`
  font-family: ${({ theme }) => theme.typography.caption.medium.fontFamily};
  font-size: ${({ theme }) => theme.typography.caption.medium.fontSize};
  font-weight: ${({ theme }) => theme.typography.caption.medium.fontWeight};
  line-height: ${({ theme }) => theme.typography.caption.medium.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.caption.medium.letterSpacing};
  color: ${({ theme }) => theme.colors.palette.neutral[1000]};
`;

export const ActionsRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[5]};
  justify-content: flex-end;
  width: 100%;
`;
