// StoreSelector.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { StoreSelector } from '../../Components/MenuComponent/StoreSelector';

const mockStores = [
  { id: 1, name: 'Tienda Principal' },
  { id: 2, name: 'Sucursal Norte' },
  { id: 3, name: 'Tienda Online' },
  { id: 4, name: 'Sucursal Sur' },
];

const StoreSelectorWrapper = (props: any) => {
  const [currentStore, setCurrentStore] = useState(mockStores[0]);
  
  const handleStoreChange = (storeId: number) => {
    const store = mockStores.find(s => s.id === storeId);
    if (store) {
      setCurrentStore(store);
      console.log('Store changed to:', store.name);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Store Selector Test</h1>
      
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">
          Tienda actual: <strong>{currentStore.name}</strong>
        </p>
      </div>
      
      <StoreSelector
        {...props}
        stores={mockStores}
        currentStore={currentStore}
        onStoreChange={handleStoreChange}
      />
      
      <div className="mt-8 bg-gray-100 p-4 rounded">
        <h3 className="font-semibold mb-2">Debug Info:</h3>
        <pre className="text-xs">{JSON.stringify({ currentStore, storesCount: mockStores.length }, null, 2)}</pre>
      </div>
    </div>
  );
};

const meta: Meta<typeof StoreSelectorWrapper> = {
  title: 'Menu/Store Selector',
  component: StoreSelectorWrapper,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: '',
  }
};

export const WithCreateUrl: Story = {
  args: {
    className: '',
    createStoreUrl: 'https://example.com/create-store',
  }
};

export const CustomTexts: Story = {
  args: {
    className: '',
    texts: {
      myStores: 'Mis Establecimientos',
      newStore: 'Nuevo Establecimiento',
      searchPlaceholder: 'Buscar establecimiento...'
    }
  }
};

export const EmptyStores: Story = {
  render: () => (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Empty Stores Test</h1>
      <StoreSelector
        stores={[]}
        currentStore={undefined}
        onStoreChange={() => { } } createStoreUrl={''}      />
      <p className="mt-4 text-gray-600">Should render nothing when no stores available.</p>
    </div>
  )
};

export const ManyStores: Story = {
  render: () => {
    const manyStores = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      name: `Tienda ${i + 1} - Ubicación ${String.fromCharCode(65 + (i % 26))}`
    }));
    
    const [currentStore, setCurrentStore] = useState(manyStores[0]);
    
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Many Stores Test (Scroll)</h1>
        <StoreSelector
          stores={manyStores}
          currentStore={currentStore}
          onStoreChange={(id) => {
            const store = manyStores.find(s => s.id === id);
            if (store) setCurrentStore(store);
          } } createStoreUrl={''}        />
      </div>
    );
  }
};