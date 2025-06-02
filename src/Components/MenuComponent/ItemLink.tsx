import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ArrowMenu from '../../assets/arrow-menu.svg';
import styles from '../../styles/common/ItemLink.module.scss';
import { MenuPath, SubPath } from './Sidebar';

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

export interface ItemLinkProps extends MenuPath {
  className?: string;
  index: number;
  sidebarReduce: boolean;
  enlargeByHover?: boolean;
  onClickPath: (index: number) => void;
  openSubMenu: boolean;
  activePath: string;
  setActivePath: (path: string) => void;
  activeSubPath: string;
  setActiveSubPath: (path: string) => void;
  mobile: boolean;
  currentUserId?: string | number;
  restrictedPaths?: string[];
  onNavigate?: (path: string) => void;
  onToggleOpen?: (isOpen: boolean) => void;
  autoNavigateOnClick?: boolean;
}

export function ItemLink({
  className = '',
  href,
  text,
  icon,
  subPaths,
  concatStoreId,
  endAdornment,
  index,
  sidebarReduce,
  enlargeByHover = false,
  onClickPath,
  openSubMenu,
  activePath,
  setActivePath,
  activeSubPath,
  setActiveSubPath,
  mobile,
  currentUserId = '',
  restrictedPaths = [],
  onNavigate = () => {},
  onToggleOpen = () => {},
  autoNavigateOnClick = false,
  // Nuevas props
  type,
  component,
  activeIcon
}: ItemLinkProps) {
  
  // Safe router hook - usar mock en Storybook
  let router;
  try {
    router = useRouter();
  } catch (error) {
    // Si falla (como en Storybook), usar mock
    router = mockRouter;
  }
  
  const [openSubMenuLocal, setOpenSubMenuLocal] = useState<boolean>(false);
  const [currentSubSteps, setCurrentSubSteps] = useState<SubPath[]>([]);

  // Valores seguros con defaults
  const safeHref = href || '';
  const safeText = text || '';
  
  // Si es un título estático o componente React, no renderizar como ItemLink
  const itemType = typeof type === 'string' ? type : type?.toString();
  if (itemType === 'STATIC_TITLE' || itemType === 'REACT_TSX') {
    return null; // Estos se manejan en el componente Sidebar principal
  }

  // Filtrar sub-rutas restringidas
  useEffect(() => {
    if (subPaths) {
      const filteredSubPaths = subPaths.filter(subPath => 
        !restrictedPaths.includes(subPath.href)
      );
      setCurrentSubSteps(filteredSubPaths);
    }
  }, [subPaths, restrictedPaths]);

  useEffect(() => {
    if (subPaths && subPaths.some(item => item.href === router.asPath)) {
      // Si una subruta está activa
      setActivePath(safeHref);
      setActiveSubPath(router.asPath);
      onClickPath(index); // Esto activará el submenu
      onToggleOpen(false); // Cerrar sidebar en móvil
    } else if (subPaths && subPaths.some(item => router.asPath.includes(item.href))) {
      // Si la ruta actual contiene una subruta
      setActivePath(safeHref);
      onClickPath(index); // Esto activará el submenu
      onToggleOpen(false);
    } else if (!subPaths && safeHref === router.asPath) {
      // Si es una ruta simple y está activa
      onToggleOpen(false);
      setTimeout(() => {
        setActivePath(safeHref);
      });
    }
    
    // Sincronizar estado local con el prop openSubMenu
    setOpenSubMenuLocal(openSubMenu);
  }, [
    router.asPath, 
    subPaths, 
    safeHref,
    index, 
    setActivePath, 
    setActiveSubPath, 
    onToggleOpen,
    openSubMenu,
    onClickPath
  ]);

  // 🔥 FUNCIÓN CORREGIDA: handleOpenSubPaths
  const handleOpenSubPaths = (index: number, targetHref?: string) => {
    console.log('🔍 handleOpenSubPaths called:', { 
      index, 
      targetHref, 
      autoNavigateOnClick, 
      safeHref,
      hasSubPaths: !!subPaths 
    });

    // Siempre activar el path y manejar el submenu
    setActivePath(safeHref);
    onClickPath(index);

    // 🔥 LÓGICA CORREGIDA PARA AUTO-NAVEGACIÓN
    if (subPaths && autoNavigateOnClick && safeHref) {
      // Si tiene subpaths Y auto-navegación está habilitada, navegar al href principal
      let finalHref = safeHref;
      
      // Concatenar storeId si es necesario
      if (concatStoreId && currentUserId) {
        finalHref = safeHref + currentUserId;
      }
      
      console.log('🚀 Auto-navegando a:', finalHref);
      
      // Navegar al href principal
      router.push(finalHref);
      setActiveSubPath(finalHref); // Marcar como activo
      onNavigate(finalHref); // Notificar navegación
      
      // En móvil, cerrar el sidebar después de navegar
      if (mobile) {
        onToggleOpen(false);
      }
      
      return; // Salir temprano para evitar lógica adicional
    }

    // 🔥 LÓGICA PARA CUANDO NO HAY AUTO-NAVEGACIÓN (comportamiento original)
    if (subPaths && !autoNavigateOnClick) {
      console.log('📂 Solo abriendo submenu, no navegando');
      // Solo manejar el submenu, no navegar
      if (mobile && subPaths.some(item => item.href === router.asPath)) {
        setActiveSubPath(router.asPath);
      }
      return;
    }

    // 🔥 LÓGICA PARA ITEMS SIN SUBPATHS (comportamiento original)
    if (!subPaths && targetHref) {
      let finalHref = targetHref;
      
      // Concatenar storeId si es necesario
      if (concatStoreId && currentUserId) {
        finalHref = targetHref + currentUserId;
      }
      
      console.log('🔗 Navegando a item sin subpaths:', finalHref);
      
      router.push(finalHref);
      setActiveSubPath(finalHref);
      onNavigate(finalHref);
      
      if (mobile) {
        onToggleOpen(false);
      }
    }
  };

  const handleSubPathClick = (subHref: string) => {
    let finalSubHref = subHref;
    
    // Concatenar storeId si es necesario
    if (concatStoreId && currentUserId) {
      finalSubHref = subHref + currentUserId;
    }
    
    setActiveSubPath(finalSubHref);
    onNavigate(finalSubHref);
    onToggleOpen(false); // Cerrar sidebar en móvil
  };

  // Determinar qué icono usar
  const currentIcon = (safeHref === activePath && activeIcon) ? activeIcon : icon;

  // Si tiene subpaths
if (subPaths) {
    return (
      <div 
        className={`${styles.itemSubPath} ${className}`} 
        data-reduce={sidebarReduce && !enlargeByHover}
      >
        <li
          className={styles.linkContainer}
          data-active={safeHref === activePath}
          data-has-sub-paths={true}
          data-auto-navigate={autoNavigateOnClick} // 🔥 Indicador visual
          style={
            openSubMenuLocal && (!sidebarReduce || enlargeByHover) 
              ? { marginBottom: '20px' } 
              : { marginBottom: 0 }
          }
          data-reduce={sidebarReduce && !enlargeByHover}
          onClick={() => {
            console.log('🖱️ Click en item con subpaths:', { 
              autoNavigateOnClick, 
              safeHref,
              subPathsCount: subPaths.length 
            });
            // 🔥 LLAMADA CORREGIDA
            handleOpenSubPaths(index, safeHref); // Pasar safeHref como targetHref
          }}
        >
          <div data-reduce={sidebarReduce && !enlargeByHover} className={styles.link}>
            {currentIcon && (
              <Image
                src={currentIcon}
                alt={safeText}
                style={{maxWidth:'18px', maxHeight:'18px'}}
                height={19}
                width={19}
              />
            )}
            {(!sidebarReduce || enlargeByHover) && safeText}
            {/* 🔥 INDICADOR VISUAL OPCIONAL */}
            {autoNavigateOnClick && (!sidebarReduce || enlargeByHover) && (
              <span style={{ 
                fontSize: '10px', 
                color: '#4caf50', 
                marginLeft: '4px',
                fontWeight: 'bold'
              }}>
                ↗
              </span>
            )}
            {endAdornment && !(sidebarReduce && !enlargeByHover) && (
              <div className={styles.endAdornment}>
                {endAdornment}
              </div>
            )}
          </div>
          <Image
            src={ArrowMenu}
            className={styles.arrow}
            data-open={openSubMenu}
            style={{maxWidth:'10px', maxHeight:'10px'}}
            alt='arrow'
            width={10}
            height={10}
          />
        </li>
        
        {/* Subpaths - sin cambios */}
        {(!sidebarReduce || enlargeByHover) && (
          <div 
            className={styles.subPaths} 
            data-open={openSubMenu}
          >
            {currentSubSteps.map((subItem, subIndex) => (
              <Link
                data-reduce={sidebarReduce && !enlargeByHover}
                href={concatStoreId && currentUserId ? `${subItem.href}${currentUserId}` : subItem.href}
                key={subIndex}
                className={styles.subPath}
                data-active={
                  concatStoreId && currentUserId 
                    ? `${subItem.href}${currentUserId}` === activeSubPath
                    : subItem.href === activeSubPath
                }
                onClick={() => handleSubPathClick(subItem.href)}
                data-notification-count={''}
              >
                {subItem.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }


  // Si no tiene subpaths (link simple)
  return (
    <li
      className={`${styles.linkContainer} ${className}`}
      data-active={safeHref === activePath}
      data-reduce={sidebarReduce && !enlargeByHover}
      data-has-sub-paths={false}
    >
      <Link
        href={concatStoreId && currentUserId ? `${safeHref}${currentUserId}` : safeHref}
        data-reduce={sidebarReduce && !enlargeByHover}
        className={styles.link}
        onClick={() => {
          console.log('🖱️ Click en link simple:', safeHref);
          handleOpenSubPaths(index, safeHref);
          onNavigate(concatStoreId && currentUserId ? `${safeHref}${currentUserId}` : safeHref);
        }}
      >
        {currentIcon && (
          <Image
            src={currentIcon}
            alt={safeText}
            height={19}
            width={19}
            style={{maxWidth:'19px', maxHeight:'19px'}}
            className={styles.menuIcon}
          />
        )}
        {(!sidebarReduce || enlargeByHover) && safeText}
        {endAdornment && !(sidebarReduce && !enlargeByHover) && (
          <div className={styles.endAdornment}>
            {endAdornment}
          </div>
        )}
      </Link>
    </li>
  );

}