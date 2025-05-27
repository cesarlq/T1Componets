import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import GridIcon from '../../assets/menus/grid-icon.svg';
import T1Logo from '../../assets/T1.svg';
import Store from '../../assets/menus/t1-selector/store.svg';
import Shipping from '../../assets/menus/t1-selector/shipping.svg';
import Pay from '../../assets/menus/t1-selector/pay.svg';
import CloseButtonT1 from '../CloseButtonT1';
import styles from '../../styles/common/T1Selector.module.scss';

export interface T1SelectorProps {
  className?: string;
  // URLs base para construir links
  storeBaseUrl?: string;
  shippingBaseUrl?: string;
  paymentBaseUrl?: string;
  // ID del usuario/tienda para construir URLs
  storeId?: string;
  // Configuración visual
  ecosystemTitle?: string;
}

export function T1Selector({
  className = '',
  storeBaseUrl = '',
  shippingBaseUrl = '',
  paymentBaseUrl = '',
  storeId = '',
  ecosystemTitle = 'Ecosistema'
}: T1SelectorProps) {
  
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Menu items fijos - no configurables
  const menuItems = [
    {
      icon: Store,
      label: 'Tienda',
      href: storeBaseUrl && storeId ? `${storeBaseUrl}${storeId}` : undefined
    },
    {
      icon: Shipping,
      label: 'Envíos',
      isActive: true // Siempre activo porque es el actual
    },
    {
      icon: Pay,
      label: 'Pagos',
      href: paymentBaseUrl && storeId ? `${paymentBaseUrl}${storeId}` : undefined
    }
  ];

  // Click outside para cerrar
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className={`${styles.container} ${className}`}>
      {/* Botón para abrir/cerrar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.triggerButton}
        type="button"
        aria-label="Abrir selector T1"
        aria-expanded={isOpen}
      >
        <Image
          src={GridIcon}
          alt='grid'
          width={17}
          height={17}
        />
      </button>
      
      {/* Modal */}
      <div
        className={`${styles.modal} ${isOpen ? styles.modalOpen : styles.modalClosed}`}
        ref={ref}
      >
        {/* Botón cerrar en móvil */}
        <CloseButtonT1
          className={styles.closeButton}
          onClick={() => setIsOpen(false)}
        />

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.ecosystemTitle}>{ecosystemTitle}</span>
          <div className={styles.t1Logo}><Image src={T1Logo} alt="T1 Logo" width={23} height={23} /></div>
        </div>
        
        {/* Menu Items */}
        <div className={styles.menuItems}>
          {menuItems.map((item, index) => {
            const content = (
              <>
                <div className={styles.iconContainer}>
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={24}
                    height={24}
                  />
                </div>
                <span className={`${styles.itemLabel} `}>
                  {item.label}
                </span>
              </>
            );

            // Si tiene href, es un link externo
            if (item.href) {
              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.menuItem}
                >
                  {content}
                </a>
              );
            } else {
              // Sin href, solo visual (como "Envíos" que está activo)
              return (
                <div
                  key={index}
                  className={styles.menuItem}
                >
                  {content}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}