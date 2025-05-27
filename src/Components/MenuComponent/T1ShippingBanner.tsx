import React from 'react';
import Image from "next/image";
import { useLayoutOptional } from './LayoutProvider';
import T1Logo from '../../assets/T1.svg';
import ReduceIcon from '../../assets/reduce-icon.svg';
import EnlargeIcon from '../../assets/enlarge-icon.svg';

export interface T1ShippingBannerProps {
  className?: string;
  onNavigate?: (path: string) => void;
  dashboardPath?: string;
  // Solo se puede personalizar el texto de la marca
  brandText?: string;
  // Props para comportamiento (opcional - si no se pasa, usa LayoutProvider)
  onReduceToggle?: () => void;
  // Estados externos (si no usas LayoutProvider)
  isReduced?: boolean;
}

export function T1ShippingBanner({
  className = '',
  onNavigate = () => {},
  dashboardPath = '/dashboard',
  brandText = 'envíos',
  onReduceToggle,
  isReduced: externalIsReduced
}: T1ShippingBannerProps) {
  
  // Intentar usar el contexto, pero permitir uso sin él
  const layoutContext = useLayoutOptional();
  
  // Determinar el estado de reducción
  const isReduced = externalIsReduced !== undefined 
    ? externalIsReduced 
    : layoutContext?.state.sidebarReduce || false;

  const handleReduceToggle = () => {
    console.log('🔄 T1ShippingBanner handleReduceToggle clicked'); // DEBUG
    if (onReduceToggle) {
      // Usar callback personalizado
      console.log('📞 Using custom onReduceToggle'); // DEBUG
      onReduceToggle();
    } else if (layoutContext) {
      // Usar el contexto si está disponible
      console.log('🎯 Using layoutContext.toggleSidebarReduce'); // DEBUG
      layoutContext.toggleSidebarReduce();
    } else {
      console.warn('T1ShippingBanner: No reduce handler available. Provide onReduceToggle prop or wrap with LayoutProvider.');
    }
  };


  const handleNavigate = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(dashboardPath);
  };

  return (
    <div className={`flex items-center gap-[13.5px] ${className}`}>
      {/* Botón de reducir/expandir - ICONOS FIJOS */}
      <button
        className="bg-transparent cursor-pointer" // DEBUG: Super visible
        onClick={handleReduceToggle}
        type="button"
        aria-label={isReduced ? "Expandir sidebar" : "Reducir sidebar"}
      >
        <div>
          {isReduced ? (
            // Icono de expandir
            EnlargeIcon && (
                <Image
                  src={EnlargeIcon}
                  alt="expand sidebar"
                  width={18}
                  height={16}
                />
            ) 
          ) : (
            // Icono de reducir
            ReduceIcon && (
                <Image
                  src={ReduceIcon}
                  alt="reduce sidebar"
                  width={18}
                  height={16}
                />
            ) 
          )}
        </div>
        
      </button>
      
      {/* Logo y texto clickeable - LOGO FIJO */}
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
        <img 
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