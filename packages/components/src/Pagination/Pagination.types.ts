export type PaginationVariant = 'default' | 'filled' | 'outlined';

export interface PaginationProps {
  /**
   * Current page number (1-indexed)
   */
  currentPage: number;
  
  /**
   * Total number of pages
   */
  totalPages: number;
  
  /**
   * Total number of items
   */
  totalItems: number;
  
  /**
   * Number of items per page
   */
  itemsPerPage: number;
  
  /**
   * Callback when page changes
   */
  onPageChange: (page: number) => void;
  
  /**
   * Callback when items per page changes
   */
  onItemsPerPageChange: (itemsPerPage: number) => void;
  
  /**
   * Visual variant
   * @default 'default'
   */
  variant?: PaginationVariant;
  
  /**
   * Items per page options
   * @default [10, 25, 50, 100]
   */
  itemsPerPageOptions?: number[];
  
  /**
   * Custom class name
   */
  className?: string;
}
