import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {ItemLink} from './ItemLink';
import styles from '../../styles/common/Sidebar.module.scss';

// Mock router for Storybook
const mockRouter = {
  asPath: '/dashboard',
  push: (path: string) => {
    console.log('Mock router push:', path);
    return Promise.resolve(true);
  },
  reload: () => {
    console.log('Mock router reload');
  }
};

// Interfaces
export interface SubPath {
  href: string;
  text: string;
}

export interface MenuPath {
  href: string;
  text: string;
  icon: any;
  subPaths?: SubPath[];
  concatStoreId?: boolean;
  endAdornment?: React.ReactNode;
}

export interface SidebarProps {
  className?: string;
  // Menu configuration
  menuPaths?: MenuPath[];
  // Component slots
  TopBanner?: React.ComponentType<{
    className?: string;
    onToggleReduce: () => void;
    onToggleOpen: () => void;
    isReduced: boolean;
    isOpen: boolean;
    isMobile: boolean;
  }>;
  BottomBanner?: React.ComponentType<{ className?: string }> | React.ReactNode;
  BalanceBanner?: React.ComponentType<{ className?: string }>;
  // Features
  showCreateButton?: boolean;
  showInfoBand?: boolean;
  showBalance?: boolean;
  // Configuration
  createButtonText?: string;
  createButtonPath?: string;
  breakpointReduce?: number; // Ancho donde se reduce el sidebar
  breakpointMobile?: number; // Ancho considerado móvil
  // States from parent (si quieres control externo)
  isOpen?: boolean;
  isReduced?: boolean;
  // Event handlers
  onToggleOpen?: (isOpen: boolean) => void;
  onToggleReduce?: (isReduced: boolean) => void;
  onCreateClick?: () => void;
  onNavigate?: (path: string) => void;
  onOverlayClick?: () => void; // Nuevo: handler para overlay
  // User context
  currentUserId?: string | number;
  restrictedPaths?: string[]; // Rutas que no se deben mostrar
  // Overlay configuration
  overlayClassName?: string; // Personalizar el estilo del overlay
  showOverlay?: boolean; // Controlar si mostrar overlay (default: true en móvil)
}

export function Sidebar({
  className = '',
  menuPaths = [],
  TopBanner,
  BottomBanner,
  BalanceBanner,
  showCreateButton = true,
  showInfoBand = false,
  showBalance = false,
  createButtonText = '+ Crear envío',
  createButtonPath = '/create',
  breakpointReduce = 1110,
  breakpointMobile = 768,
  isOpen: externalIsOpen,
  isReduced: externalIsReduced,
  onToggleOpen = () => {},
  onToggleReduce = () => {},
  onCreateClick,
  onNavigate = () => {},
  onOverlayClick,
  currentUserId = '',
  restrictedPaths = [],
  overlayClassName = '',
  showOverlay = true
}: SidebarProps) {
  
  // Safe router hook - usar mock en Storybook
  let router;
  try {
    router = useRouter();
  } catch (error) {
    // Si falla (como en Storybook), usar mock
    router = mockRouter;
  }
  
  const refSideBar = useRef<HTMLDivElement>(null);
  
  // Estados internos (se usan si no se pasan externos)
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [internalIsReduced, setInternalIsReduced] = useState(false);
  const [enlargeByHover, setEnlargeByHover] = useState(false);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  
  // Estados de navegación
  const [activePath, setActivePath] = useState('');
  const [currentSubmenuOpen, setCurrentSubmenuOpen] = useState<number>(0);
  const [activeSubPath, setActiveSubPath] = useState('');

  // Usar estados externos si se proporcionan, sino usar internos
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const isReduced = externalIsReduced !== undefined ? externalIsReduced : internalIsReduced;

  // Detectar ancho de pantalla
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize(); // Ejecutar al montar
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenWidth > 0) {
      const isMobile = screenWidth <= breakpointMobile;
      
      if (isMobile) {
        // En móvil: nunca reducido
        if (externalIsReduced === undefined) {
          setInternalIsReduced(false);
        }
        onToggleReduce(false);
      } else {
        const shouldReduce = screenWidth <= breakpointReduce;
        if (externalIsReduced === undefined) {
          setInternalIsReduced(shouldReduce);
        }
        onToggleReduce(shouldReduce);
      }
    }
  }, [screenWidth, breakpointReduce, breakpointMobile, externalIsReduced, onToggleReduce]);

  // Controlar scroll del body cuando está abierto en móvil
  useEffect(() => {
    const isMobile = screenWidth <= breakpointMobile;
    if (isMobile && isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    // Cleanup cuando el componente se desmonta
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, screenWidth, breakpointMobile]);

  // Click outside handler para móvil
  useEffect(() => {
    const isMobile = screenWidth <= breakpointMobile;
    if (!isMobile || !isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (refSideBar.current && !refSideBar.current.contains(event.target as Node)) {
        handleToggleOpen(false);
      }
    };

    // Pequeño delay para evitar que se cierre inmediatamente al abrir
    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, screenWidth, breakpointMobile]);

  // Inicializar rutas activas
  useEffect(() => {
    if (!activeSubPath) {
      setActiveSubPath(router.asPath);
    }
  }, [router.asPath, activeSubPath]);

  useEffect(() => {
    if (menuPaths[currentSubmenuOpen]) {
      setActivePath(menuPaths[currentSubmenuOpen].href);
    }
  }, [currentSubmenuOpen, menuPaths]);

  // Handlers
  const handleToggleOpen = (newIsOpen: boolean) => {
    if (externalIsOpen === undefined) {
      setInternalIsOpen(newIsOpen);
    }
    onToggleOpen(newIsOpen);
    
    // En móvil, asegurarse de no estar reducido cuando se abre
    if (newIsOpen && screenWidth <= breakpointMobile) {
      if (externalIsReduced === undefined) {
        setInternalIsReduced(false);
      }
      onToggleReduce(false);
    }
  };

  const handleOverlayClick = () => {
    if (onOverlayClick) {
      onOverlayClick();
    } else {
      handleToggleOpen(false);
    }
  };

  const handleCreateClick = () => {
    if (onCreateClick) {
      onCreateClick();
    } else if (createButtonPath) {
      if (router.asPath === createButtonPath) {
        router.reload();
      } else {
        router.push(createButtonPath);
        onNavigate(createButtonPath);
      }
    }
  };

  const handleMouseEnter = () => {
    const isMobile = screenWidth <= breakpointMobile;
    if (isReduced && !isMobile) {
      setEnlargeByHover(true);
    }
  };

  const handleMouseLeave = () => {
    const isMobile = screenWidth <= breakpointMobile;
    if (isReduced && !isMobile) {
      setEnlargeByHover(false);
    }
  };

  // Filtrar rutas restringidas
  const visibleMenuPaths = menuPaths.filter(path => 
    !restrictedPaths.includes(path.href)
  );

  const isMobile = screenWidth <= breakpointMobile;
  const shouldShowReduced = isReduced && !enlargeByHover && !isMobile;

  return (
    <>
      {/* Overlay para móvil */}
      {isMobile && showOverlay && (
        <div 
          className={`
            fixed inset-0 bg-black bg-opacity-50 z-[999] transition-opacity duration-300
            ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
            ${overlayClassName}
          `}
          onClick={handleOverlayClick}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          ${styles.container} ${className}
          ${isMobile ? 'fixed top-0 left-0 h-full z-[1000] transition-transform duration-300' : 'relative'}
          ${isMobile && !isOpen ? '-translate-x-full' : 'translate-x-0'}
        `}
        data-reduce={shouldShowReduced}
        data-enlarge-by-hover={enlargeByHover}
        data-show-info-band={showInfoBand}
        data-open-side-bar={isOpen}
        data-is-mobile={isMobile}
        ref={refSideBar}
      >
        <section
          className={styles.sideBar}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Top Banner */}
          {TopBanner && (
            <TopBanner 
              className={`ml-3 lg:ml-[23px] mt-3 ${shouldShowReduced ? styles.bannerReduced : ''}`}
              onToggleReduce={() => handleToggleOpen(!isOpen)}
              onToggleOpen={() => handleToggleOpen(!isOpen)}
              isReduced={shouldShowReduced}
              isOpen={isOpen}
              isMobile={isMobile}
            />
          )}

          {/* Create Button */}
          {showCreateButton && (
            <Button
              onClick={handleCreateClick}
              className={styles.callToActionCreateGuide}
              data-reduce={shouldShowReduced}
            >
              {(!isReduced || enlargeByHover || isMobile) ? createButtonText : <AddIcon />}
            </Button>
          )}

          {/* Balance Banner - solo visible cuando no está reducido */}
          {BalanceBanner && showBalance && !shouldShowReduced && (
            <BalanceBanner className="lg:!hidden" />
          )}

          {/* Menu Items */}
          <ul className={styles.paths}>
            {visibleMenuPaths.map((item, index) => (
              <ItemLink
                {...item}
                className={styles.itemLink}
                key={index}
                index={index}
                sidebarReduce={shouldShowReduced}
                enlargeByHover={enlargeByHover}
                onClickPath={(index) => setCurrentSubmenuOpen(index)}
                openSubMenu={currentSubmenuOpen === index}
                activePath={activePath}
                setActivePath={setActivePath}
                activeSubPath={activeSubPath}
                setActiveSubPath={setActiveSubPath}
                mobile={isMobile}
                currentUserId={currentUserId}
                restrictedPaths={restrictedPaths}
                onNavigate={onNavigate}
                onToggleOpen={handleToggleOpen}
              />
            ))}
          </ul>
        </section>

        {/* Bottom Banner */}
        {BottomBanner && (
          <div className={styles.bottomBanner}>
            {React.isValidElement(BottomBanner) 
              ? BottomBanner 
              : typeof BottomBanner === 'function' 
                ? <BottomBanner /> 
                : BottomBanner}
          </div>
        )}
      </aside>
    </>
  );
}