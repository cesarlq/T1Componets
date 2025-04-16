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

const meta: Meta<typeof SelectComponent> = {
  title: 'Components/SelectComponent',
  component: SelectComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    buttonType: { 
      control: { 
        type: 'select', 
        options: ['solid', 'outline', 'text'] 
      } 
    },
  },
};

export default meta;
type Story = StoryObj<typeof SelectComponent>;

// Checkbox Select Variations
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
};

// Select Items with Icons
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
};

// Complex Select with Mixed Components
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
};

// Accessibility and Customization
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
};

// Button Variants with Additional Icons
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
};