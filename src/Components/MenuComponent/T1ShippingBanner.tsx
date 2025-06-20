import React, { memo, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';

// Assets
import T1Logo from '../../assets/T1.svg';
import ReduceIcon from '../../assets/reduce-icon.svg';
import EnlargeIcon from '../../assets/enlarge-icon.svg';

// Estilos
import styles from '../../styles/common/T1ShippingBanner.module.scss';

// =============================================================================
// TYPES & INTERFACES
// =============================================================================

export interface T1ShippingBannerProps {
  className?: string;
  brandText?: string;
  isMobile?: boolean;
  
  // Comportamiento
  onNavigate?: () => void;
  onToggleReduce?: () => void;
  onToggleOpen?: () => void;
  
  // Estado
  isReduced?: boolean;
  isOpen?: boolean;
  
  // Props legacy para compatibilidad
  onReducerHandle?: () => void;
  sidebarReduce?: boolean;
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export const T1ShippingBanner = memo<T1ShippingBannerProps>(({
  className = '',
  brandText = 'envíos',
  isMobile = false,
  onNavigate,
  onToggleReduce,
  onToggleOpen,
  isReduced = false,
  isOpen = false,
  // Props legacy
  onReducerHandle,
  sidebarReduce = false
}) => {
  const [isNavigating, setIsNavigating] = useState(false);
  
  // Router con fallback para Storybook
  let router;
  try {
    router = useRouter();
  } catch (error) {
    router = {
      push: (path: string) => {
        console.log('Navigate to:', path);
        return Promise.resolve(true);
      }
    };
  }
  
  // Handler para navegación con loading state
  const handleNavigate = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    
    setIsNavigating(true);
    
    // Callback externo
    onNavigate?.();
    
    // Pequeño delay para mostrar animación
    await new Promise(resolve => setTimeout(resolve, 200));
    
    setIsNavigating(false);
  }, [onNavigate]);
  
  // Handler para toggle con compatibilidad legacy
  const handleToggleClick = useCallback(() => {
    if (onReducerHandle) {
      // Compatibilidad legacy
      onReducerHandle();
    } else if (isMobile && onToggleOpen) {
      // En móvil: toggle del overlay
      onToggleOpen();
    } else if (!isMobile && onToggleReduce) {
      // En desktop: toggle del reduce
      onToggleReduce();
    }
  }, [isMobile, onToggleOpen, onToggleReduce, onReducerHandle]);
  
  // Determinar estado del botón (legacy vs nuevo)
  const buttonIsReduced = sidebarReduce !== undefined ? sidebarReduce : isReduced;
  
  return (
    <div 
      className={clsx(styles.container, className)}
      data-testid="t1-shipping-banner"
    >
      {/* Toggle button - solo en desktop */}
      {!isMobile && (
        <button
          className={clsx(styles.toggleButton, styles.toogleIcon)}
          onClick={handleToggleClick}
          type="button"
          aria-label={buttonIsReduced ? "Expandir menú lateral" : "Colapsar menú lateral"}
          aria-expanded={!buttonIsReduced}
        >
          <div className={styles.iconWrapper}>
            {buttonIsReduced ? (
              <EnlargeIcon
                width={18}
                height={16}
                className={styles.icon}
                style={{ minWidth: '18px', minHeight: '16px' }}
              />
            ) : (
              <ReduceIcon
                width={18}
                height={16}
                className={styles.icon}
                style={{ minWidth: '18px', minHeight: '16px' }}
              />
            )}
          </div>
        </button>
      )}
      
      {/* Logo y marca */}
      <button
        className={clsx(styles.logoBrand, {
          [styles.navigating]: isNavigating
        })}
        onClick={handleNavigate}
        type="button"
        aria-label={`Ir al dashboard de ${brandText}`}
      >
        {/* Loading overlay sutil */}
        {isNavigating && (
          <div className={styles.loadingOverlay}>
            <div className={styles.spinner} />
          </div>
        )}
        
        <div className={styles.logoWrapper}>
          <T1Logo 
            className={styles.logo}
            style={{ minHeight: '25px', maxWidth: '27px', flexShrink: 0 }}
            width={27}
            height={25}
          />
        </div>
        
        <span className={styles.brandText}>
          {brandText}
        </span>
      </button>
      
      {/* Estado para screen readers */}
      <div className="sr-only" role="status" aria-live="polite">
        {isNavigating && "Navegando..."}
      </div>
    </div>
  );
});

T1ShippingBanner.displayName = 'T1ShippingBanner';

// =============================================================================
// SIMPLE VERSION
// =============================================================================

export const SimpleT1Banner = memo<Pick<T1ShippingBannerProps, 'className' | 'brandText' | 'onNavigate'>>(({
  className = '',
  brandText = 'envíos',
  onNavigate,
}) => {
  const handleNavigate = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate?.();
  }, [onNavigate]);
  
  return (
    <button
      className={clsx(styles.simpleBanner, className)}
      onClick={handleNavigate}
      type="button"
      aria-label={`Ir al dashboard de ${brandText}`}
    >
      <div className={styles.logoWrapper}>
        <T1Logo
          width={27}
          height={25}
          className={styles.logo}
          style={{ minHeight: '25px', maxWidth: '27px', flexShrink: 0 }}
        />
      </div>
      <span className={styles.brandText}>
        {brandText}
      </span>
    </button>
  );
});

SimpleT1Banner.displayName = 'SimpleT1Banner';