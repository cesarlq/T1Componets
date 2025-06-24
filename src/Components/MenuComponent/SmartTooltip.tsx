import React, { useState, useEffect, useRef } from 'react';
import styles from '../../styles/common/ItemLink.module.scss';

interface SmartTooltipProps {
  content: string;
  show: boolean;
  delay?: number;
  position?: 'right' | 'left' | 'top' | 'bottom';
  className?: string;
}

export const SmartTooltip: React.FC<SmartTooltipProps> = ({
  content,
  show,
  delay = 800,
  position = 'right',
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (show) {
      // Delay antes de mostrar
      timeoutRef.current = setTimeout(() => {
        setShouldRender(true);
        // Pequeño delay adicional para la animación
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      }, delay);
    } else {
      // Ocultar inmediatamente
      setIsVisible(false);
      // Remover del DOM después de la animación
      setTimeout(() => {
        setShouldRender(false);
      }, 150);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [show, delay]);

  if (!shouldRender) return null;

  return (
    <div
      className={`${styles.tooltip} ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translateY(-50%) scale(${isVisible ? 1 : 0.9})`,
        transition: 'opacity 150ms ease, transform 150ms ease',
        pointerEvents: 'none'
      }}
      role="tooltip"
      aria-hidden={!isVisible}
    >
      <div className={styles.tooltipArrow} />
      <div className={styles.tooltipContent}>
        {content}
      </div>
    </div>
  );
};

export default SmartTooltip;
