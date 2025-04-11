import React from 'react';
interface SidebarProps {
    testMode?: boolean;
    className?: string;
    logoFull: string;
    logoReduced: string;
    servicePaths?: ServiceOption[];
    menuItems: MenuItem[];
    initialReduceState?: boolean;
    breakpointWidth?: number;
    userInfo?: any;
    onServiceOptionClick?: (option: ServiceOption) => void;
    onSidebarReduceChange?: (reduced: boolean) => void;
    onClickMenuItem?: (item: MenuItem, index: number) => void;
    customStyles?: {
        sidebar?: React.CSSProperties;
        header?: React.CSSProperties;
        logo?: React.CSSProperties;
        submenu?: React.CSSProperties;
        paths?: React.CSSProperties;
        buttonReduce?: React.CSSProperties;
    };
}
interface ServiceOption {
    name: string;
    icon: string;
    type: string;
    width?: number;
    iconReduced?: string;
}
interface MenuItem {
    id: string;
    title: string;
    path?: string;
    icon?: string;
    subItems?: SubMenuItem[];
    hidden?: boolean;
}
interface SubMenuItem {
    id: string;
    title: string;
    path: string;
    hidden?: boolean;
}
declare const Sidebar: React.FC<SidebarProps>;
export default Sidebar;
