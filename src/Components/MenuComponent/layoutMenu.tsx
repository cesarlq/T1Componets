import React from 'react';
import {MenuProvider} from './menuContext'
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import useScreenDimensions from '../../hooks/useScreenDimensions';
import { User } from '../../interfaces/menu';

export interface layoutMenuI {
    onStoreChange: () => void;
    onLogout: () => void;
    user?: User | null;
}

function layoutMenu({
    onStoreChange,
    onLogout,
    user
}:layoutMenuI) {
    const { width } = useScreenDimensions();

    return (
        <MenuProvider>
            <Sidebar 
            />
            <Navbar
				shippingBannerTitle="cuenta"
				onStoreChange={onStoreChange}
				isMobile={typeof width === 'number' ? width <= 750 : undefined}
				texts={{
					logout: "Cerrar sesión"
				}}
				onLogout={() => onLogout()}
				user={user}
				onReducerHandle={handleSidebarToggle}
				sidebarReduce={sidebarReduce}
				accountUrl={redirectUrl}
				t1SelectorConfig={{
					paymentBaseUrl: ,
					shippingBaseUrl: ``,
					storeBaseUrl: `${process.env.NEXT_PUBLIC_STORE_URL}?store=${userInfo.storeId}`
				}}
				colorProfile={logoColor}
				iconProfile = {logoUrl != '' ? logoUrl : undefined}
			/>
        </MenuProvider>
    );
}

export default layoutMenu;