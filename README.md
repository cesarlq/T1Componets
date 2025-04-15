# @t1-org/t1componets

## Overview

A React component library for T1 organization, providing a collection of reusable UI components.

## Prerequisites

Before installing the library, ensure you have the following:

- Node.js (version 16 or higher)
- npm (version 7 or higher)
- React (version 17 or 18)
- React DOM (version 17 or 18)

## Installation

### 1. Authentication

First, you must be logged into npm and have access to the T1 organization:

```bash
# Log in to npm
npm login

# Verify organization access
npm whoami
```

### 2. Install the Library

Install the library using npm:

```bash
npm install @t1-org/t1componets
```

### Peer Dependencies

This library requires the following peer dependencies:

- react (^17.0.0 || ^18.0.0)
- react-dom (^17.0.0 || ^18.0.0)

### Additional Dependencies

The library includes the following key dependencies:
- @mui/icons-material
- @mui/lab
- clsx
- react-hook-form
- react-number-format
- react-world-flags
- tailwindcss

## Styling

The library uses Tailwind CSS for styling. Ensure your project is configured to work with Tailwind CSS.

### Tailwind Configuration

Add to your `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    // ... other paths
    './node_modules/@t1-org/t1componets/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Setting Up Theme Provider

```jsx
// In your _app.js or App.js
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from 't1componets'; // Import the pre-configured theme

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* This normalizes CSS across browsers */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
```

### Custom Theme

If you want to customize the theme:

```jsx
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { theme as t1Theme } from 't1componets';

// Create a custom theme by extending the T1Components theme
const customTheme = createTheme({
  ...t1Theme,
  palette: {
    ...t1Theme.palette,
    primary: {
      main: '#your-primary-color',
      // Other color values
    },
    // Other palette customizations
  },
  // Other theme customizations
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
```

## Importing Styles

Import the global styles in your main component:

```jsx
// Import the global styles (do this once in your app)
import 't1componets/dist/lib/styles.css';
```

## Basic Usage

Here's a quick example of how to use the components:

```jsx
import { ButtonT1, InputComponentT1, ChipT1 } from 't1componets';

function MyComponent() {
  return (
    <div>
      <ButtonT1 onClick={() => console.log('Button clicked')}>
        Click Me
      </ButtonT1>
      
      <InputComponentT1 
        label="Username" 
        required 
        minLength={3} 
      />
      
      <ChipT1 
        label="Active" 
        color="success" 
      />
    </div>
  );
}
```

## Next.js Configuration

If you're using Next.js, you'll need to configure it to handle the image imports:

### Set up next.config.js

```js
// next.config.js
const withImages = require('next-images');

module.exports = withImages({
  // Your existing Next.js config
  images: {
    disableStaticImages: true,
  },
  // For Next.js 12+, you might need to use the experimental feature
  experimental: {
    esmExternals: true,
  },
});
```

## Troubleshooting

### Common Issues

1. **Missing peer dependencies**
   
   If you see warnings about missing peer dependencies, make sure to install all required packages listed above.

2. **Styling issues**
   
   If components don't appear styled correctly, ensure you've imported the CSS file and set up the ThemeProvider correctly.

3. **TypeScript errors**
   
   If you encounter TypeScript errors, make sure your `tsconfig.json` includes:

   ```json
   {
     "compilerOptions": {
       "jsx": "react",
       "esModuleInterop": true
     }
   }
   ```

4. **Module resolution errors**
   
   If you get module resolution errors, ensure your import paths are correct:

   ```jsx
   // Correct import
   import { ButtonT1 } from 't1componets';
   
   // Not
   import ButtonT1 from 't1componets/ButtonT1';
   ```

### Support

If you encounter any issues not covered here, please:
- Check the documentation
- Open an issue on the GitHub repository


# Custom Chip Component (ChipT1)

## Overview
`ChipT1` is a custom, reusable Chip component built on top of Material-UI's Chip, with enhanced styling and flexibility.

## Features
- Custom color variants
- Consistent styling across different states
- Fully compatible with Material-UI Chip props
- Lightweight and easy to use

## Props
Extends all standard MUI Chip props with additional customization:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| color | 'primary' \| 'error' \| 'default' \| 'success' \| 'warning' | 'default' | Defines the color scheme of the chip |
| variant | 'filled' \| 'outlined' | - | Determines the chip's background and border style |
| sx | SystemStyleObject | - | Additional styling overrides |

## Color Variants

### Primary
- Filled: Light blue background
- Outlined: Blue text
- Color: `#4f89fd`

### Error
- Filled: Light red background
- Outlined: Red text
- Color: `#f54f62`

### Default
- Filled: Light orange background
- Outlined: Orange text
- Color: `#f56e02`

### Success
- Filled: Light green background
- Outlined: Green text
- Color: `#4FC153`

### Warning
- Filled: Light yellow background
- Outlined: Dark yellow text
- Color: `#976905`

## Usage Examples

```jsx
// Basic Usage
<ChipT1 label="Primary Chip" color="primary" />

// Outlined Variant
<ChipT1 label="Error Chip" color="error" variant="outlined" />

// With Delete Icon
<ChipT1 
  label="Deletable Chip" 
  color="success" 
  onDelete={() => handleDelete()} 
/>

// Custom Styling
<ChipT1 
  label="Custom Chip" 
  color="warning" 
  sx={{ 
    borderRadius: '20px',
    padding: '8px 12px' 
  }} 
/>
```

## Customization
The component uses styled-components approach for easy customization. You can extend or modify the color schemes by updating the `StyledChip` configuration.

## Performance Considerations
- Lightweight wrapper around MUI Chip
- Minimal performance overhead
- Uses Material-UI's styling system




# Custom Action Menu Component (ActionMenu)
# Action Menu Component

## Overview
`ActionMenu` is a flexible and reusable dropdown menu component built with Material-UI, designed to provide a clean and intuitive way to display additional actions or options.

## Features
- Customizable menu items
- Supports both Material-UI `MenuItem` and custom menu items
- Dynamic rendering of menu options
- Easy to use and integrate
- Responsive design
- Typescript support

## Props Interface
```typescript
interface actionMenuI {
    children: React.ReactNode;
    onClick?: () => void;
    onClose?: (event: any) => void;
}
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| children | `React.ReactNode` | Yes | Menu items to be displayed |
| onClick | `() => void` | No | Callback when menu is opened |
| onClose | `(event: any) => void` | No | Callback when menu is closed |

## Usage Examples

### Basic Usage
```jsx
<ActionMenu>
    <MenuItem>Option 1</MenuItem>
    <MenuItem>Option 2</MenuItem>
</ActionMenu>
```

### With Custom Menu Items
```jsx
<ActionMenu>
    <MenuItem onClick={() => handleAction1()}>
        <Image src="/icon1.svg" alt="Icon 1" width={25} height={25} />
        Option with Icon
    </MenuItem>
    
    <div label="Custom Option" onClick={() => handleCustomAction()}>
        Custom Menu Item
    </div>
</ActionMenu>
```

### With Callbacks
```jsx
<ActionMenu 
    onClick={() => console.log('Menu opened')}
    onClose={() => console.log('Menu closed')}
>
    <MenuItem>Option 1</MenuItem>
    <MenuItem>Option 2</MenuItem>
</ActionMenu>
```

## Customization

### Styling
- Uses SCSS module for styling (`CommonStyles.module.scss`)
- Customizable through CSS classes:
  - `.ActionMenu`
  - `.dots-menu-step`
  - `.button`
  - `.icon`
  - `.more-options-item`

# Custom Select Components
# Select Components Documentation

## Overview
This documentation covers three interconnected components designed to create flexible and customizable select/dropdown experiences in React applications using Material-UI.

## Components

### 1. SelectItem
A lightweight component for rendering selectable items within a select menu.

#### Props Interface
```typescript
interface ExtendedTypographyProps extends TypographyProps {
    value?: boolean | string;
    label?: string;
    icon?: string;
    cheked?: string | boolean;
    onClick?: () => void;
}
```

#### Usage Example
```jsx
<SelectItem 
  label="Option 1" 
  value="option1" 
  onClick={() => handleSelection()} 
/>
```

### 2. FormControlSelect
A radio-group based select component with dynamic child rendering.

#### Props Interface
```typescript
interface FormControlSelectProps extends TypographyProps {
  children?: React.ReactNode;
  name?: string | number | boolean;
  onChange?: (value: any) => void;
  initialValue?: string | number | boolean; 
}
```

#### Key Features
- Supports dynamic child rendering
- Manages internal state
- Allows external value control
- Handles selection changes

#### Usage Example
```jsx
<FormControlSelect 
  name={selectedValue}
  onChange={handleChange}
>
  <SelectItem label="Option 1" value="option1" />
  <SelectItem label="Option 2" value="option2" />
</FormControlSelect>
```

### 3. CheckBoxSelect
A component for rendering checkbox-based select items.

#### Props Interface
```typescript
interface CheckBoxSelectProps extends Omit<TypographyProps, 'checkbox' | 'icon' | 'onCheckboxClick'> {
  checkbox?: boolean;
  icon?: string;
  onCheckboxClick?: () => void;
  children?: React.ReactNode;
}
```

#### Usage Example
```jsx
<CheckBoxSelect 
  checkbox={isChecked}
  icon="/path/to/icon.svg"
  onCheckboxClick={handleCheck}
>
  Checkbox Option
</CheckBoxSelect>
```

## Advanced Usage

### Combining Components
```jsx
<SelectComponent>
  <FormControlSelect>
    <SelectItem label="Option 1" value="option1" />
    <SelectItem label="Option 2" value="option2" />
  </FormControlSelect>
  
  <CheckBoxSelect 
    checkbox={isChecked} 
    onCheckboxClick={handleCheck}
  >
    Additional Option
  </CheckBoxSelect>
</SelectComponent>
```

# Custom Button Component (ButtonT1)
# ButtonT1 - Advanced Button Component

## Features

- ✅ **Multiple variants**: Contained, Outlined, Text
- ✅ **Icon support**: Start, end, and additional icons with separator
- ✅ **Advanced states**: Loading, disabled, confirmation
- ✅ **Tooltips**: Additional information on hover
- ✅ **Action confirmation**: Simple or via modal dialog
- ✅ **Adaptable**: Responsive mode for mobile devices
- ✅ **Security**: Double-click prevention for sensitive operations
- ✅ **Accessibility**: Fully compatible with a11y standards


## Basic Usage

```jsx
import { ButtonT1 } from 't1componets';
import AddIcon from '@mui/icons-material/Add';

function MyComponent() {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <ButtonT1 
      variant="contained" 
      color="primary"
      startIcon={<AddIcon />}
      onClick={handleClick}
    >
      Add Item
    </ButtonT1>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | 'contained' \| 'outlined' \| 'text' | 'contained' | Visual style of the button |
| `color` | 'primary' \| 'secondary' \| 'success' \| 'error' \| 'info' \| 'warning' | 'primary' | Button color |
| `size` | 'small' \| 'medium' \| 'large' | 'medium' | Button size |
| `loading` | boolean | false | Shows loading indicator |
| `disabled` | boolean | false | Disables the button |
| `startIcon` | ReactNode | - | Icon at the beginning of the button |
| `endIcon` | ReactNode | - | Icon at the end of the button |
| `additionalIcon` | ReactNode | - | Additional icon with separator |
| `confirmationMessage` | string | - | Message to confirm action |
| `confirmationTitle` | string | 'Confirm Action' | Title of confirmation dialog |
| `confirmationCancelText` | string | 'Cancel' | Text for cancel action |
| `confirmationConfirmText` | string | 'Confirm' | Text for confirm action |
| `tooltipText` | string | - | Tooltip text |
| `tooltipPlacement` | 'top' \| 'bottom' \| 'left' \| 'right' | 'top' | Tooltip position |
| `responsive` | boolean | false | Adaptation to small screens |
| `preventDoubleClick` | boolean | false | Prevents repeated clicks |
| `fullWidth` | boolean | false | Takes up full width |
| `disableElevation` | boolean | false | Removes elevation |
| `onClick` | function | - | Function called on click |
| `className` | string | - | Additional CSS classes |
| `sx` | SxProps | - | Material UI styles |

> In addition to the listed props, the component accepts all props from Material UI's Button component.

## Examples

### Button with loading state

Ideal for asynchronous operations:

```jsx
import React, { useState } from 'react';
import { ButtonT1 } from 't1componets';

function LoadingButtonExample() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    
    try {
      // Simulate asynchronous operation
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Save successful');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ButtonT1 
      loading={isLoading}
      onClick={handleSave}
    >
      Save changes
    </ButtonT1>
  );
}
```

### Button with confirmation

For destructive or important actions:

```jsx
import { ButtonT1 } from 't1componets';
import DeleteIcon from '@mui/icons-material/Delete';

function DeleteButtonExample() {
  const handleDelete = () => {
    console.log('Item deleted');
  };

  return (
    <ButtonT1 
      color="error"
      startIcon={<DeleteIcon />}
      confirmationMessage="This action cannot be undone"
      confirmationTitle="Delete item?"
      confirmationConfirmText="Delete"
      confirmationCancelText="Cancel"
      onClick={handleDelete}
    >
      Delete
    </ButtonT1>
  );
}
```

### Button with additional icons

Useful for menus or compound actions:

```jsx
import { ButtonT1 } from 't1componets';
import SaveIcon from '@mui/icons-material/Save';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function SaveButtonWithMenuExample() {
  return (
    <ButtonT1 
      startIcon={<SaveIcon />}
      additionalIcon={<ArrowDropDownIcon />}
      onClick={() => console.log('Main save action')}
    >
      Save
    </ButtonT1>
  );
}
```

## Responsive Button

Adaptable to different screen sizes:

```jsx
import { ButtonT1 } from 't1componets';
import SendIcon from '@mui/icons-material/Send';

function ResponsiveButtonExample() {
  return (
    <ButtonT1 
      responsive
      endIcon={<SendIcon />}
    >
      Send message
    </ButtonT1>
  );
}
```

## Customization with themes

The component is compatible with Material UI's theme system:

```jsx
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <YourApp />
    </ThemeProvider>
  );
}
```


# InputComponentT1 - Advanced Input Component
## Overview
`InputComponentT1` is a robust, flexible, and extensible input component built on top of Material-UI's TextField, providing advanced validation and error handling capabilities.

## Features
- Built-in input validation
- Supports multiple validation types
- Error handling and display
- Fully compatible with Material-UI TextField props
- TypeScript support

## Props Interface
```typescript
interface InputComponentT1I extends TextFieldProps {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string | RegExp;
}
```

### Validation Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| required | `boolean` | No | Makes the field mandatory |
| minLength | `number` | No | Minimum character length |
| maxLength | `number` | No | Maximum character length |
| pattern | `string` \| `RegExp` | No | Regex pattern for validation |

## Usage Examples

### Basic Usage
```jsx
<InputComponentT1 
    label="Name" 
    placeholder="Enter your name" 
/>
```

### Required Field
```jsx
<InputComponentT1 
    label="Email" 
    required 
    placeholder="Enter your email" 
/>
```

### Length Validation
```jsx
<InputComponentT1 
    label="Username" 
    minLength={4} 
    maxLength={12} 
    placeholder="4-12 characters" 
/>
```

### Pattern Validation
```jsx
<InputComponentT1 
    label="Phone" 
    pattern="^\d{10}$" 
    placeholder="10-digit phone number" 
/>
```

### Complex Validation
```jsx
<InputComponentT1 
    label="Password" 
    type="password"
    required
    minLength={8}
    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
    helperText="At least 8 characters, include letters and numbers"
/>
```

## Validation Behavior

### Required Fields
- Prevents submission of empty fields
- Displays "This field is required" error

### Length Validation
- Checks minimum and maximum length
- Provides specific error messages for length constraints

### Pattern Validation
- Uses RegExp to validate input format
- Supports complex validation rules (e.g., password strength)

# CheckBoxT1 - Flexible Checkbox Component

## Overview
`CheckBoxT1` is a versatile and extensible checkbox component built on top of Material-UI's Checkbox, offering enhanced customization and rendering capabilities.

## Features
- Supports standard Checkbox props
- Custom icon rendering
- Optional child content
- Seamless Material-UI integration
- Flexible rendering options

## Props Interface
```typescript
interface ExtendedCheckBoxProps extends CheckboxProps {
    renderIcon?: (props: CheckboxProps) => React.ReactNode;
    children?: React.ReactNode;
}
```

### Prop Descriptions

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| renderIcon | `(props: CheckboxProps) => React.ReactNode` | No | Custom icon rendering function |
| children | `React.ReactNode` | No | Additional content to render alongside checkbox |
| ...other CheckboxProps | - | - | All standard Material-UI Checkbox props |

## Usage Examples

### Basic Usage
```jsx
<CheckBoxT1 
    checked={isChecked} 
    onChange={handleChange} 
/>
```

### With Custom Icon
```jsx
<CheckBoxT1 
    renderIcon={(props) => (
        <CustomCheckboxIcon {...props} />
    )}
    checked={isChecked}
    onChange={handleChange}
/>
```

### With Children
```jsx
<CheckBoxT1 
    checked={isChecked}
    onChange={handleChange}
>
    <Typography>Additional Content</Typography>
</CheckBoxT1>
```

### Combining Features
```jsx
<CheckBoxT1 
    renderIcon={(props) => <CustomIcon {...props} />}
    checked={isChecked}
    onChange={handleChange}
>
    <div>
        <Typography>Custom Label</Typography>
        <Tooltip title="Additional Information">
            <InfoIcon />
        </Tooltip>
    </div>
</CheckBoxT1>
```

## Customization Options
- Fully supports all Material-UI Checkbox props
- Custom icon generation
- Additional content rendering
- Flexible styling

## Best Practices
- Use custom icons sparingly
- Ensure custom icons maintain accessibility
- Keep additional content clear and concise
- Maintain consistent design language

## Performance Considerations
- Lightweight wrapper
- Minimal performance overhead
- Efficient rendering

## Typescript Support
- Full type safety
- Extends Material-UI Checkbox props
- IDE autocomplete

## Accessibility
- Inherits Material-UI Checkbox accessibility
- Supports custom rendering
- Keyboard navigable

## Limitations
- Depends on Material-UI Checkbox
- Custom icons must maintain accessibility
- Additional complexity with custom rendering

## Potential Improvements
- Advanced validation support
- More sophisticated custom rendering
- Enhanced accessibility features

## Troubleshooting
- Ensure custom icons are compatible with Checkbox props
- Check that children don't interfere with checkbox functionality
- Verify accessibility of custom implementations


# PhoneInputT1 - Advanced Phone Number Input Component

## Overview
`PhoneInputT1` is a flexible, user-friendly phone number input component designed to provide an intuitive international phone number entry experience.

## Features
- Dynamic country selection
- Flag display
- Validation support
- Customizable
- Disabled state support
- Full-width option

## Props Interface
```typescript
interface PhoneInputT1Props {
  initialRegion?: string;
  initialPhoneNumber?: string;
  countries?: Country[];
  onChange?: (region: string, phoneNumber: string) => void;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}
```

### Prop Descriptions

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| initialRegion | `string` | - | Initial country prefix |
| initialPhoneNumber | `string` | `''` | Initial phone number |
| countries | `Country[]` | `DEFAULT_COUNTRIES` | List of available countries |
| onChange | `(region, phoneNumber) => void` | - | Callback for input changes |
| placeholder | `string` | `'Cellphone number'` | Input placeholder |
| error | `boolean` | `false` | Indicates error state |
| helperText | `string` | - | Custom error message |
| disabled | `boolean` | `false` | Disables the input |
| fullWidth | `boolean` | `false` | Expands input to full container width |

## Usage Examples

### Basic Usage
```jsx
<PhoneInputT1 
  onChange={(region, number) => handlePhoneChange(region, number)}
/>
```

### With Initial Values
```jsx
<PhoneInputT1 
  initialRegion="+52"
  initialPhoneNumber="1234567890"
  onChange={handlePhoneChange}
/>
```

### Custom Countries
```jsx
const customCountries = [
  { code: 'MX', name: 'Mexico', prefix: '+52' },
  { code: 'US', name: 'United States', prefix: '+1' }
];

<PhoneInputT1 
  countries={customCountries}
  onChange={handlePhoneChange}
/>
```

### With Error Handling
```jsx
<PhoneInputT1 
  error={phoneNumberInvalid}
  helperText="Invalid phone number"
  onChange={handlePhoneChange}
/>
```

### Disabled and Full-Width
```jsx
<PhoneInputT1 
  disabled
  fullWidth
  value={phoneNumber}
/>
```

- Works with modern browsers
- Responsive design


# CloseButtonT1 - Versatile Close Button Component

## Overview
`CloseButtonT1` is a flexible, customizable close button component designed to provide a consistent and intuitive way to implement close functionality across your application.

## Features
- Multiple size options
- Variant support (text, outlined, contained)
- Color customization
- Interactive hover states
- Accessibility features
- Disabled state handling

## Props Interface
```typescript
interface CloseButtonT1Props {
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  color?: 'default' | 'primary' | 'secondary' | 'error';
  variant?: 'text' | 'outlined' | 'contained';
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}
```

### Prop Descriptions

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| onClick | `() => void` | - | Click event handler |
| size | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| color | `'default' \| 'primary' \| 'secondary' \| 'error'` | `'default'` | Color scheme |
| variant | `'text' \| 'outlined' \| 'contained'` | `'text'` | Button style variant |
| disabled | `boolean` | `false` | Disables the button |
| className | `string` | - | Additional CSS classes |
| ariaLabel | `string` | `'Close'` | Accessibility label |

## Usage Examples

### Basic Usage
```jsx
<CloseButtonT1 onClick={handleClose} />
```

### Customized Close Button
```jsx
<CloseButtonT1 
  onClick={handleClose}
  size="small"
  color="error"
  variant="contained"
/>
```

### Disabled Close Button
```jsx
<CloseButtonT1 
  onClick={handleClose}
  disabled
/>
```

### With Custom Aria Label
```jsx
<CloseButtonT1 
  onClick={handleClose}
  ariaLabel="Close modal"
/>
```

## Styling Variants

### Color Options
- `default`: Neutral styling
- `primary`: Primary color theme
- `secondary`: Secondary color theme
- `error`: Error/destructive color theme

### Size Options
- `small`: Compact button (32px)
- `medium`: Standard button (40px)
- `large`: Expanded button (48px)

### Variants
- `text`: Minimal styling
- `outlined`: Bordered style
- `contained`: Fully filled button with shadow


# CollapsibleCardT1 - Adaptable Collapsible Card Component

## Overview
`CollapsibleCardT1` is a customizable card component with expandable/collapsible sections, built on Material-UI, offering a flexible structure for displaying content that can be shown or hidden as needed.

## Features
- Responsive design that adapts to mobile and desktop
- Expandable/collapsible content section
- Customizable styling for all sections
- Header with optional title and actions
- Separate body, collapse, and footer sections
- Configurable collapse button visibility
- Loading state support

## Props Interface
```typescript
interface CollapsibleCardT1Props {
  title?: React.ReactNode;
  headerContent?: React.ReactNode;
  bodyContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  collapseContent?: React.ReactNode;
  defaultCollapsed?: boolean;
  cardSx?: any;
  headerSx?: any;
  bodySx?: any;
  footerSx?: any;
  collapseSx?: any;
  collapseButtonSx?: any;
  hideCollapseButton?: boolean;
  loading?: boolean;
}
```

### Prop Descriptions

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | `React.ReactNode` | - | Title displayed in the card header |
| headerContent | `React.ReactNode` | - | Additional content for the header section |
| bodyContent | `React.ReactNode` | - | Main content area (always visible) |
| footerContent | `React.ReactNode` | - | Content for the footer section |
| collapseContent | `React.ReactNode` | - | Content that can be expanded/collapsed |
| defaultCollapsed | `boolean` | `false` | Initial collapse state |
| cardSx | `object` | `{}` | Style overrides for the card |
| headerSx | `object` | `{}` | Style overrides for the header |
| bodySx | `object` | `{}` | Style overrides for the body |
| footerSx | `object` | `{}` | Style overrides for the footer |
| collapseSx | `object` | `{}` | Style overrides for the collapsible section |
| collapseButtonSx | `object` | `{}` | Style overrides for the collapse button |
| hideCollapseButton | `boolean` | `false` | Hides the collapse button |
| loading | `boolean` | `false` | Displays a loading state |

## Usage Examples

### Basic Usage
```jsx
<CollapsibleCardT1
  title="Card Title"
  bodyContent={
    <Typography variant="body1">
      This is the main content of the card that is always visible.
    </Typography>
  }
  collapseContent={
    <Typography variant="body2">
      This content can be shown or hidden by clicking the collapse button.
    </Typography>
  }
/>
```

### With Header Content
```jsx
<CollapsibleCardT1
  title="Sales Dashboard"
  headerContent={
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Select
        defaultValue="weekly"
        size="small"
      >
        <MenuItem value="daily">Daily</MenuItem>
        <MenuItem value="weekly">Weekly</MenuItem>
        <MenuItem value="monthly">Monthly</MenuItem>
      </Select>
    </Box>
  }
  bodyContent={
    <Typography>Main content...</Typography>
  }
/>
```

### With Metrics Dashboard
```jsx
<CollapsibleCardT1
  title="Performance Metrics"
  bodyContent={
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      {metrics.map((metric, index) => (
        <Box
          key={index}
          sx={{
            p: 2,
            borderRadius: 1,
            bgcolor: '#f5f5f5',
            width: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(25% - 12px)' }
          }}
        >
          <Typography variant="h5" fontWeight="bold">{metric.value}</Typography>
          <Typography variant="body2">{metric.label}</Typography>
        </Box>
      ))}
    </Box>
  }
  collapseContent={
    <Box sx={{ height: 300, bgcolor: '#f9f9f9' }}>
      <Typography>Detailed chart would go here...</Typography>
    </Box>
  }
/>
```

### With Footer Actions
```jsx
<CollapsibleCardT1
  title="Report Card"
  bodyContent={
    <Typography>Report content...</Typography>
  }
  footerContent={
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
      <Button variant="outlined" size="small">Export</Button>
      <Button variant="contained" size="small">View Full Report</Button>
    </Box>
  }
/>
```

### With Custom Styling
```jsx
<CollapsibleCardT1
  title="Custom Styled Card"
  bodyContent={
    <Typography>Content with custom styling</Typography>
  }
  collapseContent={
    <Typography>Expandable content</Typography>
  }
  cardSx={{
    borderRadius: 4,
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    background: 'linear-gradient(to right, #ffffff, #f7f9fc)'
  }}
  headerSx={{
    borderBottom: '2px solid #e0e7ff',
    pb: 2
  }}
  collapseButtonSx={{
    bgcolor: '#4a6bff20',
    color: '#4a6bff'
  }}
/>
```

### Initially Collapsed
```jsx
<CollapsibleCardT1
  title="Initially Collapsed"
  defaultCollapsed={true}
  bodyContent={
    <Typography>Always visible content</Typography>
  }
  collapseContent={
    <Typography>This starts hidden and can be shown by clicking the expand button</Typography>
  }
/>
```

## Responsive Behavior

The component automatically adapts to different screen sizes:

- On small screens:
  - Header changes to vertical layout
  - Collapse button positioning adjusts
  - Padding and spacing are optimized
  - Content sections adapt for better mobile display

- On larger screens:
  - Header maintains horizontal layout
  - Collapse button appears on the right side
  - Spacing is more generous for better readability

## Customization

The component provides comprehensive styling options through the various `*Sx` props:

```jsx
// Example of deep customization
<CollapsibleCardT1
  cardSx={{
    borderRadius: '16px',
    background: 'linear-gradient(145deg, #f0f4ff, #ffffff)',
    boxShadow: '8px 8px 16px #e3e3e3, -8px -8px 16px #ffffff',
    overflow: 'hidden'
  }}
  headerSx={{
    background: 'linear-gradient(90deg, #f8f9ff, #f0f4ff)',
    borderBottom: '1px solid #eaedf7',
    py: 2
  }}
  collapseButtonSx={{
    background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
    borderRadius: '50%',
    '&:hover': {
      background: 'linear-gradient(145deg, #f0f0f0, #ffffff)',
    }
  }}
/>
```

# TableT1 - Advanced Table Component

## Overview
`TableT1` is a comprehensive, feature-rich table component built on top of Material-UI, designed to handle complex data display requirements with a clean, modern interface and extensive customization options.

## Features
- Dynamic column configuration
- Sorting and pagination
- Search functionality
- Row selection with checkboxes
- Expandable rows
- Loading and error states
- Custom cell rendering
- Row actions
- Customizable styling
- Sticky headers
- Responsive design

## Props Interface

### Column Definition
```typescript
interface TableColumnT1<T = any> {
  id: string;                             // Unique identifier for the column
  label: string;                          // Display label for column header
  numeric?: boolean;                      // Indicates if column contains numeric data
  width?: string | number;                // Optional column width
  sortable?: boolean;                     // Whether column is sortable (default: true)
  renderCell?: (row: T) => React.ReactNode; // Custom cell renderer
  align?: 'left' | 'right' | 'center';    // Cell content alignment
  cellClassName?: string;                 // CSS class for cells in this column
  headerClassName?: string;               // CSS class for header cell
  hidden?: boolean;                       // Hides column if true
}
```

### Main Component Props
```typescript
interface TableT1Props<T = any> {
  // Core data
  columns: TableColumnT1<T>[];           // Column definitions
  data: T[];                             // Data to display in the table
  
  // Key configuration
  idKey?: string;                        // Property name to use as unique ID (default: 'id')
  
  // State options
  loading?: boolean;                     // Shows loading spinner when true
  error?: string;                        // Error message to display
  emptyMessage?: string;                 // Message when no data is available
  
  // Features flags
  selectable?: boolean;                  // Enables row selection
  sortable?: boolean;                    // Enables column sorting
  pageable?: boolean;                    // Enables pagination
  searchable?: boolean;                  // Enables search functionality
  expandable?: boolean;                  // Enables expandable rows
  
  // Callbacks
  onRowClick?: (row: T) => void;         // Called when a row is clicked
  onRowExpand?: (row: T) => void;        // Called when a row is expanded
  onSelectionChange?: (selectedRows: T[]) => void; // Called when selection changes
  
  // Pagination options
  pageSize?: number;                     // Default number of rows per page
  pageSizeOptions?: number[];            // Available page size options
  
  // Custom renderers
  renderRowActions?: (row: T) => React.ReactNode; // Renders action buttons for a row
  renderExpandedRow?: (row: T) => React.ReactNode; // Renders expanded content
  renderTableHeader?: () => React.ReactNode; // Renders custom header above the table
  
  // Styling
  containerSx?: any;                     // Styles for the container
  tableSx?: any;                         // Styles for the table
  headerRowSx?: any;                     // Styles for the header row
  bodyRowSx?: any;                       // Styles for body rows
  expansionPanelSx?: any;                // Styles for the expansion panel
  
  // Additional options
  searchPlaceholder?: string;            // Placeholder for search field
  stickyHeader?: boolean;                // Makes header stick when scrolling
  searchDelay?: number;                  // Delay in ms before search is applied
  onSearchChange?: (searchTerm: string) => void; // Called when search term changes
  defaultSortColumn?: string;            // Initially sorted column
  defaultSortDirection?: 'asc' | 'desc'; // Initial sort direction
}
```

## Usage Examples

### Basic Table
```jsx
import { TableT1 } from 't1componets';

const columns = [
  { id: 'id', label: 'ID', width: '80px' },
  { id: 'name', label: 'Name' },
  { id: 'email', label: 'Email' },
  { id: 'role', label: 'Role' }
];

const data = [
  { id: 1, name: 'John Smith', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Maria Garcia', email: 'maria@example.com', role: 'Editor' },
  { id: 3, name: 'Robert Johnson', email: 'robert@example.com', role: 'Viewer' }
];

function MyTable() {
  return (
    <TableT1
      columns={columns}
      data={data}
    />
  );
}
```

### Table with Search and Pagination
```jsx
<TableT1
  columns={columns}
  data={data}
  searchable={true}
  searchPlaceholder="Search users..."
  pageable={true}
  pageSize={5}
  pageSizeOptions={[5, 10, 25]}
/>
```

### Table with Custom Cell Rendering
```jsx
const columns = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Name' },
  { 
    id: 'status', 
    label: 'Status',
    renderCell: (row) => (
      <Chip 
        label={row.status} 
        color={row.status === 'active' ? 'success' : 'default'} 
        size="small"
      />
    )
  }
];

<TableT1 columns={columns} data={data} />
```

### Table with Row Selection
```jsx
function MyComponent() {
  const handleSelectionChange = (selectedRows) => {
    console.log('Selected rows:', selectedRows);
  };

  return (
    <TableT1
      columns={columns}
      data={data}
      selectable={true}
      onSelectionChange={handleSelectionChange}
    />
  );
}
```

### Table with Row Actions
```jsx
const renderRowActions = (row) => (
  <>
    <IconButton size="small" onClick={() => handleEdit(row)}>
      <EditIcon fontSize="small" />
    </IconButton>
    <IconButton size="small" color="error" onClick={() => handleDelete(row)}>
      <DeleteIcon fontSize="small" />
    </IconButton>
  </>
);

<TableT1
  columns={columns}
  data={data}
  renderRowActions={renderRowActions}
/>
```

### Table with Expandable Rows
```jsx
const renderExpandedRow = (row) => (
  <Box sx={{ p: 2 }}>
    <Typography variant="h6">Details for {row.name}</Typography>
    <pre>{JSON.stringify(row, null, 2)}</pre>
  </Box>
);

<TableT1
  columns={columns}
  data={data}
  expandable={true}
  renderExpandedRow={renderExpandedRow}
/>
```

### Table with Custom Header
```jsx
const renderTableHeader = () => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
    <Typography variant="h6">User Management</Typography>
    <Button variant="contained" startIcon={<AddIcon />}>
      Add User
    </Button>
  </Box>
);

<TableT1
  columns={columns}
  data={data}
  renderTableHeader={renderTableHeader}
/>
```

### Table with Custom Styling
```jsx
<TableT1
  columns={columns}
  data={data}
  containerSx={{
    backgroundColor: '#f9fafc',
    padding: 2,
    borderRadius: 2
  }}
  headerRowSx={{
    backgroundColor: '#f0f4ff'
  }}
  bodyRowSx={{
    '&:hover': {
      backgroundColor: '#f0f7ff !important'
    }
  }}
/>
```

### Comprehensive Example
```jsx
<TableT1
  columns={columns}
  data={userData}
  idKey="userId"
  loading={isLoading}
  error={error}
  emptyMessage="No users found"
  selectable={true}
  sortable={true}
  pageable={true}
  searchable={true}
  expandable={true}
  onRowClick={handleRowClick}
  onRowExpand={handleRowExpand}
  onSelectionChange={handleSelectionChange}
  onSearchChange={handleSearchChange}
  pageSize={10}
  pageSizeOptions={[5, 10, 25, 50]}
  renderRowActions={renderRowActions}
  renderExpandedRow={renderExpandedRow}
  renderTableHeader={renderTableHeader}
  searchPlaceholder="Search users..."
  stickyHeader={true}
  defaultSortColumn="name"
  defaultSortDirection="asc"
/>
```



# TableT1 Component

`TableT1` is a highly customizable and feature-rich table component designed to display tabular data in React applications with Material UI.

## Features

- **Sorting**: Sort columns in ascending or descending order
- **Pagination**: Page navigation with customizable records per page options
- **Searching**: Real-time filtering of displayed data
- **Row Selection**: Individual or multiple selection with checkboxes
- **Expandable Rows**: Show additional information for each row
- **Custom Actions**: Incorporate action buttons for each row
- **Loading and Error States**: Elegant handling of loading, error, and empty data states
- **Complete Customization**: Customizable styles, renderers, and behaviors

## Installation

```bash
npm install t1componets
```

## Basic Usage

```jsx
import { TableT1 } from 't1componets';

// Column definition
const columns = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Name' },
  { id: 'email', label: 'Email' }
];

// Sample data
const data = [
  { id: 1, name: 'John Smith', email: 'john@example.com' },
  { id: 2, name: 'Mary Johnson', email: 'mary@example.com' }
];

function MyComponent() {
  return (
    <TableT1
      columns={columns}
      data={data}
    />
  );
}
```

## Variations

### Table with Search

```jsx
<TableT1
  columns={columns}
  data={data}
  searchable={true}
  searchPlaceholder="Search users..."
/>
```

### Table with Row Selection

```jsx
<TableT1
  columns={columns}
  data={data}
  selectable={true}
  onSelectionChange={(selectedRows) => console.log('Selected rows:', selectedRows)}
/>
```

### Table with Row Actions

```jsx
<TableT1
  columns={columns}
  data={data}
  renderRowActions={(row) => (
    <>
      <IconButton size="small" onClick={() => handleEdit(row)}>
        <EditIcon fontSize="small" />
      </IconButton>
      <IconButton size="small" color="error" onClick={() => handleDelete(row)}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </>
  )}
/>
```

### Table with Expandable Rows

```jsx
<TableT1
  columns={columns}
  data={data}
  expandable={true}
  renderExpandedRow={(row) => (
    <Box sx={{ p: 2 }}>
      <Typography variant="subtitle1">User Details</Typography>
      <Typography variant="body2">ID: {row.id}</Typography>
      <Typography variant="body2">Name: {row.name}</Typography>
      <Typography variant="body2">Email: {row.email}</Typography>
    </Box>
  )}
/>
```

### Custom Cell Rendering

```jsx
const columns = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Name' },
  { 
    id: 'status', 
    label: 'Status',
    renderCell: (row) => (
      <Chip
        label={row.status} 
        color={row.status === 'active' ? 'success' : 'default'} 
        size="small"
        variant="outlined"
      />
    )
  }
];
```

### Comprehensive Table with All Features

```jsx
<TableT1
  columns={columns}
  data={data}
  selectable={true}
  searchable={true}
  expandable={true}
  pageable={true}
  stickyHeader={true}
  renderRowActions={renderRowActions}
  renderExpandedRow={renderExpandedRow}
  renderTableHeader={() => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Typography variant="h6">Users</Typography>
      <Button variant="contained" size="small">Add User</Button>
    </Box>
  )}
  onRowClick={(row) => console.log('Row clicked:', row)}
  onSelectionChange={(selectedRows) => console.log('Selection changed:', selectedRows)}
  containerSx={{ maxWidth: 1200, mx: 'auto' }}
/>
```

## Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `Array<TableColumnT1>` | *Required* | Column configuration |
| `data` | `Array<T>` | *Required* | Data to display in the table |
| `idKey` | `string` | `'id'` | Property to use as unique identifier |
| `loading` | `boolean` | `false` | Indicates if the table is loading data |
| `error` | `string` | `''` | Error message to display |
| `emptyMessage` | `string` | `'No data available'` | Message when no data is available |
| `selectable` | `boolean` | `false` | Enables row selection |
| `sortable` | `boolean` | `true` | Enables column sorting |
| `pageable` | `boolean` | `true` | Enables pagination |
| `searchable` | `boolean` | `false` | Enables search |
| `expandable` | `boolean` | `false` | Enables expandable rows |
| `pageSize` | `number` | `10` | Default page size |
| `pageSizeOptions` | `number[]` | `[5, 10, 25, 50]` | Page size options |
| `onRowClick` | `(row: T) => void` | — | Function called when a row is clicked |
| `onRowExpand` | `(row: T) => void` | — | Function called when a row is expanded |
| `onSelectionChange` | `(selectedRows: T[]) => void` | — | Function called when selection changes |
| `onSearchChange` | `(searchTerm: string) => void` | — | Function called when search term changes |
| `searchPlaceholder` | `string` | `'Search...'` | Placeholder for search field |
| `stickyHeader` | `boolean` | `true` | Keeps header visible when scrolling |
| `searchDelay` | `number` | `300` | Delay in ms for search (debounce) |
| `defaultSortColumn` | `string` | `''` | Default sort column |
| `defaultSortDirection` | `'asc'` \| `'desc'` | `'asc'` | Default sort direction |

### Custom Renderer Props

| Prop | Type | Description |
|------|------|-------------|
| `renderRowActions` | `(row: T) => React.ReactNode` | Renders actions for each row |
| `renderExpandedRow` | `(row: T) => React.ReactNode` | Renders expanded content for each row |
| `renderTableHeader` | `() => React.ReactNode` | Renders a custom header for the table |

### Style Props

| Prop | Type | Description |
|------|------|-------------|
| `containerSx` | `SxProps` | Styles for the table container |
| `tableSx` | `SxProps` | Styles for the Table element |
| `headerRowSx` | `SxProps` | Styles for the header rows |
| `bodyRowSx` | `SxProps` | Styles for the body rows |
| `expansionPanelSx` | `SxProps` | Styles for the expansion panel |

## Data Types

### TableColumnT1

```typescript
interface TableColumnT1<T = any> {
  id: string;              // Unique identifier for the column
  label: string;           // Text to display in the header
  numeric?: boolean;       // If true, aligns content to the right
  width?: string | number; // Width of the column
  sortable?: boolean;      // Whether the column is sortable
  renderCell?: (row: T) => React.ReactNode; // Renders custom content
  align?: 'left' | 'right' | 'center'; // Content alignment
  cellClassName?: string;  // CSS class for cells
  headerClassName?: string; // CSS class for header
  hidden?: boolean;        // Whether the column is hidden
}
```

## Advanced Usage Examples

### Style Customization

```jsx
<TableT1
  columns={columns}
  data={data}
  containerSx={{
    backgroundColor: '#f9fafc',
    padding: 2,
    borderRadius: 2
  }}
  headerRowSx={{
    backgroundColor: '#f0f4ff'
  }}
  bodyRowSx={{
    '&:hover': {
      backgroundColor: '#f0f7ff !important'
    }
  }}
/>
```

### Table with Loading State

```jsx
<TableT1
  columns={columns}
  data={[]}
  loading={true}
/>
```

### Table with Error Message

```jsx
<TableT1
  columns={columns}
  data={[]}
  error="Error loading data. Please try again later."
/>
```

### Table with Custom Empty Data Message

```jsx
<TableT1
  columns={columns}
  data={[]}
  emptyMessage="No users found matching your search criteria."
/>
```

## Use Cases

- **Admin Panels**: User, product, order management
- **Analytical Dashboards**: Data tables with filtering and visualization options
- **Record Listings**: Any type of data requiring tabular visualization
- **Management Interfaces**: Systems where users need to interact with multiple records

---


# Modal Component
## Características

- ✅ Diseño responsive que se adapta a diferentes tamaños de pantalla
- ✅ Dos versiones: con menú lateral y simple (sin menú)
- ✅ Totalmente personalizable (iconos, estilos, contenido)
- ✅ Compatible con Material UI
- ✅ Soporte para TypeScript con tipos completos
- ✅ Estilo de modal con bordes redondeados en la parte superior
- ✅ Fondo semitransparente para enfoque en el contenido del modal


## Versiones disponibles

### 1. ModalComponent (con menú lateral)

Componente modal que incluye un menú lateral para navegación entre secciones.

```jsx
import { ModalComponent } from 'tu-libreria-componentes';

const YourComponent = () => {
  // Opciones del menú
  const menuOptions = [
    {
      id: 1,
      label: 'Información personal',
      icon: 'userIcon',
      value: 0,
      component: <PersonalInfo />
    },
    // Más opciones...
  ];

  return (
    <ModalComponent
      title="Mi perfil"
      onClose={handleClose}
      menuOptions={menuOptions}
      iconComponent={YourIconRenderer}
      // Más props...
    />
  );
};
```

### 2. SimpleModalComponent (sin menú)

Versión simplificada del modal para contenido directo sin navegación.

```jsx
import { SimpleModalComponent } from 'tu-libreria-componentes';

const YourComponent = () => {
  return (
    <SimpleModalComponent
      title="Términos y Condiciones"
      onClose={handleClose}
      closeIcon={<CloseButton />}
    >
      {/* Tu contenido aquí */}
      <div>
        <h2>Contenido del modal</h2>
        <p>Lorem ipsum dolor sit amet...</p>
      </div>
    </SimpleModalComponent>
  );
};
```

## Personalización

### Estilos

Ambos componentes aceptan estilos personalizados a través de las props `className` y `styles`:

```jsx
<ModalComponent
  // ...otras props
  className={{
    mainContainer: styles.modalContainer,
    headerProfile: styles.modalHeader,
    // más clases...
  }}
  styles={{
    mainContainer: { 
      // Estilos CSS en línea
      borderRadius: '20px 20px 0px 0px',
    },
    // más estilos...
  }}
/>
```

### Botón de cierre personalizado

Puedes personalizar el botón de cierre usando la prop `closeIcon`:

```jsx
import { CloseButtonT1 } from 't1componets';

<ModalComponent
  // ...otras props
  closeIcon={<CloseButtonT1 />}
/>
```

## Props

### ModalComponent (con menú)

| Prop | Tipo | Descripción | Requerido |
|------|------|-------------|-----------|
| `title` | string | Título del modal | ✅ |
| `onClose` | function | Función para cerrar el modal | ✅ |
| `menuOptions` | MenuOption[] | Opciones del menú lateral | ✅ |
| `closeIcon` | ReactNode | Icono de cierre personalizado | ❌ |
| `iconComponent` | function | Renderizador de iconos para el menú | ✅ |
| `className` | object | Nombres de clases CSS | ❌ |
| `styles` | object | Estilos CSS en línea | ❌ |

### SimpleModalComponent (sin menú)

| Prop | Tipo | Descripción | Requerido |
|------|------|-------------|-----------|
| `title` | string | Título del modal | ✅ |
| `onClose` | function | Función para cerrar el modal | ✅ |
| `children` | ReactNode | Contenido del modal | ✅ |
| `closeIcon` | ReactNode | Icono de cierre personalizado | ❌ |
| `className` | object | Nombres de clases CSS | ❌ |
| `styles` | object | Estilos CSS en línea | ❌ |

## Ejemplos de uso

### Formulario de contacto

```jsx
<SimpleModalComponent
  title="Contacto"
  onClose={handleClose}
>
  <form onSubmit={handleSubmit}>
    <h2>Contáctanos</h2>
    {/* Campos del formulario */}
    <div className="actions">
      <button type="button" onClick={handleClose}>Cancelar</button>
      <button type="submit">Enviar</button>
    </div>
  </form>
</SimpleModalComponent>
```

### Términos y condiciones

```jsx
<SimpleModalComponent
  title="Términos y Condiciones"
  onClose={handleClose}
>
  <div>
    <h2>Términos y Condiciones de Uso</h2>
    <div className="scrollable-content">
      {/* Contenido de los términos */}
    </div>
    <div className="actions">
      <button onClick={handleReject}>Rechazar</button>
      <button onClick={handleAccept}>Aceptar</button>
    </div>
  </div>
</SimpleModalComponent>
```

## Responsive

El componente detecta automáticamente el tamaño de pantalla y ajusta su comportamiento:

- **Desktop**: Muestra menú lateral (en ModalComponent)
- **Tablet/Mobile**: Muestra pestañas horizontales (en ModalComponent)