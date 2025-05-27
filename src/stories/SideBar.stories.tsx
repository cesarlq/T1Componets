// Sidebar.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Sidebar, MenuPath } from '../Components/MenuComponent/Sidebar';
import HomeIcon from '../assets/menus/inactive/home-inactive.svg';
import PackageIcon from '../assets/menus/inactive/shipping-inactive.svg';
import AnalyticsIcon from '../assets/menus/inactive/finances-inactive.svg';
import SettingsIcon from '../assets/menus/inactive/settings-inactive.svg';

// Mock menu data
const mockMenuPaths: MenuPath[] = [
  {
    href: '/dashboard',
    text: 'Dashboard',
    icon: HomeIcon,
  },
  {
    href: '/shipments',
    text: 'Envíos',
    icon: PackageIcon,
    subPaths: [
      { href: '/shipments/create', text: 'Crear envío' },
      { href: '/shipments/list', text: 'Lista de envíos' },
      { href: '/shipments/tracking', text: 'Rastreo' },
      { href: '/shipments/returns', text: 'Devoluciones' }
    ]
  },
  {
    href: '/analytics',
    text: 'Analíticas',
    icon: AnalyticsIcon,
    subPaths: [
      { href: '/analytics/overview', text: 'Resumen' },
      { href: '/analytics/performance', text: 'Rendimiento' },
      { href: '/analytics/reports', text: 'Reportes' }
    ]
  },
  {
    href: '/settings',
    text: 'Configuración',
    icon: SettingsIcon,
    concatStoreId: true,
    subPaths: [
      { href: '/settings/profile/', text: 'Perfil' },
      { href: '/settings/billing/', text: 'Facturación' },
      { href: '/settings/integrations/', text: 'Integraciones' }
    ]
  }
];

// Mock components
const MockTopBanner: React.ComponentType<{ className?: string }> = ({ className }) => (
  <div className={`${className} bg-blue-500 text-white p-3 rounded-lg text-center font-bold`}>
    🚀 T1 Shipping
  </div>
);

const MockBalanceBanner: React.ComponentType<{ className?: string }> = ({ className }) => (
  <div className={`${className} bg-green-100 p-3 rounded-lg text-center`}>
    <div className="text-sm font-semibold text-green-800">Balance</div>
    <div className="text-lg font-bold text-green-900">$1,250.00</div>
  </div>
);

const MockBottomBanner = () => (
  <div className="bg-gray-100 p-4 text-center">
    <div className="text-xs text-gray-600">© 2024 T1 Shipping</div>
    <div className="text-xs text-gray-500">Versión 2.1.0</div>
  </div>
);

// Wrapper component for state management
const SidebarWrapper = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isReduced, setIsReduced] = useState(false);
  const [currentPath, setCurrentPath] = useState('/dashboard');

  // Mock window.innerWidth para testing responsive
  const [windowWidth, setWindowWidth] = useState(1200);

  // Simular cambio de tamaño de ventana
  const simulateResize = (width: number) => {
    setWindowWidth(width);
    // Simular el efecto del breakpoint
    if (width <= 768) {
      setIsReduced(false); // En móvil no se reduce
    } else if (width <= 1110) {
      setIsReduced(true); // En tablet se reduce
    } else {
      setIsReduced(false); // En desktop normal
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f5f5f5' }}>
      <Sidebar
        {...props}
        isOpen={isOpen}
        isReduced={isReduced}
        onToggleOpen={(open) => {
          console.log('Toggle open:', open);
          setIsOpen(open);
        }}
        onToggleReduce={(reduced) => {
          console.log('Toggle reduce:', reduced);
          setIsReduced(reduced);
        }}
        onNavigate={(path) => {
          console.log('Navigate to:', path);
          setCurrentPath(path);
        }}
        onCreateClick={() => console.log('Create button clicked!')}
      />
      
      {/* Main content area */}
      <div style={{ 
        marginLeft: windowWidth <= 768 ? 0 : (isReduced ? '70px' : '250px'),
        padding: '20px',
        flex: 1,
        transition: 'margin-left 0.3s ease'
      }}>
        <div style={{ 
          background: 'white', 
          padding: '20px', 
          borderRadius: '10px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{ margin: '0 0 20px 0', color: '#333' }}>
            Contenido Principal
          </h1>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Esta es el área de contenido principal. El sidebar debería funcionar correctamente 
            en diferentes tamaños de pantalla.
          </p>
          
          {/* Controles para testing */}
          <div style={{ 
            background: '#f0f8ff', 
            padding: '15px', 
            borderRadius: '8px',
            marginBottom: '20px'
          }}>
            <h3 style={{ margin: '0 0 15px 0', color: '#333' }}>🎛️ Controles de Testing:</h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => simulateResize(1400)}
                style={{ 
                  padding: '8px 12px', 
                  background: '#e3f2fd', 
                  border: '1px solid #2196f3',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Desktop (1400px)
              </button>
              <button 
                onClick={() => simulateResize(1000)}
                style={{ 
                  padding: '8px 12px', 
                  background: '#fff3e0', 
                  border: '1px solid #ff9800',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Tablet (1000px)
              </button>
              <button 
                onClick={() => simulateResize(600)}
                style={{ 
                  padding: '8px 12px', 
                  background: '#fce4ec', 
                  border: '1px solid #e91e63',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Móvil (600px)
              </button>
              <button 
                onClick={() => setIsOpen(!isOpen)}
                style={{ 
                  padding: '8px 12px', 
                  background: '#e8f5e8', 
                  border: '1px solid #4caf50',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Toggle Sidebar
              </button>
            </div>
          </div>
          
          <div style={{ 
            background: '#f8f9fa', 
            padding: '15px', 
            borderRadius: '8px',
            marginBottom: '20px'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>📊 Estado actual:</h3>
            <p style={{ margin: '5px 0', color: '#666' }}>
              <strong>Ruta actual:</strong> {currentPath}
            </p>
            <p style={{ margin: '5px 0', color: '#666' }}>
              <strong>Ancho simulado:</strong> {windowWidth}px
            </p>
            <p style={{ margin: '5px 0', color: '#666' }}>
              <strong>Sidebar abierto:</strong> {isOpen ? 'Sí' : 'No'}
            </p>
            <p style={{ margin: '5px 0', color: '#666' }}>
              <strong>Sidebar reducido:</strong> {isReduced ? 'Sí' : 'No'}
            </p>
          </div>

          <div style={{ 
            background: '#e3f2fd', 
            padding: '15px', 
            borderRadius: '8px' 
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#1976d2' }}>
              🧪 Pruebas recomendadas:
            </h3>
            <ul style={{ margin: 0, paddingLeft: '20px', color: '#666' }}>
              <li>Usa los botones de arriba para simular diferentes tamaños</li>
              <li>Haz hover sobre el sidebar cuando esté reducido</li>
              <li>Haz clic en los items del menú con subpaths</li>
              <li>Prueba el botón de crear envío</li>
              <li>En móvil, abre/cierra el sidebar</li>
              <li>Revisa la consola para ver los logs de navegación</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof SidebarWrapper> = {
  title: 'Components/Sidebar',
  component: SidebarWrapper,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menuPaths: mockMenuPaths,
    TopBanner: MockTopBanner,
    BottomBanner: MockBottomBanner,
    BalanceBanner: MockBalanceBanner,
    showCreateButton: true,
    showBalance: true,
    showInfoBand: false,
    createButtonText: '+ Crear envío',
    createButtonPath: '/shipments/create',
    currentUserId: '123',
    restrictedPaths: []
  }
};

export const Reduced: Story = {
  args: {
    ...Default.args,
    breakpointReduce: 2000, // Forzar reducción
  }
};

export const WithoutCreateButton: Story = {
  args: {
    ...Default.args,
    showCreateButton: false,
  }
};

export const WithoutBalance: Story = {
  args: {
    ...Default.args,
    showBalance: false,
  }
};

export const WithRestrictedPaths: Story = {
  args: {
    ...Default.args,
    restrictedPaths: ['/analytics', '/settings/billing/'],
  }
};

export const MinimalSidebar: Story = {
  args: {
    menuPaths: [
      {
        href: '/dashboard',
        text: 'Dashboard',
        icon: HomeIcon,
      },
      {
        href: '/simple',
        text: 'Página Simple',
        icon: PackageIcon,
      }
    ],
    showCreateButton: false,
    showBalance: false,
    TopBanner: undefined,
    BottomBanner: undefined,
  }
};

export const CustomTexts: Story = {
  args: {
    ...Default.args,
    createButtonText: '+ Nueva Guía',
    createButtonPath: '/create-guide',
  }
};

export const WithInfoBand: Story = {
  args: {
    ...Default.args,
    showInfoBand: true,
  }
};

export const LongMenuList: Story = {
  args: {
    ...Default.args,
    menuPaths: [
      ...mockMenuPaths,
      {
        href: '/inventory',
        text: 'Inventario',
        icon: PackageIcon,
        subPaths: [
          { href: '/inventory/products', text: 'Productos' },
          { href: '/inventory/categories', text: 'Categorías' },
          { href: '/inventory/suppliers', text: 'Proveedores' },
          { href: '/inventory/stock', text: 'Stock' },
          { href: '/inventory/movements', text: 'Movimientos' }
        ]
      },
      {
        href: '/customers',
        text: 'Clientes',
        icon: AnalyticsIcon,
        subPaths: [
          { href: '/customers/list', text: 'Lista de clientes' },
          { href: '/customers/segments', text: 'Segmentos' },
          { href: '/customers/support', text: 'Soporte' }
        ]
      },
      {
        href: '/billing',
        text: 'Facturación',
        icon: SettingsIcon,
      },
      {
        href: '/integrations',
        text: 'Integraciones',
        icon: HomeIcon,
      }
    ]
  }
};

export const MobileDemo: Story = {
  args: {
    ...Default.args,
    breakpointMobile: 2000, // Forzar vista móvil
  }
};