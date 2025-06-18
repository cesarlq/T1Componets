# Sistema Responsivo T1Components

Esta guía explica cómo usar el nuevo sistema responsivo unificado para manejar tamaños de letras, íconos y breakpoints en diferentes resoluciones.

## 📋 Tabla de Contenidos

1. [Configuración](#configuración)
2. [Breakpoints](#breakpoints)
3. [Tipografía Responsiva](#tipografía-responsiva)
4. [Íconos Responsivos](#íconos-responsivos)
5. [Hooks](#hooks)
6. [Ejemplos de Uso](#ejemplos-de-uso)
7. [Migración](#migración)

## 🔧 Configuración

### Breakpoints Unificados

Los breakpoints están centralizados en `src/config/breakpoints.ts`:

```typescript
export const BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 750,      // Tu breakpoint actual
  lg: 1024,
  xl: 1200,
  xxl: 1400,
  // Breakpoints específicos
  mobile: 750,   // Tu breakpoint actual
  tablet: 1110,  // Tu breakpoint de reducción
  desktop: 1200,
}
```

### Integración con Tailwind

El sistema se integra automáticamente con Tailwind CSS:

```javascript
// tailwind.config.js
const { BREAKPOINTS } = require('./src/config/breakpoints.ts');

module.exports = {
  theme: {
    screens: {
      'xs': `${BREAKPOINTS.xs}px`,
      'sm': `${BREAKPOINTS.sm}px`,
      'md': `${BREAKPOINTS.md}px`,
      // ... más breakpoints
    }
  }
}
```

## 📱 Breakpoints

### Uso Básico

```typescript
import { BREAKPOINTS, mediaQueries } from '../config/breakpoints';

// En CSS-in-JS
const styles = {
  fontSize: '16px',
  [mediaQueries.up('md')]: {
    fontSize: '18px',
  },
  [mediaQueries.down('sm')]: {
    fontSize: '14px',
  }
};
```

### Con SCSS

```scss
@use '../styles/common/variables.scss';

.my-component {
  font-size: 16px;
  
  @include variables.respond-to(md) {
    font-size: 18px;
  }
  
  @include variables.respond-down(sm) {
    font-size: 14px;
  }
}
```

## 📝 Tipografía Responsiva

### Variantes Disponibles

```typescript
// Headers
'h1', 'h2', 'h3', 'h4', 'h5', 'h6'

// Body text
'body1', 'body2'

// UI elements
'button', 'caption', 'overline'

// Menu específicos
'menuTitle', 'menuItem', 'menuIcon'
```

### Uso con React

```typescript
import { useResponsiveTypography } from '../config/typography';

const MyComponent = () => {
  const { getTypographyStyles } = useResponsiveTypography();
  
  return (
    <Typography sx={getTypographyStyles('h2')}>
      Título Responsivo
    </Typography>
  );
};
```

### Uso con CSS

```scss
.title {
  @include generateResponsiveTypography('h2');
}
```

### Tamaños por Breakpoint

| Variante | XS | SM | MD | LG | XL | XXL |
|----------|----|----|----|----|----|----|
| h1       | 25px | 25px | 30px | 32px | 36px | 48px |
| h2       | 21px | 21px | 24px | 25px | 28px | 36px |
| body1    | 14px | 14px | 16px | 16px | 18px | 18px |
| menuItem | 12px | 12px | 14px | 14px | 16px | 16px |

## 🎯 Íconos Responsivos

### Variantes de Íconos

```typescript
// Tamaños estándar
'xs', 'sm', 'md', 'lg', 'xl', 'xxl'

// Específicos para UI
'menuIcon', 'navIcon', 'buttonIcon', 'cardIcon', 'headerIcon'

// Para contextos específicos
'sidebar', 'navbar', 'mobile', 'desktop'
```

### Uso Básico

```typescript
import { useResponsiveIcon } from '../config/iconSizes';

const MyComponent = () => {
  const { getIconProps } = useResponsiveIcon();
  
  return (
    <HomeIcon 
      sx={{
        ...getIconProps('navIcon').style,
        fontSize: `${getIconProps('navIcon').width}px !important`,
      }}
    />
  );
};
```

### Para Menús

```typescript
import { useMenuIconSize } from '../config/iconSizes';

const MenuComponent = ({ isMobile, isCollapsed }) => {
  const { getSidebarIconProps, getNavbarIconProps } = useMenuIconSize(isMobile, isCollapsed);
  
  return (
    <div>
      <HomeIcon sx={getSidebarIconProps().style} />
      <MenuIcon sx={getNavbarIconProps().style} />
    </div>
  );
};
```

## 🪝 Hooks

### useResponsiveDesign

Hook principal para manejo responsivo:

```typescript
import { useResponsiveDesign } from '../hooks/useResponsiveDesign';

const MyComponent = () => {
  const {
    isMobile,
    isTablet,
    isDesktop,
    currentBreakpoint,
    getResponsiveTextStyles,
    getResponsiveIconProps,
    getResponsiveValue,
  } = useResponsiveDesign();
  
  // Obtener valores específicos por breakpoint
  const padding = getResponsiveValue({
    xs: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
  });
  
  return (
    <div style={{ padding }}>
      <Typography sx={getResponsiveTextStyles('h2')}>
        Breakpoint actual: {currentBreakpoint}
      </Typography>
    </div>
  );
};
```

### useMenuResponsive

Hook específico para componentes de menú:

```typescript
import { useMenuResponsive } from '../hooks/useResponsiveDesign';

const MenuComponent = ({ isReduced = false }) => {
  const {
    isMobile,
    menuIcons,
    sidebarWidth,
    navbarHeight,
    menuConfig,
  } = useMenuResponsive(isReduced);
  
  return (
    <div style={{ width: sidebarWidth }}>
      <nav style={{ height: navbarHeight }}>
        <MenuIcon sx={menuIcons.getToggleIconProps().style} />
      </nav>
    </div>
  );
};
```

## 💡 Ejemplos de Uso

### Componente de Navbar Responsivo

```typescript
import React from 'react';
import { useMenuResponsive } from '../hooks/useResponsiveDesign';
import { Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const ResponsiveNavbar = () => {
  const {
    isMobile,
    navbarHeight,
    menuIcons,
    getResponsiveTextStyles,
  } = useMenuResponsive();
  
  return (
    <Box sx={{
      height: navbarHeight,
      display: 'flex',
      alignItems: 'center',
      padding: isMobile ? '0 1rem' : '0 2rem',
      backgroundColor: '#fff',
      borderBottom: '1px solid #e0e0e0',
    }}>
      <MenuIcon sx={{
        ...menuIcons.getToggleIconProps().style,
        fontSize: `${menuIcons.getToggleIconProps().width}px !important`,
        marginRight: '1rem',
      }} />
      
      <Typography sx={getResponsiveTextStyles('menuTitle')}>
        Mi Aplicación
      </Typography>
    </Box>
  );
};
```

### Sidebar Responsivo

```typescript
const ResponsiveSidebar = ({ isReduced }) => {
  const {
    isMobile,
    sidebarWidth,
    menuIcons,
    getResponsiveTextStyles,
  } = useMenuResponsive(isReduced);
  
  const menuItems = [
    { icon: HomeIcon, label: 'Inicio' },
    { icon: DashboardIcon, label: 'Dashboard' },
  ];
  
  return (
    <Box sx={{
      width: sidebarWidth,
      height: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '1rem',
      transition: 'width 0.3s ease',
    }}>
      {menuItems.map((item, index) => (
        <Box key={index} sx={{
          display: 'flex',
          alignItems: 'center',
          gap: isReduced && !isMobile ? '0' : '0.75rem',
          padding: '0.75rem',
          borderRadius: '8px',
          cursor: 'pointer',
          '&:hover': { backgroundColor: '#e3f2fd' },
        }}>
          <item.icon sx={{
            ...menuIcons.getSidebarIconProps().style,
            fontSize: `${menuIcons.getSidebarIconProps().width}px !important`,
          }} />
          
          {(!isReduced || isMobile) && (
            <Typography sx={getResponsiveTextStyles('menuItem')}>
              {item.label}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
};
```

### Uso con Tailwind CSS

```jsx
const ResponsiveComponent = () => {
  return (
    <div className="
      text-responsive-sm 
      mobile:text-responsive-base 
      desktop:text-responsive-lg
      p-responsive-sm 
      mobile:p-responsive-md
    ">
      <h1 className="text-responsive-xl mobile:text-responsive-2xl">
        Título Responsivo
      </h1>
    </div>
  );
};
```

## 🔄 Migración

### Desde el sistema anterior

1. **Reemplaza useScreenDimensions:**

```typescript
// Antes
import useScreenDimensions from '../hooks/useScreenDimensions';
const { width } = useScreenDimensions();
const isMobile = width && width <= 750;

// Después
import { useResponsiveDesign } from '../hooks/useResponsiveDesign';
const { isMobile, currentBreakpoint } = useResponsiveDesign();
```

2. **Actualiza Media Queries de MUI:**

```typescript
// Antes
const theme = useTheme();
const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

// Después
const { isMobile, isSmallScreen } = useResponsiveDesign();
```

3. **Migra estilos hardcodeados:**

```typescript
// Antes
const iconSize = isMobile ? 20 : 24;

// Después
const { getResponsiveIconProps } = useResponsiveDesign();
const iconProps = getResponsiveIconProps('navIcon');
```

### Checklist de Migración

- [ ] Actualizar imports de hooks
- [ ] Reemplazar media queries hardcodeadas
- [ ] Usar variantes de tipografía en lugar de tamaños fijos
- [ ] Implementar íconos responsivos
- [ ] Actualizar breakpoints en SCSS
- [ ] Probar en diferentes resoluciones

## 🎯 Mejores Prácticas

1. **Usa las variantes semánticas:** Prefiere `menuTitle` sobre tamaños específicos
2. **Aprovecha los hooks:** Usa `useMenuResponsive` para componentes de menú
3. **Mantén consistencia:** Usa los breakpoints unificados en todo el proyecto
4. **Optimiza rendimiento:** Los hooks usan debounce para resize events
5. **Testa en dispositivos reales:** No solo en DevTools

## 🐛 Troubleshooting

### Problemas Comunes

1. **Los íconos no cambian de tamaño:**
   - Asegúrate de usar `fontSize` con `!important` en MUI
   - Verifica que estés usando el hook correcto

2. **Breakpoints no funcionan:**
   - Revisa que Tailwind esté compilando correctamente
   - Verifica la configuración en `tailwind.config.js`

3. **Tipografía no es responsiva:**
   - Usa `getTypographyStyles()` en lugar de valores hardcodeados
   - Verifica que el componente esté dentro del tema de MUI

### Debug

```typescript
const DebugComponent = () => {
  const responsive = useResponsiveDesign();
  
  console.log('Estado responsivo:', {
    currentBreakpoint: responsive.currentBreakpoint,
    isMobile: responsive.isMobile,
    width: responsive.width,
  });
  
  return <div>Ver consola para debug info</div>;
};
```

---

## 📚 Referencias

- [Configuración de Breakpoints](src/config/breakpoints.ts)
- [Sistema de Tipografía](src/config/typography.ts)
- [Configuración de Íconos](src/config/iconSizes.ts)
- [Hook Principal](src/hooks/useResponsiveDesign.tsx)
- [Ejemplo Completo](src/examples/ResponsiveMenuExample.tsx)
