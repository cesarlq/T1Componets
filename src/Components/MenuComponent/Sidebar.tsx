'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ItemLink } from './ItemLink';
import styles from '../../styles/common/Sidebar.module.scss';
import { T1ShippingBanner } from './T1ShippingBanner';

// Interfaces
export interface SubPath {
  href: string;
  text: string;
  hasNotification?: boolean;
  endAdornmentSubPath?: React.ReactNode | string;
}

export interface MenuPath {
  href?: string;
  text?: string;
  icon?: any;
  activeIcon?: any;
  subPaths?: SubPath[];
  concatStoreId?: boolean;
  endAdornment?: React.ReactNode;
  type?: string | any;
  component?: React.ComponentType<any>;
  hasNotification?: boolean;
  autoNavigateToFirstSubPath?: boolean;
}

export interface SidebarPropsI {
  shippingBannerTitle?: string;
  className?: string;
  menuPaths?: MenuPath[];
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
  currentUserId?: string | number;
  restrictedPaths?: string[];
  stores?: any[];
  currentStore?: any;
  onStoreChange?: (storeId: number) => void;
  createStoreUrl?: string;
  
  defaultAutoNavigateToFirstSubPath?: boolean;
  
  // Props opcionales para override externo (solo si se necesita)
  isOpen?: boolean;
  isReduced?: boolean;
  isMobile?: boolean;
  onToggleOpen?: (isOpen: boolean) => void;
  onToggleReduce?: (isReduced: boolean) => void;
  onCreateClick?: () => void;
  onNavigate?: (path: string) => void;
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
  currentUserId = '',
  restrictedPaths = [],
  stores = [],
  currentStore,
  onStoreChange = () => {},
  createStoreUrl = '',
  
  defaultAutoNavigateToFirstSubPath = false,
  
  // Props opcionales para override externo
  isOpen: externalIsOpen,
  isReduced: externalIsReduced,
  isMobile: externalIsMobile,
  onToggleOpen,
  onToggleReduce,
  onCreateClick,
  onNavigate
}: SidebarPropsI) {
  
  // Router hooks
  let router;
  let pathname;
  let isStorybook = false;
  
  try {
    router = useRouter();
    pathname = usePathname();
    
    isStorybook = typeof window !== 'undefined' && 
                  (window.location.href.includes('storybook') || 
                   window.parent !== window);
  } catch (error) {
    // Mock para Storybook
    router = {
      push: (path: string) => {
        console.log('Mock router push:', path);
        if (typeof window !== 'undefined') {
          window.history.pushState({}, '', `${window.location.pathname}?story-path=${encodeURIComponent(path)}`);
        }
        return Promise.resolve(true);
      },
      refresh: () => {
        console.log('Mock router refresh');
        if (typeof window !== 'undefined') {
          window.location.reload();
        }
      }
    };
    pathname = '/';
    isStorybook = true;
  }
  
  const refSideBar = useRef<HTMLDivElement>(null);
  
  // Estados internos
  const [internalIsOpen, setInternalIsOpen] = useState(true);
  const [internalIsReduced, setInternalIsReduced] = useState(false);
  const [internalIsMobile, setInternalIsMobile] = useState(false);
  const [enlargeByHover, setEnlargeByHover] = useState(false);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  
  // Estados de navegación - MANEJADOS INTERNAMENTE
  const [activePath, setActivePath] = useState('');
  const [currentSubmenuOpen, setCurrentSubmenuOpen] = useState<number>(-1);
  const [activeSubPath, setActiveSubPath] = useState('');

  // Determinar valores finales (externo tiene prioridad si se proporciona)
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const isReduced = externalIsReduced !== undefined ? externalIsReduced : internalIsReduced;
  const isMobile = externalIsMobile !== undefined ? externalIsMobile : internalIsMobile;

  // Detectar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      
      // Solo actualizar estados internos si no hay override externo
      if (externalIsMobile === undefined) {
        setInternalIsMobile(width <= breakpointMobile);
      }
      
      if (externalIsReduced === undefined && externalIsOpen === undefined) {
        if (width <= breakpointMobile) {
          setInternalIsOpen(false);
          setInternalIsReduced(false);
        } else if (width <= breakpointReduce) {
          setInternalIsOpen(true);
          setInternalIsReduced(true);
        } else {
          setInternalIsOpen(true);
          setInternalIsReduced(false);
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpointMobile, breakpointReduce, externalIsMobile, externalIsReduced, externalIsOpen]);

  // Control del scroll del body en móvil
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, isMobile]);

  // Click outside handler para móvil
  useEffect(() => {
    if (!isOpen || !isMobile) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (refSideBar.current && !refSideBar.current.contains(event.target as Node)) {
        handleToggleOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, isMobile]);

  // Inicializar rutas activas basado en pathname
  useEffect(() => {
    if (!pathname) return;

    console.log('🔍 Sidebar - Checking active path for:', pathname);

    // Buscar el item que coincide con la ruta actual
    let matchFound = false;

    // PASO 1: Buscar matches exactos primero (mayor prioridad)
    menuPaths.forEach((item, index) => {
      if (matchFound) return;

      // Verificar si es un item directo con match exacto
      if (item.href === pathname) {
        console.log('✅ Exact match found (main item):', item.href);
        setActivePath(item.href);
        setActiveSubPath(item.href);
        setCurrentSubmenuOpen(index);
        matchFound = true;
        return;
      }

      // Verificar si es un subPath con match exacto
      if (item.subPaths) {
        const matchingSubPath = item.subPaths.find(subPath => subPath.href === pathname);
        if (matchingSubPath) {
          console.log('✅ Exact match found (subpath):', matchingSubPath.href);
          setActivePath(item.href || '');
          setActiveSubPath(pathname);
          setCurrentSubmenuOpen(index);
          matchFound = true;
          return;
        }
      }
    });

    // PASO 2: Si no hay match exacto, buscar matches parciales (excluyendo raíz)
    if (!matchFound) {
      // Ordenar por longitud de href descendente para priorizar rutas más específicas
      const sortedMenuPaths = [...menuPaths].map((item, originalIndex) => ({ ...item, originalIndex }))
        .sort((a, b) => {
          const aMaxLength = Math.max(
            a.href?.length || 0,
            ...(a.subPaths?.map(sub => sub.href.length) || [0])
          );
          const bMaxLength = Math.max(
            b.href?.length || 0,
            ...(b.subPaths?.map(sub => sub.href.length) || [0])
          );
          return bMaxLength - aMaxLength;
        });

      sortedMenuPaths.forEach((item) => {
        if (matchFound) return;

        if (item.subPaths) {
          const partialMatch = item.subPaths.find(subPath => {
            // Excluir explícitamente la ruta raíz de matches parciales
            if (subPath.href === '/') return false;
            
            // Solo hacer match parcial si:
            // 1. pathname empieza con subPath.href
            // 2. El siguiente carácter es '/' o es el final de la string
            // Esto evita matches como '/user' matcheando con '/users'
            return pathname.startsWith(subPath.href) && 
                   (pathname.length === subPath.href.length || 
                    pathname[subPath.href.length] === '/');
          });
          
          if (partialMatch) {
            console.log('✅ Partial match found:', partialMatch.href, 'for', pathname);
            setActivePath(item.href || '');
            setActiveSubPath(pathname);
            setCurrentSubmenuOpen(item.originalIndex);
            matchFound = true;
          }
        }
      });
    }

    // PASO 3: Si aún no hay match y pathname es exactamente '/', buscar la ruta raíz
    if (!matchFound && pathname === '/') {
      menuPaths.forEach((item, index) => {
        if (matchFound) return;

        // Buscar item principal con href='/'
        if (item.href === '/') {
          console.log('✅ Root path match found (main item)');
          setActivePath('/');
          setActiveSubPath('/');
          setCurrentSubmenuOpen(index);
          matchFound = true;
          return;
        }

        // Buscar subPath con href='/'
        if (item.subPaths) {
          const rootSubPath = item.subPaths.find(subPath => subPath.href === '/');
          if (rootSubPath) {
            console.log('✅ Root path match found (subpath)');
            setActivePath(item.href || '');
            setActiveSubPath('/');
            setCurrentSubmenuOpen(index);
            matchFound = true;
          }
        }
      });
    }

    if (!matchFound) {
      console.log('❌ No match found for:', pathname);
      // Resetear estados si no hay match
      setActivePath('');
      setActiveSubPath('');
      setCurrentSubmenuOpen(-1);
    }
  }, [pathname, menuPaths]);

  // Handlers internos
  const handleToggleOpen = (newIsOpen: boolean) => {
    if (externalIsOpen === undefined) {
      setInternalIsOpen(newIsOpen);
    }
    onToggleOpen?.(newIsOpen);
  };

  const handleToggleReduce = (newIsReduced: boolean) => {
    if (externalIsReduced === undefined) {
      setInternalIsReduced(newIsReduced);
    }
    onToggleReduce?.(newIsReduced);
  };

  const handleToggleSidebar = () => {
    if (isMobile) {
      handleToggleOpen(!isOpen);
    } else {
      handleToggleReduce(!isReduced);
    }
  };

  const handleCreateClick = () => {
    if (onCreateClick) {
      onCreateClick();
    } else if (createButtonPath) {
      if (pathname === createButtonPath) {
        router.refresh();
      } else {
        router.push(createButtonPath);
        onNavigate?.(createButtonPath);
      }
    }
  };

  const handleInternalNavigation = (path: string) => {
    router.push(path);
    onNavigate?.(path);
    
    if (isMobile) {
      setTimeout(() => handleToggleOpen(false), 100);
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
    
  const shouldShowReduced = isReduced && !enlargeByHover;

  // Función para renderizar elementos del menú
  const renderMenuItem = (item: MenuPath, index: number) => {
    console.log(item);

    const itemType = typeof item.type === 'string' ? item.type : item.type?.toString();
    
    if (itemType === '0' || itemType === 'STATIC_TITLE') {
      return (
        <>
          {!shouldShowReduced && (
            <div 
              key={`title-${index}`}
              className={styles.staticTitle}
              data-reduce={shouldShowReduced}
            >
              <span className={styles.titleText}>{item.text}</span>
            </div>
          )}
        </>
      );
    }

    if ((itemType === '3' || itemType === 'REACT_TSX') && item.component) {
      const Component = item.component;
      return (
        <>
          {!shouldShowReduced && (
            <div 
              key={`component-${index}`}
              className={styles.reactComponent}
              data-reduce={shouldShowReduced}
            >
              <Component 
                currentUserId={currentUserId}
                onNavigate={handleInternalNavigation}
                stores={stores?.map(store => ({ id: store.id, name: store.name }))}
                currentStore={currentStore ? { id: currentStore.id, name: currentStore.name } : undefined}
                onStoreChange={onStoreChange}
                createStoreUrl={createStoreUrl}
                searchPlaceholder="Buscar tienda..."
                isMobile={isMobile}
                className="sidebar-store-selector"
              />
            </div>
          )}
        </>
      );
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
          onClickPath={setCurrentSubmenuOpen}
          openSubMenu={currentSubmenuOpen === index}
          activePath={activePath}
          setActivePath={setActivePath}
          activeSubPath={activeSubPath}
          setActiveSubPath={setActiveSubPath}
          mobile={isMobile}
          currentUserId={currentUserId}
          restrictedPaths={restrictedPaths}
          onNavigate={handleInternalNavigation}
          onToggleOpen={handleToggleOpen}
          autoNavigateToFirstSubPath={item.autoNavigateToFirstSubPath ?? defaultAutoNavigateToFirstSubPath}
        />
      );
    }

    return null;
  };

  return (
<aside
      className={`${styles.container} ${className}`}
      data-reduce={shouldShowReduced}
      data-enlarge-by-hover={enlargeByHover}
      data-show-info-band={showInfoBand}
      data-open-side-bar={isOpen}
      ref={refSideBar}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <section
        className={styles.sideBar}
      >
        {/* Top Banner */}
        {TopBanner && (
          <div className={`${styles.topBanner} ${shouldShowReduced ? styles.bannerReduced : ''}`}>
            <TopBanner />
          </div>
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
          <div className={styles.balanceBanner}>
            <BalanceBanner />
          </div>
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