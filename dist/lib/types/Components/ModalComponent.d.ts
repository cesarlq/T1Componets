import React, { ReactNode, JSX } from 'react';
/**
 * Interfaz para cada opción del menú
 */
export interface MenuOption {
    id: number;
    label: string;
    icon: string;
    value: number;
    component: ReactNode;
}
/**
 * Props para el componente principal ProfileComponent
 */
export interface ProfileComponentProps {
    title: string;
    onClose: () => void;
    menuOptions: MenuOption[];
    closeIcon?: ReactNode;
    iconComponent: (props: {
        icon: string;
        width: number;
        height: number;
    }) => JSX.Element;
    className?: {
        mainContainer?: string;
        headerProfile?: string;
        btnClose?: string;
        sectionProfile?: string;
        containerLeft?: string;
        paper?: string;
        listItemText?: string;
        menuItem?: string;
        menuItemSelected?: string;
    };
    styles?: {
        mainContainer?: React.CSSProperties;
        headerProfile?: React.CSSProperties;
        sectionProfile?: React.CSSProperties;
        contentContainer?: React.CSSProperties;
    };
}
/**
 * Componente de Perfil Reutilizable
 */
declare const ModalComponent: React.FC<ProfileComponentProps>;
export default ModalComponent;
