// Layout.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Layout } from '../Components/MenuComponent/Layout';

// Ultra simple story for layout
const LayoutWrapper = () => (
  <Layout>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Ultra Simple Layout Test</h1>
      <p className="text-gray-600 mb-4">
        This is the most basic layout test with minimal props.
      </p>
      
      <div className="bg-white p-4 rounded border">
        <h3 className="font-semibold mb-2">Test Content</h3>
        <p className="text-sm">
          If you can see this, the basic layout is working.
        </p>
      </div>
    </div>
  </Layout>
);

const meta: Meta<typeof LayoutWrapper> = {
  title: 'Components/Layout (Simple)',
  component: LayoutWrapper,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const UltraSimple: Story = {};

export const OnlyContent: Story = {
  render: () => (
    <Layout showNavbar={false} showSidebar={false}>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Only Content - No Navbar/Sidebar</h1>
        <p>This should render without navbar or sidebar.</p>
      </div>
    </Layout>
  )
};

export const OnlyNavbar: Story = {
  render: () => (
    <Layout showSidebar={false}>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Only Navbar - No Sidebar</h1>
        <p>This should render with navbar but no sidebar.</p>
      </div>
    </Layout>
  )
};

export const OnlySidebar: Story = {
  render: () => (
    <Layout showNavbar={false}>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Only Sidebar - No Navbar</h1>
        <p>This should render with sidebar but no navbar.</p>
      </div>
    </Layout>
  )
};