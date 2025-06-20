import { BREAKPOINTS, BreakpointKey } from './breakpoints';

// Escalas de tipografía por breakpoint
export const FONT_SCALES = {
  xs: {
    base: 14,
    scale: 1.125, // Minor Third
  },
  sm: {
    base: 14,
    scale: 1.125,
  },
  md: {
    base: 16,
    scale: 1.2, // Minor Third
  },
  lg: {
    base: 16,
    scale: 1.25, // Major Third
  },
  xl: {
    base: 18,
    scale: 1.25,
  },
  xxl: {
    base: 18,
    scale: 1.333, // Perfect Fourth
  },
} as const;

// Tipos de texto disponibles
export const TEXT_VARIANTS = {
  // Headers
  h1: { level: 6, weight: 700 },
  h2: { level: 5, weight: 600 },
  h3: { level: 4, weight: 600 },
  h4: { level: 3, weight: 500 },
  h5: { level: 2, weight: 500 },
  h6: { level: 1, weight: 500 },
  
  // Body text
  body1: { level: 0, weight: 400 },
  body2: { level: -1, weight: 400 },
  
  // UI elements
  button: { level: 0, weight: 500 },
  caption: { level: -2, weight: 400 },
  overline: { level: -2, weight: 400, transform: 'uppercase' as const },
  
  // Menu específicos
  menuTitle: { level: 1, weight: 500 },
  menuItem: { level: 0, weight: 400 },
  menuIcon: { level: 0, weight: 400 },
} as const;

type TextVariantConfig = {
  level: number;
  weight: number;
  transform?: 'uppercase' | 'lowercase' | 'capitalize';
};

export type TextVariant = keyof typeof TEXT_VARIANTS;

// Helper para obtener la configuración de una variante
const getVariantConfig = (variant: TextVariant): TextVariantConfig => {
  return TEXT_VARIANTS[variant] as TextVariantConfig;
};

// Función para calcular el tamaño de fuente
export const calculateFontSize = (
  variant: TextVariant,
  breakpoint: BreakpointKey = 'md'
): number => {
  const scale = FONT_SCALES[breakpoint as keyof typeof FONT_SCALES] || FONT_SCALES.md;
  const variantConfig = TEXT_VARIANTS[variant];
  
  return Math.round(scale.base * Math.pow(scale.scale, variantConfig.level));
};

// Función para generar estilos CSS responsivos
export const generateResponsiveTypography = (variant: TextVariant) => {
  const variantConfig = getVariantConfig(variant);
  const breakpointKeys = Object.keys(FONT_SCALES) as (keyof typeof FONT_SCALES)[];
  
  let styles = `
    font-weight: ${variantConfig.weight};
    line-height: 1.5;
    font-family: 'Manrope', sans-serif;
  `;
  
  if (variantConfig.transform) {
    styles += `text-transform: ${variantConfig.transform};`;
  }
  
  // Generar media queries para cada breakpoint
  breakpointKeys.forEach((bp, index) => {
    const fontSize = calculateFontSize(variant, bp);
    
    if (index === 0) {
      // Base size (mobile first)
      styles += `font-size: ${fontSize}px;`;
    } else {
      // Media queries para breakpoints mayores
      const breakpointValue = BREAKPOINTS[bp];
      styles += `
        @media (min-width: ${breakpointValue}px) {
          font-size: ${fontSize}px;
        }
      `;
    }
  });
  
  return styles;
};

// Hook para obtener estilos de tipografía
export const useResponsiveTypography = () => {
  const getTypographyStyles = (variant: TextVariant) => {
    const config = getVariantConfig(variant);
    return {
      fontFamily: 'Manrope, sans-serif',
      fontWeight: config.weight,
      lineHeight: 1.5,
      ...(config.transform && {
        textTransform: config.transform
      }),
      // Para uso con styled-components o emotion
      fontSize: `clamp(
        ${calculateFontSize(variant, 'xs')}px,
        ${calculateFontSize(variant, 'md')}px,
        ${calculateFontSize(variant, 'xxl')}px
      )`
    };
  };

  return { getTypographyStyles, calculateFontSize, generateResponsiveTypography };
};

// Utilidades para MUI Theme
export const getMuiTypographyConfig = () => {
  return Object.keys(TEXT_VARIANTS).reduce((acc, variant) => {
    const variantKey = variant as TextVariant;
    const config = getVariantConfig(variantKey);
    
    acc[variantKey] = {
      fontFamily: 'Manrope, sans-serif',
      fontWeight: config.weight,
      lineHeight: 1.5,
      ...(config.transform && { textTransform: config.transform }),
      // Responsive font sizes para MUI
      fontSize: {
        xs: `${calculateFontSize(variantKey, 'xs')}px`,
        sm: `${calculateFontSize(variantKey, 'sm')}px`,
        md: `${calculateFontSize(variantKey, 'md')}px`,
        lg: `${calculateFontSize(variantKey, 'lg')}px`,
        xl: `${calculateFontSize(variantKey, 'xl')}px`,
      }
    };
    
    return acc;
  }, {} as Record<string, any>);
};
