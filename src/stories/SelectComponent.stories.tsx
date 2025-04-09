import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SelectComponent from '../Components/SelectComponent/SelectComponent';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';

// Define el meta para el componente
const meta = {
  title: 'Components/SelectComponent',
  component: SelectComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Un componente de selección personalizado que permite mostrar opciones en un menú desplegable con diferentes estilos y funcionalidades.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto que se muestra en el botón del selector.'
    },
    buttonType: {
      control: 'select',
      options: ['solid', 'outline', undefined],
      description: 'Estilo del botón: sólido, outline o por defecto.'
    },
    className: {
      control: 'text',
      description: 'Clases CSS adicionales para el botón.'
    },
    menuProps: {
      control: 'object',
      description: 'Propiedades adicionales para el componente Menu.'
    }
  },
  // Decorador para renderizar el componente con children por defecto
  decorators: [
    (Story) => (
      <Story />
    )
  ],
  // Argumento por defecto para todos los stories
  args: { 
    label: 'Seleccionar',
    onClick: fn(),
    // Proporciona un children por defecto usando React.createElement
    children: React.createElement(MenuItem, { key: 'default-option' }, 'Opción por defecto')
  }
} satisfies Meta<typeof SelectComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// Historia básica: Menú simple
export const Default: Story = {
  args: {
    label: 'Opciones',
    // Proporciona múltiples elementos MenuItem como children
    children: [
      React.createElement(MenuItem, { key: 'option-1' }, 'Opción 1'),
      React.createElement(MenuItem, { key: 'option-2' }, 'Opción 2'),
      React.createElement(MenuItem, { key: 'option-3' }, 'Opción 3')
    ]
  }
};

// Historia: Con estilo outline
export const OutlineStyle: Story = {
  args: {
    label: 'Estilo Outline',
    buttonType: 'outline',
    children: [
      React.createElement(MenuItem, { key: 'option-1' }, 'Opción 1'),
      React.createElement(MenuItem, { key: 'option-2' }, 'Opción 2'),
      React.createElement(MenuItem, { key: 'option-3' }, 'Opción 3')
    ]
  }
};

// Historia: Con elementos adicionales
export const WithAdditionalItems: Story = {
  args: {
    label: 'Categorías',
    children: [
      React.createElement(MenuItem, { key: 'category-1' }, 'Categoría 1'),
      React.createElement(MenuItem, { key: 'category-2' }, 'Categoría 2'),
      React.createElement(MenuItem, { key: 'category-3' }, 'Categoría 3')
    ],
    additionalItems: [
      { id: 'add', label: 'Añadir categoría', onClick: () => console.log('Añadir categoría') },
      {
        id: 'divider', type: 'divider', onClick: () => console.log('divider'),
        label: ''
      }, // Aunque no tenga sentido para un divider, es requerido
      { id: 'manage', label: 'Gestionar categorías', onClick: () => console.log('Gestionar categorías') }
    ]
  }
};

// Historia: Con clase personalizada
export const CustomClass: Story = {
  args: {
    label: 'Clase personalizada',
    className: 'custom-select-class',
    children: [
      React.createElement(MenuItem, { key: 'option-1' }, 'Opción 1'),
      React.createElement(MenuItem, { key: 'option-2' }, 'Opción 2'),
      React.createElement(MenuItem, { key: 'option-3' }, 'Opción 3')
    ]
  }
};

// Historia: Con propiedades de menú personalizadas
export const CustomMenuProps: Story = {
  args: {
    label: 'Menú personalizado',
    children: [
      React.createElement(MenuItem, { key: 'option-1' }, 'Opción 1'),
      React.createElement(MenuItem, { key: 'option-2' }, 'Opción 2'),
      React.createElement(MenuItem, { key: 'option-3' }, 'Opción 3')
    ],
    menuProps: {
      sx: {
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }
    }
  }
};