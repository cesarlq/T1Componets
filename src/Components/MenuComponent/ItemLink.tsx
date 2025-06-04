'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import ArrowMenu from '../../assets/arrow-menu.svg';
import styles from '../../styles/common/ItemLink.module.scss';
import { MenuPath, SubPath } from './Sidebar';

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
  activeIcon,
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
  type,
  component
}: ItemLinkProps) {
  
  const router = useRouter();
  const pathname = usePathname();
  
  const [currentSubSteps, setCurrentSubSteps] = useState<SubPath[]>([]);

  // Valores seguros
  const safeHref = href || '';
  const safeText = text || '';
  
  // Si es un título estático o componente React, no renderizar
  const itemType = typeof type === 'string' ? type : type?.toString();
  if (itemType === 'STATIC_TITLE' || itemType === 'REACT_TSX' || itemType === '0' || itemType === '3') {
    return null;
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

  // Lógica de navegación INTERNA
  const handleItemClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Siempre activar el menú item
    setActivePath(safeHref);
    onClickPath(index);

    // Si tiene subPaths, solo expandir/contraer
    if (subPaths && subPaths.length > 0) {
      console.log(`📂 ItemLink [${safeText}] - Toggle submenu`);
      
      // Si estamos en móvil y ya hay un subpath activo, mantener el estado
      if (mobile && subPaths.some(subPath => subPath.href === pathname)) {
        setActiveSubPath(pathname);
      }
      return;
    }

    // Si no tiene subPaths, navegar directamente
    if (!subPaths && safeHref) {
      await handleDirectNavigation(safeHref);
    }
  };

  const handleDirectNavigation = async (targetHref: string) => {
    let finalHref = targetHref;
    
    if (concatStoreId && currentUserId) {
      finalHref = targetHref + currentUserId;
    }
    
    try {
      console.log(`🔗 ItemLink [${safeText}] - Navigating to:`, finalHref);
      
      // Navegación interna usando Next.js router
      await router.push(finalHref);
      
      // Actualizar estados
      setActiveSubPath(finalHref);
      onNavigate(finalHref);
      
      // Cerrar sidebar en móvil
      if (mobile) {
        setTimeout(() => onToggleOpen(false), 100);
      }
      
    } catch (error) {
      console.error('❌ Error en navegación:', error);
    }
  };

  const handleSubPathClick = async (e: React.MouseEvent, subHref: string) => {
    e.preventDefault();
    e.stopPropagation();

    let finalSubHref = subHref;
    
    if (concatStoreId && currentUserId) {
      finalSubHref = subHref + currentUserId;
    }
    
    console.log(`🔗 ItemLink [${safeText}] - Subpath navigation:`, finalSubHref);
    
    try {
      // Navegación interna
      await router.push(finalSubHref);
      
      // Actualizar estados
      setActiveSubPath(finalSubHref);
      onNavigate(finalSubHref);
      
      // Cerrar sidebar en móvil
      if (mobile) {
        setTimeout(() => onToggleOpen(false), 100);
      }
    } catch (error) {
      console.error('❌ Error en navegación a subpath:', error);
    }
  };

  // Determinar si este item está activo
  const isThisItemActive = () => {
    if (subPaths && subPaths.length > 0) {
      // Para items con subpaths, está activo si algún subpath coincide
      return subPaths.some(subPath => 
        subPath.href === pathname || 
        subPath.href === activeSubPath ||
        (pathname.startsWith(subPath.href) && subPath.href !== '/')
      ) || safeHref === activePath;
    } else {
      // Para items sin subpaths, coincidencia exacta
      return safeHref === pathname || safeHref === activeSubPath;
    }
  };

  const itemIsActive = isThisItemActive();
  
  // Determinar icono a usar
  const currentIcon = (itemIsActive && activeIcon) ? activeIcon : icon;

  // Renderizar item con subPaths
  if (subPaths && subPaths.length > 0) {
    return (
      <div 
        className={`${styles.itemSubPath} ${className}`} 
        data-reduce={sidebarReduce && !enlargeByHover}
      >
        <li
          className={styles.linkContainer}
          data-active={itemIsActive}
          data-has-sub-paths={true}
          style={
            openSubMenu && (!sidebarReduce || enlargeByHover) 
              ? { marginBottom: '20px' } 
              : { marginBottom: 0 }
          }
          data-reduce={sidebarReduce && !enlargeByHover}
          onClick={handleItemClick}
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
            {currentSubSteps.map((subItem, subIndex) => {
              const subItemHref = concatStoreId && currentUserId 
                ? `${subItem.href}${currentUserId}` 
                : subItem.href;
              
              const isSubItemActive = subItemHref === activeSubPath || 
                                   subItem.href === pathname ||
                                   subItem.href === activeSubPath;

              return (
                <button
                  key={subIndex}
                  className={styles.subPath}
                  data-active={isSubItemActive}
                  data-reduce={sidebarReduce && !enlargeByHover}
                  onClick={(e) => handleSubPathClick(e, subItem.href)}
                  data-notification-count={''}
                >
                  {subItem.text}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // Renderizar item simple (sin subPaths)
  return (
    <li
      className={`${styles.linkContainer} ${className}`}
      data-active={itemIsActive}
      data-reduce={sidebarReduce && !enlargeByHover}
      data-has-sub-paths={false}
    >
      <button
        data-reduce={sidebarReduce && !enlargeByHover}
        className={styles.link}
        onClick={handleItemClick}
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
      </button>
    </li>
  );
}