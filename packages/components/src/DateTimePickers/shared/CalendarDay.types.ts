/**
 * CalendarDay Component Types
 * Internal component for date picker calendar cells
 */

export type DayOfWeek = 'Weekday' | 'Weekend' | 'OtherMonth' | 'Today';
export type DayRange = 'none' | 'Start' | 'Middle' | 'End';
export type DayState = 'Default' | 'Hover' | 'Active' | 'Focus' | 'Selected';

export interface CalendarDayProps {
  /** Date number to display */
  date: number;
  /** Full date object */
  fullDate: Date;
  /** Type of day */
  dayOfWeek: DayOfWeek;
  /** Range position (for range pickers) */
  range?: DayRange;
  /** Current state */
  state?: DayState;
  /** Click handler */
  onClick?: (date: Date) => void;
  /** Mouse enter handler */
  onMouseEnter?: (date: Date) => void;
  /** Mouse leave handler */
  onMouseLeave?: () => void;
  /** Is disabled */
  disabled?: boolean;
  /** Custom className */
  className?: string;
}
