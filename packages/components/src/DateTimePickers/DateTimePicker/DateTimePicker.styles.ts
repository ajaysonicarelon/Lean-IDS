/**
 * DateTimePicker Component Styles
 */

import styled from 'styled-components';

export const DateTimePickerContainer = styled.div`
  display: inline-flex;
  width: 348px;
  background: ${({ theme }) => theme.colors.palette.neutral[50]};
  border: 1px solid ${({ theme }) => theme.colors.palette.neutral[400]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0px 16px 32px 0px rgba(23, 37, 76, 0.12);
  overflow: visible;
  position: relative;
  z-index: 1;
`;

export const DateTimeContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DateTimeDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: ${({ theme }) => `${theme.spacing[5]} ${theme.spacing[8]}`};
  background: ${({ theme }) => theme.colors.palette.primary[50]};
  border-radius: ${({ theme }) => `${theme.borderRadius.md} ${theme.borderRadius.md} 0 0`};
`;

export const DisplayLabel = styled.div`
  font-family: ${({ theme }) => theme.typography.body.medium.fontFamily};
  font-size: ${({ theme }) => theme.typography.body.medium.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.medium.fontWeight};
  line-height: ${({ theme }) => theme.typography.body.medium.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.body.medium.letterSpacing};
  color: ${({ theme }) => theme.colors.palette.neutral[900]};
  white-space: nowrap;
`;

export const SelectedDateTime = styled.div`
  font-family: ${({ theme }) => theme.typography.body.semibold.fontFamily};
  font-size: ${({ theme }) => theme.typography.body.semibold.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.semibold.fontWeight};
  line-height: ${({ theme }) => theme.typography.body.semibold.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.body.semibold.letterSpacing};
  color: ${({ theme }) => theme.colors.palette.primary[400]};
  white-space: nowrap;
`;

export const CalendarSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing[7]};
  gap: ${({ theme }) => theme.spacing[5]};
  width: 100%;
  box-sizing: border-box;
  align-items: center;
`;

export const TimeFieldsSection = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[5]};
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacing[5]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.palette.neutral[300]};
`;

export const TimeFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  flex: 1;
  min-width: 0;
  
  /* Ensure Select components inside take full width */
  & > div {
    width: 100%;
  }
`;

export const FieldLabel = styled.label`
  font-family: ${({ theme }) => theme.typography.caption.medium.fontFamily};
  font-size: ${({ theme }) => theme.typography.caption.medium.fontSize};
  font-weight: ${({ theme }) => theme.typography.caption.medium.fontWeight};
  line-height: ${({ theme }) => theme.typography.caption.medium.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.caption.medium.letterSpacing};
  color: ${({ theme }) => theme.colors.palette.neutral[1000]};
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  width: 100%;
`;

export const MonthYearSelector = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  flex: 1;
  justify-content: center;
  min-width: 0;
  
  /* Make Select components fit their content but constrained */
  & > div {
    flex: 1;
    min-width: 0;
    max-width: 50%;
  }
`;

export const MonthYearButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.body.medium.fontFamily};
  font-size: ${({ theme }) => theme.typography.body.medium.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.medium.fontWeight};
  color: ${({ theme }) => theme.colors.palette.neutral[900]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  
  &:hover {
    background: ${({ theme }) => theme.colors.palette.neutral[200]};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.palette.neutral[900]};
  
  &:hover {
    background: ${({ theme }) => theme.colors.palette.neutral[200]};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const CalendarGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const WeekdayHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 36px);
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const WeekdayLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.typography.caption.medium.fontFamily};
  font-size: ${({ theme }) => theme.typography.caption.medium.fontSize};
  font-weight: ${({ theme }) => theme.typography.caption.medium.fontWeight};
  color: ${({ theme }) => theme.colors.palette.primary[400]};
  text-align: center;
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 36px);
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const ActionsRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[5]};
  justify-content: flex-end;
  width: 100%;
`;
