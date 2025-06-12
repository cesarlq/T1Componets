import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box, Typography, Stack, Paper, Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import PhoneInputT1 from '@/Components/PhoneInputT1';
import { Country } from '@/interfaces/commonInterfaces';

/**
 * `PhoneInputT1` is an enhanced international phone number input component with extensive customization options.
 * 
 * This component combines a country selector with flag display and a phone number input field,
 * offering a wide range of customization options for appearance and behavior.
 * 
 * ## Features
 * - Country selection with flag display and country code
 * - Optional country name display
 * - Customizable validation rules
 * - Phone number formatting based on country
 * - Rich styling options (borders, colors, sizes)
 * - Support for clearable input
 * - Accessibility features
 * - Form integration capabilities
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
          An advanced phone number input component with integrated country selection and extensive customization options.
          
          ## When to use
          - For international phone number collection
          - In forms requiring phone number validation
          - When you need consistent but customizable phone inputs
          - For applications supporting multiple countries
          - When you need formatted phone number display
        `
      }
    }
  },
  argTypes: {
    // Valores iniciales
    initialRegion: {
      control: 'select',
      options: ['+52', '+1', '+34', '+44', '+49', '+81', '+61'],
      description: 'Initial country code (prefix)'
    },
    initialPhoneNumber: {
      control: 'text',
      description: 'Initial phone number value'
    },
    defaultCountry: {
      control: 'select',
      options: ['MX', 'US', 'ES', 'GB', 'DE', 'FR', 'JP', 'AU'],
      description: 'Default country code if initialRegion is not provided'
    },
    
    // Validación
    required: {
      control: 'boolean',
      description: 'Whether the field is required'
    },
    error: {
      control: 'boolean',
      description: 'Whether to display the component in an error state'
    },
    helperText: {
      control: 'text',
      description: 'Helper text to display, usually for error messages'
    },
    
    // Comportamiento
    autoFocus: {
      control: 'boolean',
      description: 'Whether the input should be focused on mount'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled'
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the input is read-only'
    },
    
    // Estilo y presentación
    label: {
      control: 'text',
      description: 'Label for the input field'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the phone input'
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
      description: 'Input variant style'
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Input size'
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the input should take up the full width of its container'
    },
    showCountryName: {
      control: 'boolean',
      description: 'Whether to show the country name alongside the flag and prefix'
    },
    formatPhoneNumber: {
      control: 'boolean',
      description: 'Whether to format the phone number according to country standards'
    },
    clearable: {
      control: 'boolean',
      description: 'Whether to show a clear button when the input has a value'
    },
    borderRadius: {
      control: 'text',
      description: 'Border radius of the input'
    },
    borderColor: {
      control: 'color',
      description: 'Border color of the input'
    },
    focusBorderColor: {
      control: 'color',
      description: 'Border color when the input is focused'
    },
    
    // Callbacks
    onChange: { 
      action: 'changed',
      description: 'Callback when the phone number or country changes'
    },
    onBlur: {
      action: 'blurred',
      description: 'Callback when the input loses focus'
    },
    onFocus: {
      action: 'focused',
      description: 'Callback when the input gains focus'
    },
    
    // Otros
    countries: {
      description: 'Array of countries to display in the dropdown'
    },
    customValidation: {
      description: 'Custom validation function for the phone number'
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
 * Phone input with emoji flags instead of flag images.
 * Useful when you don't want to depend on the flag library.
 */
export const WithEmojiFlags: Story = {
  args: {
    initialRegion: '+52',
    placeholder: 'Phone number',
    countries: [
      { code: 'MX', name: 'Mexico', prefix: '+52', flagEmoji: '🇲🇽' },
      { code: 'US', name: 'United States', prefix: '+1', flagEmoji: '🇺🇸' },
      { code: 'ES', name: 'Spain', prefix: '+34', flagEmoji: '🇪🇸' },
      { code: 'CA', name: 'Canada', prefix: '+1', flagEmoji: '🇨🇦' },
      { code: 'BR', name: 'Brazil', prefix: '+55', flagEmoji: '🇧🇷' }
    ]
  },
  parameters: {
    docs: {
      description: {
        story: 'Phone input using emoji flags instead of the flag image library.'
      }
    }
  }
};

/**
 * Phone input with custom styling.
 * Demonstrates how to customize the appearance of the component.
 */
export const CustomStyling: Story = {
  args: {
    initialRegion: '+52',
    placeholder: 'Enter your number',
    label: 'Phone Number',
    borderRadius: '8px',
    borderColor: '#9c27b0',
    focusBorderColor: '#2196f3',
    size: 'small',
    required: true,
    clearable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates custom styling options including border colors, radius, and size.'
      }
    }
  }
};

/**
 * Phone input with formatted number display.
 * Shows how numbers can be automatically formatted according to country standards.
 */
export const FormattedNumber: Story = {
  args: {
    initialRegion: '+1',
    placeholder: 'Phone will be formatted',
    formatPhoneNumber: true,
    label: 'US Phone Format'
  },
  parameters: {
    docs: {
      description: {
        story: 'Phone input that formats numbers according to country standards (e.g., (XXX) XXX-XXXX for US).'
      }
    }
  }
};

/**
 * Phone input with country names displayed.
 * Shows how to display country names alongside flags and prefixes.
 */
export const WithCountryNames: Story = {
  args: {
    initialRegion: '+49',
    placeholder: 'Phone number',
    showCountryName: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays country names alongside flags and prefixes in the dropdown and selected value.'
      }
    }
  }
};

/**
 * Disabled phone input.
 * Shows the appearance and behavior of the component when disabled.
 */
export const DisabledState: Story = {
  args: {
    initialRegion: '+44',
    initialPhoneNumber: '2074567890',
    disabled: true,
    label: 'Contact Phone (Disabled)'
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows how the component appears when disabled, with a pre-filled value.'
      }
    }
  }
};

/**
 * Interactive phone input example that demonstrates real-time validation,
 * formatting, and tracking the complete phone number with country code.
 */
export const Interactive: Story = {
  render: () => {
    const [phoneData, setPhoneData] = useState({ 
      prefix: '+52', 
      number: '', 
      isValid: true,
      formatted: ''
    });
    
    const handlePhoneChange = (prefix: string, number: string, isValid: boolean, formatted?: string) => {
      setPhoneData({
        prefix,
        number,
        isValid,
        formatted: formatted || number
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
          label="Phone Number"
          required
          formatPhoneNumber
          clearable
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
            Formatted number: <strong>{phoneData.formatted}</strong>
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
        story: 'A fully interactive example with real-time validation, formatting, and tracking of the complete phone number.'
      }
    }
  }
};

/**
 * Custom validation example.
 * Demonstrates how to implement custom validation rules.
 */
export const CustomValidation: Story = {
  render: () => {
    const [phoneData, setPhoneData] = useState({ 
      prefix: '+1', 
      number: '', 
      isValid: true 
    });
    
    // Custom validation function: US area codes can't start with 0 or 1
    const validateUSNumber = (number: string): boolean => {
      if (phoneData.prefix !== '+1') return number.length === 10;
      
      if (number.length !== 10) return false;
      const areaCode = number.substring(0, 3);
      return areaCode.charAt(0) !== '0' && areaCode.charAt(0) !== '1';
    };
    
    const handlePhoneChange = (prefix: string, number: string, isValid: boolean) => {
      setPhoneData({
        prefix,
        number,
        isValid: validateUSNumber(number)
      });
    };
    
    return (
      <Stack spacing={3} sx={{ width: '400px', p: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          US Number Validation Rules:
        </Typography>
        <Typography variant="body2">
          • Must be 10 digits long
        </Typography>
        <Typography variant="body2">
          • Area code cannot start with 0 or 1
        </Typography>
        
        <PhoneInputT1
          initialRegion="+1"
          onChange={handlePhoneChange}
          error={phoneData.number.length > 0 && !phoneData.isValid}
          helperText="Invalid US number (area code can't start with 0 or 1)"
          label="US Phone Number"
          customValidation={validateUSNumber}
          countries={[
            { code: 'US', name: 'United States', prefix: '+1' },
            { code: 'CA', name: 'Canada', prefix: '+1' }
          ]}
        />
        
        <Box sx={{ mt: 2, p: 2, border: '1px solid #eee', borderRadius: '8px' }}>
          <Typography variant="subtitle2" gutterBottom>
            Validation status: 
            <Box component="span" sx={{ 
              ml: 1,
              px: 1.5, 
              py: 0.5, 
              borderRadius: '4px', 
              bgcolor: phoneData.isValid ? 'success.light' : 'error.light',
              color: phoneData.isValid ? 'success.dark' : 'error.dark',
              fontSize: '0.75rem',
              fontWeight: 'bold'
            }}>
              {phoneData.isValid ? 'VALID' : 'INVALID'}
            </Box>
          </Typography>
          <Typography variant="body2" mt={1}>
            Current number: <strong>{phoneData.prefix} {phoneData.number}</strong>
          </Typography>
        </Box>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how to implement custom validation rules for phone numbers.'
      }
    }
  }
};

/**
 * Phone input in a form context.
 * Shows multiple variations of the component inside a form.
 */
export const InFormContext: Story = {
  render: () => {
    return (
      <Box 
        component="form" 
        sx={{ 
          width: '650px',
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
        <Typography variant="h5" gutterBottom>
          Contact Information Form
        </Typography>
        <Divider sx={{ mb: 3 }} />
        
        <Grid container spacing={3}>
          <Grid>
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
          </Grid>
          
          <Grid >
            <Typography variant="body2" gutterBottom>
              Email
            </Typography>
            <Box 
              component="input"
              type="email"
              sx={{
                width: '100%',
                p: 1.5,
                border: '1px solid #c4c4c4',
                borderRadius: '15px',
                fontSize: '16px'
              }}
              placeholder="Enter your email"
            />
          </Grid>
          
          <Grid >
            <Typography variant="body2" gutterBottom>
              Mobile Phone (Required)
            </Typography>
            <PhoneInputT1
              initialRegion="+52"
              placeholder="Mobile phone number"
              required
              clearable
              formatPhoneNumber
            />
          </Grid>
          
          <Grid >
            <Typography variant="body2" gutterBottom>
              Work Phone (Optional)
            </Typography>
            <PhoneInputT1
              initialRegion="+1"
              placeholder="Work phone number (optional)"
              showCountryName
              borderRadius="8px"
            />
          </Grid>
          
          <Grid>
            <Typography variant="body2" gutterBottom>
              Address
            </Typography>
            <Box 
              component="textarea"
              sx={{
                width: '100%',
                p: 1.5,
                border: '1px solid #c4c4c4',
                borderRadius: '15px',
                fontSize: '16px',
                fontFamily: 'inherit',
                resize: 'vertical',
                minHeight: '80px'
              }}
              placeholder="Enter your address"
            />
          </Grid>
          
          <Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
              <Box
                component="button"
                type="button"
                sx={{
                  bgcolor: 'transparent',
                  color: '#555',
                  py: 1.5,
                  px: 4,
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  mr: 2
                }}
              >
                Cancel
              </Box>
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
          </Grid>
        </Grid>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how different configurations of the phone input can be used within a form context.'
      }
    }
  }
};

/**
 * All variants showcase.
 * A grid of different phone input configurations to compare appearances.
 */
export const VariantsShowcase: Story = {
  render: () => {
    return (
      <Box sx={{ p: 3, width: '800px' }}>
        <Typography variant="h5" gutterBottom>PhoneInputT1 Variants</Typography>
        <Typography variant="body2" paragraph>
          A showcase of different configuration options for the PhoneInputT1 component.
        </Typography>
        
        <Grid container spacing={3}>
          {/* Basic variants */}
          <Grid >
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle2" gutterBottom>Standard</Typography>
              <PhoneInputT1 
                placeholder="Standard input"
              />
            </Paper>
          </Grid>
          
          <Grid >
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle2" gutterBottom>With Label</Typography>
              <PhoneInputT1 
                label="Phone Number"
                placeholder="With label"
              />
            </Paper>
          </Grid>
          
          <Grid >
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle2" gutterBottom>Small Size</Typography>
              <PhoneInputT1 
                size="small"
                placeholder="Small size input"
              />
            </Paper>
          </Grid>
          
          <Grid >
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle2" gutterBottom>Required Field</Typography>
              <PhoneInputT1 
                label="Required Phone"
                required
                placeholder="Required field"
              />
            </Paper>
          </Grid>
          
          {/* Style variants */}
          <Grid >
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle2" gutterBottom>Custom Border Radius</Typography>
              <PhoneInputT1 
                borderRadius="4px"
                placeholder="Square corners"
              />
            </Paper>
          </Grid>
          
          <Grid >
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle2" gutterBottom>Custom Colors</Typography>
              <PhoneInputT1 
                borderColor="#9c27b0"
                focusBorderColor="#2196f3"
                placeholder="Custom colors"
              />
            </Paper>
          </Grid>
          
          <Grid >
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle2" gutterBottom>With Country Names</Typography>
              <PhoneInputT1 
                showCountryName
                placeholder="Shows country names"
              />
            </Paper>
          </Grid>
          
          <Grid >
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle2" gutterBottom>Clearable Input</Typography>
              <PhoneInputT1 
                clearable
                initialPhoneNumber="5551234567"
                placeholder="Clearable input"
              />
            </Paper>
          </Grid>
          
          {/* State variants */}
          <Grid >
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle2" gutterBottom>Error State</Typography>
              <PhoneInputT1 
                error
                helperText="Invalid phone number"
                placeholder="Error state"
              />
            </Paper>
          </Grid>
          
          <Grid >
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle2" gutterBottom>Disabled State</Typography>
              <PhoneInputT1 
                disabled
                initialPhoneNumber="5551234567"
                placeholder="Disabled input"
              />
            </Paper>
          </Grid>
          
          <Grid >
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle2" gutterBottom>Read-only State</Typography>
              <PhoneInputT1 
                readOnly
                initialPhoneNumber="5551234567"
                placeholder="Read-only input"
              />
            </Paper>
          </Grid>
          
          <Grid >
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle2" gutterBottom>Formatted Number</Typography>
              <PhoneInputT1 
                formatPhoneNumber
                initialPhoneNumber="5551234567"
                placeholder="Formatted input"
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'A comprehensive showcase of different variants and configurations available for the PhoneInputT1 component.'
      }
    }
  }
};