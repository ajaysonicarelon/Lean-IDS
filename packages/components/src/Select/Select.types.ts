/**
 * Select component types
 */

import { ElementType, CSSProperties, HTMLAttributes } from 'react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Polymorphic prop - render as different element
   * @default 'div'
   */
  as?: ElementType;
  
  /** Field label */
  label: string;
  
  /** Placeholder text */
  placeholder?: string;
  
  /** Array of options */
  options: SelectOption[];
  
  /** Selected value(s) */
  value?: string | string[];
  
  /** Change handler */
  onChange?: (value: string | string[]) => void;
  
  /** Enable multiple selection */
  multiple?: boolean;
  
  /** Enable search/filter */
  searchable?: boolean;
  
  /** Show leading search icon */
  showLeadingIcon?: boolean;
  
  /** Show trailing dropdown icon */
  showTrailingIcon?: boolean;
  
  /** Required field */
  required?: boolean;
  
  /** Disabled state */
  disabled?: boolean;
  
  /** Error state */
  error?: boolean;
  
  /**
   * Invalid state (alias for error)
   * @default false
   */
  isInvalid?: boolean;
  
  /**
   * Loading state - shows loading indicator
   * @default false
   */
  isLoading?: boolean;
  
  /**
   * Empty state - shows empty state message
   * @default false
   */
  isEmpty?: boolean;
  
  /**
   * Empty state message
   * @default 'No options available'
   */
  emptyMessage?: string;
  
  /** Helper text */
  helperText?: string;
  
  /** Helper text state */
  helperTextState?: 'default' | 'info' | 'warning' | 'error';
  
  /** Size */
  size?: 'xsmall' | 'small' | 'default' | 'large';
  
  /** Custom className for root container */
  className?: string;
  
  /** Custom inline styles for root container */
  style?: CSSProperties;
  
  /** Custom className for label */
  labelClassName?: string;
  
  /** Custom className for dropdown container */
  dropdownClassName?: string;
  
  /** Custom className for option items */
  optionClassName?: string;
  
  /** Custom className for helper text */
  helperTextClassName?: string;
  
  /** Show selection indicator (radio/checkbox) */
  showSelectionIndicator?: boolean;
  
  /** Callback fired when dropdown opens */
  onOpen?: () => void;
  
  /** Callback fired when dropdown closes */
  onClose?: () => void;
  
  /** Callback fired after dropdown open animation completes */
  onAfterOpen?: () => void;
  
  /** Callback fired after dropdown close animation completes */
  onAfterClose?: () => void;
  
  /** Callback fired when search query changes (debounced) */
  onSearchChange?: (query: string) => void;
  
  /**
   * Callback fired on every keystroke (immediate, not debounced)
   * Use this for real-time UI updates
   */
  onSearchInput?: (query: string) => void;
  
  /** Callback fired on Enter key press */
  onEnter?: (event: React.KeyboardEvent) => void;
  
  /** Callback fired on Escape key press */
  onEscape?: (event: React.KeyboardEvent) => void;
  
  // ============================================================================
  // PERFORMANCE PROPS (Pillar 7)
  // ============================================================================
  
  /**
   * Debounce delay for search input (ms)
   * Reduces API calls and re-renders
   * @default 300
   */
  searchDebounceDelay?: number;
  
  /**
   * Enable virtual scrolling for large datasets
   * Recommended for 100+ options
   * Requires react-window to be installed
   * @default false
   */
  enableVirtualization?: boolean;
  
  /**
   * Height of each item in pixels (required for virtualization)
   * @default 40
   */
  itemHeight?: number;
  
  /**
   * Maximum items to render without virtualization warning
   * Shows console warning if exceeded and virtualization disabled
   * @default 100
   */
  maxItemsBeforeWarning?: number;
  
  /**
   * Disable performance warnings in development
   * @default false
   */
  disablePerformanceWarnings?: boolean;
  
  // ============================================================================
  // CHIPS DISPLAY (Multi-Select Enhancement)
  // ============================================================================
  
  /**
   * Show selected items as chips (multi-select only)
   * @default false
   */
  showChips?: boolean;
  
  /**
   * Position of chips
   * 'inline' - Inside input field with smart overflow (shows "+N More")
   * 'below' - Below input field (all chips visible, wrapping)
   * @default 'below'
   */
  chipsPosition?: 'inline' | 'below';
  
  /**
   * Maximum visible chips in inline mode before showing "+N More"
   * Set to 0 for auto-calculation based on available width
   * @default 0 (auto)
   */
  maxInlineChips?: number;
  
  /**
   * Custom className for chips container
   */
  chipsClassName?: string;
  
  /**
   * Callback when chip is removed
   */
  onChipRemove?: (value: string) => void;
  
  /**
   * Callback when "+N More" chip is clicked in inline mode
   * Can be used to show a modal/popover with all selections
   */
  onMoreChipsClick?: () => void;
}
