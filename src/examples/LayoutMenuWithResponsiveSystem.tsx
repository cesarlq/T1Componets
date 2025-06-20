import React, { useEffect, useRef } from 'react';
import { MenuProvider, useMenu } from '../Components/MenuComponent/menuContext';
import { Sidebar, SidebarPropsI } from '../Components/MenuComponent/Sidebar';
import { Navbar } from '../Components/MenuComponent/Navbar';
import { NavbarPropsI } from '@/interfaces/menu';
import { T1ShippingBanner } from '../Components/MenuComponent/T1ShippingBanner';
import { useMenuResponsive } from '../hooks/useResponsiveDesign';

// Tipo para los estados del menú
export interface MenuState {
    isOpen: boolean;
    isReduced: boolean;
    isMobile: boolean;
    isTablet: boolean;
}

// Callbacks opcionales para escuchar cambios del menú
export interface MenuCallbacks {
    onMenuStateChange?: (state: MenuState) => void;
    onToggleOpen?: (isOpen: boolean) => void;
    onToggleReduced?: (isReduced: boolean) => void;
    onMobileStateChange?: (isMobile: boolean) => void;
}

export interface LayoutMenuWithResponsiveSystemI {
    navBarProps: Omit<NavbarPropsI, 'onReducerHandle' | 'sidebarReduce'>;
    sideBarProps: Omit<SidebarPropsI, 'onToggleOpen' | 'onToggleReduce' | 'isOpen' | 'isReduced'>;
    menuCallbacks?: MenuCallbacks;
    useNewResponsiveSystem?: boolean; // Flag para activar el nuevo sistema
}

function LayoutMenuContent({ 
    navBarProps, 
    sideBarProps, 
    menuCallbacks,
    useNewResponsiveSystem = false 
}: LayoutMenuWithResponsiveSystemI) {
    const isInitialized = useRef(false);
    
    // Usar el nuevo sistema responsivo si está habilitado
    const responsiveSystem = useNewResponsiveSystem ? useMenuResponsive(false) : null;
    
    // Usar el contexto original si no se usa el nuevo sistema
    const menuContext = !useNewResponsiveSystem ? useMenu() : null;

    // Determinar valores finales
    let isOpen, isReduced, isMobile, isTablet, setOpen, setReduced, toggleOpen, toggleReduced;

    if (useNewResponsiveSystem && responsiveSystem) {
        // Usar el nuevo sistema responsivo
        isOpen = true; // El nuevo sistema maneja esto internamente
        isReduced = false; // Se maneja internamente
        isMobile = responsiveSystem.isMobile;
        isTablet = responsiveSystem.isTablet;
        
        // Funciones dummy para compatibilidad
        setOpen = () => {};
        setReduced = () => {};
        toggleOpen = () => {};
        toggleReduced = () => {};
    } else if (menuContext) {
        // Usar el sistema original
        ({ isOpen, isReduced, setOpen, setReduced, toggleOpen, toggleReduced } = menuContext);
        
        // Calcular isMobile e isTablet manualmente para el sistema original
        const [width, setWidth] = React.useState(0);
        
        React.useEffect(() => {
            const handleResize = () => setWidth(window.innerWidth);
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);
        
        isMobile = width <= 750;
        isTablet = width > 750 && width <= 1110;
    } else {
        // Fallback
        isOpen = true;
        isReduced = false;
        isMobile = false;
        isTablet = false;
        setOpen = () => {};
        setReduced = () => {};
        toggleOpen = () => {};
        toggleReduced = () => {};
    }

    // Callbacks para el sistema original
    useEffect(() => {
        if (useNewResponsiveSystem || !menuCallbacks) return;

        if (menuCallbacks?.onMenuStateChange) {
            menuCallbacks.onMenuStateChange({
                isOpen,
                isReduced,
                isMobile: Boolean(isMobile),
                isTablet: Boolean(isTablet)
            });
        }
    }, [isOpen, isReduced, isMobile, isTablet, menuCallbacks, useNewResponsiveSystem]);

    useEffect(() => {
        if (useNewResponsiveSystem || !menuCallbacks?.onToggleOpen) return;
        menuCallbacks.onToggleOpen(isOpen);
    }, [isOpen, menuCallbacks, useNewResponsiveSystem]);

    useEffect(() => {
        if (useNewResponsiveSystem || !menuCallbacks?.onToggleReduced) return;
        menuCallbacks.onToggleReduced(isReduced);
    }, [isReduced, menuCallbacks, useNewResponsiveSystem]);

    useEffect(() => {
        if (useNewResponsiveSystem || !menuCallbacks?.onMobileStateChange) return;
        menuCallbacks.onMobileStateChange(Boolean(isMobile));
    }, [isMobile, menuCallbacks, useNewResponsiveSystem]);

    // Inicialización para el sistema original
    useEffect(() => {
        if (useNewResponsiveSystem) return; // Skip para el nuevo sistema
        
        const width = window.innerWidth;
        if (width > 0 && !isInitialized.current) {
            if (isMobile) {
                setOpen(false);
                setReduced(false);
            } else if (isTablet) {
                setOpen(true);
                setReduced(true);
            } else {
                setOpen(true);
                setReduced(false);
            }
            
            isInitialized.current = true;
        }
    }, [isMobile, isTablet, setOpen, setReduced, useNewResponsiveSystem]);

    // Handler para el contexto (solo para pasar al navbar/banner como callback)
    const handleReducerHandle = () => {
        if (useNewResponsiveSystem) {
            // En el nuevo sistema, esto se maneja internamente
            return;
        }
        
        if (isMobile) {
            toggleOpen();
        } else {
            toggleReduced();
        }
    };

    // Banner personalizado para móvil
    const MockTopBanner: React.ComponentType<{ className?: string }> = ({ className }) => (
        <div className={className + ' mt-[0.75rem] '}>
            <T1ShippingBanner
                brandText={sideBarProps.shippingBannerTitle}
                isMobile={Boolean(isMobile)}
                isReduced={isReduced}
                isOpen={isOpen}
                onToggleReduce={toggleReduced}
                onToggleOpen={toggleOpen}
                // Props legacy para compatibilidad
                onReducerHandle={handleReducerHandle}
                sidebarReduce={isReduced}
            />
        </div>
    );

    return (
        <>
            <Sidebar
                {...sideBarProps}
                className='pt-4'
                TopBanner={isMobile ? MockTopBanner : sideBarProps.TopBanner}
                
                // Configuración del nuevo sistema responsivo
                useResponsiveSystem={useNewResponsiveSystem}
                
                // Pasar estados del contexto como override (solo para sistema original)
                {...(!useNewResponsiveSystem && {
                    isReduced,
                    isOpen,
                    isMobile: Boolean(isMobile),
                    onToggleOpen: setOpen,
                    onToggleReduce: setReduced,
                })}
                
                // Configuración responsive (para sistema original)
                breakpointMobile={750}
                breakpointReduce={1110}
            />
            
            <Navbar
                {...navBarProps}
                shippingBannerTitle={navBarProps.shippingBannerTitle}
                {...(!useNewResponsiveSystem && {
                    isMobile: Boolean(isMobile),
                    sidebarReduce: isReduced,
                })}
                texts={{
                    logout: "Cerrar sesión",
                    ...navBarProps.texts
                }}
                // Solo pasar como callback para compatibilidad
                onReducerHandle={handleReducerHandle}
            />
        </>
    );
}

// Componente principal que provee el contexto
function LayoutMenuWithResponsiveSystem({ 
    navBarProps, 
    sideBarProps, 
    menuCallbacks,
    useNewResponsiveSystem = false 
}: LayoutMenuWithResponsiveSystemI) {

    if (useNewResponsiveSystem) {
        // No necesitamos MenuProvider para el nuevo sistema
        return (
            <LayoutMenuContent 
                navBarProps={navBarProps} 
                sideBarProps={sideBarProps}
                menuCallbacks={menuCallbacks}
                useNewResponsiveSystem={useNewResponsiveSystem}
            />
        );
    }

    // Usar MenuProvider para el sistema original
    return (
        <MenuProvider>
            <LayoutMenuContent 
                navBarProps={navBarProps} 
                sideBarProps={sideBarProps}
                menuCallbacks={menuCallbacks}
                useNewResponsiveSystem={useNewResponsiveSystem}
            />
        </MenuProvider>
    );
}

export default LayoutMenuWithResponsiveSystem;
