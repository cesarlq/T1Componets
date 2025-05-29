// Sidebar.tsx - Versión corregida
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {ItemLink} from './ItemLink';
import styles from '../../styles/common/Sidebar.module.scss';
import { SidebarProps, SubPath } from '../../interfaces/menu';

export interface MenuPath {
  href?: string;
  text?: string;
  icon?: any;
  subPaths?: SubPath[];
  concatStoreId?: boolean;
  endAdornment?: React.ReactNode;
  type?: string | any;
  component?: React.ComponentType<any>;
  activeIcon?: any;
}

// Mock router for Storybook
const mockRouter = {
  asPath: '/dashboard',
  push: (path: string) => {
    return Promise.resolve(true);
  },
  reload: () => {
  }
};

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
  restrictedPaths = [],
  stores = [],
  currentStore,
  onStoreChange = () => {},
  createStoreUrl = '',
  isMobile: externalIsMobile
}: SidebarProps) {
  
  // Safe router hook - usar mock en Storybook
  let router;
  try {
    router = useRouter();
  } catch (error) {
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
  const [currentSubmenuOpen, setCurrentSubmenuOpen] = useState<number>(-1);
  const [activeSubPath, setActiveSubPath] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);

  // Usar estados externos si se proporcionan, sino usar internos
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const isReduced = externalIsReduced !== undefined ? externalIsReduced : internalIsReduced;

  // Función para encontrar la ruta activa y su índice
  const findActivePathAndIndex = (currentPath: string) => {
    let foundPath = '';
    let foundIndex = -1;
    let foundSubPath = '';

    // Filtrar rutas visibles primero
    const visiblePaths = menuPaths.filter(path => 
      !path.href || !restrictedPaths.includes(path.href)
    );

    // Buscar en rutas principales y sub-rutas
    visiblePaths.forEach((item, index) => {
      const itemType = typeof item.type === 'string' ? item.type : item.type?.toString();
      
      // Solo procesar links válidos
      if ((itemType === '1' || itemType === 'LINK') && item.href) {
        // Verificar si la ruta principal coincide exactamente
        if (item.href === currentPath) {
          foundPath = item.href;
          foundIndex = index;
          foundSubPath = currentPath;
          return;
        }

        // Verificar sub-rutas
        if (item.subPaths) {
          const matchingSubPath = item.subPaths.find(subPath => {
            const finalSubHref = (item.concatStoreId && currentUserId) 
              ? `${subPath.href}${currentUserId}` 
              : subPath.href;
            return finalSubHref === currentPath || currentPath.startsWith(finalSubHref);
          });

          if (matchingSubPath) {
            foundPath = item.href;
            foundIndex = index;
            foundSubPath = (item.concatStoreId && currentUserId) 
              ? `${matchingSubPath.href}${currentUserId}` 
              : matchingSubPath.href;
            return;
          }
        }

        // Verificar si la ruta actual comienza con la ruta del item (para rutas dinámicas)
        if (currentPath.startsWith(item.href + '/')) {
          foundPath = item.href;
          foundIndex = index;
          foundSubPath = currentPath;
        }
      }
    });

    return { foundPath, foundIndex, foundSubPath };
  };

  // Inicializar rutas activas al montar y cuando cambie la ruta
  useEffect(() => {
    if (!router.asPath) return;

    const { foundPath, foundIndex, foundSubPath } = findActivePathAndIndex(router.asPath);
    
    if (foundPath) {
      setActivePath(foundPath);
      setActiveSubPath(foundSubPath);
      setCurrentSubmenuOpen(foundIndex);
    } else {
      // Si no se encuentra una ruta activa, resetear
      setActivePath('');
      setActiveSubPath('');
      setCurrentSubmenuOpen(-1);
    }
    
    setIsInitialized(true);
  }, [router.asPath, menuPaths, currentUserId, restrictedPaths]);

  // Efecto para re-evaluar cuando cambie el store (currentUserId)
  useEffect(() => {
    if (!isInitialized || !router.asPath) return;
    
    const { foundPath, foundIndex, foundSubPath } = findActivePathAndIndex(router.asPath);
    
    if (foundPath) {
      setActivePath(foundPath);
      setActiveSubPath(foundSubPath);
      setCurrentSubmenuOpen(foundIndex);
    }
  }, [currentUserId, isInitialized]);

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
    !path.href || !restrictedPaths.includes(path.href)
  );

  const isMobile = screenWidth <= breakpointMobile;
  const shouldShowReduced = isReduced && !enlargeByHover;

  // Función para renderizar elementos del menú
  const renderMenuItem = (item: MenuPath, index: number) => {
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
          onNavigate={onNavigate}
          onToggleOpen={handleToggleOpen}
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
        {TopBanner && (
          <TopBanner className={`ml-3 lg:ml-[23px] mt-3 ${shouldShowReduced ? styles.bannerReduced : ''}`} />
        )}

        {showCreateButton && (
          <Button
            onClick={handleCreateClick}
            className={styles.callToActionCreateGuide}
            data-reduce={shouldShowReduced}
          >
            {(!isReduced || enlargeByHover) ? createButtonText : <AddIcon />}
          </Button>
        )}

        {BalanceBanner && showBalance && !shouldShowReduced && (
          <BalanceBanner className="lg:!hidden" />
        )}

        <ul className={styles.paths}>
          {visibleMenuPaths.map((item, index) => renderMenuItem(item, index))}
        </ul>
      </section>

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
