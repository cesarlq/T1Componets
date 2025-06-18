import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import T1Logo from '../../assets/T1.svg';
import ReduceIcon from '../../assets/reduce-icon.svg';
import EnlargeIcon from '../../assets/enlarge-icon.svg';
import styles from '../../styles/common/Navbar.module.scss';

export interface T1ShippingBannerProps {
  className?: string;
  dashboardPath?: string;
  brandText?: string;
  isMobile?: boolean;
  
  // Props opcionales para override externo (compatibilidad)
  onNavigate?: () => void;
  onToggleReduce?: () => void;
  onToggleOpen?: () => void;
  isReduced?: boolean;
  isOpen?: boolean;
  
  // Props legacy (para compatibilidad con implementaciones existentes)
  onReducerHandle?: () => void;
  sidebarReduce?: boolean;
}

export function T1ShippingBanner({
  className = '',
  brandText = 'envíos',
  isMobile = false,
  
  // Props opcionales para override externo
  onNavigate,
  onToggleReduce,
  onToggleOpen,
  isReduced = false,
  isOpen = false,
  
  // Props legacy para compatibilidad
  onReducerHandle,
  sidebarReduce = false
}: T1ShippingBannerProps) {
  
  // Router interno para navegación
  let router;
  let isStorybook = false;
  
  try {
    router = useRouter();
    isStorybook = typeof window !== 'undefined' && 
                  (window.location.href.includes('storybook') || 
                   window.parent !== window);
  } catch (error) {
    // Mock para Storybook
    router = {
      push: (path: string) => {
        if (typeof window !== 'undefined') {
          window.history.pushState({}, '', `${window.location.pathname}?story-path=${encodeURIComponent(path)}`);
        }
        return Promise.resolve(true);
      }
    };
    isStorybook = true;
  }
  
  // Handler interno para navegación
  const handleNavigate = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Callback externo si existe
    onNavigate?.();
  };

  // Handler interno para toggle
  const handleToggleClick = () => {
    if (onReducerHandle) {
      // Compatibilidad con implementación existente
      onReducerHandle();
    } else if (isMobile && onToggleOpen) {
      // En móvil: toggle del overlay
      onToggleOpen();
    } else if (!isMobile && onToggleReduce) {
      // En desktop: toggle del reduce
      onToggleReduce();
    } else {
      // Lógica interna por defecto
    }
  };

  // Determinar el estado del botón (legacy vs nuevo)
  const buttonIsReduced = sidebarReduce !== undefined ? sidebarReduce : isReduced;

  return (
    <div className={`${styles['t1-shipping-banner']} ${className}`}>
      {!isMobile && (
        <button
          className={`${styles['toggle-button']} ${styles.toogleIcon}`}
          onClick={handleToggleClick}
          type="button"
          aria-label={buttonIsReduced ? "Expandir sidebar" : "Reducir sidebar"}
        >
          <div className={styles['toggle-icon-wrapper']}>
            {buttonIsReduced ? (
              <EnlargeIcon
                width={18}
                height={16}
                style={{minWidth:'18px', minHeight:'16px'}}
              />
            ) : (
              <ReduceIcon
                width={18}
                height={16}
                style={{minWidth:'18px', minHeight:'16px'}}
              />
            )}
          </div>
        </button>
      )}
      
      <button
        className={styles['navigate-button']}
        onClick={handleNavigate}
        type="button"
        aria-label="Ir al dashboard"
      >
        <div className={styles['logo-wrapper']}>
          <T1Logo
            style={{minHeight:'25px', maxWidth:'27px', flexShrink: 0 }}
            width={27}
            height={25}
            className={styles['logo-image']} 
          />
        </div>
        <span className={styles['brand-text']}>
          {brandText}
        </span>
      </button>
    </div>
  );
}

// Versión simplificada sin botón de reducir
export function SimpleT1Banner({
  className = '',
  dashboardPath = '/',
  brandText = 'envíos',
  onNavigate
}: Pick<T1ShippingBannerProps, 'className' | 'dashboardPath' | 'brandText' | 'onNavigate'>) {

  // Router interno
  let router;
  let isStorybook = false;
  
  try {
    router = useRouter();
    isStorybook = typeof window !== 'undefined' && 
                  (window.location.href.includes('storybook') || 
                   window.parent !== window);
  } catch (error) {
    router = {
      push: (path: string) => {
        return Promise.resolve(true);
      }
    };
    isStorybook = true;
  }

  const handleNavigate = (e: React.MouseEvent) => {
    e.preventDefault();
    // Callback externo si existe
    onNavigate?.();
  };

  return (
    <button
      className={`${styles['simple-t1-banner']} ${className}`}
      onClick={handleNavigate}
      type="button"
      aria-label="Ir al dashboard"
    >
      <div className={styles['logo-wrapper']}>
        <T1Logo
          width={27}
          height={25}
          className={styles['logo-image']}
          style={{minHeight:'25px', maxWidth:'27px', flexShrink: 0 }}
        />
      </div>
      <span className={styles['brand-text']}>
        {brandText}
      </span>
    </button>
  );
}