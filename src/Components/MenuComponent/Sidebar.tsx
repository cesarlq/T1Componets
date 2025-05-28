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
  TopBanner?: React.ComponentType<{ className?: string }>;
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
  // User context
  currentUserId?: string | number;
  restrictedPaths?: string[]; // Rutas que no se deben mostrar
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
  currentUserId = '',
  restrictedPaths = []
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
      // En desktop: aplicar lógica normal
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
    if (screenWidth <= breakpointMobile) {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, screenWidth, breakpointMobile]);

  // Click outside handler
  useEffect(() => {
    if (!isOpen || screenWidth > breakpointMobile) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (refSideBar.current && !refSideBar.current.contains(event.target as Node)) {
        handleToggleOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
      
      // En móvil, cuando se abre, asegurarse de no estar reducido
      if (newIsOpen && screenWidth <= breakpointMobile) {
        if (externalIsReduced === undefined) {
          setInternalIsReduced(false);
        }
        onToggleReduce(false);
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
    if (isReduced) {
      setEnlargeByHover(true);
    }
  };

  const handleMouseLeave = () => {
    if (isReduced) {
      setEnlargeByHover(false);
    }
  };

  // Filtrar rutas restringidas
  const visibleMenuPaths = menuPaths.filter(path => 
    !restrictedPaths.includes(path.href)
  );

  const isMobile = screenWidth <= breakpointMobile;
  const shouldShowReduced = isReduced && !enlargeByHover;

  return (
    <aside
      className={`${styles.container} ${className}`}
      data-reduce={shouldShowReduced}
      data-enlarge-by-hover={enlargeByHover}
      data-show-info-band={showInfoBand}
      data-open-side-bar={isOpen}
      ref={refSideBar}
    >
      <section
        className={styles.sideBar}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Top Banner */}
        {TopBanner && (
          <TopBanner className={`ml-3 lg:ml-[23px] mt-3 ${shouldShowReduced ? styles.bannerReduced : ''}`} />
        )}

        {/* Create Button */}
        {showCreateButton && (
          <Button
            onClick={handleCreateClick}
            className={styles.callToActionCreateGuide}
            data-reduce={shouldShowReduced}
          >
            {(!isReduced || enlargeByHover) ? createButtonText : <AddIcon />}
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
              sidebarReduce={isReduced}
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
  );
}