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

  // Detectar ruta activa y manejar submenus
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
    safeHref, // Usar safeHref en lugar de href
    index, 
    setActivePath, 
    setActiveSubPath, 
    onToggleOpen,
    openSubMenu,
    onClickPath
  ]);

  const handleOpenSubPaths = (index: number, targetHref?: string) => {
    setActivePath(safeHref);
    let finalHref = targetHref;
    
    // Concatenar storeId si es necesario
    if (concatStoreId && finalHref && currentUserId) {
      finalHref = finalHref + currentUserId;
    }
    
    // Llamar al callback del padre para manejar el estado del submenu
    onClickPath(index);
    
    if (finalHref && !mobile) {
      // En desktop, navegar directamente
      router.push(finalHref);
      setActiveSubPath(finalHref);
      onNavigate(finalHref);
    } else if (mobile) {
      // En móvil, solo manejar la navegación si hay href
      if (subPaths && subPaths.some(item => item.href === router.asPath)) {
        setActiveSubPath(router.asPath);
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
          style={
            openSubMenuLocal && (!sidebarReduce || enlargeByHover) 
              ? { marginBottom: '20px' } 
              : { marginBottom: 0 }
          }
          data-reduce={sidebarReduce && !enlargeByHover}
          onClick={() => handleOpenSubPaths(
            index, 
            subPaths && subPaths[0] ? subPaths[0].href : undefined
          )}
        >
          <div data-reduce={sidebarReduce && !enlargeByHover} className={styles.link}>
            {currentIcon && (
              <Image
                src={currentIcon}
                alt={safeText}
                style={{maxWidth:'19px', maxHeight:'19px'}}
                height={19}
                width={19}
              />
            )}
            {(!sidebarReduce || enlargeByHover) && safeText}
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
        
        {/* Subpaths */}
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