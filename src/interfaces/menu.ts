import { balanceI } from "./commonInterfaces";
import { ProfileMenuItem } from "./Profile.interface";

export interface User {
  name: string;
  email: string;
  storeId?: string;
}

export interface Store {
  id: number;
  name: string;
}

export interface MenuItem {
  href: string;
  text: string;
  icon: string;
  subPaths?: SubMenuItem[];
  concatStoreId?: boolean;
}

export interface SubMenuItem {
  href: string;
  text: string;
}

export interface NavbarPropsI {
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
  balanceBannerConfig?: {
    balance: balanceI,
    BALLANCE_PATH: string
  }
  T1Selector?: React.ComponentType<any>;
  SearchComponent?: React.ComponentType<any>;
  
  // Configuration for T1Selector
  t1SelectorConfig?: t1SelectorConfigI | null | undefined;
  itemsOrder?: ('store' | 'shipping' | 'payment')[];

  // Configuration
  searchPlaceholder?: string;
  trackingUrl?: string;
  accountUrl?: string;
  texts?: {
    logout?: string;
    searchPlaceholder?: string;
  };

  
  iconProfile?: string | undefined;
  colorProfile?: string
}

export interface t1SelectorConfigI {
  storeBaseUrl?: string;
  shipping?: boolean;
  payment?: boolean;
  store?: boolean;
  shippingBaseUrl?: string;
  paymentBaseUrl?: string;
  ecosystemTitle?: string;
  itemsOrder?: ('store' | 'shipping' | 'payment')[];
  menuItems?: Array<{
    icon: string | React.ReactNode;
    label: string;
    href?: string;
    onClick?: () => void;
    target?: '_blank' | '_self';
    isActive?: boolean;
  }>;
}


// Interfaces flexibles que aceptan múltiples formatos
export interface SubPath {
  href: string;
  text: string;
}
export interface MenuPath {
  href?: string;
  text?: string;
  icon?: any;
  subPaths?: SubPath[];
  concatStoreId?: boolean;
  endAdornment?: React.ReactNode;
  // Propiedades para tipos avanzados (compatibles con PathWithSubPathsI)
  type?: string | any; // Flexible para aceptar enums de diferentes proyectos
  component?: React.ComponentType<any>;
  activeIcon?: any;
}

export interface SidebarProps {
  className?: string;
  // Menu configuration
  menuPaths?: MenuPath[];
  // Component slots
  TopBanner?: React.ComponentType<{ className?: string }>;
  BottomBanner?: React.ComponentType<{ className?: string }> | React.ReactNode;
  BalanceBanner?: React.ComponentType<{ className?: string }>;
  // Features
  showCreateButton?: boolean;
  showInfoBand?: boolean;
  showBalance?: boolean;
  // Configuration
  createButtonText?: string;
  createButtonPath?: string;
  breakpointReduce?: number;
  breakpointMobile?: number;
  // States from parent
  isOpen?: boolean;
  isReduced?: boolean;
  // Event handlers
  onToggleOpen?: (isOpen: boolean) => void;
  onToggleReduce?: (isReduced: boolean) => void;
  onCreateClick?: () => void;
  onNavigate?: (path: string) => void;
  // User context
  currentUserId?: string | number;
  restrictedPaths?: string[];
  // Props adicionales para StoreSelector (pasadas desde el padre)
  stores?: any[];
  currentStore?: any;
  onStoreChange?: (storeId: number) => void;
  createStoreUrl?: string;
  isMobile?: boolean;
}