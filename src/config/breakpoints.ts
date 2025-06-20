// Breakpoints unificados para toda la aplicación
export const BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 750,   // Tu breakpoint actual
  lg: 1024,
  xl: 1200,
  xxl: 1400,
  // Breakpoints específicos de tu aplicación
  mobile: 750,      // Tu breakpoint actual
  tablet: 1110,     // Tu breakpoint de reducción
  desktop: 1200,
} as const;

// Tipos para TypeScript
export type BreakpointKey = keyof typeof BREAKPOINTS;
export type BreakpointValue = typeof BREAKPOINTS[BreakpointKey];

// Utilidades para media queries
export const mediaQueries = {
  up: (breakpoint: BreakpointKey) => `@media (min-width: ${BREAKPOINTS[breakpoint]}px)`,
  down: (breakpoint: BreakpointKey) => `@media (max-width: ${BREAKPOINTS[breakpoint] - 1}px)`,
  between: (min: BreakpointKey, max: BreakpointKey) => 
    `@media (min-width: ${BREAKPOINTS[min]}px) and (max-width: ${BREAKPOINTS[max] - 1}px)`,
  only: (breakpoint: BreakpointKey) => {
    const keys = Object.keys(BREAKPOINTS) as BreakpointKey[];
    const index = keys.indexOf(breakpoint);
    const nextBreakpoint = keys[index + 1];
    
    if (!nextBreakpoint) {
      return `@media (min-width: ${BREAKPOINTS[breakpoint]}px)`;
    }
    
    return `@media (min-width: ${BREAKPOINTS[breakpoint]}px) and (max-width: ${BREAKPOINTS[nextBreakpoint] - 1}px)`;
  }
};

// Hook personalizado para breakpoints
export const useResponsiveBreakpoints = () => {
  return {
    breakpoints: BREAKPOINTS,
    mediaQueries,
    // Función helper para obtener valores responsivos
    getResponsiveValue: <T>(values: Partial<Record<BreakpointKey, T>>, currentWidth: number): T | undefined => {
      const sortedBreakpoints = Object.entries(BREAKPOINTS)
        .sort(([, a], [, b]) => b - a) // Ordenar de mayor a menor
        .filter(([key]) => values[key as BreakpointKey] !== undefined);
      
      for (const [key, breakpointValue] of sortedBreakpoints) {
        if (currentWidth >= breakpointValue) {
          return values[key as BreakpointKey];
        }
      }
      
      return undefined;
    }
  };
};
