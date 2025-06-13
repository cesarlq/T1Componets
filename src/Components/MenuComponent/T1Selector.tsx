import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import GridIcon from '../../assets/menus/grid-icon.svg';
import T1Logo from '../../assets/T1.svg';
import Store from '../../assets/menus/t1-selector/store.svg';
import Shipping from '../../assets/menus/t1-selector/shipping.svg';
import Pay from '../../assets/menus/t1-selector/pay.svg';
import CloseButtonT1 from '../CloseButtonT1';
import styles from '../../styles/common/T1Selector.module.scss';

// Tipo para identificar los items
export type T1ItemType = 'store' | 'shipping' | 'payment';

export interface T1SelectorProps {
  className?: string;
  // URLs base para construir links
  storeBaseUrl?: string;
  shippingBaseUrl?: string;
  paymentBaseUrl?: string;

  // Configuración de qué se muestra
  shipping?: boolean;
  payment?: boolean;
  store?: boolean;
  
  // ID del usuario/tienda para construir URLs
  storeId?: string;
  
  // Configuración visual
  ecosystemTitle?: string;
  
  // NUEVO: Orden de los items
  itemsOrder?: ('store' | 'shipping' | 'payment')[];
}

export function T1Selector({
  className = '',
  storeBaseUrl = '',
  shippingBaseUrl = '',
  paymentBaseUrl = '',
  shipping = true,
  payment = true,
  store = true,
  ecosystemTitle = 'Ecosistema',
  itemsOrder = ['store', 'shipping', 'payment'] // Orden por defecto
}: T1SelectorProps) {
  
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Mapa de items con su configuración
  const itemsMap: Record<T1ItemType, {
    isActive: boolean;
    icon: any;
    label: string;
    href: string | undefined;
  }> = {
    store: {
      isActive: store,
      icon: Store,
      label: 'Tienda',
      href: storeBaseUrl ? `${storeBaseUrl}` : undefined
    },
    shipping: {
      isActive: shipping,
      icon: Shipping,
      label: 'Envíos',
      href: shippingBaseUrl ? `${shippingBaseUrl}` : undefined
    },
    payment: {
      isActive: payment,
      icon: Pay,
      label: 'Pagos',
      href: paymentBaseUrl ? `${paymentBaseUrl}` : undefined
    }
  };

  // Ordenar los items según itemsOrder
  const orderedMenuItems = itemsOrder
    .filter(itemType => itemsMap[itemType] && itemsMap[itemType].isActive)
    .map(itemType => ({
      type: itemType,
      ...itemsMap[itemType]
    }));

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
      {/* Overlay for mobile */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : styles.overlayHidden}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      
      {/* Botón para abrir/cerrar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.triggerButton}
        type="button"
        aria-label="Abrir selector T1"
        aria-expanded={isOpen}
      >
        <GridIcon
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
          <div className={styles.t1Logo}><T1Logo width={23} height={23} /></div>
        </div>
        
        {/* Menu Items */}
        <div className={styles.menuItems}>
          {orderedMenuItems.map((item, index) => {
            const content = (
              <>
                <div className={styles.iconContainer}>
                  <item.icon 
                    width={56}
                    height={56}
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
                  key={`${item.type}-${index}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.menuItem}
                >
                  {content}
                </a>
              );
            } else {
              // Sin href, solo visual
              return (
                <div
                  key={`${item.type}-${index}`}
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
