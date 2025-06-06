import type { Meta, StoryObj } from '@storybook/react';
import { MenuPath } from '../../Components/MenuComponent/Sidebar';
import LayoutMenu from '../../Components/MenuComponent/layoutMenu';
import React from 'react';
import * as MenuIcon from '../../assets/menu-icons/index';


// Mock de datos para las historias
const mockUser = {
  name: 'Juan Pérez',
  email: 'juan@example.com',
};

const mockStores = [
  { id: 1, name: 'Tienda Principal' },
  { id: 2, name: 'Sucursal Norte' },
  { id: 3, name: 'Sucursal Sur' }
];

const mockMenuPaths: MenuPath[] = [
  {
    type: 'STATIC_TITLE',
    text: 'NAVEGACIÓN'
  },
  {
    type: 'LINK',
    href: '/dashboard',
    text: 'Dashboard',
    icon: MenuIcon.homeIcon,
  },
  {
    type: 'LINK',
    href: '/envios',
    text: 'Envíos',
    icon: MenuIcon.fullfillmentIcon,
    haveNotification: true,
    subPaths: [
      { href: '/envios/crear', text: 'Crear envío',  endAdornmentSubPath: <h1>test</h1>, haveNotification: true},
      { href: '/envios/lista', text: 'Lista de envíos' },
      { href: '/envios/tracking', text: 'Tracking' }
    ],
  },
  {
    type: 'LINK',
    href: '/clientes',
    text: 'Clientes',
    icon: MenuIcon.clientsIcon,
  },
  {
    type: 'LINK',
    href: '/reportes',
    text: 'Reportes',
    icon: MenuIcon.reportsIcon,
    subPaths: [
      { href: '/reportes/ventas', text: 'Ventas' },
      { href: '/reportes/envios', text: 'Envíos' }
    ],
  },
  {
    type: 'STATIC_TITLE',
    text: 'CONFIGURACIÓN'
  },
  {
    type: 'LINK',
    href: '/configuracion',
    text: 'Configuración',
    icon: MenuIcon.settingsIcon,
  }
];

const mockProfileMenuItems = [
  { text: 'Mi Perfil', href: '/perfil' , color: 'red', label: '#', id: '1' },
  { text: 'Configuración', href: '/config', color: 'red', label: '#', id: '2'  },
  { text: 'Ayuda', href: '/ayuda', color: 'red', label: '#', id: '2'  }
];

// Funciones mock para los handlers
const mockHandlers = {
  onNavigate: (path: string) => {
    console.log('🔗 Navegando a:', path);
  },
  onLogout: () => {
    console.log('👋 Cerrando sesión');
  },
  onStoreChange: (storeId: number) => {
    console.log('🏪 Cambiando tienda a:', storeId);
  },
  onCreateClick: () => {
    console.log('➕ Crear nuevo envío');
  },
  onSearch: (data: { search: string }) => {
    console.log('🔍 Buscando:', data.search);
  },
  onReducerHandle: () => {
    console.log('📱 Toggle del menú');
  },
  onToggleOpen: (isOpen: boolean) => {
    console.log('🔄 Toggle Open:', isOpen);
  },
  onToggleReduce: (isReduced: boolean) => {
    console.log('🔄 Toggle Reduce:', isReduced);
  }
};

// Props base para el navbar (sin props controladas por el layout)
const baseNavbarProps = {
  user: mockUser,
  stores: mockStores,
  currentStore: mockStores[0],
  profileMenuItems: mockProfileMenuItems,
  showBalance: true,
  showSearchInput: true,
  accountUrl: '/cuenta',
  trackingUrl: 'https://tracking.example.com',
  searchPlaceholder: 'Buscar número de tracking...',
  t1SelectorConfig: {
    storeBaseUrl: 'https://store.example.com',
    shippingBaseUrl: 'https://shipping.example.com',
    paymentBaseUrl: 'https://payment.example.com',
    ecosystemTitle: 'Ecosistema T1'
  },
  colorProfile: '#3B82F6',
  texts: {
    logout: 'Cerrar sesión',
    searchPlaceholder: 'Buscar...'
  },
  // Handlers permitidos (excepto onReducerHandle)
  onLogout: mockHandlers.onLogout,
  onStoreChange: mockHandlers.onStoreChange,
  onSearch: mockHandlers.onSearch,
  onNavigate: mockHandlers.onNavigate
};

// Props base para el sidebar (sin props controladas por el layout)
const baseSidebarProps = {
  menuPaths: mockMenuPaths,
  showCreateButton: true,
  showBalance: true,
  showInfoBand: false,
  createButtonText: '+ Crear envío',
  createButtonPath: '/crear-envio',
  currentUserId: '1',
  stores: mockStores,
  currentStore: mockStores[0],
  createStoreUrl: '/crear-tienda',
  restrictedPaths: [],
  // Handlers permitidos (excepto los controlados por el layout)
  onNavigate: mockHandlers.onNavigate,
  onCreateClick: mockHandlers.onCreateClick,
  onStoreChange: mockHandlers.onStoreChange
};

const meta: Meta<typeof LayoutMenu> = {
  title: 'Menu/LayoutMenu',
  component: LayoutMenu,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## LayoutMenu

Componente de layout que combina el Sidebar y Navbar con un contexto compartido para el manejo del estado del menú.

### Características:
- **Contexto compartido**: Maneja el estado del sidebar (abierto/cerrado, expandido/reducido)
- **Responsive**: Se adapta automáticamente a diferentes tamaños de pantalla
- **Control inteligente**: Comportamiento diferente en móvil vs desktop
- **Integración completa**: Navbar y Sidebar trabajan juntos de forma coordinada

### Estados del menú:
- **isOpen**: Controla si el sidebar está abierto (principalmente para móvil)
- **isReduced**: Controla si el sidebar está reducido (principalmente para desktop)

### Breakpoints:
- **Móvil**: ≤ 750px (sidebar overlay)
- **Tablet**: 751px - 1110px (sidebar reducido por defecto)
- **Desktop**: > 1110px (sidebar expandido por defecto)
        `
      }
    }
  },
  argTypes: {
    navBarProps: {
      description: 'Props para el componente Navbar',
      control: { type: 'object' }
    },
    sideBarProps: {
      description: 'Props para el componente Sidebar',
      control: { type: 'object' }
    }
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LayoutMenu>;

// Historia por defecto
export const Default: Story = {
  args: {
    navBarProps: baseNavbarProps,
    sideBarProps: baseSidebarProps
  },
  parameters: {
    docs: {
      description: {
        story: 'Configuración por defecto del layout con todas las funcionalidades habilitadas.'
      }
    }
  }
};

// Layout simplificado
export const Simplified: Story = {
  args: {
    navBarProps: {
      ...baseNavbarProps,
      showBalance: false,
      showSearchInput: false,
      profileMenuItems: []
    },
    sideBarProps: {
      ...baseSidebarProps,
      defaultAutoNavigateToFirstSubPath: true,
      showCreateButton: false,
      showBalance: false,
      menuPaths: [
        {
          type: 'LINK',
          href: '/dashboard',
          text: 'Dashboard',
          icon: MenuIcon.homeIcon
        },
        {
          type: 'LINK',
          href: '/configuracion',
          text: 'Configuración',
          icon: MenuIcon.settingsIcon
        }
      ]
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Versión simplificada del layout con funcionalidades mínimas.'
      }
    }
  }
};

// Sin usuario logueado
export const NoUser: Story = {
  args: {
    navBarProps: {
      ...baseNavbarProps,
      user: null,
      showBalance: false,
      profileMenuItems: []
    },
    sideBarProps: {
      ...baseSidebarProps,
      currentUserId: '',
      showBalance: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Layout cuando no hay usuario logueado.'
      }
    }
  }
};

// Con muchas opciones de menú
export const ExtendedMenu: Story = {
  args: {
    navBarProps: baseNavbarProps,
    sideBarProps: {
      ...baseSidebarProps,
      menuPaths: [
        { type: 'STATIC_TITLE', text: 'PRINCIPAL' },
        { type: 'LINK', href: '/dashboard', text: 'Dashboard', icon: MenuIcon.homeIcon },
        { type: 'LINK', href: '/envios', text: 'Envíos', icon: MenuIcon.fullfillmentIcon,
          subPaths: [
            { href: '/envios/crear', text: 'Crear envío', endAdornmentSubPath: <div>test</div>, haveNotification: true },
            { href: '/envios/lista', text: 'Lista de envíos' },
            { href: '/envios/tracking', text: 'Tracking' },
            { href: '/envios/historial', text: 'Historial' }
          ]
        },
        { type: 'LINK', href: '/clientes', text: 'Clientes', icon: MenuIcon.clientsIcon,
          subPaths: [
            { href: '/clientes/lista', text: 'Lista de clientes' },
            { href: '/clientes/nuevo', text: 'Nuevo cliente' }
          ]
        },
        { type: 'LINK', href: '/productos', text: 'Productos', icon: MenuIcon.productsIcon },
        { type: 'STATIC_TITLE', text: 'REPORTES' },
        { type: 'LINK', href: '/reportes/ventas', text: 'Ventas', icon: MenuIcon.reportsIcon },
        { type: 'LINK', href: '/reportes/envios', text: 'Envíos', icon: MenuIcon.fullfillmentIcon },
        { type: 'LINK', href: '/reportes/clientes', text: 'Clientes', icon: MenuIcon.clientsIcon },
        { type: 'STATIC_TITLE', text: 'CONFIGURACIÓN' },
        { type: 'LINK', href: '/configuracion', text: 'Configuración', icon: MenuIcon.settingsIcon },
        { type: 'LINK', href: '/usuarios', text: 'Usuarios', icon: MenuIcon.clientsIcon },
        { type: 'LINK', href: '/integraciones', text: 'Integraciones', icon: MenuIcon.reportsIcon }
      ]
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Layout con un menú extenso que incluye múltiples secciones y submenús.'
      }
    }
  }
};

// Móvil simulado
export const Mobile: Story = {
  args: {
    navBarProps: baseNavbarProps,
    sideBarProps: baseSidebarProps
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Vista del layout en dispositivos móviles. El sidebar se convierte en un overlay.'
      }
    }
  }
};

// Tablet simulado
export const Tablet: Story = {
  args: {
    navBarProps: baseNavbarProps,
    sideBarProps: baseSidebarProps
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    },
    docs: {
      description: {
        story: 'Vista del layout en tablets. El sidebar se muestra reducido por defecto.'
      }
    }
  }
};

// Debug Story - Para verificar el estado del contexto
export const Debug: Story = {
  render: (args) => {
    return (
      <div>
        <div className="bg-blue-50 border border-blue-200 p-4 mb-4 rounded">
          <h3 className="font-bold text-blue-800 mb-2">🔍 Modo Debug</h3>
          <p className="text-blue-700 text-sm">
            Abre la consola del navegador para ver los logs del estado del menú.
            El layout controla automáticamente el comportamiento del sidebar.
          </p>
          <div className="mt-2 text-xs text-blue-600">
            <p>• Móvil (≤750px): Sidebar como overlay</p>
            <p>• Tablet (751-1110px): Sidebar reducido</p>
            <p>• Desktop (1110px): Sidebar expandido</p>
          </div>
        </div>
        <LayoutMenu 
          navBarProps={args.navBarProps}
          sideBarProps={args.sideBarProps}
        />
      </div>
    );
  },
  args: {
    navBarProps: baseNavbarProps,
    sideBarProps: baseSidebarProps
  },
  parameters: {
    docs: {
      description: {
        story: 'Historia de debug para verificar el funcionamiento del contexto. Revisa la consola para ver los logs del estado.'
      }
    }
  }
};