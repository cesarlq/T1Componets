import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import TableT1 from '../Components/TableT1';
import { Box, Button, Chip, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { fn } from '@storybook/test';

// Sample data for the table
const sampleData = [
  { id: 1, name: 'John Smith', email: 'john@example.com', status: 'active', role: 'Admin', lastLogin: '2023-04-01' },
  { id: 2, name: 'Maria Garcia', email: 'maria@example.com', status: 'active', role: 'Editor', lastLogin: '2023-04-05' },
  { id: 3, name: 'Robert Johnson', email: 'robert@example.com', status: 'inactive', role: 'Viewer', lastLogin: '2023-03-28' },
  { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', status: 'active', role: 'Editor', lastLogin: '2023-04-02' },
  { id: 5, name: 'David Brown', email: 'david@example.com', status: 'active', role: 'Admin', lastLogin: '2023-04-07' },
  { id: 6, name: 'Jessica Davis', email: 'jessica@example.com', status: 'inactive', role: 'Viewer', lastLogin: '2023-03-25' },
  { id: 7, name: 'Thomas Miller', email: 'thomas@example.com', status: 'active', role: 'Editor', lastLogin: '2023-04-03' },
  { id: 8, name: 'Jennifer Wilson', email: 'jennifer@example.com', status: 'active', role: 'Admin', lastLogin: '2023-04-06' },
  { id: 9, name: 'Michael Moore', email: 'michael@example.com', status: 'inactive', role: 'Viewer', lastLogin: '2023-03-31' },
  { id: 10, name: 'Lisa Taylor', email: 'lisa@example.com', status: 'active', role: 'Editor', lastLogin: '2023-04-04' },
  { id: 11, name: 'William Anderson', email: 'william@example.com', status: 'active', role: 'Admin', lastLogin: '2023-04-08' },
  { id: 12, name: 'Elizabeth Thomas', email: 'elizabeth@example.com', status: 'inactive', role: 'Viewer', lastLogin: '2023-03-27' }
];

// Column definitions
const columns = [
  { id: 'id', label: 'ID', width: '80px' },
  { id: 'name', label: 'Name' },
  { id: 'email', label: 'Email' },
  { 
    id: 'status', 
    label: 'Status',
    renderCell: (row: any) => (
      <Chip 
        label={row.status} 
        color={row.status === 'active' ? 'success' : 'default'} 
        size="small"
        variant="outlined"
      />
    )
  },
  { id: 'role', label: 'Role' },
  { id: 'lastLogin', label: 'Last Login' }
];

// Sample expanded content renderer
const renderExpandedContent = (row: any) => (
  <Box sx={{ p: 2 }}>
    <Typography variant="subtitle1" gutterBottom>
      User Details
    </Typography>
    <Typography variant="body2">
      <strong>ID:</strong> {row.id}
    </Typography>
    <Typography variant="body2">
      <strong>Name:</strong> {row.name}
    </Typography>
    <Typography variant="body2">
      <strong>Email:</strong> {row.email}
    </Typography>
    <Typography variant="body2">
      <strong>Status:</strong> {row.status}
    </Typography>
    <Typography variant="body2">
      <strong>Role:</strong> {row.role}
    </Typography>
    <Typography variant="body2">
      <strong>Last Login:</strong> {row.lastLogin}
    </Typography>
  </Box>
);

// Sample row actions renderer
const renderRowActions = (row: any) => (
  <Stack direction="row" spacing={1}>
    <Tooltip title="Edit">
      <IconButton size="small">
        <EditIcon fontSize="small" />
      </IconButton>
    </Tooltip>
    <Tooltip title="Delete">
      <IconButton size="small" color="error">
        <DeleteIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  </Stack>
);

// Sample table header renderer
const renderTableHeader = () => (
  <Stack direction="row" spacing={2} alignItems="center">
    <Typography variant="h6">Users</Typography>
    <Button variant="contained" size="small">
      Add User
    </Button>
  </Stack>
);

const meta = {
  title: 'Components/TableT1',
  component: TableT1,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible and feature-rich table component with sorting, pagination, selection, expansion, and more.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    onRowClick: { action: 'rowClicked' },
    onRowExpand: { action: 'rowExpanded' },
    onSelectionChange: { action: 'selectionChanged' },
    onSearchChange: { action: 'searchChanged' }
  },
  args: {
    columns: columns,
    data: sampleData,
    loading: false,
    selectable: false,
    pageable: true,
    searchable: false,
    expandable: false,
    stickyHeader: true,
    idKey: 'id'
  }
} satisfies Meta<typeof TableT1>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Table
export const Basic: Story = {
  args: {
    columns: columns,
    data: sampleData
  }
};

// Table with Search
export const WithSearch: Story = {
  args: {
    columns: columns,
    data: sampleData,
    searchable: true,
    searchPlaceholder: 'Search users...'
  }
};

// Table with Selection
export const WithSelection: Story = {
  args: {
    columns: columns,
    data: sampleData,
    selectable: true
  }
};

// Table with Row Actions
export const WithRowActions: Story = {
  args: {
    columns: columns,
    data: sampleData,
    renderRowActions: renderRowActions
  }
};

// Table with Expandable Rows
export const WithExpandableRows: Story = {
  args: {
    columns: columns,
    data: sampleData,
    expandable: true,
    renderExpandedRow: renderExpandedContent
  }
};

// Comprehensive Table
export const ComprehensiveTable: Story = {
  args: {
    columns: columns,
    data: sampleData,
    selectable: true,
    searchable: true,
    expandable: true,
    renderRowActions: renderRowActions,
    renderExpandedRow: renderExpandedContent,
    renderTableHeader: renderTableHeader
  }
};

// Loading State
export const LoadingState: Story = {
  args: {
    columns: columns,
    data: [],
    loading: true
  }
};

// Empty State
export const EmptyState: Story = {
  args: {
    columns: columns,
    data: [],
    emptyMessage: 'No users found'
  }
};

// Error State
export const ErrorState: Story = {
  args: {
    columns: columns,
    data: [],
    error: 'Error loading users data. Please try again later.'
  }
};

// Custom Styling
export const CustomStyling: Story = {
  args: {
    columns: columns,
    data: sampleData,
    containerSx: {
      backgroundColor: '#f9fafc',
      padding: 2,
      borderRadius: 2
    },
    headerRowSx: {
      backgroundColor: '#f0f4ff'
    },
    bodyRowSx: {
      '&:hover': {
        backgroundColor: '#f0f7ff !important'
      }
    }
  }
};