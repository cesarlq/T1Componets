import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ButtonT1 from '../../Components/ButtonT1';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { action } from '@storybook/addon-actions';

// Definición de meta para Storybook
const meta: Meta<typeof ButtonT1> = {
  title: 'Components/ButtonT1',
  component: ButtonT1,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Un botón avanzado con soporte para múltiples estados, confirmación, tooltips, y elementos adicionales.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'outlined', 'contained'],
      description: 'El estilo visual del botón',
      defaultValue: 'contained',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
      description: 'El color del botón',
      defaultValue: 'primary',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'El tamaño del botón',
      defaultValue: 'medium',
    },
    disabled: {
      control: 'boolean',
      description: 'Si el botón está deshabilitado',
      defaultValue: false,
    },
    loading: {
      control: 'boolean',
      description: 'Si el botón está en estado de carga',
      defaultValue: false,
    },
    responsive: {
      control: 'boolean',
      description: 'Si el botón debe adaptarse a pantallas pequeñas',
      defaultValue: false,
    },
    fullWidth: {
      control: 'boolean',
      description: 'Si el botón debe ocupar todo el ancho disponible',
      defaultValue: false,
    },
    disableElevation: {
      control: 'boolean',
      description: 'Si se debe deshabilitar la elevación del botón',
      defaultValue: false,
    },
    preventDoubleClick: {
      control: 'boolean',
      description: 'Si se debe prevenir el doble clic',
      defaultValue: false,
    },
    onClick: { action: 'clicked' },
    children: {
      control: 'text',
      description: 'El contenido del botón',
    },
    tooltipText: {
      control: 'text',
      description: 'Texto del tooltip',
    },
    confirmationMessage: {
      control: 'text',
      description: 'Mensaje de confirmación',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonT1>;

// Historia básica
export const Default: Story = {
  args: {
    children: 'Botón',
    variant: 'contained',
    color: 'primary',
    onClick: action('button-clicked'),
  },
};

// Variantes de botón
export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <ButtonT1 variant="contained">Contained</ButtonT1>
      <ButtonT1 variant="outlined">Outlined</ButtonT1>
      <ButtonT1 variant="text">Text</ButtonT1>
    </div>
  ),
};

// Colores
export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ButtonT1 color="primary">Primary</ButtonT1>
      <ButtonT1 color="secondary">Secondary</ButtonT1>
      <ButtonT1 color="success">Success</ButtonT1>
      <ButtonT1 color="error">Error</ButtonT1>
      <ButtonT1 color="info">Info</ButtonT1>
      <ButtonT1 color="warning">Warning</ButtonT1>
    </div>
  ),
};

// Tamaños
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <ButtonT1 size="small">Small</ButtonT1>
      <ButtonT1 size="medium">Medium</ButtonT1>
      <ButtonT1 size="large">Large</ButtonT1>
    </div>
  ),
};

// Con iconos
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ButtonT1 startIcon={<AddIcon />}>Con icono inicial</ButtonT1>
      <ButtonT1 endIcon={<ArrowForwardIcon />}>Con icono final</ButtonT1>
      <ButtonT1 
        endIcon={<ArrowForwardIcon />} 
        additionalIcon={<MoreVertIcon />}
      >
        Con icono adicional
      </ButtonT1>
    </div>
  ),
};

// Estado de carga
export const LoadingState: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ButtonT1 loading>Cargando</ButtonT1>
      <ButtonT1 loading variant="outlined">Cargando</ButtonT1>
      <ButtonT1 loading color="secondary">Cargando</ButtonT1>
    </div>
  ),
};

// Tooltip
export const WithTooltip: Story = {
  render: () => (
    <div className="flex gap-4">
      <ButtonT1 tooltipText="Información adicional sobre este botón">
        Hover para ver tooltip
      </ButtonT1>
      <ButtonT1 
        tooltipText="Botón para añadir un nuevo elemento"
        tooltipPlacement="bottom"
        startIcon={<AddIcon />}
      >
        Tooltip abajo
      </ButtonT1>
    </div>
  ),
};

// Confirmación
export const WithConfirmation: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ButtonT1 
        confirmationMessage="¿Estás seguro de realizar esta acción?"
        color="error"
      >
        Botón con confirmación
      </ButtonT1>
      <ButtonT1 
        confirmationMessage="Esta acción no se puede deshacer"
        confirmationTitle="Confirmar eliminación"
        confirmationConfirmText="Eliminar"
        confirmationCancelText="Cancelar"
        color="error"
        variant="outlined"
      >
        Eliminar
      </ButtonT1>
    </div>
  ),
};

// Botón responsivo
export const Responsive: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ButtonT1 responsive>Responsivo</ButtonT1>
      <ButtonT1 
        responsive 
        startIcon={<AddIcon />}
      >
        Adaptable a móvil
      </ButtonT1>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Estos botones cambiarán de tamaño y ocuparán el ancho completo en pantallas pequeñas. Prueba a redimensionar la ventana para ver el efecto.',
      },
    },
  },
};

// Ancho completo
export const FullWidth: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <ButtonT1 fullWidth>Ancho completo</ButtonT1>
      <ButtonT1 
        fullWidth 
        variant="outlined"
        startIcon={<AddIcon />}
      >
        Ancho completo con icono
      </ButtonT1>
    </div>
  ),
};

// Combinación de propiedades
export const CombinedProperties: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <ButtonT1 
        startIcon={<AddIcon />}
        endIcon={<ArrowForwardIcon />}
        tooltipText="Agregar y continuar al siguiente paso"
        fullWidth
        color="success"
      >
        Agregar y continuar
      </ButtonT1>
      <ButtonT1 
        color="error"
        variant="outlined"
        confirmationMessage="Esta acción eliminará permanentemente el elemento"
        startIcon={<AddIcon />}
        additionalIcon={<MoreVertIcon />}
        tooltipText="Eliminar permanentemente"
        preventDoubleClick
        fullWidth
      >
        Eliminar permanentemente
      </ButtonT1>
    </div>
  ),
};

// Prevención de doble clic
export const PreventDoubleClick: Story = {
  render: () => (
    <div className="flex gap-4">
      <ButtonT1 
        preventDoubleClick 
        onClick={action('clicked-with-prevention')}
      >
        Con prevención de doble clic
      </ButtonT1>
      <ButtonT1 
        onClick={action('clicked-without-prevention')}
      >
        Sin prevención
      </ButtonT1>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'El botón con prevención de doble clic se deshabilitará temporalmente después de hacer clic. Prueba a hacer clic rápidamente en ambos botones y observa el comportamiento en la pestaña Actions.',
      },
    },
  },
};