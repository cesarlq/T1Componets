import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Box } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import AmountInput from '../../Components/AmountInput';

// Definir el tipo de nuestros campos de formulario
type FormValues = {
  amount: number;
  price: number;
  budget: number;
  discount: number;
  customAmount: number;
  quantity: number;
  disabledAmount: number;
  errorAmount: number;
  variantAmount: number;
};

// Componente que renderiza el AmountInput con un formulario real
const AmountInputWithForm = (props: any) => {
  const methods = useForm<FormValues>({
    defaultValues: {
      amount: 0,
      price: 100,
      budget: 1000,
      discount: 0,
      customAmount: 50,
      quantity: 1,
      disabledAmount: 1500,
      errorAmount: 2000,
      variantAmount: 250
    }
  });
  
  return (
    <FormProvider {...methods}>
      <AmountInput<FormValues> {...props} control={methods.control} />
    </FormProvider>
  );
};

// Define el meta para el componente
const meta = {
  title: 'Components/AmountInput',
  component: AmountInputWithForm,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A currency input field with numeric formatting, validation, and react-hook-form integration.'
      }
    }
  },
  tags: ['autodocs'],
  // Decorador para dar espacio
  decorators: [
    (Story) => (
      <Box sx={{ padding: 4, maxWidth: '400px', width: '100%' }}>
        <Story />
      </Box>
    )
  ]
} satisfies Meta<typeof AmountInputWithForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic amount input with default currency ($)
export const Default: Story = {
  args: {
    name: 'amount',
    label: 'Amount',
    textFieldProps: {
      placeholder: 'Enter amount',
      fullWidth: true,
      variant: 'outlined'
    }
  }
};

// With specific currency
export const WithCurrency: Story = {
  args: {
    name: 'price',
    label: 'Price',
    currency: '€',
    textFieldProps: {
      placeholder: 'Enter price in euros',
      fullWidth: true,
      variant: 'outlined'
    }
  }
};

// With no currency symbol
export const NoCurrencySymbol: Story = {
  args: {
    name: 'quantity',
    label: 'Quantity',
    currency: '',
    textFieldProps: {
      placeholder: 'Enter quantity',
      fullWidth: true,
      variant: 'outlined'
    }
  }
};

// With tooltip
export const WithTooltip: Story = {
  args: {
    name: 'budget',
    label: 'Budget',
    tooltip: 'Enter your maximum budget for this project',
    textFieldProps: {
      placeholder: 'Enter budget',
      fullWidth: true,
      variant: 'outlined'
    }
  }
};

// With minimum value
export const WithMinimumValue: Story = {
  args: {
    name: 'discount',
    label: 'Discount Percentage',
    currency: '%',
    tooltip: 'Minimum discount is 0%',
    textFieldProps: {
      placeholder: 'Enter discount percentage',
      fullWidth: true,
      variant: 'outlined',
      inputProps: {
        min: 0
      }
    }
  }
};

// With custom styling
export const CustomStyling: Story = {
  args: {
    name: 'customAmount',
    label: 'Custom Amount',
    textFieldProps: {
      placeholder: 'Enter amount',
      fullWidth: true,
      variant: 'outlined',
      sx: {
        '& .MuiOutlinedInput-root': {
          borderRadius: '8px',
          '& fieldset': {
            borderColor: '#6a1b9a',
          },
          '&:hover fieldset': {
            borderColor: '#9c27b0',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#4a148c',
          },
        },
        '& .MuiInputLabel-root': {
          color: '#6a1b9a',
        }
      }
    }
  }
};

// Disabled state
export const Disabled: Story = {
  args: {
    name: 'disabledAmount',
    label: 'Fixed Amount',
    textFieldProps: {
      placeholder: 'Cannot be modified',
      fullWidth: true,
      variant: 'outlined',
      disabled: true
    }
  }
};

// With error state
export const WithError: Story = {
  args: {
    name: 'errorAmount',
    label: 'Payment Amount',
    rules: {
      validate: () => 'This amount exceeds your available balance' // Always show error for demo
    },
    textFieldProps: {
      placeholder: 'Enter payment amount',
      fullWidth: true,
      variant: 'outlined'
    }
  }
};

// Different variant
export const FilledVariant: Story = {
  args: {
    name: 'variantAmount',
    label: 'Amount',
    textFieldProps: {
      placeholder: 'Enter amount',
      fullWidth: true,
      variant: 'filled'
    }
  }
};