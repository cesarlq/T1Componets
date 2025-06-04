import React, { useEffect, useRef } from 'react';
import { MenuProvider, useMenu } from './menuContext';
import { MenuPath, Sidebar, SidebarPropsI } from './Sidebar';
import { Navbar } from './Navbar';
import useScreenDimensions from '../../hooks/useScreenDimensions';
import { NavbarPropsI, User } from '../../interfaces/menu';
import { T1ShippingBanner } from './T1ShippingBanner';

export interface layoutMenuI {
    navBarProps: Omit<NavbarPropsI, 'onReducerHandle' | 'sidebarReduce'>;
    sideBarProps: Omit<SidebarPropsI, 'onToggleOpen' | 'onToggleReduce' | 'isOpen' | 'isReduced'>;
}

// Componente interno que usa el contexto
function LayoutMenuContent({ navBarProps, sideBarProps }: layoutMenuI) {
    const { width } = useScreenDimensions();
    const isMobile = width && width <= 750;
    const isTablet = width && width > 750 && width <= 1110;
    const isInitialized = useRef(false);
    
    const { isOpen, isReduced, setOpen, setReduced, toggleOpen, toggleReduced } = useMenu();

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

    const handleReducerHandle = () => {
        
        if (isMobile) {
            console.log('📱 Móvil: toggleando overlay');
            toggleOpen();
        } else {
            console.log('💻 Desktop: toggleando reduce');
            toggleReduced();
        }
    };

    const handleToggleOpen = (newIsOpen: boolean) => {
        setOpen(newIsOpen);
    };

    const handleToggleReduce = (newIsReduced: boolean) => {
        setReduced(newIsReduced);
    };

    const MockTopBanner: React.ComponentType<{ className?: string }> = ({ className }) => (
        <div className={className + ' mt-[0.75rem] '}>
            <T1ShippingBanner
                onReducerHandle={handleReducerHandle}
                sidebarReduce={isReduced}
                brandText={"cuenta"}
                isMobile={Boolean(isMobile)}
                onToggleReduce={toggleReduced}
                onToggleOpen={toggleOpen}
                isReduced={isReduced}
                isOpen={isOpen}
            />
        </div>
    );

    return (
        <>
            <Sidebar
                {...sideBarProps}
                className='pt-4'
                TopBanner={isMobile ? MockTopBanner : sideBarProps.TopBanner}
                
                // 🔥 CONTROL EXTERNO TOTAL
                useExternalControl={true}
                isReduced={isReduced}
                isOpen={isOpen}
                onToggleOpen={handleToggleOpen}
                onToggleReduce={handleToggleReduce}
                
                // Props de configuración
                isMobile={Boolean(isMobile)}
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