'use client';

import React, { useEffect, useState, useMemo, useCallback, useRef, useReducer } from 'react';
import Image from 'next/image';
import ArrowMenu from '../../assets/arrow-menu.svg';
import Ellipse from '../../assets/Ellipse55.svg';
import styles from '../../styles/common/ItemLink.module.scss';
import { MenuPath, SubPath } from './Sidebar';
import { useSmartRouter } from '../../util/router-adapter';
import { useMenuIntelligence } from '../../hooks/useMenuIntelligence';
import { SmartTooltip } from './SmartTooltip';

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

// State management con useReducer
interface MenuItemState {
  isNavigating: boolean;
  isHovered: boolean;
  ripples: Array<{ id: number; x: number; y: number }>;
  navigationProgress: number;
}

type MenuItemAction = 
  | { type: 'SET_NAVIGATING'; payload: boolean }
  | { type: 'SET_HOVERED'; payload: boolean }
  | { type: 'ADD_RIPPLE'; payload: { x: number; y: number } }
  | { type: 'REMOVE_RIPPLE'; payload: number }
  | { type: 'SET_PROGRESS'; payload: number };

const menuItemReducer = (state: MenuItemState, action: MenuItemAction): MenuItemState => {
  switch (action.type) {
    case 'SET_NAVIGATING':
      return { ...state, isNavigating: action.payload };
    case 'SET_HOVERED':
      return { ...state, isHovered: action.payload };
    case 'ADD_RIPPLE':
      return { 
        ...state, 
        ripples: [...state.ripples, { 
          id: Date.now(), 
          x: action.payload.x, 
          y: action.payload.y 
        }] 
      };
    case 'REMOVE_RIPPLE':
      return { 
        ...state, 
        ripples: state.ripples.filter(r => r.id !== action.payload) 
      };
    case 'SET_PROGRESS':
      return { ...state, navigationProgress: action.payload };
    default:
      return state;
  }
};

// ========================================================================
// UTILITY COMPONENTS - Lightweight Animations
// ========================================================================

const LoadingSpinner = ({ progress }: { progress?: number }) => {
  return (
    <div className={styles.loadingSpinner}>
      <svg width="16" height="16" viewBox="0 0 16 16">
        <circle 
          cx="8" 
          cy="8" 
          r="6" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeDasharray="30" 
          strokeDashoffset={progress ? 10 - (progress * 0.2) : 10}
          style={{
            transition: 'stroke-dashoffset 0.3s ease'
          }}
        />
      </svg>
      {progress !== undefined && (
        <div className={styles.progressText}>
          {Math.round(progress)}%
        </div>
      )}
    </div>
  );
};

const NotificationDot = ({ count }: { count?: number }) => (
  <div className={styles.notificationDot}>
    {count && count > 0 ? (
      <span className={styles.notificationCount}>
        {count > 99 ? '99+' : count}
      </span>
    ) : (
      <div>
        <Ellipse height={4} width={4} />
      </div>
    )}
  </div>
);

// Ripple Effect Component - CSS Only
const RippleEffect = ({ x, y, id, onComplete }: { 
  x: number; 
  y: number; 
  id: number;
  onComplete: (id: number) => void;
}) => {
  useEffect(() => {
    const timer = setTimeout(() => onComplete(id), 600);
    return () => clearTimeout(timer);
  }, [id, onComplete]);

  return (
    <div
      className={styles.ripple}
      style={{ 
        left: x, 
        top: y,
        animation: 'ripple-effect 0.6s ease-out forwards'
      }}
    />
  );
};

// Success Animation - CSS Only
const NavigationSuccess = () => (
  <div className={styles.successPulse}>
    <div className={styles.successInner} />
  </div>
);

// ========================================================================
// MAIN COMPONENT - Optimized for Performance
// ========================================================================

export const ItemLink = React.memo(function ItemLink({
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
  
  // State & Refs
  const { push: routerPush, pathname, isReady } = useSmartRouter();
  const itemRef = useRef<HTMLLIElement>(null);
  const [state, dispatch] = useReducer(menuItemReducer, {
    isNavigating: false,
    isHovered: false,
    ripples: [],
    navigationProgress: 0
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipTimer = useRef<NodeJS.Timeout>();

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

  // Haptic feedback helper
  const triggerHaptic = useCallback((intensity: number | number[] = 10) => {
    if (mobile && 'vibrate' in navigator) {
      navigator.vibrate(intensity);
    }
  }, [mobile]);

  // Ripple effect handler
  const handleRipple = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    dispatch({ type: 'ADD_RIPPLE', payload: { x, y } });
    triggerHaptic(5);
  }, [triggerHaptic]);

  // Navigation callbacks con progress tracking
  const handleSubPathNavigation = useCallback(async (subHref: string) => {
    dispatch({ type: 'SET_NAVIGATING', payload: true });
    dispatch({ type: 'SET_PROGRESS', payload: 0 });
    
    let finalSubHref = subHref;
    
    if (concatStoreId && currentUserId) {
      finalSubHref = subHref + currentUserId;
    }
    
    try {
      triggerHaptic(10);
      
      // Simulate smooth progress
      let progress = 0;
      const progressInterval = setInterval(() => {
        progress = Math.min(progress + 10, 90);
        dispatch({ type: 'SET_PROGRESS', payload: progress });
      }, 50);

      await routerPush(finalSubHref);
      
      clearInterval(progressInterval);
      dispatch({ type: 'SET_PROGRESS', payload: 100 });
      
      setActiveSubPath(finalSubHref);
      onNavigate(finalSubHref);
      
      // Success animation
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 600);
      
      // Cerrar sidebar en móvil
      if (mobile && onToggleOpen) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            onToggleOpen(false);
          });
        });
      }
    } catch (error) {
      console.error('Error en navegación:', error);
      triggerHaptic([100, 50, 100]); // Error haptic pattern
    } finally {
      dispatch({ type: 'SET_NAVIGATING', payload: false });
      dispatch({ type: 'SET_PROGRESS', payload: 0 });
    }
  }, [concatStoreId, currentUserId, routerPush, setActiveSubPath, onNavigate, mobile, onToggleOpen, triggerHaptic]);

  const handleDirectNavigation = useCallback(async (targetHref: string) => {
    dispatch({ type: 'SET_NAVIGATING', payload: true });
    let finalHref = targetHref;
    
    if (concatStoreId && currentUserId) {
      finalHref = targetHref + currentUserId;
    }
    
    try {
      triggerHaptic(10);
      await routerPush(finalHref);
      setActiveSubPath(finalHref);
      onNavigate(finalHref);
      
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 600);
      
      if (mobile && onToggleOpen) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            onToggleOpen(false);
          });
        });
      }
    } catch (error) {
      console.error('Error en navegación:', error);
      triggerHaptic([100, 50, 100]);
    } finally {
      dispatch({ type: 'SET_NAVIGATING', payload: false });
    }
  }, [concatStoreId, currentUserId, routerPush, setActiveSubPath, onNavigate, mobile, onToggleOpen, triggerHaptic]);

  const handleItemClick = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    handleRipple(e);
    
    if (state.isNavigating) return;

    if (subPaths && subPaths.length > 0) {
      if (mobile) {
        if (openSubMenu) {
          onClickPath(-1);
        } else {
          setActivePath(safeHref);
          onClickPath(index);
        }
        
        if (subPaths.some(subPath => subPath.href === pathname)) {
          setActiveSubPath(pathname);
        }
        return;
      } else {
        setActivePath(safeHref);
        onClickPath(index);
        
        if (autoNavigateToFirstSubPath && filteredSubPaths[0]) {
          await handleSubPathNavigation(filteredSubPaths[0].href);
        }
      }
      return;
    }

    setActivePath(safeHref);
    if (safeHref) {
      await handleDirectNavigation(safeHref);
    }
  }, [state.isNavigating, handleRipple, setActivePath, safeHref, onClickPath, index, subPaths, autoNavigateToFirstSubPath, mobile, filteredSubPaths, pathname, setActiveSubPath, handleSubPathNavigation, handleDirectNavigation, openSubMenu]);

  const handleSubPathClick = useCallback(async (e: React.MouseEvent, subHref: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    handleRipple(e);
    
    if (!state.isNavigating) {
      await handleSubPathNavigation(subHref);
    }
  }, [state.isNavigating, handleRipple, handleSubPathNavigation]);

  // Enhanced keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch(e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        handleItemClick(e as any);
        break;
      case 'ArrowRight':
        if (subPaths && !openSubMenu) {
          e.preventDefault();
          onClickPath(index);
        }
        break;
      case 'ArrowLeft':
        if (subPaths && openSubMenu) {
          e.preventDefault();
          onClickPath(-1);
        }
        break;
      case 'ArrowDown':
        if (openSubMenu && filteredSubPaths.length > 0) {
          e.preventDefault();
          const firstSubPath = itemRef.current?.querySelector('[role="menuitem"]') as HTMLElement;
          firstSubPath?.focus();
        }
        break;
    }
  }, [handleItemClick, subPaths, openSubMenu, onClickPath, index, filteredSubPaths]);

  // Focus management with smooth scroll
  useEffect(() => {
    if (itemIsActive && itemRef.current && !mobile) {
      itemRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest',
        inline: 'nearest'
      });
    }
  }, [itemIsActive, mobile]);

  // Cleanup tooltip timer on unmount
  useEffect(() => {
    return () => {
      if (tooltipTimer.current) {
        clearTimeout(tooltipTimer.current);
      }
    };
  }, []);

  // Mouse handlers for hover effects
  const handleMouseEnter = useCallback(() => {
    dispatch({ type: 'SET_HOVERED', payload: true });
    tooltipTimer.current = setTimeout(() => setShowTooltip(true), 800);
  }, []);

  const handleMouseLeave = useCallback(() => {
    dispatch({ type: 'SET_HOVERED', payload: false });
    if (tooltipTimer.current) {
      clearTimeout(tooltipTimer.current);
    }
    setShowTooltip(false);
  }, []);

  // Render con subPaths
  if (subPaths && subPaths.length > 0) {
    return (
      <div 
        className={`${styles.itemSubPath} ${className}`} 
        data-reduce={sidebarReduce && !enlargeByHover}
        data-tour-target={dataTourTarget}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="menuitem"
        aria-expanded={openSubMenu}
        aria-haspopup="menu"
        aria-current={itemIsActive ? "page" : undefined}
      >
        <li
          ref={itemRef}
          className={styles.linkContainer}
          data-active={itemIsActive}
          data-has-sub-paths={true}
          data-reduce={sidebarReduce && !enlargeByHover}
          onClick={handleItemClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          style={{
            cursor: mobile && subPaths && subPaths.length > 0 ? 'pointer' : 'default',
            contain: 'layout style paint'
          }}
        >
          {/* Ripple effects */}
          {state.ripples.map(ripple => (
            <RippleEffect
              key={ripple.id}
              x={ripple.x}
              y={ripple.y}
              id={ripple.id}
              onComplete={(id) => dispatch({ type: 'REMOVE_RIPPLE', payload: id })}
            />
          ))}

          {/* Success animation */}
          {showSuccess && <NavigationSuccess />}

          <div data-reduce={sidebarReduce && !enlargeByHover} className={styles.link}>
            {currentIcon && (
              <div className={styles.iconWrapper}>
                <Image
                  src={currentIcon}
                  alt=""
                  height={19}
                  width={19}
                  className={styles.menuIcon}
                  aria-hidden="true"
                  priority={itemIsActive}
                />
              </div>
            )}
            
            {(!sidebarReduce || enlargeByHover) && (
              <span 
                className={styles.menuText}
                style={{ opacity: state.isNavigating ? 0.5 : 1 }}
              >
                {safeText}
              </span>
            )}
            
            {state.isNavigating && (
              <LoadingSpinner progress={state.navigationProgress} />
            )}
            
            {hasNotification && !state.isNavigating && <NotificationDot />}
            
            {endAdornment && !(sidebarReduce && !enlargeByHover) && (
              <div className={styles.endAdornment}>
                {endAdornment}
              </div>
            )}
          </div>
          
          {/* Smart Tooltip for reduced sidebar */}
          {sidebarReduce && !enlargeByHover && !mobile && (
            <SmartTooltip content={safeText} show={showTooltip} />
          )}
          
          <div
            className={styles.arrowWrapper}
            style={{
              transform: openSubMenu ? 'rotate(0deg) scale(1.1)' : 'rotate(180deg) scale(1)',
              transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
          >
            <ArrowMenu
              className={styles.arrow}
              width={10}
              height={10}
              aria-hidden="true"
            />
          </div>
        </li>
        
        {/* Subpaths con animación CSS */}
        {(!sidebarReduce || enlargeByHover) && (
          <nav 
            className={styles.subPaths}
            style={{
              height: openSubMenu ? 'auto' : 0,
              opacity: openSubMenu ? 1 : 0,
              transform: `scale(${openSubMenu ? 1 : 0.95})`,
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              overflow: 'hidden'
            }}
            role="menu"
            aria-label={`Submenú de ${safeText}`}
          >
            {filteredSubPaths.map((subItem, subIndex) => {
              const subItemHref = concatStoreId && currentUserId 
                ? `${subItem.href}${currentUserId}` 
                : subItem.href;
              
              const isSubItemActive = subItemHref === activeSubPath || 
                                    subItem.href === pathname ||
                                    subItem.href === activeSubPath;

              return (
                <button
                  key={subItem.href}
                  className={styles.subPath}
                  data-active={isSubItemActive}
                  onClick={(e) => handleSubPathClick(e, subItem.href)}
                  disabled={state.isNavigating}
                  tabIndex={openSubMenu ? 0 : -1}
                  role="menuitem"
                  aria-label={subItem.text}
                  aria-current={isSubItemActive ? "page" : undefined}
                  style={{ 
                    contain: 'layout style',
                    animationDelay: `${subIndex * 30}ms`
                  }}
                >
                  {/* Ripple container */}
                  <span className={styles.rippleContainer}>
                    {state.ripples.map(ripple => (
                      <RippleEffect
                        key={ripple.id}
                        x={ripple.x}
                        y={ripple.y}
                        id={ripple.id}
                        onComplete={(id) => dispatch({ type: 'REMOVE_RIPPLE', payload: id })}
                      />
                    ))}
                  </span>

                  <span className={styles.subPathText}>{subItem.text}</span>
                  
                  <div className={styles.subPathEndAdornment}>
                    {subItem.hasNotification && <NotificationDot />}
                    {subItem.endAdornmentSubPath && (
                      <div>
                        {React.isValidElement(subItem.endAdornmentSubPath) ? 
                          subItem.endAdornmentSubPath : 
                          <div className={styles.endAdornmentSubPath}>
                            {subItem.endAdornmentSubPath}
                          </div>
                        }
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </nav>
        )}
      </div>
    );
  }

  // Render item simple (sin subPaths)
  return (
    <li
      ref={itemRef}
      data-tour-target={dataTourTarget}
      className={`${styles.linkContainer} ${className}`}
      data-active={itemIsActive}
      data-reduce={sidebarReduce && !enlargeByHover}
      data-has-sub-paths={false}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="menuitem"
      tabIndex={0}
      aria-current={itemIsActive ? "page" : undefined}
      style={{ contain: 'layout style paint' }}
    >
      {/* Ripple effects */}
      {state.ripples.map(ripple => (
        <RippleEffect
          key={ripple.id}
          x={ripple.x}
          y={ripple.y}
          id={ripple.id}
          onComplete={(id) => dispatch({ type: 'REMOVE_RIPPLE', payload: id })}
        />
      ))}

      {/* Success animation */}
      {showSuccess && <NavigationSuccess />}

      <button
        data-reduce={sidebarReduce && !enlargeByHover}
        className={styles.link}
        onClick={handleItemClick}
        onKeyDown={handleKeyDown}
        disabled={state.isNavigating}
        aria-label={`Navegar a ${safeText}`}
        title={sidebarReduce && !enlargeByHover ? safeText : undefined}
      >
        {currentIcon && (
          <div className={styles.iconWrapper}>
            <Image
              src={currentIcon}
              alt=""
              height={19}
              width={19}
              className={styles.menuIcon}
              aria-hidden="true"
              priority={itemIsActive}
            />
          </div>
        )}
        
        {(!sidebarReduce || enlargeByHover) && (
          <span 
            className={styles.menuText}
            style={{ opacity: state.isNavigating ? 0.5 : 1 }}
          >
            {safeText}
          </span>
        )}
        
        {state.isNavigating && <LoadingSpinner />}
        
        {hasNotification && !state.isNavigating && <NotificationDot />}
        
        {endAdornment && !(sidebarReduce && !enlargeByHover) && (
          <div className={styles.endAdornment}>
            {endAdornment}
          </div>
        )}
      </button>

      {/* Smart Tooltip for reduced sidebar */}
      {sidebarReduce && !enlargeByHover && !mobile && (
        <SmartTooltip content={safeText} show={showTooltip} />
      )}
    </li>
  );
}, (prevProps, nextProps) => {
  // Memoización personalizada para evitar re-renders innecesarios
  return (
    prevProps.openSubMenu === nextProps.openSubMenu &&
    prevProps.activePath === nextProps.activePath &&
    prevProps.activeSubPath === nextProps.activeSubPath &&
    prevProps.sidebarReduce === nextProps.sidebarReduce &&
    prevProps.enlargeByHover === nextProps.enlargeByHover &&
    prevProps.hasNotification === nextProps.hasNotification &&
    prevProps.href === nextProps.href &&
    prevProps.text === nextProps.text
  );
});
