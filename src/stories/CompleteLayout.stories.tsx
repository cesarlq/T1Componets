// Mock del SearchComponent para Storybook
const MockSearchComponent = ({ onSubmit, textFieldProps, className }: any) => (
  <div className={className}>
    <input
      {...textFieldProps}
      className="p-2 border rounded w-full max-w-xs"
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          onSubmit({ search: (e.target as HTMLInputElement).value });
        }
      }}
    />
  </div>
);

// Mock del MenuIcon para evitar errores con imports
const MockMenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M3 12H21M3 6H21M3 18H21" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);// CompleteLayout.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { LayoutProvider } from '../Components/MenuComponent/LayoutProvider';
import { Navbar } from '../Components/MenuComponent/Navbar';
import { Sidebar } from '../Components/MenuComponent/Sidebar';
import { T1ShippingBanner } from '../Components/MenuComponent/T1ShippingBanner';
import HomeIcon from '../assets/menus/inactive/home-inactive.svg';
import PackageIcon from '../assets/menus/inactive/shipping-inactive.svg';
import AnalyticsIcon from '../assets/menus/inactive/finances-inactive.svg';
import SettingsIcon from '../assets/menus/inactive/settings-inactive.svg';

// Mock data
const mockUser = {
  name: 'Juan Pérez',
  email: 'juan.perez@empresa.com',
  storeId: '123'
};

const mockStores = [
  { id: 123, name: 'Mi Tienda Principal' },
  { id: 124, name: 'Sucursal Norte' },
  { id: 125, name: 'Tienda Online' }
];
// Mock del ícono del menú como string también
const MenuInActiveIcon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTMgMTJIMjFNMyA2SDIxTTMgMThIMjEiIHN0cm9rZT0iIzZCNzI4MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=';

const mockMenuPaths = [
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
const MockBalanceBanner = ({ className }: { className?: string }) => (
  <div className={`${className} bg-green-100 p-2 rounded text-center`}>
    <div className="text-xs font-semibold text-green-800">Balance</div>
    <div className="text-sm font-bold text-green-900">$1,250.00</div>
  </div>
);

const MockBottomBanner = () => (
  <div className="bg-gray-100 p-3 text-center text-xs text-gray-600">
    © 2024 T1 Shipping - v2.1.0
  </div>
);

// Componente principal que integra todo
function CompleteLayoutDemo(props: any) {
  const [currentPath, setCurrentPath] = useState('/dashboard');
  const [windowWidth, setWindowWidth] = useState(1200);

  // Simular cambio de tamaño de ventana
  const simulateResize = (width: number) => {
    setWindowWidth(width);
    // Simular resize event
    window.dispatchEvent(new Event('resize'));
  };

  return (
    <LayoutProvider
      initialSidebarReduce={props.initialSidebarReduce || false}
      reduceBreakpoint={props.reduceBreakpoint || 1110}
      mobileBreakpoint={props.mobileBreakpoint || 768}
      onSidebarOpenChange={(open) => console.log('🔄 Sidebar open changed:', open)}
      onSidebarReduceChange={(reduce) => console.log('🔄 Sidebar reduce changed:', reduce)}
    >
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Navbar */}
        <Navbar
          className="bg-white shadow-sm border-b z-30"
          user={mockUser}
          stores={mockStores}
          currentStore={mockStores[0]}
          showBalance={props.showBalance}
          showSearchInput={props.showSearchInput}
          SearchComponent={MockSearchComponent}
          MenuIcon={<MockMenuIcon />}
          t1SelectorConfig={{
            storeBaseUrl: 'https://store.example.com/',
            paymentBaseUrl: 'https://payment.example.com/',
            ecosystemTitle: 'Ecosistema T1'
          }}
          onLogout={() => console.log('🔐 Logout clicked')}
          onSearch={(data) => console.log('🔍 Search:', data.search)}
          onStoreChange={(storeId) => console.log('🏪 Store changed:', storeId)}
          onNavigate={(path) => {
            console.log('🧭 Navbar navigate:', path);
            setCurrentPath(path);
          }}
        />

        {/* Layout principal con Sidebar */}
        <div className="flex flex-1 relative">
          {/* Sidebar */}
          <Sidebar
            menuPaths={mockMenuPaths}
            TopBanner={T1ShippingBanner}
            BottomBanner={MockBottomBanner}
            BalanceBanner={MockBalanceBanner}
            showCreateButton={props.showCreateButton}
            showBalance={props.showSidebarBalance}
            createButtonText="+ Crear envío"
            createButtonPath="/shipments/create"
            currentUserId={mockUser.storeId.toString()}
            restrictedPaths={props.restrictedPaths || []}
            onNavigate={(path) => {
              console.log('🧭 Sidebar navigate:', path);
              setCurrentPath(path);
            }}
            onCreateClick={() => console.log('➕ Create button clicked')}
          />

          {/* Contenido principal */}
          <main className="flex-1 p-6 transition-all duration-300 ease-in-out">
            <div className="bg-white rounded-lg shadow-sm p-6 max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold mb-6 text-gray-900">
                🎛️ Complete Layout Demo
              </h1>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Controles de testing */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-4">🎮 Controles de Testing</h3>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <button 
                        onClick={() => simulateResize(1400)}
                        className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        Desktop (1400px)
                      </button>
                      <button 
                        onClick={() => simulateResize(1000)}
                        className="px-3 py-1 text-xs bg-orange-500 text-white rounded hover:bg-orange-600"
                      >
                        Tablet (1000px)
                      </button>
                      <button 
                        onClick={() => simulateResize(600)}
                        className="px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Móvil (600px)
                      </button>
                    </div>
                    <p className="text-xs text-blue-700">
                      Simulado: {windowWidth}px (redimensiona también la ventana real)
                    </p>
                  </div>
                </div>

                {/* Estado actual */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-900 mb-4">📊 Estado Actual</h3>
                  <div className="text-sm space-y-1">
                    <p><strong>Ruta:</strong> {currentPath}</p>
                    <p><strong>Usuario:</strong> {mockUser.name}</p>
                    <p><strong>Tienda:</strong> {mockStores[0].name}</p>
                    <p className="text-xs text-green-700 mt-2">
                      ℹ️ Abre la consola para ver los logs detallados
                    </p>
                  </div>
                </div>
              </div>

              {/* Funcionalidades */}
              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <h3 className="font-bold text-purple-900 mb-4">🚀 Funcionalidades Integradas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">🎛️ Controles Sincronizados:</h4>
                    <ul className="space-y-1 text-purple-700">
                      <li>• Botón reducir/expandir en T1ShippingBanner</li>
                      <li>• Sidebar responde inmediatamente</li>
                      <li>• Estados compartidos via LayoutProvider</li>
                      <li>• Hover effects coordinados</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">📱 Responsive Automático:</h4>
                    <ul className="space-y-1 text-purple-700">
                      <li>• Desktop: Sidebar completo</li>
                      <li>• Tablet: Auto-reduce con hover</li>
                      <li>• Móvil: Overlay con toggle</li>
                      <li>• Navbar se adapta automáticamente</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pruebas recomendadas */}
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-bold text-yellow-900 mb-4">🧪 Pruebas Recomendadas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">🖱️ Interacciones:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-yellow-700">
                      <li>Click en botón ⤢/⤡ (T1ShippingBanner)</li>
                      <li>Hover sobre sidebar reducido</li>
                      <li>Abrir/cerrar submenús</li>
                      <li>Click en T1Selector (grid)</li>
                      <li>Cambiar tienda en StoreSelector</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">📐 Responsive:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-yellow-700">
                      <li>Usar botones de simulación arriba</li>
                      <li>Redimensionar ventana manualmente</li>
                      <li>Probar en móvil (botón hamburguesa)</li>
                      <li>Verificar que todo se sincroniza</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Logs en tiempo real */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">📝 Logs en Tiempo Real</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Abre las DevTools → Console para ver los logs detallados de cada acción:
                </p>
                <div className="bg-black text-green-400 p-3 rounded font-mono text-xs">
                  <div>🔄 Sidebar reduce changed: true</div>
                  <div>🧭 Sidebar navigate: /shipments/create</div>
                  <div>🔍 Search: ABC123</div>
                  <div>🏪 Store changed: 124</div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </LayoutProvider>
  );
}

const meta: Meta<typeof CompleteLayoutDemo> = {
  title: 'Complete Layout/Integrated Demo',
  component: CompleteLayoutDemo,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Demostración completa de la integración entre Sidebar, Navbar y T1ShippingBanner usando LayoutProvider para sincronización de estados.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    showBalance: {
      control: 'boolean',
      description: 'Mostrar banner de balance en navbar'
    },
    showSearchInput: {
      control: 'boolean', 
      description: 'Mostrar campo de búsqueda en navbar'
    },
    showCreateButton: {
      control: 'boolean',
      description: 'Mostrar botón crear en sidebar'
    },
    showSidebarBalance: {
      control: 'boolean',
      description: 'Mostrar banner de balance en sidebar'
    },
    initialSidebarReduce: {
      control: 'boolean',
      description: 'Estado inicial del sidebar (reducido/expandido)'
    },
    reduceBreakpoint: {
      control: { type: 'number', min: 800, max: 1400, step: 50 },
      description: 'Ancho de pantalla donde se reduce automáticamente'
    },
    mobileBreakpoint: {
      control: { type: 'number', min: 500, max: 900, step: 50 },
      description: 'Ancho de pantalla considerado móvil'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showBalance: true,
    showSearchInput: true,
    showCreateButton: true,
    showSidebarBalance: true,
    initialSidebarReduce: false,
    reduceBreakpoint: 1110,
    mobileBreakpoint: 768,
    restrictedPaths: []
  }
};

export const ReducedSidebar: Story = {
  args: {
    ...Default.args,
    initialSidebarReduce: true,
    reduceBreakpoint: 2000 // Forzar reducción
  }
};

export const MinimalLayout: Story = {
  args: {
    showBalance: false,
    showSearchInput: false,
    showCreateButton: false,
    showSidebarBalance: false,
    initialSidebarReduce: false,
    restrictedPaths: ['/analytics', '/settings']
  }
};

export const MobileFirst: Story = {
  args: {
    ...Default.args,
    mobileBreakpoint: 2000 // Forzar vista móvil
  }
};

export const CustomBreakpoints: Story = {
  args: {
    ...Default.args,
    reduceBreakpoint: 1300,
    mobileBreakpoint: 600
  }
};