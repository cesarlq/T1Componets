import React from 'react';
import { 
  Chip, 
  ChipProps
} from '@mui/material';
import { ChipColorDefinition, ExtendedChipProps } from '../interfaces/commonInterfaces';

// Enhanced color definitions with more flexibility


// Default color palette with more nuanced colors
const COLOR_PALETTE: Record<string, ChipColorDefinition> = {
  primary: {
    backgroundColor: {
      filled: '#eaf3ff',
      outlined: 'transparent'
    },
    color: {
      filled: '#4f89fd',
      outlined: '#4f89fd'
    },
    borderColor: {
      filled: '#eaf3ff',
      outlined: '#4f89fd'
    }
  },
  error: {
    backgroundColor: {
      filled: '#ffeeef',
      outlined: 'transparent'
    },
    color: {
      filled: '#f54f62',
      outlined: '#f54f62'
    },
    borderColor: {
      filled: '#ffeeef',
      outlined: '#f54f62'
    }
  },
  default: {
    backgroundColor: {
      filled: '#ffefe6',
      outlined: 'transparent'
    },
    color: {
      filled: '#f56e02',
      outlined: '#f56e02'
    },
    borderColor: {
      filled: '#ffefe6',
      outlined: '#f56e02'
    }
  },
  success: {
    backgroundColor: {
      filled: 'rgba(79, 193, 83, 0.1)',
      outlined: 'transparent'
    },
    color: {
      filled: '#4FC153',
      outlined: '#4FC153'
    },
    borderColor: {
      filled: 'rgba(79, 193, 83, 0.1)',
      outlined: '#4FC153'
    }
  },
  warning: {
    backgroundColor: {
      filled: 'rgba(237, 189, 85, 0.1)',
      outlined: 'transparent'
    },
    color: {
      filled: '#976905',
      outlined: '#976905'
    },
    borderColor: {
      filled: 'rgba(237, 189, 85, 0.1)',
      outlined: '#EDBD55'
    }
  }
};

const ChipT1: React.FC<ExtendedChipProps> = ({
  color = 'default',
  variant = 'outlined',
  customColorDefinition,
  hoverEffect = false,
  sx,
  ...props
}) => {
  // Merge custom color definitions with default palette
  const colorDefinition = customColorDefinition 
    ? { ...COLOR_PALETTE[color], ...customColorDefinition }
    : COLOR_PALETTE[color];

  // Dynamic styling based on variant and color
  const dynamicStyles = {
    backgroundColor: colorDefinition.backgroundColor[variant],
    color: colorDefinition.color[variant],
    borderColor: colorDefinition.borderColor[variant],
    borderRadius: '16px',
    transition: 'all 0.3s ease',
    ...(hoverEffect && {
      [`&:hover`]: {
        transform: 'scale(1.05)',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }
    }),
    height: '32px',
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '0px',
    lineHeight: '100%',
    padding: '4px 10px',
  };

  return (
    <Chip
      color={color}
      variant={variant}
      sx={{
        ...dynamicStyles,
        ...sx
      }}
      {...props}
    />
  );
};

export default ChipT1;
