import React from 'react';
import { useMenuResponsive } from '../hooks/useResponsiveDesign';
import { useResponsiveTypography } from '../config/typography';
import { useResponsiveIcon } from '../config/iconSizes';
import { Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';

// Ejemplo de componente de menú usando el nuevo sistema responsivo
export const ResponsiveMenuExample: React.FC<{ isReduced?: boolean }> = ({ 
  isReduced = false 
}) => {
  const {
    isMobile,
    isTablet,
    isDesktop,
    currentBreakpoint,
    getResponsiveTextStyles,
    getResponsiveIconProps,
    menuIcons,
    sidebarWidth,
    navbarHeight,
  } = useMenuResponsive(isReduced);

  const { getTypographyStyles } = useResponsiveTypography();
  const { getIconProps } = useResponsiveIcon();

  // Estilos para el navbar
  const navbarStyles = {
    height: navbarHeight,
    display: 'flex',
    alignItems: 'center',
    padding: '0 1rem',
    backgroundColor: '#fff',
    borderBottom: '1px solid #f0f0f0',
    gap: '1rem',
  };

  // Estilos para el sidebar
  const sidebarStyles = {
    width: sidebarWidth,
    height: '100vh',
    backgroundColor: '#f8f9fa',
    padding: '1rem',
    borderRight: '1px solid #e0e0e0',
    transition: 'width 0.3s ease',
  };

  // Estilos para items del menú
  const menuItemStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: isReduced && !isMobile ? '0' : '0.75rem',
    padding: '0.75rem',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: '#e3f2fd',
    },
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <Box sx={sidebarStyles}>
        <Typography 
          variant="h6" 
          sx={{
            ...getTypographyStyles('menuTitle'),
            marginBottom: '1rem',
            display: isReduced && !isMobile ? 'none' : 'block',
          }}
        >
          {isMobile ? 'Menú Móvil' : isTablet ? 'Menú Tablet' : 'Menú Desktop'}
        </Typography>

        {/* Menu Items */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Box sx={menuItemStyles}>
            <HomeIcon 
              sx={{
                ...menuIcons.getSidebarIconProps().style,
                fontSize: `${menuIcons.getSidebarIconProps().width}px !important`,
              }}
            />
            {(!isReduced || isMobile) && (
              <Typography sx={getTypographyStyles('menuItem')}>
                Inicio
              </Typography>
            )}
          </Box>

          <Box sx={menuItemStyles}>
            <DashboardIcon 
              sx={{
                ...menuIcons.getSidebarIconProps().style,
                fontSize: `${menuIcons.getSidebarIconProps().width}px !important`,
              }}
            />
            {(!isReduced || isMobile) && (
              <Typography sx={getTypographyStyles('menuItem')}>
                Dashboard
              </Typography>
            )}
          </Box>
        </Box>

        {/* Info del breakpoint actual */}
        <Box sx={{ 
          marginTop: 'auto', 
          padding: '1rem 0',
          display: isReduced && !isMobile ? 'none' : 'block',
        }}>
          <Typography sx={getTypographyStyles('caption')}>
            Breakpoint: {currentBreakpoint}
          </Typography>
          <Typography sx={getTypographyStyles('caption')}>
            Ancho sidebar: {sidebarWidth}
          </Typography>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Navbar */}
        <Box sx={navbarStyles}>
          <MenuIcon 
            sx={{
              ...menuIcons.getToggleIconProps().style,
              fontSize: `${menuIcons.getToggleIconProps().width}px !important`,
            }}
          />
          
          <Typography sx={getTypographyStyles('menuTitle')}>
            Navbar - Altura: {navbarHeight}
          </Typography>

          <Box sx={{ marginLeft: 'auto' }}>
            <Typography sx={getTypographyStyles('body2')}>
              {isMobile && 'Móvil'}
              {isTablet && 'Tablet'}
              {isDesktop && 'Desktop'}
            </Typography>
          </Box>
        </Box>

        {/* Content Area */}
        <Box sx={{ 
          flex: 1, 
          padding: '2rem',
          backgroundColor: '#fafafa',
        }}>
          <Typography sx={getTypographyStyles('h2')}>
            Sistema Responsivo Configurado
          </Typography>
          
          <Box sx={{ marginTop: '2rem' }}>
            <Typography sx={getTypographyStyles('h4')}>
              Estado Actual:
            </Typography>
            
            <ul>
              <li>
                <Typography sx={getTypographyStyles('body1')}>
                  Breakpoint: <strong>{currentBreakpoint}</strong>
                </Typography>
              </li>
              <li>
                <Typography sx={getTypographyStyles('body1')}>
                  Es móvil: <strong>{isMobile ? 'Sí' : 'No'}</strong>
                </Typography>
              </li>
              <li>
                <Typography sx={getTypographyStyles('body1')}>
                  Es tablet: <strong>{isTablet ? 'Sí' : 'No'}</strong>
                </Typography>
              </li>
              <li>
                <Typography sx={getTypographyStyles('body1')}>
                  Es desktop: <strong>{isDesktop ? 'Sí' : 'No'}</strong>
                </Typography>
              </li>
              <li>
                <Typography sx={getTypographyStyles('body1')}>
                  Menú reducido: <strong>{isReduced ? 'Sí' : 'No'}</strong>
                </Typography>
              </li>
            </ul>
          </Box>

          <Box sx={{ marginTop: '2rem' }}>
            <Typography sx={getTypographyStyles('h4')}>
              Tamaños de Íconos:
            </Typography>
            
            <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '1rem' }}>
              <HomeIcon sx={getIconProps('xs', currentBreakpoint).style} />
              <HomeIcon sx={getIconProps('sm', currentBreakpoint).style} />
              <HomeIcon sx={getIconProps('md', currentBreakpoint).style} />
              <HomeIcon sx={getIconProps('lg', currentBreakpoint).style} />
              <HomeIcon sx={getIconProps('xl', currentBreakpoint).style} />
              <HomeIcon sx={getIconProps('xxl', currentBreakpoint).style} />
            </Box>
            
            <Typography sx={{ ...getTypographyStyles('caption'), marginTop: '0.5rem' }}>
              XS, SM, MD, LG, XL, XXL
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ResponsiveMenuExample;
