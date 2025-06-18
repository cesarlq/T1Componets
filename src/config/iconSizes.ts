import { BREAKPOINTS, BreakpointKey } from './breakpoints';

// Tamaños base de íconos por breakpoint
export const ICON_BASE_SIZES = {
  xs: 16,
  sm: 18,
  md: 20,
  lg: 22,
  xl: 24,
  xxl: 26,
} as const;

// Variantes de íconos disponibles
export const ICON_VARIANTS = {
  // Tamaños estándar
  xs: { multiplier: 0.75 },      // 12px en md
  sm: { multiplier: 0.875 },     // 14px en md  
  md: { multiplier: 1 },         // 16px en md (base)
  lg: { multiplier: 1.25 },      // 20px en md
  xl: { multiplier: 1.5 },       // 24px en md
  xxl: { multiplier: 2 },        // 32px en md
  
  // Íconos específicos para UI
  menuIcon: { multiplier: 1.125 }, // 18px en md
  navIcon: { multiplier: 1.25 },   // 20px en md
  buttonIcon: { multiplier: 1 },   // 16px en md
  cardIcon: { multiplier: 1.5 },   // 24px en md
  headerIcon: { multiplier: 1.75 }, // 28px en md
  
  // Íconos para diferentes contextos
  sidebar: { multiplier: 1.125 },   // Para sidebar
  navbar: { multiplier: 1.25 },     // Para navbar
  mobile: { multiplier: 1.375 },    // Para móvil (más grande)
  desktop: { multiplier: 1 },       // Para desktop
} as const;

export type IconVariant = keyof typeof ICON_VARIANTS;

// Función para calcular el tamaño de ícono
export const calculateIconSize = (
  variant: IconVariant,
  breakpoint: BreakpointKey = 'md'
): number => {
  const baseSize = ICON_BASE_SIZES[breakpoint as keyof typeof ICON_BASE_SIZES] || ICON_BASE_SIZES.md;
  const variantConfig = ICON_VARIANTS[variant];
  
  return Math.round(baseSize * variantConfig.multiplier);
};

// Función para obtener tamaños responsivos de íconos
export const getResponsiveIconSize = (variant: IconVariant) => {
  const breakpointKeys = Object.keys(ICON_BASE_SIZES) as (keyof typeof ICON_BASE_SIZES)[];
  
  return breakpointKeys.reduce((acc, bp) => {
    acc[bp] = calculateIconSize(variant, bp);
    return acc;
  }, {} as Record<string, number>);
};

// Hook para íconos responsivos
export const useResponsiveIcon = () => {
  const getIconProps = (variant: IconVariant, currentBreakpoint: BreakpointKey = 'md') => {
    const size = calculateIconSize(variant, currentBreakpoint);
    
    return {
      width: size,
      height: size,
      style: {
        width: `${size}px`,
        height: `${size}px`,
        minWidth: `${size}px`,
        minHeight: `${size}px`,
      }
    };
  };

  const getResponsiveIconStyles = (variant: IconVariant) => {
    const breakpointKeys = Object.keys(ICON_BASE_SIZES) as (keyof typeof ICON_BASE_SIZES)[];
    let styles = '';
    
    breakpointKeys.forEach((bp, index) => {
      const size = calculateIconSize(variant, bp);
      
      if (index === 0) {
        // Base size (mobile first)
        styles += `
          width: ${size}px;
          height: ${size}px;
          min-width: ${size}px;
          min-height: ${size}px;
        `;
      } else {
        // Media queries para breakpoints mayores
        const breakpointValue = BREAKPOINTS[bp];
        styles += `
          @media (min-width: ${breakpointValue}px) {
            width: ${size}px;
            height: ${size}px;
            min-width: ${size}px;
            min-height: ${size}px;
          }
        `;
      }
    });
    
    return styles;
  };

  return { 
    getIconProps, 
    getResponsiveIconStyles, 
    calculateIconSize,
    getResponsiveIconSize 
  };
};

// Utilidades para MUI Icons
export const getMuiIconProps = (variant: IconVariant, breakpoint: BreakpointKey = 'md') => {
  const size = calculateIconSize(variant, breakpoint);
  
  return {
    sx: {
      fontSize: `${size}px !important`,
      width: `${size}px`,
      height: `${size}px`,
    }
  };
};

// Función para generar clases CSS responsivas para íconos
export const generateIconClasses = () => {
  const variants = Object.keys(ICON_VARIANTS) as IconVariant[];
  let css = '';
  
  variants.forEach(variant => {
    css += `
      .icon-${variant} {
        ${useResponsiveIcon().getResponsiveIconStyles(variant)}
      }
    `;
  });
  
  return css;
};

// Configuración específica para el menú
export const MENU_ICON_CONFIG = {
  sidebar: {
    collapsed: 'menuIcon',   // Cuando el sidebar está colapsado
    expanded: 'navIcon',     // Cuando el sidebar está expandido
    mobile: 'mobile',        // En móvil
  },
  navbar: {
    desktop: 'navbar',       // En desktop
    mobile: 'mobile',        // En móvil
    toggle: 'menuIcon',      // Botón de toggle
  }
} as const;

// Hook específico para íconos de menú
export const useMenuIconSize = (isMobile: boolean, isCollapsed: boolean = false) => {
  const { getIconProps } = useResponsiveIcon();
  
  const getSidebarIconProps = () => {
    if (isMobile) {
      return getIconProps('mobile');
    }
    return getIconProps(isCollapsed ? 'menuIcon' : 'navIcon');
  };
  
  const getNavbarIconProps = () => {
    return getIconProps(isMobile ? 'mobile' : 'navbar');
  };
  
  const getToggleIconProps = () => {
    return getIconProps('menuIcon');
  };
  
  return {
    getSidebarIconProps,
    getNavbarIconProps,
    getToggleIconProps,
  };
};
