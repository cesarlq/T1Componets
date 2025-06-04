'use client'; // 🔥 IMPORTANTE PARA APP ROUTER

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation'; // 🔥 CAMBIO PRINCIPAL
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
  type,
  component,
  activeIcon
}: ItemLinkProps) {
  
  const router = useRouter();
  const pathname = usePathname();
  
  const [openSubMenuLocal, setOpenSubMenuLocal] = useState<boolean>(false);
  const [currentSubSteps, setCurrentSubSteps] = useState<SubPath[]>([]);

  // Valores seguros con defaults
  const safeHref = href || '';
  const safeText = text || '';
  
  // Si es un título estático o componente React, no renderizar como ItemLink
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

  // 🔥 MEJORAR LA DETECCIÓN DE RUTA ACTIVA
  useEffect(() => {
    console.log(`🔍 ItemLink [${safeText}] - Checking route:`, {
      pathname,
      safeHref,
      hasSubPaths: !!subPaths,
      index
    });

    // 🔥 CASO 1: Item con subPaths
    if (subPaths && subPaths.length > 0) {
      // Verificar si algún subPath coincide exactamente con la ruta actual
      const matchingSubPath = subPaths.find(item => item.href === pathname);
      const partialMatchSubPath = subPaths.find(item => pathname.includes(item.href) && item.href !== '/');
      
      if (matchingSubPath) {
        console.log(`✅ ItemLink [${safeText}] - Exact subpath match:`, matchingSubPath.href);
        setActivePath(safeHref);
        setActiveSubPath(pathname);
        onClickPath(index);
        if (mobile) onToggleOpen(false);
      } else if (partialMatchSubPath) {
        console.log(`✅ ItemLink [${safeText}] - Partial subpath match:`, partialMatchSubPath.href);
        setActivePath(safeHref);
        setActiveSubPath(pathname);
        onClickPath(index);
        if (mobile) onToggleOpen(false);
      } else {
        // 🔥 SI NO HAY MATCH CON SUBPATHS, VERIFICAR SI ESTE ITEM DEBE DESACTIVARSE
        console.log(`❌ ItemLink [${safeText}] - No subpath match, checking if should deactivate`);
      }
    } 
    // 🔥 CASO 2: Item sin subPaths
    else if (!subPaths && safeHref === pathname) {
      console.log(`✅ ItemLink [${safeText}] - Direct match:`, safeHref);
      setActivePath(safeHref);
      setActiveSubPath(safeHref);
      onClickPath(index);
      if (mobile) onToggleOpen(false);
    }
    
    // 🔥 SINCRONIZAR ESTADO LOCAL CON ESTADO GLOBAL
    setOpenSubMenuLocal(openSubMenu);
  }, [
    pathname,
    subPaths, 
    safeHref,
    index, 
    setActivePath, 
    setActiveSubPath, 
    onToggleOpen,
    openSubMenu,
    onClickPath,
    mobile,
    safeText
  ]);

  const handleOpenSubPaths = async (index: number, targetHref?: string) => {
    console.log(`🎯 ItemLink [${safeText}] - handleOpenSubPaths:`, {
      index,
      targetHref,
      hasSubPaths: !!subPaths,
      autoNavigateOnClick
    });

    // 🔥 SIEMPRE ACTIVAR EL PATH Y MANEJAR EL SUBMENU PRIMERO
    setActivePath(safeHref);
    onClickPath(index);

    // 🔥 CASO 1: Item con subPaths y auto-navegación
    if (subPaths && autoNavigateOnClick && safeHref) {
      let finalHref = safeHref;
      
      if (concatStoreId && currentUserId) {
        finalHref = safeHref + currentUserId;
      }
      
      try {
        console.log(`🔗 ItemLink [${safeText}] - Navigating to:`, finalHref);
        router.push(finalHref);
        
        setActiveSubPath(finalHref);
        onNavigate(finalHref);
        
        if (mobile) {
          setTimeout(() => onToggleOpen(false), 100);
        }
        
      } catch (error) {
        console.error('❌ Error en navegación:', error);
      }
      
      return;
    }
    
    // 🔥 CASO 2: Item con subPaths sin auto-navegación (solo expandir/colapsar)
    if (subPaths && !autoNavigateOnClick) {
      console.log(`📂 ItemLink [${safeText}] - Toggle submenu only`);
      
      if (mobile && subPaths.some(item => item.href === pathname)) {
        setActiveSubPath(pathname);
      }
      return;
    }

    // 🔥 CASO 3: Item sin subPaths (navegación directa)
    if (!subPaths && targetHref) {
      let finalHref = targetHref;
      
      if (concatStoreId && currentUserId) {
        finalHref = targetHref + currentUserId;
      }
      
      try {
        console.log(`🔗 ItemLink [${safeText}] - Direct navigation to:`, finalHref);
        router.push(finalHref);
        
        setActiveSubPath(finalHref);
        onNavigate(finalHref);
        
        if (mobile) {
          setTimeout(() => onToggleOpen(false), 100);
        }
      } catch (error) {
        console.error('❌ Error en navegación:', error);
      }
    }
  };

  const handleSubPathClick = async (subHref: string) => {
    let finalSubHref = subHref;
    
    if (concatStoreId && currentUserId) {
      finalSubHref = subHref + currentUserId;
    }
    
    console.log(`🔗 ItemLink [${safeText}] - Subpath click:`, finalSubHref);
    
    try {
      router.push(finalSubHref);
      
      setActiveSubPath(finalSubHref);
      onNavigate(finalSubHref);
      
      setTimeout(() => onToggleOpen(false), 100);
    } catch (error) {
      console.error('Error en navegación a subpath:', error);
    }
  };

  // Determinar qué icono usar
  const currentIcon = (safeHref === activePath && activeIcon) ? activeIcon : icon;

  // 🔥 DETERMINAR SI ESTE ITEM ESTÁ ACTIVO
  const isThisItemActive = () => {
    if (subPaths && subPaths.length > 0) {
      // Para items con subpaths, está activo si algún subpath coincide con la ruta actual
      return subPaths.some(subPath => 
        subPath.href === pathname || 
        (pathname.includes(subPath.href) && subPath.href !== '/')
      ) || safeHref === activePath;
    } else {
      // Para items sin subpaths, está activo si coincide exactamente
      return safeHref === pathname || safeHref === activePath;
    }
  };

  const itemIsActive = isThisItemActive();

  console.log(`📊 ItemLink [${safeText}] - Render state:`, {
    itemIsActive,
    activePath,
    activeSubPath,
    openSubMenu,
    pathname
  });

  // 🔥 SI TIENE SUBPATHS
  if (subPaths) {
    return (
      <div 
        className={`${styles.itemSubPath} ${className}`} 
        data-reduce={sidebarReduce && !enlargeByHover}
      >
        <li
          className={styles.linkContainer}
          data-active={itemIsActive} // 🔥 USAR LA FUNCIÓN MEJORADA
          data-has-sub-paths={true}
          data-auto-navigate={autoNavigateOnClick}
          style={
            openSubMenuLocal && (!sidebarReduce || enlargeByHover) 
              ? { marginBottom: '20px' } 
              : { marginBottom: 0 }
          }
          data-reduce={sidebarReduce && !enlargeByHover}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            
            handleOpenSubPaths(index, safeHref);
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
                    : subItem.href === activeSubPath || subItem.href === pathname // 🔥 MEJORAR DETECCIÓN
                }
                onClick={(e) => {
                  e.preventDefault();
                  handleSubPathClick(subItem.href);
                }}
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

  // 🔥 SI NO TIENE SUBPATHS (link simple)
  return (
    <li
      className={`${styles.linkContainer} ${className}`}
      data-active={itemIsActive} // 🔥 USAR LA FUNCIÓN MEJORADA
      data-reduce={sidebarReduce && !enlargeByHover}
      data-has-sub-paths={false}
    >
      <Link
        href={concatStoreId && currentUserId ? `${safeHref}${currentUserId}` : safeHref}
        data-reduce={sidebarReduce && !enlargeByHover}
        className={styles.link}
        onClick={(e) => {
          e.preventDefault();
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