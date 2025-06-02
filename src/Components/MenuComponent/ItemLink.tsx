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
  
  // 🔥 USAR HOOKS DE APP ROUTER (NEXT.JS 13+)
  const router = useRouter();
  const pathname = usePathname(); // Equivalente a router.asPath en Pages Router
  
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

  // 🔥 DETECTAR RUTA ACTIVA CON PATHNAME (APP ROUTER)
  useEffect(() => {
    if (subPaths && subPaths.some(item => item.href === pathname)) {
      setActivePath(safeHref);
      setActiveSubPath(pathname);
      onClickPath(index);
      onToggleOpen(false);
    } else if (subPaths && subPaths.some(item => pathname.includes(item.href))) {
      setActivePath(safeHref);
      onClickPath(index);
      onToggleOpen(false);
    } else if (!subPaths && safeHref === pathname) {
      onToggleOpen(false);
      setTimeout(() => {
        setActivePath(safeHref);
      });
    }
    
    setOpenSubMenuLocal(openSubMenu);
  }, [
    pathname, // 🔥 USAR PATHNAME EN LUGAR DE router.asPath
    subPaths, 
    safeHref,
    index, 
    setActivePath, 
    setActiveSubPath, 
    onToggleOpen,
    openSubMenu,
    onClickPath
  ]);

  const handleOpenSubPaths = async (index: number, targetHref?: string) => {
    // Siempre activar el path y manejar el submenu
    setActivePath(safeHref);
    onClickPath(index);

    // 🔥 LÓGICA PARA AUTO-NAVEGACIÓN EN APP ROUTER
    if (subPaths && autoNavigateOnClick && safeHref) {
      let finalHref = safeHref;
      
      // Concatenar storeId si es necesario
      if (concatStoreId && currentUserId) {
        finalHref = safeHref + currentUserId;
      }
      
      try {
        // 🔥 USAR ROUTER.PUSH DE APP ROUTER
        // En App Router, router.push no devuelve una Promise, pero funciona igual
        router.push(finalHref);
        
        // Actualizar estados
        setActiveSubPath(finalHref);
        onNavigate(finalHref);
        
        // En móvil, cerrar el sidebar después de navegar
        if (mobile) {
          setTimeout(() => {
            onToggleOpen(false);
          }, 100); // Pequeño delay para asegurar que la navegación se inicie
        }
        
      } catch (error) {
        console.error('❌ Error en navegación:', error);
      }
      
      return; // Salir temprano para evitar lógica adicional
    }
    
    // 🔥 LÓGICA PARA CUANDO NO HAY AUTO-NAVEGACIÓN
    if (subPaths && !autoNavigateOnClick) {
      
      if (mobile && subPaths.some(item => item.href === pathname)) {
        setActiveSubPath(pathname);
      }
      return;
    }

    // 🔥 LÓGICA PARA ITEMS SIN SUBPATHS
    if (!subPaths && targetHref) {
      let finalHref = targetHref;
      
      if (concatStoreId && currentUserId) {
        finalHref = targetHref + currentUserId;
      }
      
      
      try {
        router.push(finalHref);
        
        setActiveSubPath(finalHref);
        onNavigate(finalHref);
        
        if (mobile) {
          setTimeout(() => {
            onToggleOpen(false);
          }, 100);
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
    
    try {
      router.push(finalSubHref);
      
      setActiveSubPath(finalSubHref);
      onNavigate(finalSubHref);
      
      setTimeout(() => {
        onToggleOpen(false);
      }, 100);
    } catch (error) {
      console.error('Error en navegación a subpath:', error);
    }
  };

  // Determinar qué icono usar
  const currentIcon = (safeHref === activePath && activeIcon) ? activeIcon : icon;

  // 🔥 SI TIENE SUBPATHS
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
                    : subItem.href === activeSubPath
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
      data-active={safeHref === activePath}
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