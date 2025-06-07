// MenuItemLink.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { MenuItemLink } from '../Components/MenuComponent/MenuItemLink';

// Safe inline SVG icons
const dashboardIcon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0iIzY2NiI+PHJlY3Qgd2lkdGg9IjgiIGhlaWdodD0iOCIgeD0iMSIgeT0iMSIgcng9IjEiLz48cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB4PSIxMSIgeT0iMSIgcng9IjEiLz48cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB4PSIxIiB5PSIxMSIgcng9IjEiLz48cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB4PSIxMSIgeT0iMTEiIHJ4PSIxIi8+PC9zdmc+';
const shippingIcon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0iIzQyODVmNCI+PHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjgiIHg9IjIiIHk9IjYiIHJ4PSIxIi8+PHBhdGggZD0iTTE0IDEwaDJ2NGgtMnYtNHoiLz48Y2lyY2xlIGN4PSI2IiBjeT0iMTYiIHI9IjIiLz48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIyIi8+PC9zdmc+';

const mockUser = {
  name: 'Juan Pérez',
  email: 'juan@test.com',
  storeId: '123'
};

const simpleMenuItem = {
  href: '/dashboard',
  text: 'Dashboard',
  icon: dashboardIcon
};

const menuItemWithSubs = {
  href: '/shipping',
  text: 'Envíos',
  icon: shippingIcon,
  subPaths: [
    { href: '/shipping/create', text: 'Crear envío' },
    { href: '/shipping/list', text: 'Lista de envíos' },
    { href: '/shipping/tracking', text: 'Rastreo' }
  ]
};

const MenuItemWrapper = (props: any) => {
  const [activePath, setActivePath] = useState('/dashboard');
  const [activeSubPath, setActiveSubPath] = useState('');
  const [submenuOpen, setSubmenuOpen] = useState(0);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Menu Item Test</h1>
      
      <div className="bg-white p-4 rounded border max-w-xs">
        <MenuItemLink
          {...props}
          onNavigate={(path) => {
            setActiveSubPath(path);
          }}
          onSetActivePath={(path) => {
            setActivePath(path);
          }}
          onSetActiveSubPath={(path) => {
            setActiveSubPath(path);
          }}
          onSetSubmenuOpen={(index) => {
            setSubmenuOpen(index);
          }}
          isActive={props.item.href === activePath}
          activeSubPath={activeSubPath}
          isOpen={submenuOpen === props.index}
        />
      </div>
      
      <div className="mt-6 bg-white p-4 rounded border">
        <h3 className="font-semibold mb-2">State:</h3>
        <ul className="text-sm space-y-1">
          <li>Active Path: <code>{activePath}</code></li>
          <li>Active Sub Path: <code>{activeSubPath}</code></li>
          <li>Submenu Open: <code>{submenuOpen}</code></li>
          <li>Sidebar Reduce: <code>{props.sidebarReduce ? 'true' : 'false'}</code></li>
          <li>Enlarge By Hover: <code>{props.enlargeByHover ? 'true' : 'false'}</code></li>
        </ul>
      </div>
    </div>
  );
};

const meta: Meta<typeof MenuItemWrapper> = {
  title: 'Components/Menu Item Link',
  component: MenuItemWrapper,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleMenuItem: Story = {
  args: {
    item: simpleMenuItem,
    index: 0,
    sidebarReduce: false,
    enlargeByHover: false,
    user: mockUser,
    styles: {}
  }
};

export const MenuItemWithSubpaths: Story = {
  args: {
    item: menuItemWithSubs,
    index: 1,
    sidebarReduce: false,
    enlargeByHover: false,
    user: mockUser,
    styles: {}
  }
};

export const ReducedSidebar: Story = {
  args: {
    item: menuItemWithSubs,
    index: 1,
    sidebarReduce: true,
    enlargeByHover: false,
    user: mockUser,
    styles: {}
  }
};

export const ReducedWithHover: Story = {
  args: {
    item: menuItemWithSubs,
    index: 1,
    sidebarReduce: true,
    enlargeByHover: true,
    user: mockUser,
    styles: {}
  }
};

export const WithoutUser: Story = {
  args: {
    item: simpleMenuItem,
    index: 0,
    sidebarReduce: false,
    enlargeByHover: false,
    user: undefined,
    styles: {}
  }
};

export const WithStoreId: Story = {
  args: {
    item: {
      ...simpleMenuItem,
      href: '/store/',
      concatStoreId: true
    },
    index: 0,
    sidebarReduce: false,
    enlargeByHover: false,
    user: mockUser,
    styles: {}
  }
};