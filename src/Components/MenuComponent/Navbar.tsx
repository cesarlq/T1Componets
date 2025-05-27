import React, { useState } from 'react';
import { IconButton, ListItemText, Menu, MenuItem as MuiMenuItem } from '@mui/material';
import { StoreSelector } from './StoreSelector';
import { T1ShippingBanner } from './T1ShippingBanner';
import { BalanceBanner } from './BalanceBanner';
import { useLayout } from './LayoutProvider';
import { User, Store } from '../../interfaces/menu';
import styles from '../../styles/common/Navbar.module.scss';
import { T1Selector } from './T1Selector';
import { Profile } from './Profile';
import TextFieldAndButton from './TextFieldAndButton';
import T1Icon from '../T1Icon';

export interface NavbarProps {
  className?: string;
  showInfoBand?: boolean;
  showSearchInput?: boolean;
  showBalance?: boolean;
  user?: User | null;
  stores?: Store[];
  currentStore?: Store;
  
  // Event handlers
  onLogout?: () => void;
  onSearch?: (data: { search: string }) => void;
  onManageAccount?: (user: User) => void;
  onStoreChange?: (storeId: number) => void;
  onNavigate?: (path: string) => void;
  
  // Component slots
  BalanceBanner?: React.ComponentType<{ className?: string }>;
  T1Selector?: React.ComponentType<any>;
  SearchComponent?: React.ComponentType<any>;
  MenuIcon?: React.ReactNode;
  
  // Configuration for T1Selector
  t1SelectorConfig?: {
    storeBaseUrl?: string;
    shippingBaseUrl?: string;
    paymentBaseUrl?: string;
    ecosystemTitle?: string;
    menuItems?: Array<{
      icon: string | React.ReactNode;
      label: string;
      href?: string;
      onClick?: () => void;
      target?: '_blank' | '_self';
      isActive?: boolean;
    }>;
  };
  
  // Configuration
  searchPlaceholder?: string;
  trackingUrl?: string;
  accountUrl?: string;
  texts?: {
    manageAccount?: string;
    logout?: string;
    searchPlaceholder?: string;
  };
}

export function Navbar({
  className = '',
  showInfoBand = false,
  showBalance = false,
  showSearchInput = false,
  user = null,
  stores = [],
  currentStore,
  
  // Event handlers
  onLogout = () => {},
  onSearch = () => {},
  onManageAccount = () => {},
  onStoreChange = () => {},
  onNavigate = () => {},
  
  // Component slots
  BalanceBanner = ({ className }) => <div className={className}>Balance Banner</div>,
  SearchComponent = ({ onSubmit, textFieldProps, className }) => (
    <div className={className}>
      <input
        {...textFieldProps}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            onSubmit({ search: (e.target as HTMLInputElement).value });
          }
        }}
      />
    </div>
  ),
  
  // Configuration
  searchPlaceholder = 'Número de rastreo',
  trackingUrl = '',
  accountUrl = '',
  t1SelectorConfig = {},
  texts = {
    manageAccount: 'Gestionar cuenta',
    logout: 'Cerrar sesión',
    searchPlaceholder: 'Número de rastreo'
  }
}: NavbarProps) {
  
  const { state, setSidebarOpen } = useLayout();
  const [profileAnchor, setProfileAnchor] = useState<null | HTMLElement>(null);
  const profileOpen = Boolean(profileAnchor);

  const handleLogout = () => {
    handleProfileClose();
    onLogout();
  };

  const handleProfileClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setProfileAnchor(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchor(null);
  };

  const handleSearch = (data: { search: string }) => {
    if (trackingUrl) {
      window.open(`${trackingUrl}=${data.search}`, '_blank');
    }
    onSearch(data);
  };

  const handleManageAccount = () => {
    if (user) {
      if (accountUrl && user.storeId) {
        window.open(`${accountUrl}${user.storeId}`, '_blank');
      }
      onManageAccount(user);
    }
  };

  const handleMenuToggle = () => {
    setSidebarOpen(!state.sidebarOpen);
  };

  return (
    <nav
      className={`${className} ${styles.container}`}
      data-show-info-band={showInfoBand}
    >
      <div className={`${styles['navbar-left-section']} flex items-center gap-4`}>
        <button
          className={`${styles['menu-toggle-button']} block lg:hidden`}
          onClick={handleMenuToggle}
          type="button"
          aria-label="Toggle menu"
        >
          {/* Usar T1Icon en lugar del import directo */}
          <T1Icon icon="menuInActive" width={18} height={16} />
        </button>
         <T1ShippingBanner
          brandText="envios"
          onNavigate={(path) => console.log('Navigate to:', path)}
        />
        <StoreSelector 
          className={`${styles['store-selector-desktop']} hidden lg:flex`}
          stores={stores}
          currentStore={currentStore}
          onStoreChange={onStoreChange} 
          createStoreUrl={''}       
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
        
        <T1Selector 
          className={className}
          storeId={user?.storeId?.toString() || ''}
          storeBaseUrl={t1SelectorConfig?.storeBaseUrl || ''}
          shippingBaseUrl={t1SelectorConfig?.shippingBaseUrl || ''}
          paymentBaseUrl={t1SelectorConfig?.paymentBaseUrl || ''}
          ecosystemTitle={t1SelectorConfig?.ecosystemTitle || 'Ecosistema'}
        />
        
        <StoreSelector 
          className={`${styles['store-selector-mobile']} flex lg:hidden`}
          stores={stores}
          currentStore={currentStore}
          onStoreChange={onStoreChange} 
          createStoreUrl={''}        
        />
        
        {user && user.name && (
          <>
            <IconButton
              id="profile-button"
              aria-controls={profileOpen ? 'profile-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={profileOpen ? 'true' : undefined}
              onClick={handleProfileClick}
              className={styles['first-letter']}
            >
              {user.name[0].toUpperCase()}
            </IconButton>
            <Menu
              id="profile-menu"
              anchorEl={profileAnchor}
              open={profileOpen}
              onClose={handleProfileClose}
              MenuListProps={{
                'aria-labelledby': 'profile-button',
              }}
            >
              <Profile
                email={user.email}
                name={user.name}
              />
              <MuiMenuItem 
                onClick={() => {
                  if (accountUrl && user.storeId) {
                    window.open(`${accountUrl}${user.storeId}`, '_blank');
                  }
                  handleManageAccount();
                }} 
                id='manage-account' 
                sx={{ paddingLeft: '24px' }}
              >
                <ListItemText primary={texts.manageAccount} />
              </MuiMenuItem>
              <MuiMenuItem 
                onClick={handleLogout} 
                id='logout' 
                sx={{ paddingLeft: '24px' }}
              >
                <ListItemText primary={texts.logout} />
              </MuiMenuItem>
            </Menu>
          </>
        )}
      </div>
    </nav>
  );
}