import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Icons
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SettingsIcon from '@mui/icons-material/Settings';
import UserProfileMenu from '@/Components/UserProfileMenu';

const meta: Meta<typeof UserProfileMenu> = {
  title: 'Components/UserProfileMenu',
  component: UserProfileMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A profile avatar with dropdown menu component.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    user: {
      description: 'User data to display',
      control: 'object',
    },
    menuItems: {
      description: 'Menu items to display in the dropdown',
      control: 'object',
    },
    showNameInHeader: {
      description: 'Whether to show the user name in header',
      control: 'boolean',
      defaultValue: true,
    },
    showUserInMenu: {
      description: 'Whether to show user details at top of menu',
      control: 'boolean',
      defaultValue: true,
    },
    avatarSize: {
      description: 'Size of avatar in header',
      control: { type: 'number', min: 20, max: 100, step: 5 },
      defaultValue: 40,
    },
    menuAvatarSize: {
      description: 'Size of avatar in menu',
      control: { type: 'number', min: 30, max: 120, step: 5 },
      defaultValue: 50,
    },
    avatarBgColor: {
      description: 'Background color of avatar',
      control: 'color',
      defaultValue: '#db3b2b',
    },
  },
};

export default meta;
type Story = StoryObj<typeof UserProfileMenu>;

// Sample menu items
const defaultMenuItems = [
  {
    id: 'profile',
    label: 'My profile',
    icon: <PersonIcon fontSize="small" />,
    onClick: action('navigate-to-profile'),
  },
  {
    id: 'settings',
    label: 'Store settings',
    icon: <SettingsIcon fontSize="small" />,
    onClick: action('navigate-to-settings'),
  },
  {
    id: 'stores',
    label: 'My stores',
    icon: <StorefrontIcon fontSize="small" />,
    onClick: action('navigate-to-stores'),
  },
  {
    id: 'logout',
    label: 'Log out',
    icon: <LogoutIcon fontSize="small" />,
    onClick: action('logout'),
    divider: true,
  },
];

// Default story
export const Default: Story = {
  args: {
    user: {
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
    menuItems: defaultMenuItems,
    showNameInHeader: true,
    showUserInMenu: true,
    avatarSize: 40,
    menuAvatarSize: 50,
    avatarBgColor: '#db3b2b',
  },
};

// Without user name in header
export const WithoutNameInHeader: Story = {
  args: {
    ...Default.args,
    showNameInHeader: false,
  },
};

// With avatar image
export const WithAvatarImage: Story = {
  args: {
    ...Default.args,
    user: {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
  },
};

// Without user info in menu
export const WithoutUserInMenu: Story = {
  args: {
    ...Default.args,
    showUserInMenu: false,
  },
};

// Only email (no name)
export const OnlyEmail: Story = {
  args: {
    ...Default.args,
    user: {
      email: 'user@example.com',
    },
  },
};

// Custom styling
export const CustomStyling: Story = {
  args: {
    ...Default.args,
    avatarBgColor: '#2196f3',
    avatarSize: 50,
    menuAvatarSize: 70,
    sx: {
      avatar: {
        border: '2px solid #fff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
      },
      menu: {
        '& .MuiPaper-root': {
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          borderRadius: '16px',
        },
      },
    },
  },
};

// Minimal configuration
export const Minimal: Story = {
  args: {
    user: {
      email: 'minimal@example.com',
    },
    menuItems: [
      {
        id: 'logout',
        label: 'Log out',
        onClick: action('logout'),
      },
    ],
    showNameInHeader: false,
    showUserInMenu: false,
  },
};