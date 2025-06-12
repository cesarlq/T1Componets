import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mui/material';
import ChipT1 from '@/Components/ChipT1';

/**
 * `ChipT1` is a customizable chip component based on Material UI's Chip.
 * 
 * It can be used to display compact elements like tags, filters, or status indicators.
 * The component supports different colors, sizes, and styles to match your design needs.
 * 
 * ## Features
 * - Multiple color variations (primary, error, success, warning, default)
 * - Two variants (filled, outlined)
 * - Two sizes (small, medium)
 * - Support for custom colors
 * - Interactive states (hover effects, clickable, deletable)
 * 
 * ## Accessibility
 * The component includes proper ARIA attributes for better screen reader support.
 * 
 * @component
 */
const meta: Meta<typeof ChipT1> = {
  title: 'Components/ChipT1',
  component: ChipT1,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
          A customizable chip component based on Material UI's Chip, 
          designed to display compact elements like tags, filters, or status indicators.
          
          ## When to use
          - As a tag or label for categorizing or organizing content
          - To display status or state information (like "Active", "Pending", etc.)
          - For filter selections in search interfaces
          - To show compact, actionable information
        `
      }
    }
  },
  argTypes: {
    color: {
      control: { 
        type: 'select', 
        options: ['primary', 'error', 'default', 'success', 'warning'] 
      },
      description: 'The color of the chip'
    },
    variant: {
      control: { 
        type: 'select', 
        options: ['filled', 'outlined'] 
      },
      description: 'The visual style of the chip'
    },
    size: {
      control: { 
        type: 'select', 
        options: ['small', 'medium'] 
      },
      description: 'The size of the chip'
    },
    label: {
      control: 'text',
      description: 'The content of the chip'
    },
    hoverEffect: {
      control: 'boolean',
      description: 'Whether to show a hover effect when the user hovers over the chip'
    },
    customColorDefinition: {
      control: 'object',
      description: 'Custom color configuration for the chip'
    },
    onClick: {
      action: 'clicked',
      description: 'Callback fired when the chip is clicked'
    },
    onDelete: {
      action: 'deleted',
      description: 'Callback fired when the delete icon is clicked'
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChipT1>;

/**
 * Different color variations of the ChipT1 component in both filled and outlined variants.
 * 
 * This example demonstrates all the available color options:
 * - primary: Used for main actions or primary tags
 * - error: Used for error states or destructive tags
 * - success: Used for success states or confirmations
 * - warning: Used for warnings or attention-required states
 * - default: Used for neutral or less emphasized tags
 */
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
  parameters: {
    docs: {
      description: {
        story: 'Shows all color variations in both filled and outlined variants.'
      }
    }
  }
};

/**
 * The ChipT1 component comes in two sizes: small and medium.
 * 
 * - small: Compact size, useful when space is limited or for dense UIs
 * - medium: Standard size, provides better visibility and touch target
 */
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
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the small and medium size variants of the chip component.'
      }
    }
  }
};

/**
 * The ChipT1 component supports custom styling options:
 * 
 * - Hover effects can make chips more interactive
 * - Custom colors allow for brand-specific styling
 */
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
  parameters: {
    docs: {
      description: {
        story: 'Examples of customizing the chip appearance with hover effects and custom colors.'
      }
    }
  }
};

/**
 * ChipT1 can display different types of content and interactions:
 * 
 * - Various text lengths
 * - Deletable chips (with delete icon)
 * - Clickable chips (for actions or toggling)
 */
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
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates chips with different content lengths and interactive behaviors (deletable, clickable).'
      }
    }
  }
};

/**
 * Example of an interactive chip that changes appearance based on state.
 * 
 * This demonstrates how ChipT1 can be used for toggling or selection behaviors.
 */
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
  parameters: {
    docs: {
      description: {
        story: 'An interactive example showing how chips can change based on state (selected/unselected).'
      }
    }
  }
};

/**
 * This example demonstrates accessibility features of the ChipT1 component.
 * 
 * The chip includes appropriate ARIA attributes for better screen reader support.
 */
export const AccessibilityDemo: Story = {
  args: {
    label: 'Accessible Chip',
    color: 'primary',
    variant: 'outlined',
    'aria-label': 'Example of an accessible chip',
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows how to create accessible chips using ARIA attributes.'
      }
    }
  }
};