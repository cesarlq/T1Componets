import React, { useEffect, useCallback, useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import { MenuProvider, useMenu } from './menuContext';
import { Sidebar, SidebarPropsI } from './Sidebar';
import { Navbar } from './Navbar';
import { NavbarPropsI } from '@/interfaces/menu';
import { T1ShippingBanner } from './T1ShippingBanner';
import { useMediaQuery } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

// Importar estilos con fixes de z-index
import styles from '../../styles/common/LayoutMenu.module.scss';

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

export interface MenuState {
  isOpen: boolean;
  isReduced: boolean;
  viewport: 'mobile' | 'tablet' | 'desktop';
  width: number;
  height: number;
}

export interface MenuCallbacks {
  onMenuStateChange?: (state: MenuState) => void;
  onToggleOpen?: (isOpen: boolean) => void;
  onToggleReduced?: (isReduced: boolean) => void;
  onViewportChange?: (viewport: MenuState['viewport']) => void;
}

export interface LayoutMenuProps {
  navBarProps: Omit<NavbarPropsI, 'onReducerHandle' | 'sidebarReduce' | 'isMobile'>;
  sideBarProps: Omit<SidebarPropsI, 'onToggleOpen' | 'onToggleReduce' | 'isOpen' | 'isReduced' | 'isMobile'>;
  menuCallbacks?: MenuCallbacks;
  children?: React.ReactNode;
  config?: {
    animations?: boolean;
    persistPreferences?: boolean;
    customBreakpoints?: {
      mobile?: number;
      tablet?: number;
    };
  };
}

// ============================================================================
// CONSTANTS
// ============================================================================

const ANIMATION_DURATION = 300;
const STORAGE_KEY = 't1-menu-preferences';

const DEFAULT_BREAKPOINTS = {
  mobile: 750,
  tablet: 1110,
} as const;

// ============================================================================
// HOOKS
// ============================================================================

const useViewport = (customBreakpoints?: { mobile?: number; tablet?: number }) => {
  const theme = useTheme();
  const breakpoints = { ...DEFAULT_BREAKPOINTS, ...customBreakpoints };
  
  const isMobile = useMediaQuery(theme.breakpoints.down(breakpoints.mobile));
  const isTablet = useMediaQuery(theme.breakpoints.between(breakpoints.mobile, breakpoints.tablet));
  const isDesktop = useMediaQuery(theme.breakpoints.up(breakpoints.tablet));
  
  const viewport = useMemo<MenuState['viewport']>(() => {
    if (isMobile) return 'mobile';
    if (isTablet) return 'tablet';
    return 'desktop';
  }, [isMobile, isTablet]);
  
  const dimensions = useMemo(() => ({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  }), []);
  
  return { viewport, isMobile, isTablet, isDesktop, dimensions };
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

function LayoutMenuContent({ 
  navBarProps, 
  sideBarProps, 
  menuCallbacks,
  children,
  config = {} 
}: LayoutMenuProps) {
  const theme = useTheme();
  const { isOpen, isReduced, setOpen, setReduced, toggleOpen, toggleReduced } = useMenu();
  const { viewport, isMobile, isTablet, isDesktop, dimensions } = useViewport(config.customBreakpoints);
  
  // Estado del menú para callbacks
  const menuState: MenuState = useMemo(() => ({
    isOpen,
    isReduced,
    viewport,
    width: dimensions.width,
    height: dimensions.height,
  }), [isOpen, isReduced, viewport, dimensions]);
  
  // Notificar cambios de estado
  useEffect(() => {
    menuCallbacks?.onMenuStateChange?.(menuState);
  }, [menuState, menuCallbacks]);
  
  // Inicialización basada en viewport
  useEffect(() => {
    if (dimensions.width > 0) {
      switch (viewport) {
        case 'mobile':
          setOpen(false);
          setReduced(false);
          break;
        case 'tablet':
          setOpen(true);
          setReduced(true);
          break;
        case 'desktop':
          setOpen(true);
          setReduced(false);
          break;
      }
    }
  }, [viewport, dimensions.width, setOpen, setReduced]);
  
  // Handlers con callbacks
  const handleToggleOpen = useCallback(() => {
    toggleOpen();
    menuCallbacks?.onToggleOpen?.(!isOpen);
  }, [toggleOpen, isOpen, menuCallbacks]);
  
  const handleToggleReduce = useCallback(() => {
    toggleReduced();
    menuCallbacks?.onToggleReduced?.(!isReduced);
  }, [toggleReduced, isReduced, menuCallbacks]);
  
  // Handler para el toggle desde navbar
  const handleReducerHandle = useCallback(() => {
    if (isMobile) {
      handleToggleOpen();
    } else {
      handleToggleReduce();
    }
  }, [isMobile, handleToggleOpen, handleToggleReduce]);
  
  // TopBanner para móvil
  const MobileTopBanner = useCallback(() => (
    <div className={styles.mobileTopBanner}>
      <T1ShippingBanner
        brandText={sideBarProps.shippingBannerTitle || navBarProps.shippingBannerTitle}
        isMobile={true}
        isReduced={isReduced}
        isOpen={isOpen}
        onToggleOpen={handleToggleOpen}
      />
    </div>
  ), [sideBarProps.shippingBannerTitle, navBarProps.shippingBannerTitle, isReduced, isOpen, handleToggleOpen]);
  
  return (
    <div className={styles.layoutContainer}>
      {/* Navbar con z-index alto */}
      <nav 
        className={clsx(styles.navbarWrapper, 'navbar-container')}
        data-sidebar-open={isOpen}
      >
        <Navbar
          {...navBarProps}
          shippingBannerTitle={navBarProps.shippingBannerTitle}
          isMobile={isMobile}
          onReducerHandle={handleReducerHandle}
          sidebarReduce={isReduced}
        />
      </nav>
      
      {/* Sidebar con z-index dinámico */}
      <aside 
        className={clsx(styles.sidebarWrapper, 'sidebar-container')}
        data-reduce={isReduced}
        data-open-side-bar={isOpen}
      >
        <Sidebar
          {...sideBarProps}
          TopBanner={isMobile ? MobileTopBanner : undefined}
          isOpen={isOpen}
          isReduced={isReduced}
          isMobile={isMobile}
          onToggleOpen={handleToggleOpen}
          onToggleReduce={handleToggleReduce}
        />
      </aside>
      
      {/* Overlay para móvil */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleToggleOpen}
          />
        )}
      </AnimatePresence>
      
      {/* Área de contenido */}
      <main 
        className={clsx(styles.mainContent, 'main-content')}
        data-sidebar-expanded={!isMobile && isOpen && !isReduced}
        data-sidebar-reduced={!isMobile && isOpen && isReduced}
      >
        {children}
      </main>
    </div>
  );
}

export default function LayoutMenu(props: LayoutMenuProps) {
  return (
    <MenuProvider>
      <LayoutMenuContent {...props} />
    </MenuProvider>
  );
}