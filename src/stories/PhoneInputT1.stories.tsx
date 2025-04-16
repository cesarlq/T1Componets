import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box, Typography, Stack } from '@mui/material';
import PhoneInputT1 from '../Components/PhoneInputT1';
import { Country } from '../interfaces/commonInterfaces';

/**
 * `PhoneInputT1` is an international phone number input component with country selection.
 * 
 * This component combines a country selector with flag display and a phone number input field.
 * It provides validation, formatting, and a standardized way to collect phone numbers with
 * their corresponding country code.
 * 
 * ## Features
 * - Country selection with flag display and country code
 * - Input validation for phone numbers
 * - Customizable country list
 * - Error state and helper text support
 * - Controlled and uncontrolled usage
 * 
 * @component
 */
const meta: Meta<typeof PhoneInputT1> = {
  title: 'Components/PhoneInputT1',
  component: PhoneInputT1,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
          A phone number input component with integrated country selection and flag display.
          
          ## When to use
          - For international phone number collection
          - In forms where users need to input phone numbers
          - When standardized phone number formatting is required
          - In registration or contact forms
        `
      }
    }
  },
  argTypes: {
    initialRegion: {
      control: 'select',
      options: ['+52', '+1', '+34', '+44', '+49'],
      description: 'Initial country code (prefix)'
    },
    initialPhoneNumber: {
      control: 'text',
      description: 'Initial phone number value'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the phone input'
    },
    error: {
      control: 'boolean',
      description: 'Whether to display the component in an error state'
    },
    helperText: {
      control: 'text',
      description: 'Helper text to display when in error state'
    },
    onChange: { 
      action: 'changed',
      description: 'Callback when the phone number or country changes'
    },
    countries: {
      description: 'Array of countries to display in the dropdown'
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PhoneInputT1>;

/**
 * Default implementation of the phone input component.
 * Shows the component with default settings and Mexico as the initial country.
 */
export const Default: Story = {
  args: {
    initialRegion: '+52',
    initialPhoneNumber: '',
    placeholder: 'Cellphone number',
    error: false
  },
  parameters: {
    docs: {
      description: {
        story: 'The default phone input with Mexico (+52) selected as the initial country.'
      }
    }
  }
};

/**
 * Phone input with a pre-filled number.
 * This example shows how the component appears with an initial value.
 */
export const WithInitialValue: Story = {
  args: {
    initialRegion: '+1',
    initialPhoneNumber: '8005551234',
    placeholder: 'Phone number'
  },
  parameters: {
    docs: {
      description: {
        story: 'Phone input initialized with a US number. Shows how the component handles pre-filled values.'
      }
    }
  }
};

/**
 * Phone input in error state.
 * This example demonstrates validation feedback.
 */
export const WithError: Story = {
  args: {
    initialRegion: '+34',
    initialPhoneNumber: '123456',
    placeholder: 'Phone number',
    error: true,
    helperText: 'Invalid phone number format'
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows the phone input in an error state with custom error message.'
      }
    }
  }
};

/**
 * Phone input with custom country list.
 * This example demonstrates how to provide a custom set of countries.
 */
export const WithCustomCountries: Story = {
  args: {
    initialRegion: '+44',
    placeholder: 'Phone number',
    countries: [
      { code: 'GB', name: 'United Kingdom', prefix: '+44' },
      { code: 'FR', name: 'France', prefix: '+33' },
      { code: 'DE', name: 'Germany', prefix: '+49' },
      { code: 'IT', name: 'Italy', prefix: '+39' },
      { code: 'ES', name: 'Spain', prefix: '+34' }
    ]
  },
  parameters: {
    docs: {
      description: {
        story: 'Phone input with a custom list of European countries only.'
      }
    }
  }
};

/**
 * Interactive phone input example that demonstrates real-time validation
 * and tracks the complete phone number with country code.
 */
export const Interactive: Story = {
  render: () => {
    const [phoneData, setPhoneData] = useState({ 
      prefix: '+52', 
      number: '', 
      isValid: true 
    });
    
    const handlePhoneChange = (prefix: string, number: string) => {
      setPhoneData({
        prefix,
        number,
        isValid: number.length === 10
      });
    };
    
    return (
      <Stack spacing={3} sx={{ width: '400px', p: 2 }}>
        <PhoneInputT1
          initialRegion={phoneData.prefix}
          initialPhoneNumber={phoneData.number}
          onChange={handlePhoneChange}
          error={phoneData.number.length > 0 && !phoneData.isValid}
          helperText="Phone number must be 10 digits"
        />
        
        <Box sx={{ mt: 2, p: 2, border: '1px solid #eee', borderRadius: '8px' }}>
          <Typography variant="subtitle2" gutterBottom>
            Current Value
          </Typography>
          <Typography variant="body2">
            Country code: <strong>{phoneData.prefix}</strong>
          </Typography>
          <Typography variant="body2">
            Phone number: <strong>{phoneData.number}</strong>
          </Typography>
          <Typography variant="body2">
            Complete number: <strong>{phoneData.prefix + phoneData.number}</strong>
          </Typography>
          <Typography variant="body2" sx={{ color: phoneData.isValid ? 'success.main' : 'error.main' }}>
            Status: <strong>{phoneData.isValid ? 'Valid' : 'Invalid'}</strong>
          </Typography>
        </Box>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'A fully interactive example that shows real-time validation and tracking of the complete phone number with country code.'
      }
    }
  }
};

/**
 * Phone input in a form context.
 * This example shows how the component can be used within a form.
 */
export const InFormContext: Story = {
  render: () => {
    return (
      <Box 
        component="form" 
        sx={{ 
          width: '450px',
          p: 3,
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9'
        }}
        onSubmit={(e) => {
          e.preventDefault();
          alert('Form submitted!');
        }}
      >
        <Typography variant="h6" gutterBottom>
          Contact Information
        </Typography>
        
        <Stack spacing={3}>
          <Box>
            <Typography variant="body2" gutterBottom>
              Name
            </Typography>
            <Box 
              component="input"
              sx={{
                width: '100%',
                p: 1.5,
                border: '1px solid #c4c4c4',
                borderRadius: '15px',
                fontSize: '16px'
              }}
              placeholder="Enter your name"
            />
          </Box>
          
          <Box>
            <Typography variant="body2" gutterBottom>
              Phone Number
            </Typography>
            <PhoneInputT1
              initialRegion="+52"
              placeholder="Enter your phone number"
            />
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Box
              component="button"
              type="submit"
              sx={{
                bgcolor: '#E84142',
                color: 'white',
                py: 1.5,
                px: 4,
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                cursor: 'pointer',
                '&:hover': {
                  bgcolor: '#d33a3b'
                }
              }}
            >
              Submit
            </Box>
          </Box>
        </Stack>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how the phone input component can be integrated into a form alongside other fields.'
      }
    }
  }
};