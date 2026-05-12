export type BrandVariant = 'logo' | 'symbol';
export type BrandName = 'carelon' | 'elevance';
export type BrandMode = 'dark' | 'light';

export interface BrandProps {
  /** Brand variant - logo (full) or symbol (icon only) */
  variant?: BrandVariant;
  /** Brand name - carelon or elevance */
  brand?: BrandName;
  /** Color mode - dark or light */
  mode?: BrandMode;
  /** Additional CSS class */
  className?: string;
  /** Alt text for accessibility */
  alt?: string;
}
