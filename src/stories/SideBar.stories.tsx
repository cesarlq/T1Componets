import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Sidebar } from '../Components/MenuComponent/Sidebar';

// Mock components para TopBanner y BottomBanner
const MockTopBanner = ({ className }: { className?: string }) => (
  <div 
    className={className}
    style={{ 
      backgroundColor: '#3b82f6', 
      color: 'white', 
      padding: '12px', 
      borderRadius: '8px', 
      textAlign: 'center', 
      fontWeight: '600' 
    }}
  >
    Mi Empresa Logo
  </div>
);

const MockBottomBanner = ({ className }: { className?: string }) => (
  <div 
    className={className}
    style={{ 
      backgroundColor: '#f3f4f6', 
      padding: '12px', 
      textAlign: 'center', 
      fontSize: '14px', 
      color: '#6b7280' 
    }}
  >
    © 2024 Mi Empresa
  </div>
);

const MockBalanceBanner = ({ className }: { className?: string }) => (
  <div 
    className={className}
    style={{ 
      backgroundColor: '#dcfce7', 
      padding: '12px', 
      borderRadius: '8px', 
      textAlign: 'center' 
    }}
  >
    <div style={{ fontSize: '14px', color: '#6b7280' }}>Saldo disponible</div>
    <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#16a34a' }}>$1,234.56</div>
  </div>
);

// Mock StoreSelector component
const MockStoreSelector = ({ 
  stores, 
  currentStore, 
  onStoreChange, 
  createStoreUrl, 
  searchPlaceholder, 
  isMobile,
  className 
}: any) => (
  <div className={`${className} p-2 bg-gray-50 rounded-lg`}>
    <select 
      value={currentStore?.id || ''} 
      onChange={(e) => onStoreChange?.(Number(e.target.value))}
      className="w-full p-2 border rounded"
      style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
    >
      <option value="">Seleccionar tienda...</option>
      {stores?.map((store: any) => (
        <option key={store.id} value={store.id}>{store.name}</option>
      ))}
    </select>
  </div>
);

// Datos mock
const mockStores = [
  { id: 1, name: 'Tienda Principal' },
  { id: 2, name: 'Sucursal Norte' },
  { id: 3, name: 'Sucursal Sur' },
];

const mockMenuPaths = [
  {
    type: '0', // STATIC_TITLE
    text: 'Navegación Principal'
  },
  {
    type: '1', // LINK
    href: '/dashboard',
    text: 'Dashboard',
    icon: <DashboardIcon />
  },
  {
    type: '1', // LINK
    href: '/orders',
    text: 'Pedidos',
    icon: <ShoppingCartIcon />,
    subPaths: [
      { href: '/orders/pending', text: 'Pendientes' },
      { href: '/orders/completed', text: 'Completados' },
      { href: '/orders/cancelled', text: 'Cancelados' }
    ]
  },
  {
    type: '1', // LINK
    href: '/inventory',
    text: 'Inventario',
    icon: <InventoryIcon />
  },
  {
    type: '3', // REACT_TSX - StoreSelector
    component: MockStoreSelector
  },
  {
    type: '0', // STATIC_TITLE
    text: 'Administración'
  },
  {
    type: '1', // LINK
    href: '/users',
    text: 'Usuarios',
    icon: <PeopleIcon />
  },
  {
    type: '1', // LINK
    href: '/analytics',
    text: 'Análisis',
    icon: <AnalyticsIcon />
  },
  {
    type: '1', // LINK
    href: '/settings',
    text: 'Configuración',
    icon: <SettingsIcon />
  }
];

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Componente Sidebar reutilizable con soporte para diferentes tipos de elementos de menú, banners personalizables y comportamiento responsive.'
      }
    }
  },
  argTypes: {
    menuPaths: {
      description: 'Array de elementos del menú con diferentes tipos (links, títulos, componentes React)',
      control: 'object'
    },
    showCreateButton: {
      description: 'Mostrar el botón de crear',
      control: 'boolean'
    },
    showInfoBand: {
      description: 'Mostrar banda de información',
      control: 'boolean'
    },
    showBalance: {
      description: 'Mostrar banner de balance',
      control: 'boolean'
    },
    createButtonText: {
      description: 'Texto del botón de crear',
      control: 'text'
    },
    createButtonPath: {
      description: 'Ruta del botón de crear',
      control: 'text'
    },
    breakpointReduce: {
      description: 'Punto de quiebre para reducir el sidebar (px)',
      control: 'number'
    },
    breakpointMobile: {
      description: 'Punto de quiebre para modo móvil (px)',
      control: 'number'
    },
    isOpen: {
      description: 'Estado de apertura (controlado externamente)',
      control: 'boolean'
    },
    isReduced: {
      description: 'Estado reducido (controlado externamente)',
      control: 'boolean'
    },
    currentUserId: {
      description: 'ID del usuario actual',
      control: 'text'
    },
    restrictedPaths: {
      description: 'Rutas restringidas para el usuario',
      control: 'object'
    }
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', display: 'flex' }}>
        <Story />
        <div style={{ flex: 1, padding: '20px', backgroundColor: '#f5f5f5' }}>
          <h1>Contenido Principal</h1>
          <p>Este es el área de contenido principal de la aplicación.</p>
          <p>El sidebar se encuentra a la izquierda y es completamente funcional.</p>
        </div>
      </div>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

// Historia por defecto
export const Default: Story = {
  args: {
    menuPaths: mockMenuPaths,
    TopBanner: MockTopBanner,
    BottomBanner: MockBottomBanner,
    showCreateButton: true,
    showInfoBand: false,
    showBalance: false,
    createButtonText: '+ Crear envío',
    createButtonPath: '/create',
    currentUserId: 'user123',
    stores: mockStores,
    currentStore: mockStores[0],
    onStoreChange: fn(),
    onCreateClick: fn(),
    onNavigate: fn(),
    onToggleOpen: fn(),
    onToggleReduce: fn()
  }
};

// Sidebar con balance
export const WithBalance: Story = {
  args: {
    ...Default.args,
    showBalance: true,
    BalanceBanner: MockBalanceBanner
  }
};

// Sidebar reducido
export const Reduced: Story = {
  args: {
    ...Default.args,
    isReduced: true
  }
};

// Sidebar sin botón de crear
export const WithoutCreateButton: Story = {
  args: {
    ...Default.args,
    showCreateButton: false
  }
};

// Sidebar con rutas restringidas
export const WithRestrictedPaths: Story = {
  args: {
    ...Default.args,
    restrictedPaths: ['/users', '/settings'],
    currentUserId: 'restricted_user'
  }
};

// Sidebar móvil (simulado con breakpoint bajo)
export const Mobile: Story = {
  args: {
    ...Default.args,
    breakpointMobile: 2000, // Forzar modo móvil
    isOpen: true
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
};

// Sidebar minimalista (solo links básicos)
export const Minimal: Story = {
  args: {
    menuPaths: [
      {
        type: '1',
        href: '/home',
        text: 'Inicio',
        icon: <HomeIcon />
      },
      {
        type: '1',
        href: '/dashboard',
        text: 'Dashboard',
        icon: <DashboardIcon />
      },
      {
        type: '1',
        href: '/settings',
        text: 'Configuración',
        icon: <SettingsIcon />
      }
    ],
    showCreateButton: false,
    TopBanner: undefined,
    BottomBanner: undefined
  }
};

// Sidebar con todos los banners
export const WithAllBanners: Story = {
  args: {
    ...Default.args,
    showBalance: true,
    showInfoBand: true,
    BalanceBanner: MockBalanceBanner,
    TopBanner: MockTopBanner,
    BottomBanner: MockBottomBanner
  }
};

// Sidebar personalizado
export const Custom: Story = {
  args: {
    menuPaths: [
      {
        type: '0',
        text: 'Mi Aplicación'
      },
      {
        type: '1',
        href: '/notifications',
        text: 'Notificaciones',
        icon: <NotificationsIcon />,
        endAdornment: (
          <span style={{ 
            backgroundColor: '#ef4444', 
            color: 'white', 
            borderRadius: '50%', 
            padding: '2px 6px', 
            fontSize: '12px',
            minWidth: '18px',
            textAlign: 'center'
          }}>
            3
          </span>
        )
      },
      {
        type: '1',
        href: '/analytics',
        text: 'Reportes Avanzados',
        icon: <AnalyticsIcon />,
        subPaths: [
          { href: '/analytics/sales', text: 'Ventas' },
          { href: '/analytics/customers', text: 'Clientes' },
          { href: '/analytics/products', text: 'Productos' }
        ]
      }
    ],
    createButtonText: '+ Nuevo Proyecto',
    createButtonPath: '/projects/new',
    TopBanner: ({ className }) => (
      <div className={`${className} bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg text-center`}>
        <div className="font-bold text-lg">MiApp Pro</div>
        <div className="text-sm opacity-90">Versión 2.0</div>
      </div>
    )
  }
};

// Estados interactivos
export const Interactive: Story = {
  args: {
    ...Default.args,
    onToggleOpen: fn(),
    onToggleReduce: fn(),
    onStoreChange: fn(),
    onCreateClick: fn(),
    onNavigate: fn()
  },
  render: (args) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isReduced, setIsReduced] = React.useState(false);
    const [currentStore, setCurrentStore] = React.useState(mockStores[0]);
    
    return (
      <Sidebar
        {...args}
        isOpen={isOpen}
        isReduced={isReduced}
        currentStore={currentStore}
        onToggleOpen={setIsOpen}
        onToggleReduce={setIsReduced}
        onStoreChange={(storeId) => {
          const store = mockStores.find(s => s.id === storeId);
          if (store) {
            setCurrentStore(store);
            // También llamar al fn() para que Storybook lo detecte
            args.onStoreChange?.(storeId);
          }
        }}
        onCreateClick={() => {
          alert('¡Crear nuevo elemento!');
          args.onCreateClick?.();
        }}
        onNavigate={(path) => {
          alert(`Navegando a: ${path}`);
          args.onNavigate?.(path);
        }}
      />
    );
  }
};