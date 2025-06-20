'use client';

import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import Image from 'next/image';
import ArrowMenu from '../../assets/arrow-menu.svg';
import Ellipse from '../../assets/Ellipse55.svg';
import styles from '../../styles/common/ItemLink.module.scss';
import { MenuPath, SubPath } from './Sidebar';
import { useSmartRouter } from '../../util/router-adapter';
import { motion, AnimatePresence } from 'framer-motion';

// ========================================================================
// TYPES & INTERFACES
// ========================================================================

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
  autoNavigateToFirstSubPath?: boolean;
  hasNotification?: boolean;
  dataTourTarget?: string;
}

// ========================================================================
// ANIMATION VARIANTS
// ========================================================================

const itemVariants = {
  idle: { 
    x: 0, 
    backgroundColor: 'transparent'
  },
  hover: { 
    x: 2,
    backgroundColor: 'rgba(219, 59, 43, 0.02)'
  },
  tap: { 
    scale: 0.98
  }
};

const iconVariants = {
  idle: { 
    rotate: 0, 
    scale: 1 
  },
  hover: { 
    rotate: 5, 
    scale: 1.05
  },
  active: {
    rotate: 0,
    scale: 1.1
  }
};

const arrowVariants = {
  closed: { 
    rotate: 180
  },
  open: { 
    rotate: 0
  }
};

const subMenuVariants = {
  closed: {
    height: 0,
    opacity: 0
  },
  open: {
    height: "auto",
    opacity: 1
  }
};

const subItemVariants = {
  hidden: { 
    opacity: 0, 
    x: -20 
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3
    }
  })
};

// ========================================================================
// UTILITY COMPONENTS
// ========================================================================

const LoadingSpinner = () => (
  <motion.div
    className={styles.loadingSpinner}
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
  >
    <svg width="16" height="16" viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="30" strokeDashoffset="10" />
    </svg>
  </motion.div>
);

const NotificationDot = ({ count }: { count?: number }) => (
  <motion.div
    className={styles.notificationDot}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: "spring", stiffness: 500, damping: 15 }}
  >
    {count && count > 0 ? (
      <span className={styles.notificationCount}>{count > 99 ? '99+' : count}</span>
    ) : (
      <Ellipse height={4} width={4} />
    )}
  </motion.div>
);

// ========================================================================
// MAIN COMPONENT
// ========================================================================

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
  component,
  autoNavigateToFirstSubPath = false,
  hasNotification = false,
  dataTourTarget = ''
}: ItemLinkProps) {
  
  // Router & Refs
  const { push: routerPush, pathname, isReady } = useSmartRouter();
  const itemRef = useRef<HTMLLIElement>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Valores seguros
  const safeHref = href || '';
  const safeText = text || '';
  
  // Skip render para tipos especiales
  const itemType = typeof type === 'string' ? type : type?.toString();
  if (['STATIC_TITLE', 'REACT_TSX', '0', '3', 'INFORMATIVE_TEXT'].includes(itemType || '')) {
    return null;
  }

  // Memoized: Filtrar sub-rutas restringidas
  const filteredSubPaths = useMemo(() => {
    if (!subPaths) return [];
    return subPaths.filter(subPath => !restrictedPaths.includes(subPath.href));
  }, [subPaths, restrictedPaths]);

  // Memoized: Determinar si item está activo
  const itemIsActive = useMemo(() => {
    if (subPaths && subPaths.length > 0) {
      return subPaths.some(subPath => 
        subPath.href === pathname || 
        subPath.href === activeSubPath ||
        (pathname.startsWith(subPath.href) && subPath.href !== '/')
      ) || safeHref === activePath;
    }
    return safeHref === pathname || safeHref === activeSubPath;
  }, [subPaths, pathname, activeSubPath, safeHref, activePath]);

  // Determinar icono actual
  const currentIcon = (itemIsActive && activeIcon) ? activeIcon : icon;

  // Callbacks optimizados
  const handleSubPathNavigation = useCallback(async (subHref: string) => {
    setIsNavigating(true);
    let finalSubHref = subHref;
    
    if (concatStoreId && currentUserId) {
      finalSubHref = subHref + currentUserId;
    }
    
    try {
      // Haptic feedback para móvil
      if (mobile && 'vibrate' in navigator) {
        navigator.vibrate(10);
      }

      await routerPush(finalSubHref);
      setActiveSubPath(finalSubHref);
      onNavigate(finalSubHref);
      
      if (mobile) {
        setTimeout(() => onToggleOpen(false), 300);
      }
    } catch (error) {
      console.error('Error en navegación:', error);
    } finally {
      setIsNavigating(false);
    }
  }, [concatStoreId, currentUserId, routerPush, setActiveSubPath, onNavigate, mobile, onToggleOpen]);

  const handleDirectNavigation = useCallback(async (targetHref: string) => {
    setIsNavigating(true);
    let finalHref = targetHref;
    
    if (concatStoreId && currentUserId) {
      finalHref = targetHref + currentUserId;
    }
    
    try {
      if (mobile && 'vibrate' in navigator) {
        navigator.vibrate(10);
      }

      await routerPush(finalHref);
      setActiveSubPath(finalHref);
      onNavigate(finalHref);
      
      if (mobile) {
        setTimeout(() => onToggleOpen(false), 300);
      }
    } catch (error) {
      console.error('Error en navegación:', error);
    } finally {
      setIsNavigating(false);
    }
  }, [concatStoreId, currentUserId, routerPush, setActiveSubPath, onNavigate, mobile, onToggleOpen]);

  const handleItemClick = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Prevenir clicks durante navegación
    if (isNavigating) return;

    setActivePath(safeHref);
    onClickPath(index);

    if (subPaths && subPaths.length > 0) {
      if (autoNavigateToFirstSubPath && !mobile && filteredSubPaths[0]) {
        await handleSubPathNavigation(filteredSubPaths[0].href);
      } else if (mobile && subPaths.some(subPath => subPath.href === pathname)) {
        setActiveSubPath(pathname);
      }
      return;
    }

    if (!subPaths && safeHref) {
      await handleDirectNavigation(safeHref);
    }
  }, [isNavigating, setActivePath, safeHref, onClickPath, index, subPaths, autoNavigateToFirstSubPath, mobile, filteredSubPaths, pathname, setActiveSubPath, handleSubPathNavigation, handleDirectNavigation]);

  const handleSubPathClick = useCallback(async (e: React.MouseEvent, subHref: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isNavigating) {
      await handleSubPathNavigation(subHref);
    }
  }, [isNavigating, handleSubPathNavigation]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleItemClick(e as any);
    }
  }, [handleItemClick]);

  // Focus management
  useEffect(() => {
    if (itemIsActive && itemRef.current) {
      itemRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [itemIsActive]);

  // Render con subPaths
  if (subPaths && subPaths.length > 0) {
    return (
      <motion.div 
        className={`${styles.itemSubPath} ${className}`} 
        data-reduce={sidebarReduce && !enlargeByHover}
        data-tour-target={dataTourTarget}
        initial="idle"
        animate={isHovered ? "hover" : "idle"}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.li
          ref={itemRef}
          className={styles.linkContainer}
          data-active={itemIsActive}
          data-has-sub-paths={true}
          data-reduce={sidebarReduce && !enlargeByHover}
          onClick={handleItemClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="button"
          aria-expanded={openSubMenu}
          aria-label={`${safeText} menu${openSubMenu ? ' expandido' : ' colapsado'}`}
          variants={itemVariants}
          whileTap="tap"
        >
          <div data-reduce={sidebarReduce && !enlargeByHover} className={styles.link}>
            {currentIcon && (
              <motion.div
                className={styles.iconWrapper}
                variants={iconVariants}
                animate={itemIsActive ? "active" : isHovered ? "hover" : "idle"}
              >
                <Image
                  src={currentIcon}
                  alt=""
                  height={19}
                  width={19}
                  className={styles.menuIcon}
                  aria-hidden="true"
                />
              </motion.div>
            )}
            
            {(!sidebarReduce || enlargeByHover) && (
              <span className={styles.menuText}>{safeText}</span>
            )}
            
            {isNavigating && <LoadingSpinner />}
            
            {hasNotification && !isNavigating && <NotificationDot />}
            
            {endAdornment && !(sidebarReduce && !enlargeByHover) && (
              <motion.div 
                className={styles.endAdornment}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {endAdornment}
              </motion.div>
            )}
          </div>
          
          <motion.div
            className={styles.arrowWrapper}
            variants={arrowVariants}
            animate={openSubMenu ? "open" : "closed"}
          >
            <ArrowMenu
              className={styles.arrow}
              width={10}
              height={10}
              aria-hidden="true"
            />
          </motion.div>
        </motion.li>
        
        {/* Subpaths con animación */}
        <AnimatePresence>
          {(!sidebarReduce || enlargeByHover) && (
            <motion.div 
              className={styles.subPaths}
              variants={subMenuVariants}
              initial="closed"
              animate={openSubMenu ? "open" : "closed"}
              exit="closed"
            >
              {filteredSubPaths.map((subItem, subIndex) => {
                const subItemHref = concatStoreId && currentUserId 
                  ? `${subItem.href}${currentUserId}` 
                  : subItem.href;
                
                const isSubItemActive = subItemHref === activeSubPath || 
                                      subItem.href === pathname ||
                                      subItem.href === activeSubPath;

                return (
                  <motion.button
                    key={subItem.href}
                    className={styles.subPath}
                    data-active={isSubItemActive}
                    onClick={(e) => handleSubPathClick(e, subItem.href)}
                    disabled={isNavigating}
                    tabIndex={openSubMenu ? 0 : -1}
                    role="menuitem"
                    aria-label={subItem.text}
                    variants={subItemVariants}
                    custom={subIndex}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ x: 4, backgroundColor: 'rgba(219, 59, 43, 0.03)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className={styles.subPathText}>{subItem.text}</span>
                    
                    <div className={styles.subPathEndAdornment}>
                      {subItem.hasNotification && <NotificationDot />}
                      {subItem.endAdornmentSubPath && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {React.isValidElement(subItem.endAdornmentSubPath) ? 
                            subItem.endAdornmentSubPath : 
                            <div className={styles.endAdornmentSubPath}>
                              {subItem.endAdornmentSubPath}
                            </div>
                          }
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  // Render item simple (sin subPaths)
  return (
    <motion.li
      ref={itemRef}
      data-tour-target={dataTourTarget}
      className={`${styles.linkContainer} ${className}`}
      data-active={itemIsActive}
      data-reduce={sidebarReduce && !enlargeByHover}
      data-has-sub-paths={false}
      initial="idle"
      animate={isHovered ? "hover" : "idle"}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      variants={itemVariants}
      whileTap="tap"
      role="menuitem"
      tabIndex={0}
    >
      <button
        data-reduce={sidebarReduce && !enlargeByHover}
        className={styles.link}
        onClick={handleItemClick}
        onKeyDown={handleKeyDown}
        disabled={isNavigating}
        aria-label={`Navegar a ${safeText}`}
        title={sidebarReduce && !enlargeByHover ? safeText : undefined}
      >
        {currentIcon && (
          <motion.div
            className={styles.iconWrapper}
            variants={iconVariants}
            animate={itemIsActive ? "active" : isHovered ? "hover" : "idle"}
          >
            <Image
              src={currentIcon}
              alt=""
              height={19}
              width={19}
              className={styles.menuIcon}
              aria-hidden="true"
            />
          </motion.div>
        )}
        
        {(!sidebarReduce || enlargeByHover) && (
          <span className={styles.menuText}>{safeText}</span>
        )}
        
        {isNavigating && <LoadingSpinner />}
        
        {hasNotification && !isNavigating && <NotificationDot />}
        
        {endAdornment && !(sidebarReduce && !enlargeByHover) && (
          <motion.div 
            className={styles.endAdornment}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {endAdornment}
          </motion.div>
        )}
      </button>
    </motion.li>
  );
}
