import React, { useState } from 'react';
import { IconButton, ListItemText, Menu, MenuItem as MuiMenuItem, Divider } from '@mui/material';
import { StoreSelector } from './StoreSelector';
import { T1ShippingBanner } from './T1ShippingBanner';
import { User, Store } from '../../interfaces/menu';
import styles from '../../styles/common/Navbar.module.scss';
import { T1Selector } from './T1Selector';
import { Profile } from './Profile';
import TextFieldAndButton from './TextFieldAndButton';
import T1Icon from '../T1Icon';

// Interface para los items del menú del perfil
export interface ProfileMenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode | string;
  href?: string;
  onClick?: (user?: User) => void;
  target?: '_blank' | '_self';
  disabled?: boolean;
  divider?: boolean; // Para agregar un divider después del item
  className?: string;
}

export interface NavbarProps {
  className?: string;
  showInfoBand?: boolean;
  showSearchInput?: boolean;
  showBalance?: boolean;
  user?: User | null;
  stores?: Store[];
  currentStore?: Store;
  
  // Solo el título del banner es configurable
  shippingBannerTitle?: string;
  
  // Configuración de items del menú del perfil
  profileMenuItems?: ProfileMenuItem[];
  
  // Event handlers
  onLogout?: () => void;
  onSearch?: (data: { search: string }) => void;
  onManageAccount?: (user: User) => void;
  onStoreChange?: (storeId: number) => void;
  onNavigate?: (path: string) => void;
  onReducerHandle: () => void ;
  sidebarReduce: boolean;
  
  // Prop para controlar si está en móvil
  isMobile?: boolean;

  // Component slots (solo los que realmente deben ser configurables)
  BalanceBanner?: React.ComponentType<{ className?: string }>;
  T1Selector?: React.ComponentType<any>;
  SearchComponent?: React.ComponentType<any>;
  
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
  shippingBannerTitle = 'envíos', // Valor por defecto
  
  // Configuración de items del menú
  profileMenuItems = [
    {
      id: 'manage-account',
      label: 'Gestionar cuenta',
      onClick: (user) => {
        // Comportamiento por defecto
        console.log('Manage account clicked for user:', user);
      }
    }
  ],
  
  // Event handlers
  onLogout = () => {},
  onSearch = () => {},
  onManageAccount = () => {},
  onStoreChange = () => {},
  onNavigate = () => {},
  onReducerHandle = () => {},
  sidebarReduce = false,
  isMobile = false,
  
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
    logout: 'Cerrar sesión',
    searchPlaceholder: 'Número de rastreo'
  }
}: NavbarProps) {

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

  const handleMenuItemClick = (item: ProfileMenuItem) => {
    // Cerrar el menú
    handleProfileClose();
    
    // Si tiene href, navegar
    if (item.href) {
      if (item.target === '_blank') {
        window.open(item.href, '_blank');
      } else {
        onNavigate(item.href);
      }
    }
    
    // Ejecutar onClick si existe
    if (item.onClick) {
      item.onClick(user || undefined);
    }
    
    // Backward compatibility: si es manage-account, ejecutar onManageAccount
    if (item.id === 'manage-account' && user) {
      onManageAccount(user);
    }
  };

  const renderProfileMenuItem = (item: ProfileMenuItem, index: number) => {
    return (
      <React.Fragment key={item.id}>
        <MuiMenuItem
          onClick={() => handleMenuItemClick(item)}
          id={item.id}
          disabled={item.disabled}
          className={item.className}
          sx={{ paddingLeft: '24px' }}
        >
          {item.icon && (
            <span style={{ marginRight: '8px', display: 'flex', alignItems: 'center' }}>
              {typeof item.icon === 'string' ? (
                <T1Icon icon={item.icon} width={16} height={16} />
              ) : (
                item.icon
              )}
            </span>
          )}
          <ListItemText sx={{
            '& .MuiTypography-root': {
              fontSize: '12px',
              fontWeight: '500',
              // Otros estilos que necesites
            }

          }} style={{}} primary={item.label} />
        </MuiMenuItem>
        {item.divider && <Divider />}
      </React.Fragment>
    );
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
        {!isMobile &&
          <T1ShippingBanner
            onReducerHandle={onReducerHandle}
            sidebarReduce={sidebarReduce}
            brandText={shippingBannerTitle}
            onNavigate={onNavigate}
            isMobile={isMobile}
          />
        }
        
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
          createStoreUrl={accountUrl}        
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
              sx={{
                '& .MuiMenu-paper': {
                  fontSize: '12px',
                  fontWeight: '500',
                },

              }}
              MenuListProps={{
                'aria-labelledby': 'profile-button',
              }}
            >
              <Profile
                email={user.email}
                name={user.name}
              />
              
              {/* Renderizar items configurables */}
              {profileMenuItems.map((item, index) => renderProfileMenuItem(item, index))}
              
              {/* Separador antes del logout si hay items personalizados */}
              {/* {profileMenuItems.length > 0 && <Divider />} */}
              
              {/* Item de logout (siempre presente y estático) */}
              <MuiMenuItem 
                onClick={handleLogout} 
                id='logout' 
                sx={{ 
                  paddingLeft: '24px',
                  '& .MuiTypography-root': {
                    fontSize: '12px',
                    fontWeight: '500',
                    // Otros estilos que necesites
                  }
                }}
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