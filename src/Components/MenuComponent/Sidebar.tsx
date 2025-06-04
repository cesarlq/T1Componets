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

export interface SidebarPropsI {
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
  // 🔥 NUEVA PROP PARA CONTROLAR SI USAR LÓGICA EXTERNA
  useExternalControl?: boolean;
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
  isMobile: externalIsMobile,
  useExternalControl = false // 🔥 NUEVA PROP
}: SidebarPropsI) {
  
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

  // 🔥 DETECTAR SI ESTAMOS EN MODO CONTROL EXTERNO
  const isExternallyControlled = externalIsOpen !== undefined || externalIsReduced !== undefined || useExternalControl;
  
  console.log('🎯 Sidebar - Control externo:', { 
    isExternallyControlled, 
    externalIsOpen, 
    externalIsReduced, 
    useExternalControl 
  });

  // Usar estados externos si se proporcionan, sino usar internos
  const isOpen = isExternallyControlled ? (externalIsOpen ?? true) : internalIsOpen;
  const isReduced = isExternallyControlled ? (externalIsReduced ?? false) : internalIsReduced;

  // 🔥 DETECTAR ANCHO DE PANTALLA (SOLO SI NO ESTÁ CONTROLADO EXTERNAMENTE)
  useEffect(() => {
    if (isExternallyControlled) {
      console.log('🚫 Sidebar - Detectar ancho desactivado (control externo)');
      return;
    }

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExternallyControlled]);

  // 🔥 LÓGICA RESPONSIVE INTERNA (SOLO SI NO ESTÁ CONTROLADO EXTERNAMENTE)
  useEffect(() => {
    if (isExternallyControlled) {
      console.log('🚫 Sidebar - Lógica responsive desactivada (control externo)');
      return;
    }

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
  }, [screenWidth, breakpointReduce, breakpointMobile, externalIsReduced, onToggleReduce, isExternallyControlled]);

  // Controlar scroll del body cuando está abierto en móvil
  useEffect(() => {
    // Usar externalIsMobile si está disponible, sino calcular internamente
    const isMobileCheck = externalIsMobile !== undefined 
      ? externalIsMobile 
      : screenWidth <= breakpointMobile;

    if (isMobileCheck) {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, screenWidth, breakpointMobile, externalIsMobile]);

  // Click outside handler
  useEffect(() => {
    const isMobileCheck = externalIsMobile !== undefined 
      ? externalIsMobile 
      : screenWidth <= breakpointMobile;

    if (!isOpen || !isMobileCheck) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (refSideBar.current && !refSideBar.current.contains(event.target as Node)) {
        handleToggleOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, screenWidth, breakpointMobile, externalIsMobile]);

  // 🔥 INICIALIZAR RUTAS ACTIVAS CON PATHNAME
  useEffect(() => {
    if (!activeSubPath) {
      setActiveSubPath(pathname);
    }
    
    // 🔥 RESETEAR SUBMENU CUANDO CAMBIE LA RUTA
    const currentPathMatchesAnySubmenu = menuPaths.some((menuItem, index) => {
      if (menuItem.subPaths) {
        return menuItem.subPaths.some(subPath => subPath.href === pathname);
      }
      return false;
    });
    
    // Si la ruta actual no pertenece a ningún submenu, cerrar todos los submenus
    if (!currentPathMatchesAnySubmenu) {
      const currentPathMatchesMainItem = menuPaths.findIndex(item => item.href === pathname);
      if (currentPathMatchesMainItem !== -1) {
        setCurrentSubmenuOpen(currentPathMatchesMainItem);
        setActivePath(menuPaths[currentPathMatchesMainItem].href || '');
      }
    }
  }, [pathname, activeSubPath, menuPaths]);

  useEffect(() => {
    // 🔥 MEJORAR LA LÓGICA DE ACTIVACIÓN DE PATHS
    const menuItem = menuPaths[currentSubmenuOpen];
    if (menuItem?.href) {
      setActivePath(menuItem.href);
    }
    
    console.log('🔄 Sidebar - Submenu changed:', {
      currentSubmenuOpen,
      menuItem: menuItem?.text,
      activePath: menuItem?.href
    });
  }, [currentSubmenuOpen, menuPaths]);

  // Handlers
  const handleToggleOpen = (newIsOpen: boolean) => {
    console.log('🔄 Sidebar - handleToggleOpen:', { newIsOpen, isExternallyControlled });
    
    if (!isExternallyControlled && externalIsOpen === undefined) {
      setInternalIsOpen(newIsOpen);
    }
    onToggleOpen(newIsOpen);
    
    // 🔥 SOLO HACER ESTO SI NO ESTÁ CONTROLADO EXTERNAMENTE
    if (!isExternallyControlled) {
      const isMobileCheck = externalIsMobile !== undefined 
        ? externalIsMobile 
        : screenWidth <= breakpointMobile;
        
      if (newIsOpen && isMobileCheck) {
        if (externalIsReduced === undefined) {
          setInternalIsReduced(false);
        }
        onToggleReduce(false);
      }
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

  // Usar el isMobile apropiado
  const isMobile = externalIsMobile !== undefined 
    ? externalIsMobile 
    : screenWidth <= breakpointMobile;
    
  const shouldShowReduced = isReduced && !enlargeByHover;

  console.log('📊 Sidebar - Estados finales:', { 
    isOpen, 
    isReduced, 
    isMobile, 
    shouldShowReduced, 
    isExternallyControlled,
    screenWidth 
  });

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