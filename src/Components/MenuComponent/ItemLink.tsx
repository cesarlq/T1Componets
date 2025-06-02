import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
  
  // 🔥 USAR ROUTER DE NEXT.JS CORRECTAMENTE
  const router = useRouter();
  
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

  // Detectar ruta activa y manejar submenus
  useEffect(() => {
    if (subPaths && subPaths.some(item => item.href === router.asPath)) {
      setActivePath(safeHref);
      setActiveSubPath(router.asPath);
      onClickPath(index);
      onToggleOpen(false);
    } else if (subPaths && subPaths.some(item => router.asPath.includes(item.href))) {
      setActivePath(safeHref);
      onClickPath(index);
      onToggleOpen(false);
    } else if (!subPaths && safeHref === router.asPath) {
      onToggleOpen(false);
      setTimeout(() => {
        setActivePath(safeHref);
      });
    }
    
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

  // 🔥 FUNCIÓN HANDLEOPENSUBPATHS CORREGIDA PARA NEXT.JS
  const handleOpenSubPaths = async (index: number, targetHref?: string) => {
    console.log('🔍 handleOpenSubPaths called:', { 
      index, 
      targetHref, 
      autoNavigateOnClick, 
      safeHref,
      hasSubPaths: !!subPaths,
      currentPath: router.asPath
    });

    // Siempre activar el path y manejar el submenu
    setActivePath(safeHref);
    onClickPath(index);

    // 🔥 LÓGICA PARA AUTO-NAVEGACIÓN EN NEXT.JS
    if (subPaths && autoNavigateOnClick && safeHref) {
      let finalHref = safeHref;
      
      // Concatenar storeId si es necesario
      if (concatStoreId && currentUserId) {
        finalHref = safeHref + currentUserId;
      }
      
      console.log('🚀 Auto-navegando a:', finalHref);
      console.log('🌐 Ruta actual:', router.asPath);
      
      try {
        // 🔥 USAR ROUTER.PUSH DE NEXT.JS CORRECTAMENTE
        await router.push(finalHref);
        console.log('✅ Navegación exitosa a:', finalHref);
        
        // Actualizar estados después de la navegación
        setActiveSubPath(finalHref);
        onNavigate(finalHref);
        
        // En móvil, cerrar el sidebar después de navegar
        if (mobile) {
          onToggleOpen(false);
        }
        
      } catch (error) {
        console.error('❌ Error en navegación:', error);
      }
      
      return; // Salir temprano para evitar lógica adicional
    }
    
    // 🔥 LÓGICA PARA CUANDO NO HAY AUTO-NAVEGACIÓN
    if (subPaths && !autoNavigateOnClick) {
      console.log('📂 Solo abriendo submenu, no navegando');
      
      if (mobile && subPaths.some(item => item.href === router.asPath)) {
        setActiveSubPath(router.asPath);
      }
      return;
    }

    // 🔥 LÓGICA PARA ITEMS SIN SUBPATHS
    if (!subPaths && targetHref) {
      let finalHref = targetHref;
      
      if (concatStoreId && currentUserId) {
        finalHref = targetHref + currentUserId;
      }
      
      console.log('🔗 Navegando a item sin subpaths:', finalHref);
      
      try {
        await router.push(finalHref);
        console.log('✅ Navegación exitosa a:', finalHref);
        
        setActiveSubPath(finalHref);
        onNavigate(finalHref);
        
        if (mobile) {
          onToggleOpen(false);
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
    
    console.log('🎯 Navegando a subpath:', finalSubHref);
    
    try {
      await router.push(finalSubHref);
      console.log('✅ Navegación a subpath exitosa:', finalSubHref);
      
      setActiveSubPath(finalSubHref);
      onNavigate(finalSubHref);
      onToggleOpen(false);
    } catch (error) {
      console.error('❌ Error en navegación a subpath:', error);
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
            // 🔥 PREVENIR COMPORTAMIENTO POR DEFECTO
            e.preventDefault();
            e.stopPropagation();
            
            console.log('🖱️ Click en item con subpaths:', { 
              autoNavigateOnClick, 
              safeHref,
              subPathsCount: subPaths.length,
              currentPath: router.asPath
            });
            
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
            {/* Indicador visual para auto-navegación */}
            {autoNavigateOnClick && (!sidebarReduce || enlargeByHover) && (
              <span style={{ 
                fontSize: '10px', 
                color: '#4caf50', 
                marginLeft: '4px',
                fontWeight: 'bold',
                opacity: 0.8
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
