import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

// Mock de iconos para el menú
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import { T1ShippingBanner } from '@/Components/MenuComponent/T1ShippingBanner';
import { Navbar } from '@/Components/MenuComponent/Navbar';
import Sidebar from '@/Components/Sidebar';

// Mock de stores
const mockStores = [
  { id: 1, name: "Tienda Principal" },
  { id: 2, name: "Tienda Secundaria" },
  { id: 3, name: "Tienda Express" }
];

// Mock de StoreSelector component si es necesario
const MockStoreSelector = ({ stores = [], currentStore, onStoreChange, className }: any) => (
  <div className={className}>
    <select 
      value={currentStore?.id || ''} 
      onChange={(e) => onStoreChange(Number(e.target.value))}
      style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
    >
      <option value="">Seleccionar tienda</option>
      {stores.map((store: any) => (
        <option key={store.id} value={store.id}>
          {store.name}
        </option>
      ))}
    </select>
  </div>
);

// Wrapper component para manejar el estado
const SidebarWithState = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isReduced, setIsReduced] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentStore, setCurrentStore] = useState(mockStores[0]);

  // Detectar si es móvil
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Custom T1ShippingBanner que se conecta con el Sidebar
  const CustomTopBanner = ({ className }: { className?: string }) => (
    <T1ShippingBanner
      className={className}
      brandText="envíos"
      onToggleReduce={() => setIsReduced(!isReduced)}
      onToggleOpen={() => setIsOpen(!isOpen)}
      isReduced={isReduced}
      isOpen={isOpen}
      isMobile={isMobile}
      onNavigate={(path) => console.log('Navigate to:', path)}
    />
  );

  // Navbar con el banner integrado
  const navbarProps = {
    shippingBannerTitle: "envíos",
    onReducerHandle: () => {
      if (isMobile) {
        setIsOpen(!isOpen);
      } else {
        setIsReduced(!isReduced);
      }
    },
    sidebarReduce: isReduced,
    isMobile: isMobile,
    user: {
      name: "Juan Pérez",
      email: "juan@example.com",
      storeId: "123"
    },
    stores: mockStores,
    currentStore: currentStore,
    onStoreChange: (storeId: number) => {
      const store = mockStores.find(s => s.id === storeId);
      if (store) {
        setCurrentStore(store);
        console.log('Store changed to:', store);
      }
    },
    showBalance: true,
    showSearchInput: true,
    onNavigate: (path: string) => console.log('Navigate to:', path),
    onSearch: (data: any) => console.log('Search:', data),
    onLogout: () => console.log('Logout'),
    BalanceBanner: ({ className }: { className?: string }) => (
      <div className={className} style={{ 
        padding: '8px 16px', 
        backgroundColor: '#e3f2fd', 
        borderRadius: '4px',
        fontWeight: 'bold'
      }}>
        $1,250.00 MXN
      </div>
    ),
    profileMenuItems: [
      { 
        id: '1',
        label: 'Mi perfil', 
        href: '/profile',
        color: '#1976d2'
      },
      { 
        id: '2',
        label: 'Configuración', 
        href: '/settings',
        color: '#757575'
      }
    ]
  };

  // Props para el Sidebar con valores por defecto
  const sidebarProps = {
    ...args,
    TopBanner: CustomTopBanner,
    isOpen: isOpen,
    isReduced: isReduced,
    onToggleOpen: setIsOpen,
    onToggleReduce: setIsReduced,
    isMobile: isMobile,
    stores: mockStores, // Asegurar que stores esté definido
    currentStore: currentStore,
    onStoreChange: (storeId: number) => {
      const store = mockStores.find(s => s.id === storeId);
      if (store) {
        setCurrentStore(store);
      }
    },
    currentUserId: "123",
    restrictedPaths: args.restrictedPaths || [],
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      {/* Navbar */}
      <div style={{ flexShrink: 0 }}>
        <Navbar {...navbarProps} />
      </div>
      
      {/* Container principal */}
      <div style={{ display: 'flex', flex: 1, position: 'relative', overflow: 'hidden' }}>
        {/* Sidebar */}
        <Sidebar {...sidebarProps} />
        
        {/* Overlay para móvil */}
        {isMobile && isOpen && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 998,
            }}
            onClick={() => setIsOpen(false)}
          />
        )}
        
        {/* Contenido principal */}
        <main style={{ 
          flex: 1, 
          padding: '24px',
          backgroundColor: '#f5f5f5',
          marginLeft: isReduced && !isMobile ? '80px' : '0',
          transition: 'margin-left 0.3s ease',
          overflow: 'auto'
        }}>
          <h1>Contenido Principal</h1>
          <p>El sidebar se puede expandir/reducir usando el botón en el T1ShippingBanner.</p>
          
          <div style={{ marginTop: '20px', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h2>Estados actuales:</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>📱 Móvil: <strong>{isMobile ? 'Sí' : 'No'}</strong></li>
              <li>📂 Sidebar abierto: <strong>{isOpen ? 'Sí' : 'No'}</strong></li>
              <li>↔️ Sidebar reducido: <strong>{isReduced ? 'Sí' : 'No'}</strong></li>
              <li>🏪 Tienda actual: <strong>{currentStore?.name || 'Ninguna'}</strong></li>
            </ul>
          </div>
          
          <div style={{ marginTop: '20px', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h2>Funcionalidad:</h2>
            <ul style={{ paddingLeft: '20px' }}>
              <li>En desktop: El botón en T1ShippingBanner alterna entre sidebar expandido y reducido</li>
              <li>En móvil: El botón de menú en el Navbar abre/cierra el sidebar como overlay</li>
              <li>Click fuera del sidebar en móvil lo cierra automáticamente</li>
              <li>El selector de tienda está disponible tanto en el Navbar como en el Sidebar</li>
            </ul>
          </div>

          <div style={{ marginTop: '20px', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h2>Controles de prueba:</h2>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => setIsOpen(!isOpen)}
                style={{ padding: '8px 16px', borderRadius: '4px', border: '1px solid #ccc', cursor: 'pointer' }}
              >
                Toggle Open
              </button>
              <button 
                onClick={() => setIsReduced(!isReduced)}
                style={{ padding: '8px 16px', borderRadius: '4px', border: '1px solid #ccc', cursor: 'pointer' }}
              >
                Toggle Reduce
              </button>
              <button 
                onClick={() => setIsMobile(!isMobile)}
                style={{ padding: '8px 16px', borderRadius: '4px', border: '1px solid #ccc', cursor: 'pointer' }}
              >
                Toggle Mobile
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const meta: Meta<typeof Sidebar> = {
  title: 'Menu/Sidebar with T1ShippingBanner',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock de rutas del menú
const mockMenuPaths = [
  {
    type: '0',
    text: 'NAVEGACIÓN'
  },
  {
    type: '1',
    href: '/dashboard',
    text: 'Dashboard',
    icon: HomeIcon,
    activeIcon: HomeIcon,
    autoNavigateOnClick: true
  },
  {
    type: '1',
    href: '/orders',
    text: 'Órdenes',
    icon: ShoppingCartIcon,
    activeIcon: ShoppingCartIcon,
    subPaths: [
      { href: '/orders/pending', text: 'Pendientes' },
      { href: '/orders/completed', text: 'Completadas' },
      { href: '/orders/cancelled', text: 'Canceladas' }
    ]
  },
  {
    type: '1',
    href: '/reports',
    text: 'Reportes',
    icon: AssessmentIcon,
    activeIcon: AssessmentIcon,
    autoNavigateOnClick: true
  },
  {
    type: '0',
    text: 'CONFIGURACIÓN'
  },
  {
    type: 'REACT_TSX',
    component: MockStoreSelector,
    text: 'Selector de Tienda'
  },
  {
    type: '1',
    href: '/users',
    text: 'Usuarios',
    icon: GroupIcon,
    activeIcon: GroupIcon,
    subPaths: [
      { href: '/users/list', text: 'Lista de usuarios' },
      { href: '/users/roles', text: 'Roles y permisos' }
    ]
  },
  {
    type: '1',
    href: '/settings',
    text: 'Ajustes',
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
    autoNavigateOnClick: true
  }
];

// Bottom Banner personalizado
const CustomBottomBanner = () => (
  <div style={{
    padding: '16px',
    backgroundColor: '#f0f0f0',
    borderTop: '1px solid #e0e0e0',
    fontSize: '12px',
    color: '#666'
  }}>
    <div>Versión 2.0.0</div>
    <div>© 2024 T1 Envíos</div>
  </div>
);

// Balance Banner para mostrar en el sidebar
const BalanceBanner = ({ className }: { className?: string }) => (
  <div className={className} style={{
    margin: '16px',
    padding: '12px',
    backgroundColor: '#e3f2fd',
    borderRadius: '8px',
    textAlign: 'center'
  }}>
    <div style={{ fontSize: '12px', color: '#666' }}>Balance disponible</div>
    <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#1976d2' }}>$1,250.00 MXN</div>
  </div>
);

export const Default: Story = {
  render: (args) => <SidebarWithState {...args} />,
  args: {
    menuPaths: mockMenuPaths,
    showCreateButton: true,
    createButtonText: '+ Crear envío',
    createButtonPath: '/create',
    showBalance: true,
    BalanceBanner: BalanceBanner,
    BottomBanner: CustomBottomBanner,
    defaultAutoNavigate: false,
    stores: mockStores, // Asegurar que stores esté definido aquí también
    onNavigate: (path: string) => console.log('Navigate to:', path),
    onCreateClick: () => console.log('Create button clicked'),
  },
};

export const WithRestrictedPaths: Story = {
  render: (args) => <SidebarWithState {...args} />,
  args: {
    ...Default.args,
    restrictedPaths: ['/users', '/settings'],
  },
};

export const WithoutCreateButton: Story = {
  render: (args) => <SidebarWithState {...args} />,
  args: {
    ...Default.args,
    showCreateButton: false,
  },
};

export const MobileView: Story = {
  render: (args) => <SidebarWithState {...args} />,
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const CustomBreakpoints: Story = {
  render: (args) => <SidebarWithState {...args} />,
  args: {
    ...Default.args,
    breakpointReduce: 1200,
    breakpointMobile: 600,
  },
};