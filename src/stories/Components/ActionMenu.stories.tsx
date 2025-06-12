import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React from 'react';
import ActionMenu from '../../Components/ActionMenu/ActionMenu';
import { Box, Divider, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


const CustomMenuItem = (props: { 
  label: string; 
  onClick?: () => void; 
  icon?: string;
}) => {
  return <>{props.label}</>; 
};

const meta = {
  title: 'Components/ActionMenu',
  component: ActionMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible dropdown menu for displaying actions and options, typically accessed via a three-dot icon button.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'menuOpened' },
    onClose: { action: 'menuClosed' }
  },
  
  decorators: [
    (Story) => (
      <Box sx={{ padding: 4, display: 'flex', justifyContent: 'center' }}>
        <Story />
      </Box>
    )
  ]
} satisfies Meta<typeof ActionMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic menu with simple text items
export const Basic: Story = {
  render: () => (
    <ActionMenu>
      <CustomMenuItem label="View" onClick={fn()} />
      <CustomMenuItem label="Edit" onClick={fn()} />
      <CustomMenuItem label="Delete" onClick={fn()} />
    </ActionMenu>
  )
};

// Menu with Material-UI MenuItems
export const WithMaterialMenuItems: Story = {
  render: () => (
    <ActionMenu>
      <MenuItem onClick={fn()}>View Details</MenuItem>
      <MenuItem onClick={fn()}>Edit Item</MenuItem>
      <Divider />
      <MenuItem onClick={fn()} sx={{ color: 'error.main' }}>Delete Item</MenuItem>
    </ActionMenu>
  )
};

// Menu with icons
export const WithIcons: Story = {
  render: () => (
    <ActionMenu>
      <CustomMenuItem 
        label="View" 
        icon="/icons/eye.svg" 
        onClick={fn()} 
      />
      <CustomMenuItem 
        label="Edit" 
        icon="/icons/edit.svg" 
        onClick={fn()} 
      />
      <CustomMenuItem 
        label="Delete" 
        icon="/icons/trash.svg" 
        onClick={fn()} 
      />
    </ActionMenu>
  )
};

// Menu with Material-UI icons directly in MenuItems
export const WithMaterialIcons: Story = {
  render: () => (
    <ActionMenu>
      <MenuItem onClick={fn()} sx={{ display: 'flex', gap: 1 }}>
        <VisibilityIcon fontSize="small" />
        <Typography>View Details</Typography>
      </MenuItem>
      <MenuItem onClick={fn()} sx={{ display: 'flex', gap: 1 }}>
        <EditIcon fontSize="small" />
        <Typography>Edit Item</Typography>
      </MenuItem>
      <Divider />
      <MenuItem onClick={fn()} sx={{ display: 'flex', gap: 1, color: 'error.main' }}>
        <DeleteIcon fontSize="small" />
        <Typography>Delete Item</Typography>
      </MenuItem>
    </ActionMenu>
  )
};

// Menu with complex items
export const ComplexMenu: Story = {
  render: () => (
    <ActionMenu>
      <CustomMenuItem label="View Details" onClick={fn()} />
      <Divider />
      <Box sx={{ px: 2, py: 1 }}>
        <Typography variant="caption" color="text.secondary">ACTIONS</Typography>
      </Box>
      <CustomMenuItem label="Edit Item" onClick={fn()} />
      <CustomMenuItem label="Duplicate" onClick={fn()} />
      <CustomMenuItem label="Archive" onClick={fn()} />
      <Divider />
      <Box sx={{ px: 2, py: 1 }}>
        <Typography variant="caption" color="text.secondary">DANGER ZONE</Typography>
      </Box>
      <MenuItem onClick={fn()} sx={{ color: 'error.main' }}>Delete Item</MenuItem>
    </ActionMenu>
  )
};

// Mobile optimized menu
export const MobileOptimized: Story = {
  render: () => (
    <ActionMenu>
      <CustomMenuItem label="View Details" onClick={fn()} />
      <CustomMenuItem label="Edit Item" onClick={fn()} />
      <CustomMenuItem label="Share" onClick={fn()} />
      <CustomMenuItem label="Duplicate" onClick={fn()} />
      <Divider />
      <CustomMenuItem label="Delete Item" onClick={fn()} />
    </ActionMenu>
  )
};

// Custom styled menu
export const CustomStyled: Story = {
  render: () => (
    <ActionMenu>
      <Box 
        sx={{ 
          px: 2, 
          py: 1, 
          backgroundColor: 'primary.main', 
          color: 'white',
          borderTopLeftRadius: '4px',
          borderTopRightRadius: '4px'
        }}
      >
        <Typography variant="subtitle2">Document Options</Typography>
      </Box>
      <MenuItem
        onClick={fn()}
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1, 
          py: 1.5 
        }}
      >
        <VisibilityIcon fontSize="small" />
        <Typography>Preview</Typography>
      </MenuItem>
      <MenuItem
        onClick={fn()}
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1, 
          py: 1.5 
        }}
      >
        <EditIcon fontSize="small" />
        <Typography>Edit</Typography>
      </MenuItem>
      <MenuItem
        onClick={fn()}
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1, 
          py: 1.5 
        }}
      >
        <ContentCopyIcon fontSize="small" />
        <Typography>Duplicate</Typography>
      </MenuItem>
      <Divider />
      <MenuItem
        onClick={fn()}
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1, 
          py: 1.5,
          color: 'error.main'
        }}
      >
        <DeleteIcon fontSize="small" />
        <Typography>Delete</Typography>
      </MenuItem>
    </ActionMenu>
  )
};