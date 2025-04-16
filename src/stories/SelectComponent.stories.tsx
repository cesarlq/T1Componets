import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { 
  MenuItem,
  SvgIcon
} from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import SelectComponent from '../Components/SelectComponent/SelectComponent';
import SelectItem from '../Components/SelectComponent/SelectItem';
import CheckBoxSelect from '../Components/SelectComponent/CheckBoxSelect';
import FormControlSelect from '../Components/SelectComponent/FormControlSelect';

/**
 * `SelectComponent` is a flexible dropdown component for displaying selectable options.
 * 
 * It combines the functionality of a dropdown menu with the visual appearance of a button.
 * The component supports various configurations including different button styles, icons,
 * and specialized selection items like checkboxes.
 * 
 * ## Features
 * - Multiple button types (contained, outlined, text)
 * - Support for various Material UI colors
 * - Icons at start, end, or as additional elements
 * - Support for checkbox selections
 * - Customizable menu items
 * - Accessibility built-in
 * 
 * ## Components
 * The select system consists of multiple components:
 * - `SelectComponent`: The main container component
 * - `SelectItem`: Standard selectable item with icon support
 * - `CheckBoxSelect`: Item with checkbox for multi-select functionality
 * - `FormControlSelect`: Container for select items
 * 
 * @component
 */
const meta: Meta<typeof SelectComponent> = {
  title: 'Components/SelectComponent',
  component: SelectComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
          A flexible dropdown component that combines button styling with dropdown menu functionality.
          
          ## When to use
          - For dropdown menus that need to stand out as buttons
          - When dropdown options might include checkbox selections
          - For navigation menus with visual hierarchy
          - In complex forms where standard selects lack visual emphasis
          
          ## Composition
          The SelectComponent works with specialized sub-components:
          - \`SelectItem\` - Standard menu items with icon support
          - \`CheckBoxSelect\` - Items with checkbox functionality
          - \`FormControlSelect\` - Container for organizing select items
        `
      }
    }
  },
  argTypes: {
    buttonType: { 
      control: { 
        type: 'select', 
        options: ['contained', 'outlined', 'text'] 
      },
      description: 'The visual style of the button that triggers the dropdown'
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning', 'inherit'],
      description: 'The color of the button element'
    },
    label: {
      control: 'text',
      description: 'The text displayed on the button'
    },
    startIcon: {
      description: 'Icon displayed at the start of the button'
    },
    endIcon: {
      description: 'Icon displayed at the end of the button'
    },
    additionalIcon: {
      description: 'Additional icon displayed after a separator'
    },
    additionalItems: {
      description: 'Array of additional menu items to be displayed at the bottom of the menu'
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessibility label for screen readers'
    },
    testId: {
      control: 'text',
      description: 'Test ID for automated testing'
    },
    children: {
      description: 'The content of the dropdown menu'
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SelectComponent>;

/**
 * This example shows how to use the `CheckBoxSelect` component within the dropdown.
 * 
 * The CheckBoxSelect component allows for multi-select functionality where users
 * can toggle options on and off via checkboxes. This is useful for filter menus
 * or settings panels where multiple options can be selected simultaneously.
 */
export const WithCheckboxSelect: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px' }}>
      <SelectComponent 
        label="Checkbox Select (Unchecked)" 
        endIcon={<PersonOutlineIcon />}
      >
        <CheckBoxSelect
          checkbox={false}
          icon={<PersonOutlineIcon />}
          onCheckboxClick={() => console.log('User checkbox clicked')}
        >
          User Management
        </CheckBoxSelect>
        <CheckBoxSelect
          checkbox={false}
          icon={<SettingsOutlinedIcon />}
          onCheckboxClick={() => console.log('Settings checkbox clicked')}
        >
          System Settings
        </CheckBoxSelect>
      </SelectComponent>

      <SelectComponent 
        label="Checkbox Select (Mixed)" 
        endIcon={<SettingsOutlinedIcon />}
      >
        <CheckBoxSelect
          checkbox={true}
          icon={<HomeOutlinedIcon />}
          onCheckboxClick={() => console.log('Home checkbox clicked')}
        >
          Home Configuration
        </CheckBoxSelect>
        <CheckBoxSelect
          checkbox={false}
          icon={<EmailOutlinedIcon />}
          onCheckboxClick={() => console.log('Email checkbox clicked')}
        >
          Email Preferences
        </CheckBoxSelect>
      </SelectComponent>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates checkboxes within dropdown menus for multi-select functionality. The left example shows unchecked options, while the right example shows a mix of checked and unchecked options.'
      }
    }
  }
};

/**
 * This example shows how to use custom `SelectItem` components with icons.
 * 
 * SelectItem components provide a standardized way to display selectable options
 * with optional icons. They are wrapped in a FormControlSelect to maintain proper
 * structure and accessibility.
 */
export const WithSelectItemsAndIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px' }}>
      <SelectComponent 
        color='primary'
        label="Select with Icons" 
        additionalIcon={<SettingsOutlinedIcon />}
      >
        <FormControlSelect>
          <SelectItem 
            label="Products" 
            icon={<SettingsOutlinedIcon />}
            value="products"
            onClick={() => console.log('Products clicked')}
          />
          <SelectItem 
            label="Orders" 
            icon={<PersonOutlineIcon />}
            value="orders"
            onClick={() => console.log('Orders clicked')}
          />
        </FormControlSelect>
      </SelectComponent>

      <SelectComponent 
        label="Select with Text and Icons" 
        buttonType="contained"
        additionalIcon={<HomeOutlinedIcon />}
      >
        <FormControlSelect>
          <SelectItem 
            label="Manage Users" 
            icon={<PersonOutlineIcon />}
            value="users"
            onClick={() => console.log('Users clicked')}
          />
          <SelectItem 
            label="System Settings" 
            icon={<SettingsOutlinedIcon />}
            value="settings"
            onClick={() => console.log('Settings clicked')}
          />
        </FormControlSelect>
      </SelectComponent>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows how to use SelectItem components with icons within a FormControlSelect container. The left example uses the default style while the right example uses a contained button style.'
      }
    }
  }
};

/**
 * This example demonstrates a complex use case combining different item types
 * and additional items at the bottom of the menu.
 * 
 * The `additionalItems` prop allows adding extra items such as actions, dividers,
 * or any custom menu items at the bottom of the dropdown menu.
 */
export const ComplexSelectWithMixedComponents: Story = {
  render: () => (
    <SelectComponent 
      label="Advanced Select" 
      buttonType="contained"
      endIcon={<SettingsOutlinedIcon />}
      additionalItems={[
        { 
          id: 'add', 
          label: 'Add New', 
          onClick: () => console.log('Add new item') 
        },
        { 
          id: 'divider', 
          type: 'divider' 
        },
        { 
          id: 'manage', 
          label: 'Manage Options', 
          onClick: () => console.log('Manage options') 
        }
      ]}
    >
      <FormControlSelect>
        <SelectItem 
          label="User Management" 
          icon={<PersonOutlineIcon />}
          value="users"
        />
        <CheckBoxSelect
          checkbox={true}
          icon={<EmailOutlinedIcon />}
          onCheckboxClick={() => console.log('Email notifications')}
        >
          Email Notifications
        </CheckBoxSelect>
        <SelectItem 
          label="System Settings" 
          icon={<SettingsOutlinedIcon />}
          value="settings"
        />
      </FormControlSelect>
    </SelectComponent>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A complex example showing multiple features together: different item types (SelectItem and CheckBoxSelect) and additional menu items at the bottom of the dropdown.'
      }
    }
  }
};

/**
 * This example shows how to create accessible select components with built-in
 * accessibility attributes and testing identifiers.
 * 
 * Setting appropriate aria labels and test IDs ensures the component is both
 * accessible to screen readers and easily testable in automated tests.
 */
export const AccessibleCustomSelect: Story = {
  args: {
    label: 'Accessible Custom Select',
    ariaLabel: 'Select system preferences',
    testId: 'system-preferences-select',
    buttonType: 'contained',
    children: (
      <FormControlSelect>
        <SelectItem 
          label="Dark Mode" 
          icon={<SettingsOutlinedIcon />}
          value="dark-mode"
        />
        <CheckBoxSelect
          checkbox={false}
          icon={<EmailOutlinedIcon />}
          onCheckboxClick={() => console.log('Notifications toggled')}
        >
          Enable Notifications
        </CheckBoxSelect>
      </FormControlSelect>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how to create accessible select components with proper ARIA attributes and testing identifiers.'
      }
    }
  }
};

/**
 * This example showcases different button types and color variants available for
 * the SelectComponent.
 * 
 * The component supports all Material UI button types (contained, outlined, text)
 * and color variants (primary, secondary, error, info, success, warning, inherit).
 */
export const ButtonVariantsWithIcons: Story = {
  render: () => (<>
    <div style={{ display: 'block', gap: '20px' }}>
      <div>
        <h1>buttonType</h1>
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <SelectComponent 
          label="contained with Icon" 
          buttonType="contained"
          additionalIcon={<PersonOutlineIcon />}
        >
          <MenuItem>Outline Option 1</MenuItem>
          <MenuItem>Outline Option 2</MenuItem>
        </SelectComponent>
        <SelectComponent 
          label="outlined with Icon" 
          buttonType="outlined"
          additionalIcon={<SettingsOutlinedIcon />}
        >
          <MenuItem>Solid Option 1</MenuItem>
          <MenuItem>Solid Option 2</MenuItem>
        </SelectComponent>
      </div>
     
    </div>

    <div style={{ display: 'block', gap: '20px' }}>
      <div>
        <h1>Variants</h1>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <SelectComponent 
          label="primary" 
          buttonType="contained"
          color='primary'
          additionalIcon={<PersonOutlineIcon />}
        >
          <MenuItem>Outline Option 1</MenuItem>
          <MenuItem>Outline Option 2</MenuItem>
        </SelectComponent>

        <SelectComponent 
          label="error"  
          buttonType="contained"
          color='error'
          additionalIcon={<PersonOutlineIcon />}
        >
          <MenuItem>Outline Option 1</MenuItem>
          <MenuItem>Outline Option 2</MenuItem>
        </SelectComponent>

        <SelectComponent 
          label="info" 
          buttonType="contained"
          color='info'
          additionalIcon={<PersonOutlineIcon />}
        >
          <MenuItem>Outline Option 1</MenuItem>
          <MenuItem>Outline Option 2</MenuItem>
        </SelectComponent>

        <SelectComponent 
          label="inherit" 
          buttonType="contained"
          color='inherit'
          additionalIcon={<PersonOutlineIcon />}
        >
          <MenuItem>Outline Option 1</MenuItem>
          <MenuItem>Outline Option 2</MenuItem>
        </SelectComponent>

        <SelectComponent 
          label="secondary" 
          buttonType="contained"
          color='secondary'
          additionalIcon={<PersonOutlineIcon />}
        >
          <MenuItem>Outline Option 1</MenuItem>
          <MenuItem>Outline Option 2</MenuItem>
        </SelectComponent>
        
        <SelectComponent 
          label="success" 
          buttonType="contained"
          color='success'
          additionalIcon={<PersonOutlineIcon />}
        >
          <MenuItem>Outline Option 1</MenuItem>
          <MenuItem>Outline Option 2</MenuItem>
        </SelectComponent>

        <SelectComponent 
          label="warning" 
          buttonType="contained"
          color='warning'
          additionalIcon={<PersonOutlineIcon />}
        >
          <MenuItem>Outline Option 1</MenuItem>
          <MenuItem>Outline Option 2</MenuItem>
        </SelectComponent>
      </div>
    </div>
    </>),
  parameters: {
    docs: {
      description: {
        story: 'Showcases different button types (contained, outlined) and color variants (primary, secondary, error, info, success, warning, inherit) available for the SelectComponent.'
      }
    }
  }
};