import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mui/material';
import ChipT1 from '../Components/ChipT1';

const meta: Meta<typeof ChipT1> = {
  title: 'Components/ChipT1',
  component: ChipT1,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: { 
        type: 'select', 
        options: ['primary', 'error', 'default', 'success', 'warning'] 
      }
    },
    variant: {
      control: { 
        type: 'select', 
        options: ['filled', 'outlined'] 
      }
    },
    size: {
      control: { 
        type: 'select', 
        options: ['small', 'medium'] 
      }
    }
  },
};

export default meta;
type Story = StoryObj<typeof ChipT1>;

// Default Chip Variations
export const ColorVariations: Story = {
  render: () => (
    <Stack 
      direction="column" 
      spacing={2} 
      alignItems="center"
    >
      <Stack direction="row" spacing={2}>
        <ChipT1 label="Primary Filled" color="primary" variant="filled" />
        <ChipT1 label="Primary Outlined" color="primary" variant="outlined" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <ChipT1 label="Error Filled" color="error" variant="filled" />
        <ChipT1 label="Error Outlined" color="error" variant="outlined" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <ChipT1 label="Success Filled" color="success" variant="filled" />
        <ChipT1 label="Success Outlined" color="success" variant="outlined" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <ChipT1 label="Warning Filled" color="warning" variant="filled" />
        <ChipT1 label="Warning Outlined" color="warning" variant="outlined" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <ChipT1 label="Default Filled" color="default" variant="filled" />
        <ChipT1 label="Default Outlined" color="default" variant="outlined" />
      </Stack>
    </Stack>
  ),
};

// Chip with Different Sizes
export const SizeVariations: Story = {
  render: () => (
    <Stack 
      direction="column" 
      spacing={2} 
      alignItems="center"
    >
      <Stack direction="row" spacing={2}>
        <ChipT1 label="Small Primary" color="primary" size="small" />
        <ChipT1 label="Medium Primary" color="primary" size="medium" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <ChipT1 label="Small Error" color="error" size="small" />
        <ChipT1 label="Medium Error" color="error" size="medium" />
      </Stack>
    </Stack>
  ),
};

// Chip with Custom Styles
export const CustomStyledChips: Story = {
  render: () => (
    <Stack 
      direction="column" 
      spacing={2} 
      alignItems="center"
    >
      <Stack direction="row" spacing={2}>
        <ChipT1 
          label="Rounded Chip" 
          color="primary"
        />
        <ChipT1 
          label="Hover Effect" 
          color="success" 
          hoverEffect={true} 
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <ChipT1 
          label="Custom Color" 
          customColorDefinition={{
            backgroundColor: {
              filled: '#purple',
              outlined: 'transparent'
            },
            color: {
              filled: 'white',
              outlined: 'purple'
            },
            borderColor: {
              filled: '#purple',
              outlined: 'purple'
            }
          }}
        />
      </Stack>
    </Stack>
  ),
};

// Chip with Different Content
export const ContentVariations: Story = {
  render: () => (
    <Stack 
      direction="column" 
      spacing={2} 
      alignItems="center"
    >
      <Stack direction="row" spacing={2}>
        <ChipT1 label="Short Text" color="primary" />
        <ChipT1 label="Medium Length Text" color="error" />
        <ChipT1 label="Very Long Descriptive Text" color="success" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <ChipT1 label="Chip with Delete" onDelete={() => {}} color="warning" />
        <ChipT1 label="Clickable Chip" onClick={() => {}} color="default" />
      </Stack>
    </Stack>
  ),
};

// Interactive Chip Story
export const InteractiveChips: Story = {
  render: () => {
    const [selected, setSelected] = React.useState(false);

    return (
      <Stack 
        direction="column" 
        spacing={2} 
        alignItems="center"
      >
        <ChipT1 
          label={selected ? "Selected" : "Select Me"} 
          color={selected ? "primary" : "default"}
          onClick={() => setSelected(!selected)}
          hoverEffect={true}
        />
      </Stack>
    );
  },
};

// Accessibility and Variations
export const AccessibilityDemo: Story = {
  args: {
    label: 'Accessible Chip',
    color: 'primary',
    variant: 'outlined',
    'aria-label': 'Example of an accessible chip',
  },
};