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
  onReducerHandle: () => void;
  sidebarReduce: boolean;
}

export function T1ShippingBanner({
  className = '',
  onNavigate = () => {},
  dashboardPath = '/dashboard',
  brandText = 'envíos',
  onReducerHandle,
  sidebarReduce
}: T1ShippingBannerProps) {
  const handleNavigate = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(dashboardPath);
  };

  return (
    <div className={`flex items-center gap-[13.5px] ${className}`}>
      <button
        className="bg-transparent cursor-pointer"
        onClick={onReducerHandle} // Usa directamente el handler proporcionado
        type="button"
        aria-label={sidebarReduce ? "Expandir sidebar" : "Reducir sidebar"}
      >
        <div>
          {sidebarReduce ? (
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