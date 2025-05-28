import React from 'react';
import Image from "next/image";
import T1Logo from '../../assets/T1.svg';
import ReduceIcon from '../../assets/reduce-icon.svg';
import EnlargeIcon from '../../assets/enlarge-icon.svg';

export interface T1ShippingBannerProps {
  className?: string;
  onNavigate?: (path: string) => void;
  dashboardPath?: string;
  // Solo se puede personalizar el texto de la marca
  brandText?: string;
  // Props de control del sidebar (opcionales - para uso dentro del Sidebar de la librería)
  onToggleReduce?: () => void;
  onToggleOpen?: () => void;
  isReduced?: boolean;
  isOpen?: boolean;
  isMobile?: boolean;
  // Props legacy (para compatibilidad con implementaciones existentes)
  onReducerHandle?: () => void;
  sidebarReduce?: boolean;
}

export function T1ShippingBanner({
  className = '',
  onNavigate = () => {},
  dashboardPath = '/dashboard',
  brandText = 'envíos',
  onToggleReduce,
  onToggleOpen,
  isReduced = false,
  isOpen = false,
  isMobile = false,
  // Props legacy para compatibilidad
  onReducerHandle,
  sidebarReduce = false
}: T1ShippingBannerProps) {
  
  const handleNavigate = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(dashboardPath);
  };

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
    }
  };

  // Determinar el estado del botón (legacy vs nuevo)
  const buttonIsReduced = sidebarReduce !== undefined ? sidebarReduce : isReduced;

  return (
    <div className={`flex items-center gap-[13.5px] ${className}`}>
      {!isMobile && (
        <button
          className="bg-transparent cursor-pointer"
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
              />
            ) : (
              <Image
                src={ReduceIcon}
                alt="reduce sidebar"
                width={18}
                height={16}
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
  onNavigate = () => {},
  dashboardPath = '/dashboard',
  brandText = 'envíos'
}: Pick<T1ShippingBannerProps, 'className' | 'onNavigate' | 'dashboardPath' | 'brandText'>) {

  const handleNavigate = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(dashboardPath);
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
        />
      </div>
      <span className="text-[25px] font-medium text-gray-800">
        {brandText}
      </span>
    </button>
  );
}