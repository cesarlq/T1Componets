import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import T1Logo from '../../assets/T1.svg';
import ReduceIcon from '../../assets/reduce-icon.svg';
import EnlargeIcon from '../../assets/enlarge-icon.svg';

export interface T1ShippingBannerProps {
  className?: string;
  dashboardPath?: string;
  brandText?: string;
  isMobile?: boolean;
  
  // Props opcionales para override externo (compatibilidad)
  onNavigate?: (path: string) => void;
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
  dashboardPath = '/dashboard',
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
        console.log('Mock router push:', path);
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
    
    // Navegación interna
    if (!isStorybook) {
      router.push(dashboardPath);
    }
    
    // Callback externo si existe
    onNavigate?.(dashboardPath);
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
      console.log(isMobile ? 'Toggle sidebar open/close' : 'Toggle sidebar reduce/expand');
    }
  };

  // Determinar el estado del botón (legacy vs nuevo)
  const buttonIsReduced = sidebarReduce !== undefined ? sidebarReduce : isReduced;

  return (
    <div className={`flex items-center gap-[13.5px] ${className}`}>
      {!isMobile && (
        <button
          className="bg-transparent cursor-pointer border-none p-0"
          onClick={handleToggleClick}
          type="button"
          aria-label={buttonIsReduced ? "Expandir sidebar" : "Reducir sidebar"}
        >
          <div>
            {buttonIsReduced ? (
              <Image
                src={EnlargeIcon}
                alt="expand sidebar"
                width={18}
                height={16}
                style={{minWidth:'18px', minHeight:'16px'}}
              />
            ) : (
              <Image
                src={ReduceIcon}
                alt="reduce sidebar"
                width={18}
                height={16}
                style={{minWidth:'18px', minHeight:'16px'}}
              />
            )}
          </div>
        </button>
      )}
      
      <button
        className="flex items-center gap-1 bg-transparent border-none cursor-pointer p-0 transition-opacity hover:opacity-80"
        onClick={handleNavigate}
        type="button"
        aria-label="Ir al dashboard"
      >
        <div className="w-[27px] h-[25px] flex items-center justify-center">
          <Image 
            src={T1Logo} 
            alt="T1 Logo" 
            style={{minHeight:'25px', maxWidth:'27px'}}
            width={27}
            height={25}
            className="object-contain" 
          />
        </div>
        <span className="text-[25px] font-medium text-gray-800">
          {brandText}
        </span>
      </button>
    </div>
  );
}

// Versión simplificada sin botón de reducir
export function SimpleT1Banner({
  className = '',
  dashboardPath = '/dashboard',
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
        console.log('Mock router push:', path);
        return Promise.resolve(true);
      }
    };
    isStorybook = true;
  }

  const handleNavigate = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Navegación interna
    if (!isStorybook) {
      router.push(dashboardPath);
    }
    
    // Callback externo si existe
    onNavigate?.(dashboardPath);
  };

  return (
    <button
      className={`flex items-center gap-1 bg-transparent border-none cursor-pointer p-0 transition-opacity hover:opacity-80 ${className}`}
      onClick={handleNavigate}
      type="button"
      aria-label="Ir al dashboard"
    >
      <div className="w-[27px] h-[25px] flex items-center justify-center">
        <Image 
          src={T1Logo} 
          alt="T1 Logo" 
          width={27}
          height={25}
          className="object-contain"
          style={{minHeight:'25px', maxWidth:'27px'}}
        />
      </div>
      <span className="text-[25px] font-medium text-gray-800">
        {brandText}
      </span>
    </button>
  );
}