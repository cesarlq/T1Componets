import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React, { useState } from 'react';
import CustomInput from '../../Components/CustomInput';
import { Box, MenuItem, Stack, Typography, Paper } from '@mui/material';
import T1Icon from '../../Components/T1Icon';

// Define metadatos básicos para Storybook
type CustomInputStoryMeta = Meta<typeof CustomInput>;

// Define el meta para el componente
const meta = {
  title: 'Components/CustomInput',
  component: CustomInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
          A highly customizable text input component with enhanced features like:
          
          - Tooltips and custom labels
          - Advanced validation
          - Character counting
          - Clear button functionality
          - Password visibility toggle
          - Customizable borders and styles
          - And more!
        `
      }
    }
  },
  tags: ['autodocs'],
  // Decorador para dar espacio alrededor del componente
  decorators: [
    (Story) => (
      <Box sx={{ padding: 4, maxWidth: '500px', width: '100%' }}>
        <Story />
      </Box>
    )
  ],
  argTypes: {
    // Propiedades básicas
    label: { 
      control: 'text',
      description: 'Label text for the input field'
    },
    required: { 
      control: 'boolean',
      description: 'Whether the field is required'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the field is disabled'
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the field is read-only'
    },
    
    // Tooltip
    tooltip: { 
      control: 'text',
      description: 'Tooltip text to display when hovering over the help icon'
    },
    tooltipPlacement: {
      control: { type: 'select', options: ['top', 'right', 'bottom', 'left'] },
      description: 'Placement of the tooltip'
    },
    
    // Validation
    error: {
      control: 'boolean',
      description: 'Whether to display the field in error state'
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the input'
    },
    maxLength: {
      control: 'number',
      description: 'Maximum character length'
    },
    
    // Appearance
    fullWidth: {
      control: 'boolean',
      description: 'Whether the field should take up the full width'
    },
    variant: {
      control: { type: 'select', options: ['outlined', 'filled', 'standard'] },
      description: 'Material UI TextField variant'
    },
    size: {
      control: { type: 'select', options: ['small', 'medium'] },
      description: 'Size of the input field'
    },
    
    // New features
    clearable: {
      control: 'boolean',
      description: 'Whether to show a clear button when the field has content'
    },
    showCharCount: {
      control: 'boolean',
      description: 'Whether to show a character counter'
    },
    hideLabel: {
      control: 'boolean',
      description: 'Whether to hide the label'
    },
    borderRadius: {
      control: 'text',
      description: 'Border radius of the input field'
    },
    borderColor: {
      control: 'color',
      description: 'Border color of the input field'
    },
    focusBorderColor: {
      control: 'color',
      description: 'Border color when the input is focused'
    }
  }
} as CustomInputStoryMeta;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic input field
export const Basic: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your name',
    fullWidth: true,
    variant: 'outlined'
  }
};

// Required field
export const Required: Story = {
  args: {
    label: 'Email Address',
    required: true,
    placeholder: 'Enter your email',
    variant: 'outlined',
    textFieldProps: {
      type: 'email'
    },
    fullWidth: true
  }
};

// With tooltip
export const WithTooltip: Story = {
  args: {
    label: 'Password',
    required: true,
    tooltip: 'Password must be at least 8 characters long and contain at least one number and one special character.',
    placeholder: 'Enter password',
    variant: 'outlined',
    textFieldProps: {
      type: 'password'
    },
    fullWidth: true
  }
};

// With helper text
export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'Choose a username',
    variant: 'outlined',
    fullWidth: true,
    helperText: 'Username can contain letters, numbers, and underscores.'
  }
};

// With error state
export const WithError: Story = {
  args: {
    label: 'Phone Number',
    placeholder: 'Enter phone number',
    variant: 'outlined',
    fullWidth: true,
    error: true,
    helperText: 'Please enter a valid phone number.'
  }
};

// Disabled state
export const Disabled: Story = {
  args: {
    label: 'Company',
    placeholder: 'Company name',
    variant: 'outlined',
    fullWidth: true,
    disabled: true
  }
};

// Different variant
export const FilledVariant: Story = {
  args: {
    label: 'Address',
    placeholder: 'Enter your address',
    variant: 'filled',
    fullWidth: true
  }
};

// Text field with select
export const SelectField: Story = {
  args: {
    label: 'Country',
    fullWidth: true,
    variant: 'outlined',
    textFieldProps: {
      select: true,
      defaultValue: 'usa'
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
    placeholder: 'Enter your comments',
    variant: 'outlined',
    fullWidth: true,
    textFieldProps: {
      multiline: true,
      rows: 4
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
      borderRadius: '8px'
    },
    placeholder: 'Type something...',
    variant: 'outlined',
    fullWidth: true,
    borderRadius: '4px',
    borderColor: '#6a1b9a',
    focusBorderColor: '#4a148c'
  }
};

// New features showcase - Password Input with Visibility Toggle
export const PasswordWithToggle: Story = {
  args: {
    label: 'Password',
    required: true,
    placeholder: 'Enter your password',
    variant: 'outlined',
    fullWidth: true,
    borderRadius: '8px',
    textFieldProps: {
      type: 'password'
    },
    helperText: 'Click the eye icon to toggle password visibility'
  }
};

// New features showcase - Clearable Input
export const ClearableInput: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    variant: 'outlined',
    fullWidth: true,
    clearable: true,
    startIcon: <T1Icon icon="searchIcon" />,
    defaultValue: 'Initial searchable text'
  }
};

// New features showcase - Character Counter
export const WithCharCounter: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Describe yourself...',
    variant: 'outlined',
    fullWidth: true,
    maxLength: 100,
    showCharCount: true,
    textFieldProps: {
      multiline: true,
      rows: 3
    },
    helperText: 'Maximum 100 characters'
  }
};

// New features showcase - Custom Validation
export const WithValidation: Story = {
  render: () => {
    const [value, setValue] = useState('');
    
    const validateEmail = (email: string) => {
      if (!email) return { isValid: true };
      
      const isValid = /\S+@\S+\.\S+/.test(email);
      return {
        isValid,
        message: isValid ? '' : 'Please enter a valid email address'
      };
    };
    
    return (
      <CustomInput 
        label="Email with Validation"
        placeholder="Enter your email address"
        fullWidth
        variant="outlined"
        value={value}
        onChange={(e:any) => setValue(e.target.value)}
        validation={validateEmail}
        validateOnChange
        size="small"
        borderRadius="6px"
      />
    );
  }
};

// New features showcase - Conditional Enter Press Action
export const WithEnterAction: Story = {
  render: () => {
    const [message, setMessage] = useState('');
    const [value, setValue] = useState('');
    
    const handleEnterPress = () => {
      setMessage(`You pressed Enter! Current value: "${value}"`);
    };
    
    return (
      <Box>
        <CustomInput 
          label="Press Enter to Submit"
          placeholder="Type something and press Enter..."
          fullWidth
          variant="outlined"
          value={value}
          onChange={(e:any) => setValue(e.target.value)}
          onEnterPress={handleEnterPress}
          helperText="Press Enter to trigger an action"
        />
        {message && (
          <Box sx={{ mt: 2, p: 2, bgcolor: '#f0f7ff', borderRadius: '4px' }}>
            <Typography variant="body2">{message}</Typography>
          </Box>
        )}
      </Box>
    );
  }
};

// New features showcase - Custom Borders and Focus States
export const CustomBorders: Story = {
  render: () => {
    return (
      <Stack spacing={2}>
        <CustomInput 
          label="Default Border"
          placeholder="Default border style"
          fullWidth
        />
        
        <CustomInput 
          label="Custom Border Color"
          placeholder="Custom border color"
          fullWidth
          borderColor="#2e7d32"
        />
        
        <CustomInput 
          label="Custom Focus Color"
          placeholder="Focus to see custom color"
          fullWidth
          focusBorderColor="#f50057"
        />
        
        <CustomInput 
          label="Custom Border Radius"
          placeholder="With rounded corners"
          fullWidth
          borderRadius="16px"
        />
        
        <CustomInput 
          label="Square Corners"
          placeholder="With square corners"
          fullWidth
          borderRadius="0"
        />
      </Stack>
    );
  }
};

// New features showcase - All Features Combined
export const AdvancedExample: Story = {
  render: () => {
    const [bio, setBio] = useState('');
    
    const validateBio = (text: string) => {
      if (text.length < 10 && text.length > 0) {
        return {
          isValid: false,
          message: 'Bio should be at least 10 characters long'
        };
      }
      return { isValid: true };
    };
    
    return (
      <Paper elevation={3} sx={{ p: 3, borderRadius: '12px' }}>
        <Typography variant="h6" gutterBottom>
          Profile Information
        </Typography>
        
        <Stack spacing={2}>
          <CustomInput 
            label="Full Name"
            required
            placeholder="Enter your full name"
            fullWidth
            variant="outlined"
            size="small"
            borderRadius="8px"
            clearable
          />
          
          <CustomInput 
            label="Email Address"
            required
            placeholder="Enter your email"
            fullWidth
            variant="outlined"
            size="small"
            borderRadius="8px"
            validation={(email:any) => {
              if (!email) return { isValid: true };
              return {
                isValid: /\S+@\S+\.\S+/.test(email),
                message: 'Please enter a valid email'
              };
            }}
            validateOnBlur
            clearable
          />
          
          <CustomInput 
            label="Password"
            required
            tooltip="Password must be at least 8 characters"
            placeholder="Enter your password"
            fullWidth
            variant="outlined"
            size="small"
            borderRadius="8px"
            textFieldProps={{ type: 'password' }}
          />
          
          <CustomInput 
            label="Bio"
            placeholder="Tell us about yourself..."
            fullWidth
            variant="outlined"
            size="small"
            borderRadius="8px"
            textFieldProps={{ multiline: true, rows: 3 }}
            maxLength={200}
            showCharCount
            validation={validateBio}
            value={bio}
            onChange={(e:any) => setBio(e.target.value)}
            focusBorderColor="#1976d2"
          />
        </Stack>
      </Paper>
    );
  }
};

// New features showcase - Input Sizes and Variants
export const SizesAndVariants: Story = {
  render: () => {
    return (
      <Stack spacing={3}>
        <Typography variant="subtitle1">Sizes</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <CustomInput 
            label="Small"
            placeholder="Small input"
            size="small"
            sx={{ flex: 1 }}
          />
          <CustomInput 
            label="Medium"
            placeholder="Medium input"
            size="medium"
            sx={{ flex: 1 }}
          />
        </Box>
        
        <Typography variant="subtitle1" sx={{ mt: 2 }}>Variants</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <CustomInput 
            label="Outlined"
            placeholder="Outlined variant"
            variant="outlined"
            fullWidth
          />
          <CustomInput 
            label="Filled"
            placeholder="Filled variant"
            variant="filled"
            fullWidth
          />
          <CustomInput 
            label="Standard"
            placeholder="Standard variant"
            variant="standard"
            fullWidth
          />
        </Box>
      </Stack>
    );
  }
};