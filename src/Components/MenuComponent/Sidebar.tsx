'use client'; // 🔥 ASEGURAR QUE ESTÉ PRESENTE

import React, { useEffect, useRef, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation'; // 🔥 CAMBIO PRINCIPAL
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {ItemLink} from './ItemLink';
import styles from '../../styles/common/Sidebar.module.scss';
import { T1ShippingBanner } from './T1ShippingBanner';

// 🔥 MOCK ROUTER ACTUALIZADO PARA APP ROUTER
const mockRouter = {
  push: (path: string) => {
    console.log('🔥 Mock router push (App Router):', path);
    
    if (typeof window !== 'undefined') {
      try {
        window.history.pushState({}, '', `${window.location.pathname}?story-path=${encodeURIComponent(path)}`);
        window.dispatchEvent(new CustomEvent('storybook-navigation', { 
          detail: { path } 
        }));
        console.log('✅ Navegación simulada exitosa a:', path);
      } catch (error) {
        console.warn('⚠️ No se pudo simular navegación:', error);
      }
    }
    
    return Promise.resolve(true);
  },
  refresh: () => {
    console.log('🔄 Mock router refresh');
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  }
};

const mockPathname = '/dashboard';

// Interfaces (sin cambios)
export interface SubPath {
  href: string;
  text: string;
}

export interface MenuPath {
  href?: string;
  text?: string;
  icon?: any;
  subPaths?: SubPath[];
  concatStoreId?: boolean;
  endAdornment?: React.ReactNode;
  autoNavigateOnClick?: boolean; // 🔥 NUEVA PROP
  type?: string | any;
  component?: React.ComponentType<any>;
  activeIcon?: any;
}

export interface SidebarProps {
  className?: string;
  menuPaths?: MenuPath[];
  defaultAutoNavigate?: boolean; // 🔥 NUEVA PROP GLOBAL
  TopBanner?: React.ComponentType<{ className?: string }>;
  BottomBanner?: React.ComponentType<{ className?: string }> | React.ReactNode;
  BalanceBanner?: React.ComponentType<{ className?: string }>;
  showCreateButton?: boolean;
  showInfoBand?: boolean;
  showBalance?: boolean;
  createButtonText?: string;
  createButtonPath?: string;
  breakpointReduce?: number;
  breakpointMobile?: number;
  isOpen?: boolean;
  isReduced?: boolean;
  onToggleOpen?: (isOpen: boolean) => void;
  onToggleReduce?: (isReduced: boolean) => void;
  onCreateClick?: () => void;
  onNavigate?: (path: string) => void;
  currentUserId?: string | number;
  restrictedPaths?: string[];
  stores?: any[];
  currentStore?: any;
  onStoreChange?: (storeId: number) => void;
  createStoreUrl?: string;
  isMobile?: boolean;
}

export function Sidebar({
  className = '',
  menuPaths = [],
  defaultAutoNavigate = false, // 🔥 NUEVA PROP
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
  restrictedPaths = [],
  stores = [],
  currentStore,
  onStoreChange = () => {},
  createStoreUrl = '',
  isMobile: externalIsMobile
}: SidebarProps) {
  
  // 🔥 USAR HOOKS DE APP ROUTER
  let router;
  let pathname;
  let isStorybook = false;
  
  try {
    router = useRouter();
    pathname = usePathname(); // 🔥 REEMPLAZA router.asPath
    
    // Verificar si estamos en Storybook
    isStorybook = typeof window !== 'undefined' && 
                  (window.location.href.includes('storybook') || 
                   window.parent !== window);
  } catch (error) {
    // Si falla (como en Storybook), usar mock
    router = mockRouter;
    pathname = mockPathname;
    isStorybook = true;
    console.log('🎭 Usando mock router para App Router (Storybook detectado)');
  }
  
  const refSideBar = useRef<HTMLDivElement>(null);
  
  // Estados internos
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

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenWidth > 0) {
      const isMobile = screenWidth <= breakpointMobile;
      
      if (isMobile) {
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

  // 🔥 INICIALIZAR RUTAS ACTIVAS CON PATHNAME
  useEffect(() => {
    if (!activeSubPath) {
      setActiveSubPath(pathname);
    }
  }, [pathname, activeSubPath]);

  useEffect(() => {
    if (menuPaths[currentSubmenuOpen]?.href) {
      setActivePath(menuPaths[currentSubmenuOpen].href || '');
    }
  }, [currentSubmenuOpen, menuPaths]);

  // Handlers
  const handleToggleOpen = (newIsOpen: boolean) => {
    if (externalIsOpen === undefined) {
      setInternalIsOpen(newIsOpen);
    }
    onToggleOpen(newIsOpen);
    
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
      if (pathname === createButtonPath) {
        // 🔥 EN APP ROUTER, USAR router.refresh() EN LUGAR DE router.reload()
        if (isStorybook) {
          mockRouter.refresh();
        } else {
          router.refresh();
        }
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
    !path.href || !restrictedPaths.includes(path.href)
  );

  const isMobile = screenWidth <= breakpointMobile;
  const shouldShowReduced = isReduced && !enlargeByHover;

  // 🔥 FUNCIÓN PARA RENDERIZAR ELEMENTOS DEL MENÚ (ACTUALIZADA)
  const renderMenuItem = (item: MenuPath, index: number) => {
    const itemType = typeof item.type === 'string' ? item.type : item.type?.toString();
    
    if (itemType === '0' || itemType === 'STATIC_TITLE') {
      return (<>
        {!shouldShowReduced &&
        <div 
          key={`title-${index}`}
          className={styles.staticTitle}
          data-reduce={shouldShowReduced}
        >
          <span className={styles.titleText}>{item.text}</span>
        </div>
        }
      </>);
    }

    if ((itemType === '3' || itemType === 'REACT_TSX') && item.component) {
      const Component = item.component;
      return (<>
         {!shouldShowReduced && (
        <div 
          key={`component-${index}`}
          className={styles.reactComponent}
          data-reduce={shouldShowReduced}
        >
            <Component 
              currentUserId={currentUserId}
              onNavigate={onNavigate}
              stores={stores?.map(store => ({ id: store.id, name: store.name }))}
              currentStore={currentStore ? { id: currentStore.id, name: currentStore.name } : undefined}
              onStoreChange={onStoreChange}
              createStoreUrl={createStoreUrl}
              searchPlaceholder="Buscar tienda..."
              isMobile={Boolean(externalIsMobile || isMobile)}
              className="sidebar-store-selector"
            />
        </div>
         )}
      </>);
    }

    if ((itemType === '1' || itemType === 'LINK') && item.href && item.href.trim() !== '') {
      return (
        <ItemLink
          {...item}
          href={item.href}
          text={item.text || ''}
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
          // 🔥 PASAR LA PROP DE AUTO-NAVEGACIÓN
          autoNavigateOnClick={item.autoNavigateOnClick ?? defaultAutoNavigate}
        />
      );
    }

    return null;
  };

  return (
    <aside
      className={`${styles.container} ${className} pt-4`}
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

        {/* Balance Banner */}
        {BalanceBanner && showBalance && !shouldShowReduced && (
          <BalanceBanner className="lg:!hidden" />
        )}

        {/* Menu Items */}
        <ul className={styles.paths}>
          {visibleMenuPaths.map((item, index) => renderMenuItem(item, index))}
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