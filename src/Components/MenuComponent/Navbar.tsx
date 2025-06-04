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
  
  // Event handlers
  onLogout = () => {},
  onSearch = () => {},
  onStoreChange = () => {},
  onNavigate = () => {},
  onReducerHandle = () => {},
  sidebarReduce = false,
  isMobile = false,
  
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

  //profile Configuration
  iconProfile,
  colorProfile
}: NavbarPropsI) {

  const [profileAnchor, setProfileAnchor] = useState<null | HTMLElement>(null);
  const profileOpen = Boolean(profileAnchor);

  const handleSearch = (data: { search: string }) => {
    if (trackingUrl) {
      window.open(`${trackingUrl}=${data.search}`, '_blank');
    }
    onSearch(data);
  };


  return (
    <nav
      className={`${className} ${styles.container}`}
      data-show-info-band={showInfoBand}
    >
      <div className={`${styles['navbar-left-section']} flex items-center gap-4`}>
        <button
          className={`${styles['menu-toggle-button']} block lg:hidden`}
          onClick={onReducerHandle}
          type="button"
          aria-label="Toggle menu"
        >
          <T1Icon icon="menuInActive" className='min-w-[18px] min-h-[16px]' width={18} height={16} />
        </button>
        <T1ShippingBanner
          className={`${styles['Banner-section']}`}
          onReducerHandle={onReducerHandle}
          sidebarReduce={sidebarReduce}
          brandText={shippingBannerTitle}
          onNavigate={onNavigate}
          isMobile={isMobile}
        />
        
        <StoreSelector 
          className={`${styles['store-selector-desktop']} hidden lg:flex`}
          stores={stores}
          currentStore={currentStore}
          onStoreChange={onStoreChange} 
          createStoreUrl={accountUrl}      
        />
      </div>
      
      {showSearchInput && (
        <TextFieldAndButton
          onSubmit={handleSearch}
          textFieldClassName={styles.search}
          className={`${styles['search-section']} hidden lg:block`}
          textFieldProps={{
            placeholder: texts.searchPlaceholder || searchPlaceholder,
          }}
        />
      )}
      
      <div className={`${styles['user-info-container']} flex items-center gap-3`}>
        {showBalance && (
          <BalanceBanner className={`${styles['balance-banner-desktop']} hidden lg:flex`} />
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
          className={`${styles['store-selector-mobile']} flex lg:hidden`}
          stores={stores}
          currentStore={currentStore}
          onStoreChange={onStoreChange} 
          createStoreUrl={accountUrl}        
        />
        
        {user && user.name && (
          <>
            <MenuProfile
              profileOpen={profileOpen}
              user={user}
              profileMenuItems={profileMenuItems}
              onLogout={onLogout}
              textLogOut={texts.logout}
              onNavigate={onNavigate}
              iconProfile={iconProfile}
              colorProfile={colorProfile}
            />
          </>
        )}
      </div>
    </nav>
  );
}