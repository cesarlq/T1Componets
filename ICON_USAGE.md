# T1Components Icon Usage Guide

This guide explains how to use icons from the `@t1-org/t1components` library in your projects.

## 🎯 Overview

The T1Components library provides icons in multiple ways to ensure maximum compatibility across different project setups:

1. **React Components** (Recommended) - SVG icons as React components
2. **Static Assets** - Raw SVG files for direct usage
3. **Theme Integration** - Icons used within Material-UI theme

## 📦 Installation

```bash
npm install @t1-org/t1components
```

## 🚀 Usage Methods

### Method 1: React Components (Recommended)

Import icons as React components directly from the library:

```tsx
import { Icons, Logos } from '@t1-org/t1components';

// Using icons
function MyComponent() {
  return (
    <div>
      <Icons.HomeIcon width={24} height={24} />
      <Icons.UserIcon width={32} height={32} className="text-blue-500" />
      <Logos.T1Logo width={100} height={50} />
    </div>
  );
}
```

### Method 2: Individual Icon Imports

```tsx
import { Icons } from '@t1-org/t1components';

const { HomeIcon, UserIcon, DashboardIcon } = Icons;

function Navigation() {
  return (
    <nav>
      <HomeIcon width={20} height={20} />
      <UserIcon width={20} height={20} />
      <DashboardIcon width={20} height={20} />
    </nav>
  );
}
```

### Method 3: Static Assets (For Next.js projects)

If you need to use icons as static assets (e.g., in CSS, or as image sources), the library automatically copies assets to your public folder during installation.

```tsx
// In Next.js
import Image from 'next/image';

function MyComponent() {
  return (
    <Image 
      src="/t1-assets/icons/HomeIcon.svg" 
      alt="Home" 
      width={24} 
      height={24} 
    />
  );
}
```

```css
/* In CSS */
.icon-background {
  background-image: url('/t1-assets/icons/HomeIcon.svg');
  background-size: 24px 24px;
}
```

## 📋 Available Icons

### Icons Collection
The library includes 100+ icons in the `Icons` namespace:

- **Navigation**: `HomeIcon`, `DashboardIcon`, `MenuArrowIcon`
- **Actions**: `AddIcon`, `EditIcon`, `DeleteIcon`, `CheckIcon`
- **Business**: `MoneyIcon`, `BalanceIcon`, `TransactionsIcon`
- **Communication**: `EmailIcon`, `WhatsAppIcon`, `NotificationIcon`
- **And many more...**

### Logos Collection
Brand and payment logos in the `Logos` namespace:

- **T1 Brands**: `T1Logo`, `T1PagosLogos`, `T1EnviosLogo`
- **Payment Methods**: `VisaLogo`, `MastercardLogo`, `PayPalLogo`
- **Banks**: `BanorteLogo`, `BBVALogo`, `SantanderLogo`
- **Marketplaces**: `AmazonIconLogo`, `MercadoLibreIconLogo`

## 🎨 Styling Icons

### Props Available
All icon components accept standard SVG props:

```tsx
<Icons.HomeIcon 
  width={24}
  height={24}
  className="text-blue-500 hover:text-blue-700"
  style={{ fill: 'currentColor' }}
  onClick={() => console.log('Icon clicked')}
/>
```

### CSS Styling
```css
.my-icon {
  width: 24px;
  height: 24px;
  fill: #3b82f6;
  transition: fill 0.2s ease;
}

.my-icon:hover {
  fill: #1d4ed8;
}
```

### Tailwind CSS
```tsx
<Icons.UserIcon className="w-6 h-6 text-gray-600 hover:text-gray-800" />
```

## 🔧 TypeScript Support

The library includes full TypeScript support:

```tsx
import { Icons, Logos } from '@t1-org/t1components';
import type { SVGProps } from 'react';

// Icons are typed as React.FC<SVGProps<SVGSVGElement>>
const MyIcon: React.FC<SVGProps<SVGSVGElement>> = Icons.HomeIcon;
```

## 🚨 Troubleshooting

### Icons not appearing?

1. **Check import path**:
   ```tsx
   // ✅ Correct
   import { Icons } from '@t1-org/t1components';
   
   // ❌ Incorrect
   import Icons from '@t1-org/t1components/icons';
   ```

2. **Verify installation**:
   ```bash
   npm list @t1-org/t1components
   ```

3. **Check if assets were copied** (for static usage):
   ```bash
   ls public/t1-assets/
   ```

### Static assets not found?

The library should automatically copy assets during installation. If they're missing:

1. **Manual copy** (if needed):
   ```bash
   cp -r node_modules/@t1-org/t1components/dist/public/t1-assets public/
   ```

2. **Add to your build process**:
   ```json
   {
     "scripts": {
       "postinstall": "cp -r node_modules/@t1-org/t1components/dist/public/t1-assets public/ || true"
     }
   }
   ```

## 📖 Examples

### Complete Component Example
```tsx
import React from 'react';
import { Icons, Logos } from '@t1-org/t1components';

interface NavigationProps {
  onHomeClick: () => void;
  onUserClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  onHomeClick, 
  onUserClick 
}) => {
  return (
    <nav className="flex items-center space-x-4 p-4">
      {/* Logo */}
      <Logos.T1Logo width={80} height={40} />
      
      {/* Navigation Icons */}
      <button onClick={onHomeClick} className="p-2 hover:bg-gray-100 rounded">
        <Icons.HomeIcon width={20} height={20} className="text-gray-600" />
      </button>
      
      <button onClick={onUserClick} className="p-2 hover:bg-gray-100 rounded">
        <Icons.UserIcon width={20} height={20} className="text-gray-600" />
      </button>
      
      {/* Status Icons */}
      <div className="flex items-center space-x-2">
        <Icons.CheckIcon width={16} height={16} className="text-green-500" />
        <span className="text-sm text-gray-700">Connected</span>
      </div>
    </nav>
  );
};
```

### Dynamic Icon Loading
```tsx
import { Icons } from '@t1-org/t1components';

interface DynamicIconProps {
  iconName: keyof typeof Icons;
  size?: number;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ 
  iconName, 
  size = 24 
}) => {
  const IconComponent = Icons[iconName];
  
  if (!IconComponent) {
    return <div>Icon not found</div>;
  }
  
  return <IconComponent width={size} height={size} />;
};

// Usage
<DynamicIcon iconName="HomeIcon" size={32} />
```

## 🔄 Updates

When updating the library, icons may be added, removed, or modified. Always check the changelog and update your imports accordingly.

```bash
npm update @t1-org/t1components
```

## 📞 Support

For issues related to icons:
1. Check this documentation
2. Verify your import statements
3. Ensure you're using the latest version
4. Report issues through the appropriate channels

---

**Happy coding with T1Components! 🎉**
