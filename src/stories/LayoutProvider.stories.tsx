// LayoutProvider.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { LayoutProvider, useLayout } from '../Components/MenuComponent/LayoutProvider';

// Componente de prueba simple para el provider
const TestComponent = () => {
  const { state, setSidebarOpen, setSidebarReduce, setEnlargeByHover } = useLayout();
  
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Layout Provider Test</h1>
      
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="font-semibold mb-2">Estado actual:</h2>
        <ul className="space-y-1 text-sm">
          <li>Sidebar Open: {state.sidebarOpen ? 'true' : 'false'}</li>
          <li>Sidebar Reduce: {state.sidebarReduce ? 'true' : 'false'}</li>
          <li>Enlarge By Hover: {state.enlargeByHover ? 'true' : 'false'}</li>
        </ul>
      </div>
      
      <div className="space-x-2">
        <button
          onClick={() => setSidebarOpen(!state.sidebarOpen)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Toggle Sidebar Open
        </button>
        
        <button
          onClick={() => setSidebarReduce(!state.sidebarReduce)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Toggle Sidebar Reduce
        </button>
        
        <button
          onClick={() => setEnlargeByHover(!state.enlargeByHover)}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Toggle Enlarge By Hover
        </button>
      </div>
    </div>
  );
};

const ProviderWrapper = () => (
  <LayoutProvider>
    <TestComponent />
  </LayoutProvider>
);

const meta: Meta<typeof ProviderWrapper> = {
  title: 'Components/Layout Provider',
  component: ProviderWrapper,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithInitialState: Story = {
  render: () => (
    <LayoutProvider>
      <div className="p-6">
        <h1 className="text-xl font-bold mb-4">Provider with Initial State</h1>
        <p>El provider debería inicializar con todos los valores en false.</p>
        <TestComponent />
      </div>
    </LayoutProvider>
  )
};