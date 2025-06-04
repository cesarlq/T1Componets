import React, { useEffect, useRef } from 'react';
import { MenuProvider, useMenu } from './menuContext';
import { Sidebar, SidebarPropsI } from './Sidebar';
import { Navbar } from './Navbar';
import useScreenDimensions from '../../hooks/useScreenDimensions';
import { NavbarPropsI } from '../../interfaces/menu';
import { T1ShippingBanner } from './T1ShippingBanner';

export interface layoutMenuI {
    navBarProps: Omit<NavbarPropsI, 'onReducerHandle' | 'sidebarReduce'>;
    sideBarProps: Omit<SidebarPropsI, 'onToggleOpen' | 'onToggleReduce' | 'isOpen' | 'isReduced'>;
}

function LayoutMenuContent({ navBarProps, sideBarProps }: layoutMenuI) {
    const { width } = useScreenDimensions();
    const isMobile = width && width <= 750;
    const isTablet = width && width > 750 && width <= 1110;
    const isInitialized = useRef(false);
    
    const { isOpen, isReduced, setOpen, setReduced, toggleOpen, toggleReduced } = useMenu();

    // Inicialización responsive
    useEffect(() => {
        if (width && width > 0 && !isInitialized.current) {
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
    }, [width, isMobile, isTablet, setOpen, setReduced]);

    // Handler para el contexto (solo para pasar al navbar/banner como callback)
    const handleReducerHandle = () => {
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
                
                // Pasar estados del contexto como override
                isReduced={isReduced}
                isOpen={isOpen}
                isMobile={Boolean(isMobile)}
                onToggleOpen={setOpen}
                onToggleReduce={setReduced}
                
                // Configuración responsive
                breakpointMobile={750}
                breakpointReduce={1110}
            />
            
            <Navbar
                {...navBarProps}
                shippingBannerTitle={navBarProps.shippingBannerTitle}
                isMobile={Boolean(isMobile)}
                texts={{
                    logout: "Cerrar sesión",
                    ...navBarProps.texts
                }}
                // Solo pasar como callback para compatibilidad
                onReducerHandle={handleReducerHandle}
                sidebarReduce={isReduced}
            />
        </>
    );
}

// Componente principal que provee el contexto
function LayoutMenu({ navBarProps, sideBarProps }: layoutMenuI) {
    return (
        <MenuProvider>
            <LayoutMenuContent 
                navBarProps={navBarProps} 
                sideBarProps={sideBarProps} 
            />
        </MenuProvider>
    );
}

export default LayoutMenu;