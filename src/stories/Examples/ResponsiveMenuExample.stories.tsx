import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ResponsiveMenuExample } from '../../examples/ResponsiveMenuExample';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Crear tema MUI con breakpoints personalizados
const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 750,
      lg: 1024,
      xl: 1200,
    },
  },
  typography: {
    fontFamily: 'Manrope, sans-serif',
  },
});

// Wrapper para proporcionar el tema MUI
const ThemeWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={customTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

// Componente con controles interactivos
const ResponsiveMenuWithControls = (args: any) => {
  const [isReduced, setIsReduced] = useState(args.isReduced || false);
  const [viewportWidth, setViewportWidth] = useState(1200);

  // Simular cambio de viewport
  const handleViewportChange = (width: number) => {
    setViewportWidth(width);
    // Cambiar el tamaño del iframe de Storybook
    if (window.parent) {
      const iframe = window.parent.document.querySelector('iframe[id*="storybook-preview"]') as HTMLIFrameElement;
      if (iframe) {
        iframe.style.width = `${width}px`;
      }
    }
  };

  return (
    <ThemeWrapper>
      <div style={{ 
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden'
      }}>
        {/* Panel de controles */}
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          zIndex: 1000,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          minWidth: '200px',
          fontSize: '14px',
        }}>
          <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: 600 }}>
            Controles de Prueba
          </h4>
          
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>
              Menú Reducido:
            </label>
            <button
              onClick={() => setIsReduced(!isReduced)}
              style={{
                padding: '6px 12px',
                borderRadius: '4px',
                border: '1px solid #ddd',
                backgroundColor: isReduced ? '#e3f2fd' : '#fff',
                cursor: 'pointer',
                fontSize: '12px',
              }}
            >
              {isReduced ? 'Expandir' : 'Reducir'}
            </button>
          </div>

          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>
              Viewport:
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <button
                onClick={() => handleViewportChange(375)}
                style={{
                  padding: '4px 8px',
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                  backgroundColor: viewportWidth === 375 ? '#e3f2fd' : '#fff',
                  cursor: 'pointer',
                  fontSize: '11px',
                }}
              >
                📱 Móvil (375px)
              </button>
              <button
                onClick={() => handleViewportChange(768)}
                style={{
                  padding: '4px 8px',
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                  backgroundColor: viewportWidth === 768 ? '#e3f2fd' : '#fff',
                  cursor: 'pointer',
                  fontSize: '11px',
                }}
              >
                📱 Tablet (768px)
              </button>
              <button
                onClick={() => handleViewportChange(1024)}
                style={{
                  padding: '4px 8px',
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                  backgroundColor: viewportWidth === 1024 ? '#e3f2fd' : '#fff',
                  cursor: 'pointer',
                  fontSize: '11px',
                }}
              >
                💻 Desktop (1024px)
              </button>
              <button
                onClick={() => handleViewportChange(1400)}
                style={{
                  padding: '4px 8px',
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                  backgroundColor: viewportWidth === 1400 ? '#e3f2fd' : '#fff',
                  cursor: 'pointer',
                  fontSize: '11px',
                }}
              >
                🖥️ Large (1400px)
              </button>
            </div>
          </div>

          <div style={{ fontSize: '12px', color: '#666', marginTop: '12px' }}>
            <div>Ancho actual: {viewportWidth}px</div>
            <div>Menú: {isReduced ? 'Reducido' : 'Expandido'}</div>
          </div>
        </div>

        {/* Componente principal */}
        <ResponsiveMenuExample isReduced={isReduced} />
      </div>
    </ThemeWrapper>
  );
};

const meta: Meta<typeof ResponsiveMenuExample> = {
  title: 'Examples/Responsive Menu System',
  component: ResponsiveMenuExample,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Sistema de Menú Responsivo

Este ejemplo demuestra el nuevo sistema responsivo unificado para T1Components que incluye:

## 🎯 Características

- **Breakpoints Unificados**: Sistema centralizado de breakpoints que funciona con MUI, Tailwind y SCSS
- **Tipografía Responsiva**: Escalas automáticas de texto basadas en el viewport
- **Íconos Responsivos**: Tamaños de íconos que se adaptan según el dispositivo
- **Hooks Especializados**: \`useResponsiveDesign\` y \`useMenuResponsive\` para manejo de estado

## 📱 Breakpoints

- **XS**: 0px - 575px
- **SM**: 576px - 749px  
- **MD**: 750px - 1023px (Mobile breakpoint)
- **LG**: 1024px - 1199px
- **XL**: 1200px+ (Desktop breakpoint)
- **Tablet**: 1110px (Sidebar reduce breakpoint)

## 🔧 Uso

\`\`\`typescript
import { useMenuResponsive } from '../hooks/useResponsiveDesign';

const MyMenu = () => {
  const {
    isMobile,
    isTablet, 
    isDesktop,
    menuIcons,
    sidebarWidth,
    navbarHeight
  } = useMenuResponsive(isReduced);
  
  return (
    <div style={{ width: sidebarWidth }}>
      <MenuIcon sx={menuIcons.getToggleIconProps().style} />
    </div>
  );
};
\`\`\`

## 🎨 Variantes de Tipografía

- \`h1\` - \`h6\`: Headers responsivos
- \`body1\`, \`body2\`: Texto de cuerpo
- \`menuTitle\`, \`menuItem\`: Específicos para menús
- \`button\`, \`caption\`: Elementos de UI

## 🎯 Variantes de Íconos

- \`xs\` - \`xxl\`: Tamaños estándar
- \`menuIcon\`, \`navIcon\`: Específicos para navegación
- \`mobile\`, \`desktop\`: Contextuales por dispositivo
        `,
      },
    },
  },
  argTypes: {
    isReduced: {
      control: 'boolean',
      description: 'Controla si el sidebar está en modo reducido',
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <ResponsiveMenuWithControls {...args} />,
  args: {
    isReduced: false,
  },
};

export const ReducedSidebar: Story = {
  render: (args) => <ResponsiveMenuWithControls {...args} />,
  args: {
    isReduced: true,
  },
};

export const MobileView: Story = {
  render: (args) => (
    <ThemeWrapper>
      <ResponsiveMenuExample {...args} />
    </ThemeWrapper>
  ),
  args: {
    isReduced: false,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const TabletView: Story = {
  render: (args) => (
    <ThemeWrapper>
      <ResponsiveMenuExample {...args} />
    </ThemeWrapper>
  ),
  args: {
    isReduced: false,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const DesktopView: Story = {
  render: (args) => (
    <ThemeWrapper>
      <ResponsiveMenuExample {...args} />
    </ThemeWrapper>
  ),
  args: {
    isReduced: false,
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

// Story para mostrar diferentes breakpoints lado a lado
export const BreakpointComparison: Story = {
  render: () => (
    <ThemeWrapper>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        minHeight: '100vh'
      }}>
        {/* Mobile */}
        <div style={{ 
          border: '2px solid #e0e0e0', 
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: '#fff'
        }}>
          <div style={{ 
            padding: '10px', 
            backgroundColor: '#1976d2', 
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            📱 Mobile (375px)
          </div>
          <div style={{ 
            width: '375px', 
            height: '600px', 
            transform: 'scale(0.8)', 
            transformOrigin: 'top left',
            overflow: 'hidden'
          }}>
            <ResponsiveMenuExample isReduced={false} />
          </div>
        </div>

        {/* Tablet */}
        <div style={{ 
          border: '2px solid #e0e0e0', 
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: '#fff'
        }}>
          <div style={{ 
            padding: '10px', 
            backgroundColor: '#388e3c', 
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            📱 Tablet (768px)
          </div>
          <div style={{ 
            width: '768px', 
            height: '600px', 
            transform: 'scale(0.6)', 
            transformOrigin: 'top left',
            overflow: 'hidden'
          }}>
            <ResponsiveMenuExample isReduced={true} />
          </div>
        </div>

        {/* Desktop */}
        <div style={{ 
          border: '2px solid #e0e0e0', 
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: '#fff'
        }}>
          <div style={{ 
            padding: '10px', 
            backgroundColor: '#f57c00', 
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            💻 Desktop (1200px)
          </div>
          <div style={{ 
            width: '1200px', 
            height: '600px', 
            transform: 'scale(0.4)', 
            transformOrigin: 'top left',
            overflow: 'hidden'
          }}>
            <ResponsiveMenuExample isReduced={false} />
          </div>
        </div>
      </div>
    </ThemeWrapper>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

// Story para demostrar la configuración del sistema
export const SystemConfiguration: Story = {
  render: () => (
    <ThemeWrapper>
      <div style={{ 
        padding: '40px',
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: '#fafafa',
        minHeight: '100vh'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem',
          marginBottom: '2rem',
          color: '#1976d2',
          textAlign: 'center'
        }}>
          Sistema Responsivo T1Components
        </h1>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '40px'
        }}>
          {/* Breakpoints */}
          <div style={{ 
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ color: '#1976d2', marginBottom: '16px' }}>📱 Breakpoints</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
                <strong>XS:</strong> 0px - 575px
              </li>
              <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
                <strong>SM:</strong> 576px - 749px
              </li>
              <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
                <strong>MD:</strong> 750px - 1023px (Mobile)
              </li>
              <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
                <strong>LG:</strong> 1024px - 1199px
              </li>
              <li style={{ padding: '8px 0' }}>
                <strong>XL:</strong> 1200px+ (Desktop)
              </li>
            </ul>
          </div>

          {/* Tipografía */}
          <div style={{ 
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ color: '#388e3c', marginBottom: '16px' }}>📝 Tipografía</h2>
            <div style={{ fontSize: '14px' }}>
              <div style={{ marginBottom: '8px' }}>
                <strong>Headers:</strong> h1, h2, h3, h4, h5, h6
              </div>
              <div style={{ marginBottom: '8px' }}>
                <strong>Body:</strong> body1, body2
              </div>
              <div style={{ marginBottom: '8px' }}>
                <strong>Menu:</strong> menuTitle, menuItem
              </div>
              <div>
                <strong>UI:</strong> button, caption, overline
              </div>
            </div>
          </div>

          {/* Íconos */}
          <div style={{ 
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ color: '#f57c00', marginBottom: '16px' }}>🎯 Íconos</h2>
            <div style={{ fontSize: '14px' }}>
              <div style={{ marginBottom: '8px' }}>
                <strong>Tamaños:</strong> xs, sm, md, lg, xl, xxl
              </div>
              <div style={{ marginBottom: '8px' }}>
                <strong>UI:</strong> menuIcon, navIcon, buttonIcon
              </div>
              <div>
                <strong>Contexto:</strong> mobile, desktop, sidebar
              </div>
            </div>
          </div>
        </div>

        {/* Ejemplo de código */}
        <div style={{ 
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#d32f2f', marginBottom: '16px' }}>💻 Ejemplo de Uso</h2>
          <pre style={{ 
            backgroundColor: '#f5f5f5',
            padding: '16px',
            borderRadius: '8px',
            overflow: 'auto',
            fontSize: '14px',
            lineHeight: '1.5'
          }}>
{`import { useMenuResponsive } from '../hooks/useResponsiveDesign';

const MyMenu = () => {
  const {
    isMobile,
    isTablet,
    isDesktop,
    menuIcons,
    sidebarWidth,
    navbarHeight,
    getResponsiveTextStyles
  } = useMenuResponsive(isReduced);
  
  return (
    <div style={{ width: sidebarWidth }}>
      <nav style={{ height: navbarHeight }}>
        <MenuIcon sx={menuIcons.getToggleIconProps().style} />
        <Typography sx={getResponsiveTextStyles('menuTitle')}>
          Mi Aplicación
        </Typography>
      </nav>
    </div>
  );
};`}
          </pre>
        </div>
      </div>
    </ThemeWrapper>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
