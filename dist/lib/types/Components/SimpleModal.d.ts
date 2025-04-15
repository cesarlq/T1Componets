import React, { ReactNode } from 'react';
/**
 * Props para el componente SimpleModalComponent
 */
export interface SimpleModalProps {
    title: string;
    onClose: () => void;
    children: ReactNode;
    closeIcon?: ReactNode;
    className?: {
        mainContainer?: string;
        headerProfile?: string;
        btnClose?: string;
        contentContainer?: string;
    };
    styles?: {
        mainContainer?: React.CSSProperties;
        headerProfile?: React.CSSProperties;
        contentContainer?: React.CSSProperties;
    };
}
/**
 * Componente Modal Simple - Sin menú lateral
 * Versión simplificada que solo muestra un título, botón de cierre y contenido
 */
declare const SimpleModalComponent: React.FC<SimpleModalProps>;
export default SimpleModalComponent;
