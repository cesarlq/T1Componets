import React, { useState } from 'react';
import { StoreSelector } from './StoreSelector';
import { T1ShippingBanner } from './T1ShippingBanner';
import { NavbarPropsI } from '../../interfaces/menu';
import styles from '../../styles/common/Navbar.module.scss';
import { T1Selector } from './T1Selector';
import { MenuProfile } from './Profile';
import TextFieldAndButton from './TextFieldAndButton';
import T1Icon from '../T1Icon';

export function Navbar({
  className = '',
  showInfoBand = false,
  showBalance = false,
  showSearchInput = false,
  user = null,
  stores = [],
  currentStore,
  shippingBannerTitle = 'envíos',
  
  // Configuración de items del menú
  profileMenuItems,
  
  // Component slots
  BalanceBanner = ({ className }) => <div className={className}>Balance Banner</div>,
  
  // Configuration
  searchPlaceholder = 'Número de rastreo',
  trackingUrl = '',
  accountUrl = '',
  t1SelectorConfig = {},
  texts = {
    logout: 'Cerrar sesión',
    searchPlaceholder: 'Número de rastreo'
  },

  // Profile Configuration
  iconProfile,
  colorProfile,

  // Props opcionales para override externo (compatibilidad)
  onLogout,
  onSearch,
  onStoreChange,
  onNavigate,
  onReducerHandle,
  sidebarReduce,
  isMobile
}: NavbarPropsI) {

  const [profileAnchor, setProfileAnchor] = useState<null | HTMLElement>(null);
  const profileOpen = Boolean(profileAnchor);

  // Handler interno para búsqueda
  const handleSearch = (data: { search: string }) => {
    if (trackingUrl) {
      window.open(`${trackingUrl}=${data.search}`, '_blank');
    }
    // Llamar callback externo si existe
    onSearch?.(data);
  };

  // Handler interno para cambio de tienda
  const handleStoreChange = (storeId: number) => {
    // Lógica interna de cambio de tienda si es necesario
    console.log('Cambiando a tienda:', storeId);
    
    // Llamar callback externo
    onStoreChange?.(storeId);
  };

  // Handler interno para navegación
  const handleNavigation = (path: string) => {
    // Lógica interna de navegación si es necesario
    console.log('Navegando a:', path);
    
    // Llamar callback externo
    onNavigate?.(path);
  };

  // Handler interno para logout
  const handleLogout = () => {
    // Lógica interna de logout si es necesario
    console.log('Cerrando sesión...');
    
    // Llamar callback externo
    onLogout?.();
  };

  // Handler interno para toggle del menú
  const handleMenuToggle = () => {
    // Lógica interna si es necesario
    console.log('Toggle menu');
    
    // Llamar callback externo si existe
    onReducerHandle?.();
  };

  return (
    <nav
      className={`${className} ${styles.container}`}
      data-show-info-band={showInfoBand}
    >
      <div className={styles['navbar-left-section']}>
        <button
          className={styles['menu-toggle-button']}
          onClick={handleMenuToggle}
          type="button"
          aria-label="Toggle menu"
        >
          <T1Icon 
            icon="menuInActive" 
            className={styles['menu-icon']} 
            width={18} 
            height={16} 
          />
        </button>
        
        <T1ShippingBanner
          className={styles['Banner-section']}
          onNavigate={handleNavigation}
          brandText={shippingBannerTitle}
          isMobile={Boolean(isMobile)}
          // Props legacy para compatibilidad
          onReducerHandle={handleMenuToggle}
          sidebarReduce={sidebarReduce}
        />
        
        <StoreSelector 
          className={styles['store-selector-desktop']}
          stores={stores}
          currentStore={currentStore}
          onStoreChange={handleStoreChange}
          createStoreUrl={accountUrl}      
        />
      </div>
      
      {showSearchInput && (
        <TextFieldAndButton
          onSubmit={handleSearch}
          textFieldClassName={styles.search}
          className={styles['search-section']}
          textFieldProps={{
            placeholder: texts.searchPlaceholder || searchPlaceholder,
          }}
        />
      )}
      
      <div className={styles['user-info-container']}>
        {showBalance && (
          <BalanceBanner className={styles['balance-banner-desktop']} />
        )}
        
        {t1SelectorConfig && 
          <T1Selector 
            className={className}
            storeId={user?.storeId?.toString() || ''}
            storeBaseUrl={t1SelectorConfig?.storeBaseUrl || ''}
            shippingBaseUrl={t1SelectorConfig?.shippingBaseUrl || ''}
            paymentBaseUrl={t1SelectorConfig?.paymentBaseUrl || ''}
            ecosystemTitle={t1SelectorConfig?.ecosystemTitle || 'Ecosistema'}
          />
        }
        
        <StoreSelector 
          className={styles['store-selector-mobile']}
          stores={stores}
          currentStore={currentStore}
          onStoreChange={handleStoreChange}
          createStoreUrl={accountUrl}        
        />
        
        {user && user.name && (
          <MenuProfile
            profileOpen={profileOpen}
            user={user}
            profileMenuItems={profileMenuItems}
            onLogout={handleLogout}
            textLogOut={texts.logout}
            onNavigate={handleNavigation}
            iconProfile={iconProfile}
            colorProfile={colorProfile}
          />
        )}
      </div>
    </nav>
  );
}