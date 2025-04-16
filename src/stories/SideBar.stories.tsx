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

/**
 * `SideBar` is a navigational component for applications that provides a vertical menu
 * with expandable sections and service switching functionality.
 * 
 * The sidebar can be displayed in expanded or reduced states, and responsively adjusts
 * based on screen width. It supports hierarchical navigation with collapsible submenu items.
 * 
 * ## Features
 * - Expandable/collapsible navigation menu
 * - Service switching capability
 * - Responsive design with breakpoint control
 * - Submenu support for nested navigation
 * - Customizable styling
 * - Controlled or uncontrolled expand/collapse state
 * - Hidden items support for conditional navigation
 * 
 * The sidebar is commonly used as the main navigation element in dashboard-style applications
 * and admin interfaces.
 * 
 * @component
 */
const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
          A versatile vertical navigation sidebar component with expandable/collapsible functionality, 
          service switching, and responsive behavior.
          
          ## When to use
          - As the main navigation element in dashboard applications
          - In admin interfaces where hierarchical navigation is needed
          - When multiple services or sections need to be accessible from one interface
          - For applications requiring a clean, space-efficient navigation system
          
          ## Accessibility considerations
          - Supports keyboard navigation
          - Icon+text combinations improve recognition
          - Reduced state maintains recognizable icons for navigation
        `
      }
    }
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
    logoFull: {
      description: 'The full logo to display in expanded state'
    },
    logoReduced: {
      description: 'The reduced logo to display in collapsed state'
    },
    servicePaths: {
      description: 'Array of service options for service switching functionality'
    },
    menuItems: {
      description: 'Array of menu items and their potential submenus'
    },
    initialReduceState: {
      control: 'boolean',
      description: 'Initial state of the sidebar (expanded or reduced)'
    },
    breakpointWidth: {
      control: 'number',
      description: 'Width at which the sidebar automatically collapses (responsive behavior)'
    },
    customStyles: {
      control: 'object',
      description: 'Custom styles for different parts of the sidebar'
    },
    onServiceOptionClick: { 
      action: 'Service Option Clicked',
      description: 'Function called when a service option is clicked'
    },
    onSidebarReduceChange: { 
      action: 'Sidebar Reduce Changed', 
      description: 'Function called when the sidebar state changes between expanded and reduced'
    },
    onClickMenuItem: { 
      action: 'Menu Item Clicked',
      description: 'Function called when a menu item is clicked'
    },
    testMode: {
      control: 'boolean',
      description: 'Enables test mode to facilitate automated testing'
    }
  },
  tags: ['autodocs'],
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

/**
 * Default expanded view of the sidebar with all standard features enabled.
 * 
 * This example shows the sidebar in its expanded state with the full menu text visible.
 * It includes service options at the top and a complete menu structure with both direct
 * navigation items and expandable sections with subitems.
 */
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
  parameters: {
    docs: {
      description: {
        story: 'The default expanded sidebar showing service options and a full menu structure with expandable sections.'
      }
    }
  }
};

/**
 * Collapsed version of the sidebar showing only icons.
 * 
 * In the reduced state, the sidebar displays only icons to save space while
 * still providing navigation functionality. This is useful for maximizing
 * content area space while keeping navigation accessible.
 */
export const Reduced: Story = {
  args: {
    ...Default.args,
    initialReduceState: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'The sidebar in its collapsed state, showing only icons to save space while maintaining navigation functionality.'
      }
    }
  }
};

/**
 * Sidebar with conditionally hidden menu items.
 * 
 * This example demonstrates how certain menu items can be hidden based on
 * user permissions or application state. The hidden items do not appear in
 * the navigation at all.
 */
export const WithHiddenItems: Story = {
  args: {
    ...Default.args,
    menuItems: menuItems.map((item, index) => 
      index === 3 ? { ...item, hidden: true } : item
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates conditionally hidden menu items, which is useful for implementing permission-based navigation.'
      }
    }
  }
};

/**
 * Dark themed version of the sidebar.
 * 
 * This example shows how to customize the sidebar's appearance with a dark theme
 * using the customStyles prop. This is useful for applications with dark mode
 * or for creating visual distinction between different sections.
 */
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
  parameters: {
    docs: {
      description: {
        story: 'A dark-themed version of the sidebar using the customStyles prop to override default styling.'
      }
    }
  }
};

/**
 * Sidebar displaying menu items with very long titles.
 * 
 * This example tests how the sidebar handles menu items with exceptionally long
 * titles, demonstrating text truncation and overflow handling.
 */
export const LongMenuNames: Story = {
  args: {
    ...Default.args,
    menuItems: menuItems.map((item, index) => 
      index === 2 ? { ...item, title: 'Este es un título muy largo para probar cómo se ve' } : item
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Tests how the sidebar handles menu items with very long titles, demonstrating text truncation and overflow behavior.'
      }
    }
  }
};

/**
 * Sidebar without service switching functionality.
 * 
 * This example shows the sidebar without the service options section,
 * useful for applications that don't require service switching.
 */
export const NoServiceOptions: Story = {
  args: {
    ...Default.args,
    servicePaths: [],
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidebar configuration without service options section, for applications that don\'t need service switching functionality.'
      }
    }
  }
};

/**
 * Sidebar with extensive visual customization.
 * 
 * This example demonstrates the flexibility of the sidebar's styling system,
 * with custom colors, borders, shadows, and spacing applied to different sections.
 */
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
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the extensive styling customization options available for the sidebar component.'
      }
    }
  }
};