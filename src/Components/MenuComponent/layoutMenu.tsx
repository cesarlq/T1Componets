import React, { useEffect, useCallback, useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import { MenuProvider, useMenu } from './menuContext';
import { Sidebar, SidebarPropsI } from './Sidebar';
import { Navbar } from './Navbar';
import { NavbarPropsI } from '@/interfaces/menu';
import { T1ShippingBanner } from './T1ShippingBanner';
import { useMediaQuery } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

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
  // Nueva prop para personalización
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

const TRANSITIONS = {
  sidebar: {
    type: "spring",
    stiffness: 260,
    damping: 20,
    duration: ANIMATION_DURATION / 1000,
  },
  content: {
    type: "tween",
    ease: "easeInOut",
    duration: ANIMATION_DURATION / 1000,
  },
} as const;

// ============================================================================
// HOOKS
// ============================================================================

/**
 * Hook personalizado para gestionar el viewport y breakpoints
 */
const useViewport = (customBreakpoints?: { mobile?: number; tablet?: number }) => {
  const theme = useTheme();
  const breakpoints = { ...DEFAULT_BREAKPOINTS, ...customBreakpoints };
  
  // Usar los breakpoints del tema si están disponibles
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

/**
 * Hook para persistir preferencias del usuario
 */
const useMenuPreferences = (enabled: boolean = true) => {
  const [preferences, setPreferences] = React.useState<{
    isReduced?: boolean;
    lastViewport?: MenuState['viewport'];
  }>({});
  
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;
    
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setPreferences(JSON.parse(stored));
      }
    } catch (error) {
      console.warn('Failed to load menu preferences:', error);
    }
  }, [enabled]);
  
  const savePreferences = useCallback((prefs: typeof preferences) => {
    if (!enabled || typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch (error) {
      console.warn('Failed to save menu preferences:', error);
    }
  }, [enabled]);
  
  return { preferences, savePreferences };
};

// ============================================================================
// COMPONENTS
// ============================================================================

/**
 * TopBanner adaptativo para móvil con animaciones
 */
const MobileTopBanner: React.FC<{
  className?: string;
  brandText?: string;
  isReduced: boolean;
  onToggle: () => void;
}> = ({ className = '', brandText, isReduced, onToggle }) => (
  <motion.div
    className={`${className} mt-3`}
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={TRANSITIONS.content}
  >
    <T1ShippingBanner
      brandText={brandText}
      isMobile={true}
      isReduced={isReduced}
      isOpen={true}
      onToggleOpen={onToggle}
      // Versión simplificada sin props legacy
    />
  </motion.div>
);

/**
 * Contenido principal del Layout con toda la lógica
 */
function LayoutMenuContent({ 
  navBarProps, 
  sideBarProps, 
  menuCallbacks,
  config = {} 
}: LayoutMenuProps) {
  const theme = useTheme();
  const { isOpen, isReduced, setOpen, setReduced, toggleOpen, toggleReduced } = useMenu();
  const { viewport, isMobile, isTablet, isDesktop, dimensions } = useViewport(config.customBreakpoints);
  const { preferences, savePreferences } = useMenuPreferences(config.persistPreferences ?? true);
  
  // Estado inicial basado en viewport y preferencias
  const [isInitialized, setIsInitialized] = React.useState(false);
  
  // ============================================================================
  // EFFECTS
  // ============================================================================
  
  /**
   * Inicialización del estado basado en viewport y preferencias
   */
  useEffect(() => {
    if (!isInitialized && dimensions.width > 0) {
      switch (viewport) {
        case 'mobile':
          setOpen(false);
          setReduced(false);
          break;
        case 'tablet':
          setOpen(true);
          setReduced(preferences.isReduced ?? true);
          break;
        case 'desktop':
          setOpen(true);
          setReduced(preferences.isReduced ?? false);
          break;
      }
      setIsInitialized(true);
    }
  }, [viewport, isInitialized, dimensions.width, preferences, setOpen, setReduced]);
  
  /**
   * Callback único para cambios de estado
   */
  useEffect(() => {
    if (!menuCallbacks?.onMenuStateChange) return;
    
    const state: MenuState = {
      isOpen,
      isReduced,
      viewport,
      width: dimensions.width,
      height: dimensions.height,
    };
    
    menuCallbacks.onMenuStateChange(state);
  }, [isOpen, isReduced, viewport, dimensions, menuCallbacks]);
  
  /**
   * Guardar preferencias cuando cambian
   */
  useEffect(() => {
    if (isInitialized && !isMobile) {
      savePreferences({
        isReduced,
        lastViewport: viewport,
      });
    }
  }, [isReduced, viewport, isMobile, isInitialized, savePreferences]);
  
  // ============================================================================
  // HANDLERS
  // ============================================================================
  
  /**
   * Handler inteligente para toggle basado en viewport
   */
  const handleMenuToggle = useCallback(() => {
    if (isMobile) {
      toggleOpen();
    } else {
      toggleReduced();
    }
  }, [isMobile, toggleOpen, toggleReduced]);
  
  /**
   * Handler mejorado para cambios de estado con animación
   */
  const handleToggleWithAnimation = useCallback(async () => {
    if (!config.animations) {
      handleMenuToggle();
      return;
    }
    
    // Aquí podrías agregar lógica de animación más compleja
    handleMenuToggle();
  }, [handleMenuToggle, config.animations]);
  
  // ============================================================================
  // RENDER HELPERS
  // ============================================================================
  
  const sidebarVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: TRANSITIONS.sidebar,
    },
    closed: {
      x: isMobile ? -300 : 0,
      opacity: isMobile ? 0 : 1,
      transition: TRANSITIONS.sidebar,
    },
  };
  
  const contentVariants = {
    expanded: {
      marginLeft: isReduced ? 64 : 280,
      transition: TRANSITIONS.content,
    },
    collapsed: {
      marginLeft: isMobile ? 0 : (isReduced ? 64 : 280),
      transition: TRANSITIONS.content,
    },
  };
  
  // ============================================================================
  // RENDER
  // ============================================================================
  
  return (
    <div className="layout-container" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Overlay para móvil */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: theme.zIndex.drawer - 1,
            }}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
      
      {/* Sidebar con animaciones */}
      <motion.aside
        variants={sidebarVariants}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        style={{
          position: isMobile ? 'fixed' : 'relative',
          zIndex: theme.zIndex.drawer,
          height: '100vh',
        }}
      >
        <Sidebar
          {...sideBarProps}
          className="h-full"
          TopBanner={isMobile ? 
            (props) => (
              <MobileTopBanner 
                {...props} 
                brandText={sideBarProps.shippingBannerTitle}
                isReduced={isReduced}
                onToggle={handleToggleWithAnimation}
              />
            ) : 
            sideBarProps.TopBanner
          }
          isReduced={isReduced}
          isOpen={isOpen}
          isMobile={isMobile}
          onToggleOpen={setOpen}
          onToggleReduce={setReduced}
        />
      </motion.aside>
      
      {/* Contenido principal con animación de margen */}
      <motion.main
        variants={contentVariants}
        initial={false}
        animate={isMobile || !isOpen ? 'collapsed' : 'expanded'}
        style={{
          minHeight: '100vh',
          position: 'relative',
        }}
      >
        <Navbar
          {...navBarProps}
          shippingBannerTitle={navBarProps.shippingBannerTitle}
          isMobile={isMobile}
          texts={{
            logout: "Cerrar sesión",
            ...navBarProps.texts
          }}
          onReducerHandle={handleToggleWithAnimation}
          sidebarReduce={isReduced}
        />
        
        {/* Área de contenido - aquí iría el children si lo necesitas */}
        <div className="content-area" style={{ padding: theme.spacing(3) }}>
          {/* Content goes here */}
        </div>
      </motion.main>
    </div>
  );
}

/**
 * Componente principal del Layout Menu
 * Provee el contexto y gestiona todo el estado del menú
 */
export default function LayoutMenu(props: LayoutMenuProps) {
  const { config = {} } = props;
  
  // Wrapper con AnimatePresence si las animaciones están habilitadas
  const content = (
    <MenuProvider>
      <LayoutMenuContent {...props} />
    </MenuProvider>
  );
  
  if (config.animations !== false) {
    return <AnimatePresence mode="wait">{content}</AnimatePresence>;
  }
  
  return content;
}