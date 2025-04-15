import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ButtonT1 from '../Components/ButtonT1';

// Importaciones de íconos
// Nota: Si necesitas incluir los íconos, necesitarás importarlos fuera del objeto de historia
// y crear componentes de renderizado específicos

// Define el meta para el componente
const meta = {
  title: 'Components/ButtonT1',
  component: ButtonT1,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customized Material UI Button component with additional features like loading state, tooltips, and confirmation messages.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
      description: 'The variant to use.'
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
      description: 'The color of the component.'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the component.'
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the button will be disabled.'
    },
    loading: {
      control: 'boolean',
      description: 'If true, the button will show a loading spinner.'
    },
    responsive: {
      control: 'boolean',
      description: 'If true, the button will adjust its size on small screens.'
    },
    tooltipText: {
      control: 'text',
      description: 'Text to display in the tooltip.'
    },
    confirmationMessage: {
      control: 'text',
      description: 'Confirmation message to display when clicked.'
    }
  },
  args: { onClick: fn() }
} satisfies Meta<typeof ButtonT1>;

export default meta;
type Story = StoryObj<typeof meta>;

// Story base por defecto
export const Default: Story = {
  args: {
    className: 'pt-4 text-lg', // Correcto
    children: 'Button',
    variant: 'contained',
    color: 'primary',
    size: 'medium'
  }
};

// Story en estado de carga
export const Loading: Story = {
  args: {
    children: 'Loading...',
    loading: true,
  }
};

// Story con tooltip
export const WithTooltip: Story = {
  args: {
    children: 'Hover Me',
    tooltipText: 'This is a helpful tooltip!',
  }
};

// Story con confirmación
export const WithConfirmation: Story = {
  args: {
    children: 'Delete Item',
    confirmationMessage: 'Are you sure?',
    color: 'error',
  }
};

// Story con variante outlined
export const Outlined: Story = {
  args: {
    children: 'Outlined Button',
    variant: 'outlined',
  }
};

// Story con variante de texto
export const Text: Story = {
  args: {
    children: 'Text Button',
    variant: 'text',
  }
};

// Story con botón responsivo
export const Responsive: Story = {
  args: {
    children: 'Responsive Button',
    responsive: true,
  }
};

// Story con estilos personalizados
export const CustomStyle: Story = {
  args: {
    children: 'Custom Style',
    sx: { 
      borderRadius: '25px', 
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      color: 'white',
      padding: '10px 20px',
    },
  }
};