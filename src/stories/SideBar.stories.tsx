import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

// Importamos imágenes de muestra (esto dependerá de tu configuración, usa rutas locales para Storybook)
import T1Logo from '../assets/marketplaces-logos/t1-logo.svg';
import T1IconReduced from '../assets/marketplaces-logos/t1-logo.svg';
import T1EnviosLogo from '../assets/sidebar/t1EnviosLogo.svg';
import T1EnviosIcon from '../assets/sidebar/t1EnviosIcon.svg';
import T1ComerciosLogo from '../assets/sidebar/t1ComerciosLogo.svg';
import T1ComerciosIcon from '../assets/sidebar/t1ComerciosIcon.svg';
import T1PagosLogo from '../assets/sidebar/t1PagosIcon.svg';
import T1PagosIcon from '../assets/sidebar/t1PagosIcon.svg';
import ProductsIcon from '../assets/menu-icons/products-icon.svg';
import OrdersIcon from '../assets/menu-icons/orders-icon.svg';
import SettingsIcon from '../assets/menu-icons/settings-icon.svg';
import UsersIcon from '../assets/menu-icons/clients-icon.svg';
import SideBar from '../Components/SideBar';

const meta: Meta<typeof SideBar> = {
  title: 'Components/SideBar',
  component: SideBar,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story:any) => (
      <div style={{ height: '100vh', display: 'flex' }}>
        <Story />
        <div style={{ padding: '20px', flex: 1 }}>
          <h1>Content Area</h1>
          <p>Interact with the sidebar on the left to see how it works.</p>
        </div>
      </div>
    ),
  ] as any[],
  argTypes: {
    onServiceOptionClick: { action: 'Service Option Clicked' },
    onSidebarReduceChange: { action: 'Sidebar Reduce Changed' },
    onClickMenuItem: { action: 'Menu Item Clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof SideBar>;

// Datos de ejemplo para usar en todas las stories
const serviceOptions = [
  {
    name: 'Pagos',
    icon: T1PagosLogo,
    iconReduced: T1PagosIcon,
    type: 'pagos',
    width: 85
  },
  {
    name: 'Envíos',
    icon: T1EnviosLogo,
    iconReduced: T1EnviosIcon,
    type: 'envios',
    width: 100
  },
  {
    name: 'Comercios',
    icon: T1ComerciosLogo,
    iconReduced: T1ComerciosIcon,
    type: 'comercios',
    width: 125
  }
];

const menuItems = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    path: '/dashboard',
  },
  {
    id: 'products',
    title: 'Productos',
    icon: ProductsIcon,
    subItems: [
      {
        id: 'all-products',
        title: 'Todos los productos',
        path: '/products'
      },
      {
        id: 'add-product',
        title: 'Añadir producto',
        path: '/products/add'
      },
      {
        id: 'categories',
        title: 'Categorías',
        path: '/products/categories'
      }
    ]
  },
  {
    id: 'orders',
    title: 'Pedidos',
    path: '/orders',
    icon: OrdersIcon
  },
  {
    id: 'users',
    title: 'Usuarios',
    icon: UsersIcon,
    subItems: [
      {
        id: 'customers',
        title: 'Clientes',
        path: '/users/customers'
      },
      {
        id: 'staff',
        title: 'Personal',
        path: '/users/staff'
      }
    ]
  },
  {
    id: 'settings',
    title: 'Configuración',
    path: '/settings',
    icon: SettingsIcon
  }
];

// Story base - Sidebar expandido por defecto
export const Default: Story = {
  args: {
    testMode: true,
    logoFull: T1Logo,
    logoReduced: T1IconReduced,
    servicePaths: serviceOptions,
    menuItems: menuItems,
    initialReduceState: false,
    breakpointWidth: 1110,
  },
};

// Story con sidebar reducido
export const Reduced: Story = {
  args: {
    ...Default.args,
    initialReduceState: true,
  },
};

// Story con algunos elementos del menú ocultos
export const WithHiddenItems: Story = {
  args: {
    ...Default.args,
    menuItems: menuItems.map((item, index) => 
      index === 3 ? { ...item, hidden: true } : item
    ),
  },
};

// Story con tema oscuro
export const DarkTheme: Story = {
  args: {
    ...Default.args,
    customStyles: {
      sidebar: {
        backgroundColor: '#222',
        color: '#fff',
      },
      header: {
        borderBottom: '1px solid #333',
      },
      submenu: {
        backgroundColor: '#333',
        borderBottom: '1px solid #444',
      },
      buttonReduce: {
        backgroundColor: '#444',
        color: '#fff',
      },
    },
  },
};

// Story con nombre largo de menú para probar el overflow
export const LongMenuNames: Story = {
  args: {
    ...Default.args,
    menuItems: menuItems.map((item, index) => 
      index === 2 ? { ...item, title: 'Este es un título muy largo para probar cómo se ve' } : item
    ),
  },
};

// Story con menú activo y submenú abierto
export const WithActiveItem: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    return (
      <SideBar
        {...args}
        customStyles={{
          ...args.customStyles,
        }}
      />
    );
  },
  play: async ({ canvasElement }) => {
    // Aquí podrías añadir testing-library para simular interacciones
    // pero requeriría configuración adicional en Storybook
  },
};

// Story responsivo
export const Responsive: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      // Puedes configurar viewports personalizados en el archivo main de Storybook
      defaultViewport: 'tablet',
    },
  },
};

// Story sin opciones de servicio
export const NoServiceOptions: Story = {
  args: {
    ...Default.args,
    servicePaths: [],
  },
};

// Story con estilos personalizados
export const CustomStyles: Story = {
  args: {
    ...Default.args,
    customStyles: {
      sidebar: {
        backgroundColor: '#f5f5f5',
        borderRight: '1px solid #e0e0e0',
      },
      header: {
        backgroundColor: '#ffffff',
        borderBottom: '2px solid #f0f0f0',
        padding: '15px',
      },
      buttonReduce: {
        backgroundColor: '#d9534f',
        color: 'white',
        boxShadow: '0 2px 5px rgba(217, 83, 79, 0.3)',
      },
    },
  },
};