import React from 'react';
import { Stack } from '@mui/material';
import T1Icon from '../Components/T1Icon';

/**
 * `T1Icon` is a versatile component for displaying SVG icons in your application.
 * 
 * It provides access to a collection of predefined icons that can be used
 * in various contexts such as page sections, user interface, and functionalities.
 * 
 * ## Features
 * - Multiple predefined icons organized by categories
 * - Size customization
 * - Support for custom styles through sx and className
 * 
 * @component
 */
export default {
  title: 'Components/Icons/T1Icon',
  component: T1Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
          A flexible component for displaying SVG icons.
          
          ## When to use
          - For UI elements such as buttons, form fields, and other controls
          - In page sections to visually identify their purpose
          - To improve usability by providing visual indicators
          - As part of the brand and design experience
        `
      }
    }
  },
  argTypes: {
    icon: {
      control: { 
        type: 'select', 
        options: [
          'bannerSection', 'imageSection', 'textSection', 'headerIcon', 'footerIcon',
          'searchIcon', 'eyeIcon', 'trashIcon', 'checkIcon', 'aiIcon',
          'downloadIcon', 'mailIcon', 'settingsIcon', 'filterIcon'
        ] 
      },
      description: 'The name of the icon to display'
    },
    width: {
      control: 'number',
      description: 'Width of the icon in pixels'
    },
    height: {
      control: 'number',
      description: 'Height of the icon in pixels'
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for the icon'
    },
    sx: {
      control: 'object',
      description: 'Additional inline styles (React style object)'
    }
  },
  tags: ['autodocs'],
};

/**
 * Basic example of the T1Icon component with different adjustable parameters.
 */
export const Default = {
  args: {
    icon: 'bannerSection',
    width: 24,
    height: 24
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic example of the icon with adjustable controls.'
      }
    }
  }
};

/**
 * Different sizes available for icons.
 * 
 * This example shows how the same icon can be adapted to different sizes
 * to suit various design needs.
 */
export const Sizes = {
  render: () => (
    <Stack direction="row" spacing={4} alignItems="center">
      <Stack direction="column" alignItems="center">
        <T1Icon icon="bannerSection" width={16} height={16} />
        <span style={{ fontSize: '12px', marginTop: '4px' }}>16px</span>
      </Stack>
      <Stack direction="column" alignItems="center">
        <T1Icon icon="bannerSection" width={24} height={24} />
        <span style={{ fontSize: '12px', marginTop: '4px' }}>24px</span>
      </Stack>
      <Stack direction="column" alignItems="center">
        <T1Icon icon="bannerSection" width={32} height={32} />
        <span style={{ fontSize: '12px', marginTop: '4px' }}>32px</span>
      </Stack>
      <Stack direction="column" alignItems="center">
        <T1Icon icon="bannerSection" width={48} height={48} />
        <span style={{ fontSize: '12px', marginTop: '4px' }}>48px</span>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows different icon sizes: 16px, 24px, 32px, and 48px.'
      }
    }
  }
};

/**
 * Different section icons available in the component.
 * 
 * This example shows icons related to different page sections
 * such as banners, image galleries, text sections, etc.
 */
export const SectionIcons = {
  render: () => (
    <Stack
      direction="row"
      flexWrap="wrap"
      spacing={2}
      sx={{ maxWidth: '600px', gap: '16px' }}
    >
      {[
        'bannerSection', 
        'imageSection', 
        'imageTextSection', 
        'multicolumnSection',
        'textSection',
        'featuredProductSection',
        'productListSection',
        'collectionListSection'
      ].map((iconName) => (
        <Stack key={iconName} direction="column" alignItems="center" 
          sx={{ 
            padding: '16px', 
            border: '1px solid #e7e7e7', 
            borderRadius: '8px',
            width: '120px',
            height: '100px',
            justifyContent: 'center' 
          }}
        >
          <T1Icon icon={iconName} width={32} height={32} />
          <span style={{ fontSize: '12px', marginTop: '8px', textAlign: 'center' }}>{iconName}</span>
        </Stack>
      ))}
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows the available icons for representing different page sections.'
      }
    }
  }
};

/**
 * User interface icons available in the component.
 * 
 * This example shows icons commonly used in user interfaces
 * such as search, navigation, actions, etc.
 */
export const UIIcons = {
  render: () => (
    <Stack
      direction="row"
      flexWrap="wrap"
      spacing={2}
      sx={{ maxWidth: '600px', gap: '16px' }}
    >
      {[
        'searchIcon', 
        'eyeIcon', 
        'eyeOffIcon', 
        'trashIcon',
        'checkIcon',
        'copyIcon',
        'calendarIcon',
        'downloadIcon',
        'mailIcon',
        'clipboardIcon',
        'checkCircleFillIcon',
        'helpIcon',
        'settingsIcon',
        'aiIcon',
        'columnIcon',
        'filterIcon'
      ].map((iconName) => (
        <Stack key={iconName} direction="column" alignItems="center" 
          sx={{ 
            padding: '16px', 
            border: '1px solid #e7e7e7', 
            borderRadius: '8px',
            width: '120px',
            height: '100px',
            justifyContent: 'center' 
          }}
        >
          <T1Icon icon={iconName} width={24} height={24} />
          <span style={{ fontSize: '12px', marginTop: '8px', textAlign: 'center' }}>{iconName}</span>
        </Stack>
      ))}
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows the available icons for user interface elements.'
      }
    }
  }
};

/**
 * Example of icons with custom styles applied.
 * 
 * This example demonstrates how icons can be customized using
 * the sx property to apply different visual effects.
 */
export const CustomStyles = {
  render: () => (
    <Stack direction="row" spacing={4} alignItems="center">
      <Stack direction="column" alignItems="center">
        <T1Icon 
          icon="aiIcon" 
          width={32} 
          height={32} 
          sx={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.2))' }} 
        />
        <span style={{ fontSize: '12px', marginTop: '4px' }}>Shadow</span>
      </Stack>
      <Stack direction="column" alignItems="center">
        <T1Icon 
          icon="aiIcon" 
          width={32} 
          height={32} 
          sx={{ filter: 'grayscale(100%)' }} 
        />
        <span style={{ fontSize: '12px', marginTop: '4px' }}>Grayscale</span>
      </Stack>
      <Stack direction="column" alignItems="center">
        <T1Icon 
          icon="aiIcon" 
          width={32} 
          height={32} 
          sx={{ opacity: 0.5 }} 
        />
        <span style={{ fontSize: '12px', marginTop: '4px' }}>Opacity</span>
      </Stack>
      <Stack direction="column" alignItems="center">
        <T1Icon 
          icon="aiIcon" 
          width={32} 
          height={32} 
          sx={{ transform: 'rotate(45deg)' }} 
        />
        <span style={{ fontSize: '12px', marginTop: '4px' }}>Rotation</span>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of visual customization using the sx property.'
      }
    }
  }
};

/**
 * Example with custom CSS classes.
 * 
 * This example demonstrates how custom CSS classes can be applied to
 * achieve interactive effects on icons.
 */
export const WithClassName = {
  render: () => (
    <div>
      <style>
        {`
          .custom-icon {
            transition: transform 0.3s ease;
          }
          .custom-icon:hover {
            transform: scale(1.2);
          }
        `}
      </style>
      <Stack direction="row" spacing={2} alignItems="center">
        <T1Icon 
          icon="arrowRight" 
          width={24} 
          height={24} 
          className="custom-icon"
        />
        <span style={{ fontSize: '14px' }}>Hover over the icon to see the effect</span>
      </Stack>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how to apply custom CSS classes for interactive effects.'
      }
    }
  }
};

/**
 * Examples of practical use in user interfaces.
 * 
 * This example shows how icons can be integrated into different
 * common interface elements such as search fields, buttons, and alerts.
 */
export const UsageExamples = {
  render: () => (
    <Stack direction="column" spacing={3} sx={{ maxWidth: '500px' }}>
      <h3 style={{ fontSize: '16px', margin: '0 0 8px 0' }}>Common Usage Examples</h3>
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        padding: '8px 12px',
        border: '1px solid #e7e7e7',
        borderRadius: '4px',
        gap: '8px' 
      }}>
        <T1Icon icon="searchIcon" width={20} height={20} />
        <input 
          type="text" 
          placeholder="Search..." 
          style={{ 
            border: 'none',
            outline: 'none',
            width: '100%'
          }} 
        />
      </div>
      
      <button 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: '8px',
          padding: '8px 16px',
          background: '#4A90E2',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          width: 'fit-content'
        }}
      >
        <T1Icon icon="downloadIcon" width={16} height={16} />
        Download
      </button>
      
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px',
          padding: '12px',
          background: '#FFF8E1',
          borderRadius: '4px',
          border: '1px solid #FFECB3'
        }}
      >
        <T1Icon icon="warningIconCircle" width={24} height={24} />
        <span>This is a warning message</span>
      </div>
      
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px',
          padding: '12px',
          background: '#E8F5E9',
          borderRadius: '4px',
          border: '1px solid #C8E6C9'
        }}
      >
        <T1Icon icon="checkCircleFillIcon" width={24} height={24} />
        <span>Operation completed successfully</span>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Practical examples of how to integrate icons into common interface elements.'
      }
    }
  }
};