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
import ReportsIcon from '@mui/icons-material/Assessment';
import PaymentIcon from '@mui/icons-material/Payment';
import { Sidebar } from '@/Components/MenuComponent/Sidebar';

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

// ✨ NUEVOS MENU PATHS CON FUNCIONALIDAD DE AUTO-NAVEGACIÓN
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
    type: '1', // LINK - CON AUTO-NAVEGACIÓN HABILITADA
    href: '/orders',
    text: 'Pedidos (Auto-Nav)',
    icon: <ShoppingCartIcon />,
    autoNavigateOnClick: true, // 🔥 NUEVA FUNCIONALIDAD
    subPaths: [
      { href: '/orders/pending', text: 'Pendientes' },
      { href: '/orders/completed', text: 'Completados' },
      { href: '/orders/cancelled', text: 'Cancelados' }
    ]
  },
  {
    type: '1', // LINK - SIN AUTO-NAVEGACIÓN (comportamiento original)
    href: '/reports',
    text: 'Reportes (Solo Submenu)',
    icon: <ReportsIcon />,
    autoNavigateOnClick: false, // 🔥 NUEVA FUNCIONALIDAD
    subPaths: [
      { href: '/reports/sales', text: 'Ventas' },
      { href: '/reports/inventory', text: 'Inventario' },
      { href: '/reports/analytics', text: 'Analytics' }
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
    type: '1', // LINK - HEREDA COMPORTAMIENTO GLOBAL
    href: '/users',
    text: 'Usuarios (Global)',
    icon: <PeopleIcon />,
    subPaths: [
      { href: '/users/active', text: 'Activos' },
      { href: '/users/inactive', text: 'Inactivos' }
    ]
    // No especifica autoNavigateOnClick, usará defaultAutoNavigate
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

// 🔥 MENU PATHS PARA DEMOSTRAR DIFERENTES COMPORTAMIENTOS
const demonstrationMenuPaths = [
  {
    type: '0',
    text: '🔥 Funcionalidad de Auto-Navegación'
  },
  {
    type: '1',
    href: '/dashboard-auto',
    text: '✅ Dashboard (Navega Auto)',
    icon: <DashboardIcon />,
    autoNavigateOnClick: true,
    subPaths: [
      { href: '/dashboard-auto/overview', text: 'Resumen General' },
      { href: '/dashboard-auto/metrics', text: 'Métricas' }
    ]
  },
  {
    type: '1',
    href: '/payments-submenu',
    text: '📂 Pagos (Solo Submenu)',
    icon: <PaymentIcon />,
    autoNavigateOnClick: false,
    subPaths: [
      { href: '/payments-submenu/pending', text: 'Pendientes' },
      { href: '/payments-submenu/completed', text: 'Completados' }
    ]
  },
  {
    type: '1',
    href: '/analytics-inherit',
    text: '🔄 Analytics (Hereda Global)',
    icon: <AnalyticsIcon />,
    subPaths: [
      { href: '/analytics-inherit/sales', text: 'Ventas' },
      { href: '/analytics-inherit/customers', text: 'Clientes' }
    ]
    // Sin autoNavigateOnClick especificado
  }
];

const meta: Meta<typeof Sidebar> = {
  title: 'Menu/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Componente Sidebar reutilizable con soporte para diferentes tipos de elementos de menú, banners personalizables y comportamiento responsive.

**🔥 NUEVA FUNCIONALIDAD: Auto-Navegación en SubPaths**
- \`autoNavigateOnClick\`: Controla si al hacer clic en un item con subpaths navega automáticamente al href principal
- \`defaultAutoNavigate\`: Establece el comportamiento por defecto para todos los items

**Comportamientos disponibles:**
- ✅ **Auto-Navegación**: Clic → Navega al href + Abre submenu
- 📂 **Solo Submenu**: Clic → Solo abre/cierra submenu
- 🔄 **Hereda Global**: Usa el valor de \`defaultAutoNavigate\`
        `
      }
    }
  },
  argTypes: {
    menuPaths: {
      description: 'Array de elementos del menú con diferentes tipos (links, títulos, componentes React)',
      control: 'object'
    },
    // 🔥 NUEVOS ARGSTYPES
    defaultAutoNavigate: {
      description: '🔥 NUEVO: Comportamiento por defecto para auto-navegación en items con subpaths',
      control: 'boolean',
      table: {
        category: '🔥 Nueva Funcionalidad'
      }
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
          
          <div style={{ 
            marginTop: '20px', 
            padding: '15px', 
            backgroundColor: '#e3f2fd', 
            borderRadius: '8px',
            border: '1px solid #2196f3'
          }}>
            <h3 style={{ color: '#1976d2', marginTop: 0 }}>🔥 Nueva Funcionalidad: Auto-Navegación</h3>
            <ul style={{ margin: '10px 0', color: '#1565c0' }}>
              <li><strong>✅ Items con Auto-Nav:</strong> Navegan automáticamente al href principal</li>
              <li><strong>📂 Items Solo Submenu:</strong> Solo abren/cierran el submenu</li>
              <li><strong>🔄 Items que Heredan:</strong> Usan el comportamiento global</li>
            </ul>
          </div>
        </div>
      </div>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

// 🔥 HISTORIA POR DEFECTO - ACTUALIZADA
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
    defaultAutoNavigate: false, // 🔥 NUEVA PROP
    stores: mockStores,
    currentStore: mockStores[0],
    onStoreChange: fn(),
    onCreateClick: fn(),
    onNavigate: fn(),
    onToggleOpen: fn(),
    onToggleReduce: fn()
  }
};

// 🔥 NUEVA HISTORIA: AUTO-NAVEGACIÓN HABILITADA GLOBALMENTE
export const AutoNavigateEnabled: Story = {
  args: {
    ...Default.args,
    defaultAutoNavigate: true, // 🔥 Todos los items navegan automáticamente por defecto
    menuPaths: demonstrationMenuPaths
  },
  parameters: {
    docs: {
      description: {
        story: `
**🔥 Auto-Navegación Habilitada Globalmente**

Con \`defaultAutoNavigate: true\`, todos los items con subpaths navegarán automáticamente al href principal, 
excepto aquellos que explícitamente tengan \`autoNavigateOnClick: false\`.

**Prueba hacer clic en:**
- ✅ "Analytics (Hereda Global)" - Navegará automáticamente
- 📂 "Pagos (Solo Submenu)" - Solo abrirá el submenu
        `
      }
    }
  }
};

// 🔥 NUEVA HISTORIA: COMPORTAMIENTO MIXTO
export const MixedBehavior: Story = {
  args: {
    ...Default.args,
    defaultAutoNavigate: false, // Por defecto no navega
    menuPaths: demonstrationMenuPaths
  },
  parameters: {
    docs: {
      description: {
        story: `
**🔥 Comportamiento Mixto**

Cada item puede tener su propio comportamiento independiente del global:

**Prueba hacer clic en:**
- ✅ "Dashboard (Navega Auto)" - \`autoNavigateOnClick: true\`
- 📂 "Pagos (Solo Submenu)" - \`autoNavigateOnClick: false\`
- 🔄 "Analytics (Hereda Global)" - Usa \`defaultAutoNavigate: false\`
        `
      }
    }
  }
};

// Historias existentes actualizadas
export const WithBalance: Story = {
  args: {
    ...Default.args,
    showBalance: true,
    BalanceBanner: MockBalanceBanner
  }
};

export const Reduced: Story = {
  args: {
    ...Default.args,
    isReduced: true
  }
};

export const WithoutCreateButton: Story = {
  args: {
    ...Default.args,
    showCreateButton: false
  }
};

export const WithRestrictedPaths: Story = {
  args: {
    ...Default.args,
    restrictedPaths: ['/users', '/settings'],
    currentUserId: 'restricted_user'
  }
};

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
    BottomBanner: undefined,
    defaultAutoNavigate: false
  }
};

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

// 🔥 NUEVA HISTORIA: DEMO INTERACTIVA CON FEEDBACK VISUAL
export const InteractiveDemo: Story = {
  args: {
    ...Default.args,
    menuPaths: demonstrationMenuPaths,
    defaultAutoNavigate: false,
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
    const [lastNavigation, setLastNavigation] = React.useState<string>('');
    const [navigationHistory, setNavigationHistory] = React.useState<string[]>([]);
    
    return (
      <div style={{ height: '100vh', display: 'flex' }}>
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
              args.onStoreChange?.(storeId);
            }
          }}
          onCreateClick={() => {
            setLastNavigation('🆕 Crear nuevo elemento');
            setNavigationHistory(prev => ['🆕 Crear nuevo elemento', ...prev.slice(0, 4)]);
            args.onCreateClick?.();
          }}
          onNavigate={(path) => {
            setLastNavigation(path);
            setNavigationHistory(prev => [path, ...prev.slice(0, 4)]);
            args.onNavigate?.(path);
          }}
        />
        
        {/* 🔥 PANEL DE FEEDBACK VISUAL */}
        <div style={{ flex: 1, padding: '20px', backgroundColor: '#f5f5f5' }}>
          <h1>🔥 Demo Interactiva - Auto-Navegación</h1>
          
          <div style={{ 
            padding: '15px', 
            backgroundColor: '#e8f5e8', 
            borderRadius: '8px',
            marginBottom: '20px',
            border: '2px solid #4caf50'
          }}>
            <h3 style={{ color: '#2e7d32', marginTop: 0 }}>Última Navegación:</h3>
            <div style={{ 
              fontSize: '18px', 
              fontWeight: 'bold', 
              color: '#1b5e20',
              fontFamily: 'monospace',
              padding: '10px',
              backgroundColor: '#c8e6c9',
              borderRadius: '4px'
            }}>
              {lastNavigation || 'Haz clic en algún elemento del menú...'}
            </div>
          </div>

          <div style={{ 
            padding: '15px', 
            backgroundColor: '#fff3e0', 
            borderRadius: '8px',
            marginBottom: '20px',
            border: '1px solid #ff9800'
          }}>
            <h3 style={{ color: '#ef6c00', marginTop: 0 }}>Historial de Navegación:</h3>
            {navigationHistory.length > 0 ? (
              <ol style={{ margin: 0, paddingLeft: '20px' }}>
                {navigationHistory.map((nav, index) => (
                  <li key={index} style={{ 
                    marginBottom: '5px',
                    color: index === 0 ? '#d84315' : '#bf360c',
                    fontWeight: index === 0 ? 'bold' : 'normal'
                  }}>
                    {nav}
                  </li>
                ))}
              </ol>
            ) : (
              <p style={{ color: '#8d4e00', margin: 0 }}>No hay navegaciones aún...</p>
            )}
          </div>

          <div style={{ 
            padding: '15px', 
            backgroundColor: '#e3f2fd', 
            borderRadius: '8px',
            border: '1px solid #2196f3'
          }}>
            <h3 style={{ color: '#1976d2', marginTop: 0 }}>🔥 Cómo Probar:</h3>
            <ul style={{ margin: '10px 0', color: '#1565c0' }}>
              <li><strong>✅ Dashboard (Navega Auto):</strong> Debe navegar a la ruta principal</li>
              <li><strong>📂 Pagos (Solo Submenu):</strong> Solo debe abrir el submenu</li>
              <li><strong>🔄 Analytics (Hereda Global):</strong> Comportamiento según defaultAutoNavigate</li>
            </ul>
            
            <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#bbdefb', borderRadius: '4px' }}>
              <strong>Estado actual:</strong> defaultAutoNavigate = {args.defaultAutoNavigate ? '✅ true' : '❌ false'}
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
**🔥 Demo Interactiva con Feedback Visual**

Esta historia muestra en tiempo real cómo funciona la nueva funcionalidad de auto-navegación:

- **Panel de feedback:** Muestra la última navegación y el historial
- **Diferentes comportamientos:** Cada item tiene un comportamiento específico
- **Estado visible:** Puedes ver el valor actual de \`defaultAutoNavigate\`

¡Prueba hacer clic en diferentes elementos del menú y observa el comportamiento!
        `
      }
    }
  }
};

// Historia personalizada actualizada
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
        autoNavigateOnClick: true, // 🔥 Auto-navega
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
        autoNavigateOnClick: false, // 🔥 Solo submenu
        subPaths: [
          { href: '/analytics/sales', text: 'Ventas' },
          { href: '/analytics/customers', text: 'Clientes' },
          { href: '/analytics/products', text: 'Productos' }
        ]
      }
    ],
    createButtonText: '+ Nuevo Proyecto',
    createButtonPath: '/projects/new',
    defaultAutoNavigate: true, // 🔥 Comportamiento global
    TopBanner: ({ className }) => (
      <div className={`${className} bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg text-center`}>
        <div className="font-bold text-lg">MiApp Pro</div>
        <div className="text-sm opacity-90">Versión 2.0</div>
      </div>
    )
  }
};