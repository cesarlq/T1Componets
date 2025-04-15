import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import T1Logo from '../assets/marketplaces-logos/t1-logo.svg';
import T1IconReduced from '../assets/marketplaces-logos/t1-logo.svg';
import T1EnviosLogo from '../assets/sidebar/t1EnviosLogo.svg';
import T1EnviosIcon from '../assets/sidebar/t1EnviosIcon.svg';
import T1ComerciosLogo from '../assets/sidebar/t1ComerciosLogo.svg';
import T1ComerciosIcon from '../assets/sidebar/t1ComerciosIcon.svg';
import ProductsIcon from '../assets/menu-icons/products-icon.svg';
import OrdersIcon from '../assets/menu-icons/orders-icon.svg';
import SettingsIcon from '../assets/menu-icons/settings-icon.svg';
import UsersIcon from '../assets/menu-icons/clients-icon.svg';
import homeIcon from '../assets/menu-icons/home-icon.svg';
import Sidebar from '../Components/SideBar';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', display: 'flex' }}>
        <Story />
        <div style={{ padding: '20px', flex: 1 }}>
          <h1>Content Area</h1>
          <p>Interact with the sidebar on the left to see how it works.</p>
        </div>
      </div>
    ),
  ],
  argTypes: {
    onServiceOptionClick: { action: 'Service Option Clicked' },
    onSidebarReduceChange: { action: 'Sidebar Reduce Changed' },
    onClickMenuItem: { action: 'Menu Item Clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

// Sample data for stories
const serviceOptions = [
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
    icon: homeIcon,
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

// Default Sidebar - Expanded
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

// Reduced Sidebar
export const Reduced: Story = {
  args: {
    ...Default.args,
    initialReduceState: true,
  },
};

// Sidebar with Hidden Menu Items
export const WithHiddenItems: Story = {
  args: {
    ...Default.args,
    menuItems: menuItems.map((item, index) => 
      index === 3 ? { ...item, hidden: true } : item
    ),
  },
};

// Dark Theme Sidebar
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

// Long Menu Names
export const LongMenuNames: Story = {
  args: {
    ...Default.args,
    menuItems: menuItems.map((item, index) => 
      index === 2 ? { ...item, title: 'Este es un título muy largo para probar cómo se ve' } : item
    ),
  },
};

// No Service Options
export const NoServiceOptions: Story = {
  args: {
    ...Default.args,
    servicePaths: [],
  },
};

// Custom Styles
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