const MockStoreSelector: React.ComponentType<{
  className?: string;
  stores?: any[];
  currentStore?: any;
  onStoreChange?: (storeId: number) => void;
  createStoreUrl?: string;
}> = ({ className, stores = [], currentStore, onStoreChange }) => (
  <div className={`${className} relative`}>
    {currentStore && (
      <button className="flex items-center gap-2 bg-transparent hover:bg-gray-100 rounded-lg p-2 transition-colors">
        <div 
          className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs font-bold"
          style={{ backgroundColor: '#51AF70' }}
        >
          {currentStore.name[0]}{currentStore.name.split(' ')[1]?.[0] || currentStore.name[1]}
        </div>
        <span className="hidden lg:inline text-xs font-bold">{currentStore.name}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
          <path d="M6 9L12 15L18 9" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    )}
  </div>
);// Navbar.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { LayoutProvider } from '../Components/MenuComponent/LayoutProvider';
import { Navbar } from '../Components/MenuComponent/Navbar';

const mockUser = {
  name: 'Juan Pérez',
  email: 'juan.perez@empresa.com',
  storeId: 123
};

const mockStores = [
  { id: 123, name: 'Mi Tienda Principal' },
  { id: 124, name: 'Sucursal Norte' },
  { id: 125, name: 'Tienda Online' }
];

// Mock components que no dependan de imports problemáticos
const MockT1ShippingBanner: React.ComponentType<{ className?: string; onNavigate?: (path: string) => void }> = ({ className, onNavigate }) => (
  <div className={`${className} flex items-center gap-3`}>
    <button 
      className="hidden lg:block bg-transparent border-none cursor-pointer p-1 hover:opacity-70"
      onClick={() => console.log('Toggle sidebar reduce')}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18M6 6L18 18" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </button>
    <button 
      onClick={() => onNavigate?.('/dashboard')}
      className="flex items-center gap-2 bg-transparent border-none cursor-pointer hover:opacity-80"
    >
      <div className="w-7 h-6 bg-red-500 rounded flex items-center justify-center text-white font-bold text-sm">
        T1
      </div>
      <span className="text-2xl font-medium text-gray-800">envíos</span>
    </button>
  </div>
);

const MockBalanceBanner: React.ComponentType<{ className?: string }> = ({ className }) => (
  <div className={`${className} bg-green-100 p-2 rounded text-center`}>
    <div className="text-xs font-semibold text-green-800">Balance</div>
    <div className="text-sm font-bold text-green-900">$1,250.00</div>
  </div>
);

const MockT1Selector: React.ComponentType<{ className?: string }> = ({ className }) => (
  <div className={`${className} relative`}>
    <button className="bg-transparent p-1 rounded hover:bg-gray-100 transition-colors">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
        <circle cx="5" cy="5" r="2" fill="#6B7280"/>
        <circle cx="12" cy="5" r="2" fill="#6B7280"/>
        <circle cx="19" cy="5" r="2" fill="#6B7280"/>
        <circle cx="5" cy="12" r="2" fill="#6B7280"/>
        <circle cx="12" cy="12" r="2" fill="#6B7280"/>
        <circle cx="19" cy="12" r="2" fill="#6B7280"/>
        <circle cx="5" cy="19" r="2" fill="#6B7280"/>
        <circle cx="12" cy="19" r="2" fill="#6B7280"/>
        <circle cx="19" cy="19" r="2" fill="#6B7280"/>
      </svg>
    </button>
  </div>
);

const MockSearchComponent: React.ComponentType<{
  onSubmit: (data: { search: string }) => void;
  textFieldProps?: any;
  className?: string;
}> = ({ onSubmit, textFieldProps, className }) => (
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

const MockMenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M3 12H21M3 6H21M3 18H21" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Wrapper component for layout context
const NavbarWrapper = (props: any) => (
  <LayoutProvider>
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <Navbar
        {...props}
        T1ShippingBanner={MockT1ShippingBanner}
        BalanceBanner={MockBalanceBanner}
        T1Selector={MockT1Selector}
        StoreSelector={MockStoreSelector}
        SearchComponent={MockSearchComponent}
      />
      
      {/* Content area for visual context */}
      <div style={{ padding: '20px' }}>
        <div style={{ 
          background: 'white', 
          padding: '20px', 
          borderRadius: '10px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{ margin: '0 0 20px 0', color: '#333' }}>
            📋 Navbar Component Demo
          </h1>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Esta es una demostración del componente Navbar con todos sus elementos funcionales.
          </p>
          
          <div style={{ 
            background: '#f8f9fa', 
            padding: '15px', 
            borderRadius: '8px',
            marginBottom: '20px'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>🧪 Funcionalidades incluidas:</h3>
            <ul style={{ margin: 0, paddingLeft: '20px', color: '#666' }}>
              <li>Botón de menú hamburguesa (móvil)</li>
              <li>T1ShippingBanner con botón reducir</li>
              <li>StoreSelector con dropdown</li>
              <li>Campo de búsqueda configurable</li>
              <li>Banner de balance</li>
              <li>T1Selector (grid de aplicaciones)</li>
              <li>Menú de perfil de usuario</li>
            </ul>
          </div>

          <div style={{ 
            background: '#e3f2fd', 
            padding: '15px', 
            borderRadius: '8px' 
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#1976d2' }}>
              🎮 Pruebas interactivas:
            </h3>
            <ul style={{ margin: 0, paddingLeft: '20px', color: '#666' }}>
              <li>Haz click en el botón T1ShippingBanner</li>
              <li>Selecciona diferentes tiendas</li>
              <li>Prueba el campo de búsqueda</li>
              <li>Click en el grid de T1Selector</li>
              <li>Abre el menú de perfil (inicial del usuario)</li>
              <li>Redimensiona la ventana para ver responsive</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </LayoutProvider>
);

const meta: Meta<typeof NavbarWrapper> = {
  title: 'Components/Navbar',
  component: NavbarWrapper,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    showBalance: {
      control: 'boolean',
      description: 'Mostrar banner de balance'
    },
    showSearchInput: {
      control: 'boolean',
      description: 'Mostrar campo de búsqueda'
    },
    showInfoBand: {
      control: 'boolean',
      description: 'Mostrar banda de información superior'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: '',
    user: mockUser,
    stores: mockStores,
    currentStore: mockStores[0],
    showBalance: true,
    showSearchInput: true,
    showInfoBand: false,
    
    t1SelectorConfig: {
      storeBaseUrl: 'https://store.example.com/',
      paymentBaseUrl: 'https://payment.example.com/',
      ecosystemTitle: 'Ecosistema'
    },
    onLogout: () => console.log('🔐 Logout clicked'),
    onSearch: (data: string) => console.log('🔍 Search:', data.search),
    onStoreChange: (storeId: any) => console.log('🏪 Store changed:', storeId),
    onNavigate: (path: any) => console.log('🧭 Navigate:', path),
  }
};

export const WithoutUser: Story = {
  args: {
    ...Default.args,
    user: null,
    showBalance: false,
  }
};

export const MinimalNavbar: Story = {
  args: {
    ...Default.args,
    showBalance: false,
    showSearchInput: false,
    stores: [],
    currentStore: undefined,
  }
};

export const SearchOnly: Story = {
  args: {
    ...Default.args,
    user: null,
    stores: [],
    currentStore: undefined,
    showBalance: false,
    showSearchInput: true,
    searchPlaceholder: 'Buscar envíos...',
  }
};

export const WithInfoBand: Story = {
  args: {
    ...Default.args,
    showInfoBand: true,
  }
};

export const CustomTexts: Story = {
  args: {
    ...Default.args,
    texts: {
      manageAccount: 'Mi Perfil',
      logout: 'Salir',
      searchPlaceholder: 'Buscar pedidos...'
    },
    searchPlaceholder: 'Buscar pedidos...',
  }
};