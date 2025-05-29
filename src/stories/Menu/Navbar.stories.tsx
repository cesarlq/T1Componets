// Navbar.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Navbar } from '../../Components/MenuComponent/Navbar';
const mockUser = {
  name: 'Juan Pérez',
  email: 'juan.perez@empresa.com',
  storeId: 123
};

const mockStores = [
  { id: 123, name: 'Mi Tienda Principal' },
  { id: 124, name: 'Sucursal Norte' },
  { id: 125, name: 'Tienda Online' },
  { id: 126, name: 'E-commerce Store' }
];

// Mock T1ShippingBanner - componente fijo interno
const MockT1ShippingBanner: React.ComponentType<{ 
  brandText?: string;
  onNavigate?: (path: string) => void 
}> = ({ brandText = 'envíos', onNavigate }) => (
  <div className="flex items-center gap-3">
    <button 
      className="hidden lg:block bg-transparent border-none cursor-pointer p-1 hover:opacity-70"
      onClick={() => console.log('Toggle sidebar reduce')}
      aria-label="Collapse sidebar"
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18M6 6L18 18" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </button>
    <button 
      onClick={() => onNavigate?.('/dashboard')}
      className="flex items-center gap-2 bg-transparent border-none cursor-pointer hover:opacity-80"
      aria-label={`Navigate to ${brandText} dashboard`}
    >
      <div className="w-7 h-6 bg-red-500 rounded flex items-center justify-center text-white font-bold text-sm">
        T1
      </div>
      <span className="text-2xl font-medium text-gray-800">{brandText}</span>
    </button>
  </div>
);

const MockBalanceBanner: React.ComponentType<{ className?: string }> = ({ className }) => (
  <div className={`${className} bg-gradient-to-r from-green-100 to-green-200 p-3 rounded-lg text-center shadow-sm`}>
    <div className="text-xs font-semibold text-green-800">Balance disponible</div>
    <div className="text-lg font-bold text-green-900">$1,250.75</div>
    <div className="text-xs text-green-700">MXN</div>
  </div>
);

const MockT1Selector: React.ComponentType<{ 
  className?: string;
  storeId?: string;
  storeBaseUrl?: string;
  shippingBaseUrl?: string;
  paymentBaseUrl?: string;
  ecosystemTitle?: string;
}> = ({ className, ecosystemTitle = 'Ecosistema' }) => (
  <div className={`${className} relative`}>
    <button 
      className="bg-transparent p-2 rounded hover:bg-gray-100 transition-colors group"
      aria-label={`Abrir ${ecosystemTitle}`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="group-hover:text-blue-600">
        <circle cx="5" cy="5" r="2" fill="currentColor"/>
        <circle cx="12" cy="5" r="2" fill="currentColor"/>
        <circle cx="19" cy="5" r="2" fill="currentColor"/>
        <circle cx="5" cy="12" r="2" fill="currentColor"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
        <circle cx="19" cy="12" r="2" fill="currentColor"/>
        <circle cx="5" cy="19" r="2" fill="currentColor"/>
        <circle cx="12" cy="19" r="2" fill="currentColor"/>
        <circle cx="19" cy="19" r="2" fill="currentColor"/>
      </svg>
    </button>
  </div>
);

const MockStoreSelector: React.ComponentType<{
  className?: string;
  stores?: any[];
  currentStore?: any;
  onStoreChange?: (storeId: number) => void;
  createStoreUrl?: string;
}> = ({ className, stores = [], currentStore, onStoreChange }) => (
  <div className={`${className} relative`}>
    {currentStore && (
      <button 
        className="flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-2 transition-colors shadow-sm"
        onClick={() => console.log('Store selector clicked')}
        aria-label={`Tienda actual: ${currentStore.name}`}
      >
        <div 
          className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-sm"
          style={{ backgroundColor: '#51AF70' }}
        >
          {currentStore.name[0]}{currentStore.name.split(' ')[1]?.[0] || currentStore.name[1]}
        </div>
        <div className="flex flex-col items-start">
          <span className="text-sm font-semibold text-gray-900">{currentStore.name}</span>
          <span className="text-xs text-gray-500">ID: {currentStore.id}</span>
        </div>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="ml-1">
          <path d="M6 9L12 15L18 9" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    )}
  </div>
);

const MockSearchComponent: React.ComponentType<{
  onSubmit: (data: { search: string }) => void;
  textFieldProps?: any;
  className?: string;
  textFieldClassName?: string;
}> = ({ onSubmit, textFieldProps, className, textFieldClassName }) => (
  <div className={className}>
    <div className="relative">
      <input
        {...textFieldProps}
        className={`${textFieldClassName} pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full max-w-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            onSubmit({ search: (e.target as HTMLInputElement).value });
          }
        }}
      />
      <svg 
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  </div>
);

const MockProfile: React.ComponentType<{
  email?: string;
  name?: string;
}> = ({ email, name }) => (
  <div className="px-6 py-4 border-b border-gray-100">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
        {name?.[0]?.toUpperCase() || 'U'}
      </div>
      <div>
        <div className="font-semibold text-gray-900">{name || 'Usuario'}</div>
        <div className="text-sm text-gray-600">{email || 'usuario@email.com'}</div>
      </div>
    </div>
  </div>
);

// Wrapper component - El T1ShippingBanner ahora es fijo interno
const NavbarWrapper = (props: any) => (
  <div>
    <div style={{ minHeight: '100%', background: '#f8fafc' }}>
      <Navbar
        {...props}
        // T1ShippingBanner ya no se pasa como prop - es interno
        BalanceBanner={MockBalanceBanner}
        T1Selector={MockT1Selector}
        StoreSelector={MockStoreSelector}
        SearchComponent={MockSearchComponent}
        Profile={MockProfile}
      />
      
      {/* Content area for visual context */}
      <div style={{ padding: '24px' }}>
        <div style={{ 
          background: 'white', 
          padding: '32px', 
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h1 style={{ 
            margin: '0 0 24px 0', 
            color: '#1f2937',
            fontSize: '28px',
            fontWeight: '700'
          }}>
            🚀 Navbar Component Demo
          </h1>
          
          <p style={{ 
            color: '#6b7280', 
            marginBottom: '32px',
            fontSize: '16px',
            lineHeight: '1.6'
          }}>
            Demostración del componente Navbar con T1ShippingBanner fijo - solo el título es configurable.
          </p>
          
          <div style={{ 
            background: '#f9fafb', 
            padding: '24px', 
            borderRadius: '8px',
            marginBottom: '24px',
            border: '1px solid #e5e7eb'
          }}>
            <h3 style={{ 
              margin: '0 0 16px 0', 
              color: '#374151',
              fontSize: '18px',
              fontWeight: '600'
            }}>
              ✨ Funcionalidades incluidas:
            </h3>
            <ul style={{ 
              margin: 0, 
              paddingLeft: '20px', 
              color: '#6b7280',
              lineHeight: '1.8'
            }}>
              <li><strong>Menú hamburguesa:</strong> Botón responsive para móvil</li>
              <li><strong>T1ShippingBanner:</strong> Logo y navegación principal</li>
              <li><strong>StoreSelector:</strong> Selector de tienda con info detallada</li>
              <li><strong>Campo de búsqueda:</strong> Con placeholder configurable</li>
              <li><strong>Banner de balance:</strong> Información financiera</li>
              <li><strong>T1Selector:</strong> Grid de aplicaciones del ecosistema</li>
              <li><strong>Menú de perfil:</strong> Avatar del usuario con opciones</li>
              <li><strong>Iconos T1Icon:</strong> Sistema de iconos personalizado</li>
            </ul>
          </div>

          <div style={{ 
            background: '#eff6ff', 
            padding: '24px', 
            borderRadius: '8px',
            border: '1px solid #bfdbfe'
          }}>
            <h3 style={{ 
              margin: '0 0 16px 0', 
              color: '#1d4ed8',
              fontSize: '18px',
              fontWeight: '600'
            }}>
              🎮 Pruebas interactivas:
            </h3>
            <ul style={{ 
              margin: 0, 
              paddingLeft: '20px', 
              color: '#1e40af',
              lineHeight: '1.8'
            }}>
              <li>Haz click en el logo T1 para navegación</li>
              <li>Selecciona diferentes tiendas desde el dropdown</li>
              <li>Prueba el campo de búsqueda con tracking</li>
              <li>Abre el grid de aplicaciones T1Selector</li>
              <li>Interactúa con el menú de perfil (avatar)</li>
              <li>Redimensiona la ventana para ver diseño responsive</li>
              <li>Observa los iconos T1Icon funcionando correctamente</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const meta: Meta<typeof NavbarWrapper> = {
  title: 'Menu/Navbar',
  component: NavbarWrapper,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Componente Navbar completo con T1Icon, gestión de estado, y funcionalidades responsive.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    shippingBannerTitle: {
      control: 'text',
      description: 'Título que aparece en el T1ShippingBanner (componente fijo)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'envíos' }
      }
    },
    iconProfile: {
      control: 'text',
      description: 'Cambia/Agrega Imagen del perfil'
    },
    colorProfile: {
      control: 'text',
      description: 'Cambia color del icno de perfil'
    },
    showBalance: {
      control: 'boolean',
      description: 'Mostrar banner de balance financiero'
    },
    showSearchInput: {
      control: 'boolean',
      description: 'Mostrar campo de búsqueda con tracking'
    },
    showInfoBand: {
      control: 'boolean',
      description: 'Mostrar banda de información superior'
    },
    searchPlaceholder: {
      control: 'text',
      description: 'Placeholder del campo de búsqueda'
    },
    trackingUrl: {
      control: 'text',
      description: 'URL base para tracking de envíos'
    },
    accountUrl: {
      control: 'text',
      description: 'URL base para gestión de cuenta'
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
    shippingBannerTitle: 'envíos', // Solo título configurable
    showBalance: true,
    showSearchInput: true,
    showInfoBand: false,
    
    t1SelectorConfig: {
      storeBaseUrl: 'https://tienda.t1.com/',
      shippingBaseUrl: 'https://envios.t1.com/',
      paymentBaseUrl: 'https://pagos.t1.com/',
      ecosystemTitle: 'Ecosistema T1'
    },
    
    searchPlaceholder: 'Número de rastreo o código de envío',
    trackingUrl: 'https://tracking.t1.com/track?id',
    accountUrl: 'https://cuenta.t1.com/store/',
    
    texts: {
      manageAccount: 'Gestionar mi cuenta',
      logout: 'Cerrar sesión',
      searchPlaceholder: 'Buscar envío...'
    },
    
    // Event handlers con logs detallados
    onLogout: () => {
      console.log('🔐 Usuario cerrando sesión');
      alert('Cerrando sesión...');
    },
    onSearch: (data: string) => {
      console.log('🔍 Búsqueda realizada:', data);
      alert(`Buscando: ${data.search}`);
    },
    onStoreChange: (storeId: any) => {
      console.log('🏪 Cambio de tienda a ID:', storeId);
      alert(`Cambiando a tienda ID: ${storeId}`);
    },
    onNavigate: (path: any) => {
      console.log('🧭 Navegando a:', path);
      alert(`Navegando a: ${path}`);
    },
    onManageAccount: (user: { name: any; }) => {
      console.log('👤 Gestionando cuenta de:', user);
      alert(`Gestionando cuenta de: ${user.name}`);
    }
  }
};

export const WithoutUser: Story = {
  args: {
    ...Default.args,
    user: null,
    showBalance: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Navbar sin usuario logueado - no muestra avatar ni balance.'
      }
    }
  }
};

export const MinimalNavbar: Story = {
  args: {
    ...Default.args,
    user: null,
    showBalance: false,
    showSearchInput: false,
    stores: [],
    currentStore: undefined,
    shippingBannerTitle: 'T1'
  },
  parameters: {
    docs: {
      description: {
        story: 'Versión mínima del Navbar - solo logo y elementos básicos.'
      }
    }
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
    shippingBannerTitle: 'tracking',
    searchPlaceholder: 'Ingresa tu código de rastreo...',
    trackingUrl: 'https://tracking.ejemplo.com/buscar?codigo'
  },
  parameters: {
    docs: {
      description: {
        story: 'Navbar enfocado en búsqueda - ideal para páginas de tracking.'
      }
    }
  }
};

export const WithInfoBand: Story = {
  args: {
    ...Default.args,
    showInfoBand: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Navbar con banda de información superior activada.'
      }
    }
  }
};

export const CustomTexts: Story = {
  args: {
    ...Default.args,
    shippingBannerTitle: 'logistics',
    texts: {
      manageAccount: 'Mi Perfil Empresarial',
      logout: 'Salir del Sistema',
      searchPlaceholder: 'Código de envío o guía...'
    },
    searchPlaceholder: 'Buscar por número de guía...',
    t1SelectorConfig: {
      ...(Default.args?.t1SelectorConfig ?? {}),
      ecosystemTitle: 'Suite Empresarial'
    },
    iconProfile: './image.png'
  },
  parameters: {
    docs: {
      description: {
        story: 'Navbar con textos personalizados - demuestra flexibilidad de configuración.'
      }
    }
  }
};

export const MultipleStores: Story = {
  args: {
    ...Default.args,
    stores: [
      ...mockStores,
      { id: 127, name: 'Sucursal Centro' },
      { id: 128, name: 'Mall Plaza Norte' },
      { id: 129, name: 'Outlet Store' },
      { id: 130, name: 'Pop-up Polanco' }
    ],
    currentStore: { id: 127, name: 'Sucursal Centro' },
    shippingBannerTitle: 'comercios'
  },
  parameters: {
    docs: {
      description: {
        story: 'Navbar con múltiples tiendas - demuestra selector con muchas opciones.'
      }
    }
  }
};