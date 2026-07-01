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
  /** Custom logo image URL for 'logo' variant (overrides default brand logos) */
  customLogoUrl?: string;
  /** Custom symbol image URL for 'symbol' variant (overrides default brand symbols) */
  customSymbolUrl?: string;
  /** Logo alignment - left, center, or right */
  logoAlignment?: 'left' | 'center' | 'right';
  /** Logo padding (in pixels or CSS value) */
  logoPadding?: string;
}
