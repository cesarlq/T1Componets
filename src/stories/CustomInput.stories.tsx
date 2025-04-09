import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React from 'react';
import CustomInput from '../Components/CustomInput';
import { Box, MenuItem } from '@mui/material';

// Define el meta para el componente
const meta = {
  title: 'Components/CustomInput',
  component: CustomInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customized text input component with support for labels, tooltips, and various text field properties.'
      }
    }
  },
  tags: ['autodocs'],
  // Decorador para dar espacio alrededor del componente
  decorators: [
    (Story) => (
      <Box sx={{ padding: 4, maxWidth: '400px' }}>
        <Story />
      </Box>
    )
  ]
} satisfies Meta<typeof CustomInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic input field
export const Basic: Story = {
  args: {
    label: 'Full Name',
    textFieldProps: {
      placeholder: 'Enter your name',
      variant: 'outlined',
      fullWidth: true
    }
  }
};

// Required field
export const Required: Story = {
  args: {
    label: 'Email Address',
    required: true,
    textFieldProps: {
      placeholder: 'Enter your email',
      variant: 'outlined',
      type: 'email',
      fullWidth: true
    }
  }
};

// With tooltip
export const WithTooltip: Story = {
  args: {
    label: 'Password',
    required: true,
    tooltip: 'Password must be at least 8 characters long and contain at least one number and one special character.',
    textFieldProps: {
      placeholder: 'Enter password',
      variant: 'outlined',
      type: 'password',
      fullWidth: true
    }
  }
};

// With helper text
export const WithHelperText: Story = {
  args: {
    label: 'Username',
    textFieldProps: {
      placeholder: 'Choose a username',
      variant: 'outlined',
      fullWidth: true,
      helperText: 'Username can contain letters, numbers, and underscores.',
    }
  }
};

// With error state
export const WithError: Story = {
  args: {
    label: 'Phone Number',
    textFieldProps: {
      placeholder: 'Enter phone number',
      variant: 'outlined',
      fullWidth: true,
      error: true,
      helperText: 'Please enter a valid phone number.',
    }
  }
};

// Disabled state
export const Disabled: Story = {
  args: {
    label: 'Company',
    textFieldProps: {
      placeholder: 'Company name',
      variant: 'outlined',
      fullWidth: true,
      disabled: true,
    }
  }
};

// Different variant
export const FilledVariant: Story = {
  args: {
    label: 'Address',
    textFieldProps: {
      placeholder: 'Enter your address',
      variant: 'filled',
      fullWidth: true,
    }
  }
};

// Text field with select
export const SelectField: Story = {
  args: {
    label: 'Country',
    textFieldProps: {
      select: true,
      defaultValue: 'usa',
      fullWidth: true,
      variant: 'outlined',
    },
    children: [
      <MenuItem key="usa" value="usa">United States</MenuItem>,
      <MenuItem key="canada" value="canada">Canada</MenuItem>,
      <MenuItem key="mexico" value="mexico">Mexico</MenuItem>,
      <MenuItem key="uk" value="uk">United Kingdom</MenuItem>,
      <MenuItem key="australia" value="australia">Australia</MenuItem>
    ]
  }
};

// Multiline text field
export const Multiline: Story = {
  args: {
    label: 'Comments',
    textFieldProps: {
      placeholder: 'Enter your comments',
      variant: 'outlined',
      fullWidth: true,
      multiline: true,
      rows: 4,
    }
  }
};

// With custom style
export const CustomStyle: Story = {
  args: {
    label: 'Custom Styled Input',
    style: {
      backgroundColor: '#f9f9f9',
      padding: '16px',
      borderRadius: '8px',
    },
    textFieldProps: {
      placeholder: 'Type something...',
      variant: 'outlined',
      fullWidth: true,
      InputProps: {
        sx: {
          borderRadius: '4px',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#6a1b9a',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#9c27b0',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#4a148c',
          },
        }
      }
    }
  }
};