export interface TableSubHeaderProps {
  searchValue?: string;
  searchPlaceholder?: string;
  onSearchChange?: (value: string) => void;
  locked?: boolean;
  leftOffset?: number;
  width?: string | number;
  className?: string;
}
