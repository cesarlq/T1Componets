import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ModalComponent from '../Components/ModalComponent';
import CloseButtonT1 from '../Components/CloseButtonT1';

// Fondo de ejemplo para mostrar el efecto modal
const BackgroundDecorator = (Story: React.FC) => (
  <div style={{ 
    position: 'relative', 
    height: '100vh', 
    backgroundImage: 'url(https://via.placeholder.com/1600x900?text=Background+Content)',
    backgroundSize: 'cover'
  }}>
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      right: 0, 
      height: '60px', 
      backgroundColor: '#E84142', 
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          borderRadius: '50%', 
          backgroundColor: 'white', 
          marginRight: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span style={{ color: '#E84142', fontWeight: 'bold' }}>CO</span>
        </div>
        <span style={{ fontWeight: 'bold' }}>Chicos Olé</span>
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '10px' }}>monadic_chicos@claroshop.com</span>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          borderRadius: '50%', 
          backgroundColor: '#A52A2A', 
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          M
        </div>
      </div>
    </div>
    <Story />
  </div>
);

// Componentes de ejemplo para las opciones del menú
const PersonalInfoExample = () => (
  <div>
    <h2 style={{ fontSize: '18px', marginBottom: '16px', fontWeight: 500 }}>Información Personal</h2>
    <p style={{ marginBottom: '24px', color: '#666' }}>Personaliza el avatar de tu perfil seleccionando un color o agregando una imagen</p>
    
    <div style={{ display: 'flex', marginBottom: '20px' }}>
      <div style={{ 
        width: '70px', 
        height: '70px', 
        borderRadius: '50%', 
        backgroundColor: '#E84142',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        fontWeight: 'bold'
      }}>
        UN
      </div>
      <div style={{ display: 'flex', marginLeft: '10px', marginTop: '10px' }}>
        <span style={{ display: 'inline-block', width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#FDD835', marginRight: '8px', cursor: 'pointer' }}></span>
        <span style={{ display: 'inline-block', width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#E57373', marginRight: '8px', cursor: 'pointer' }}></span>
        <span style={{ display: 'inline-block', width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#FF7043', marginRight: '8px', cursor: 'pointer' }}></span>
        <span style={{ display: 'inline-block', width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#66BB6A', marginRight: '8px', cursor: 'pointer' }}></span>
        <span style={{ display: 'inline-block', width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#4FC3F7', marginRight: '8px', cursor: 'pointer' }}></span>
        <span style={{ display: 'inline-block', width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#7E57C2', cursor: 'pointer' }}></span>
      </div>
    </div>
    
    <div style={{ fontSize: '12px', color: '#999', marginBottom: '24px' }}>
      JPG, PNG y SVG, tamaño máximo de 5MB, dimensiones recomendadas 400x400px
    </div>

    <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
      <div style={{ flex: 1 }}>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Nombre</label>
        <input type="text" style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ddd' }} />
      </div>
      <div style={{ flex: 1 }}>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Apellidos</label>
        <input type="text" style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ddd' }} />
      </div>
    </div>

    <h2 style={{ fontSize: '18px', marginTop: '32px', marginBottom: '16px', fontWeight: 500 }}>Información de contacto</h2>
    
    <div style={{ padding: '16px', border: '1px solid #eee', borderRadius: '4px', marginBottom: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px' }}>
          <span style={{ color: '#666', fontSize: '16px' }}>G</span>
        </div>
        <div>
          <div style={{ color: '#666', fontSize: '12px' }}>Correo Asociado a Google</div>
          <div style={{ fontSize: '14px' }}>nombre@correo.com</div>
        </div>
      </div>
    </div>

    <div style={{ marginBottom: '24px' }}>
      <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Número celular</label>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <select style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd', marginRight: '8px', width: '100px' }}>
          <option>🇲🇽 +52</option>
        </select>
        <input type="text" placeholder="Número celular" style={{ padding: '8px', flex: 1, borderRadius: '4px', border: '1px solid #ddd' }} />
        <span style={{ marginLeft: '8px', color: 'green' }}>✓</span>
      </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', marginTop: '32px' }}>
      <button style={{ padding: '8px 16px', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: 'white' }}>
        Descartar cambios
      </button>
      <button style={{ padding: '8px 16px', border: 'none', borderRadius: '4px', backgroundColor: '#E84142', color: 'white' }}>
        Guardar cambios
      </button>
    </div>
  </div>
);

const LanguageExample = () => (
  <div>
    <h2 style={{ fontSize: '18px', marginBottom: '16px', fontWeight: 500 }}>Idioma y Región</h2>
    <p style={{ marginBottom: '24px', color: '#666' }}>Configura tus preferencias de idioma y región.</p>
    
    <div style={{ marginBottom: '24px' }}>
      <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Idioma de la aplicación</label>
      <select style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ddd' }}>
        <option>Español (Mexico)</option>
        <option>English (United States)</option>
        <option>Français (France)</option>
      </select>
    </div>
    
    <div style={{ marginBottom: '24px' }}>
      <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Formato de fecha</label>
      <select style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ddd' }}>
        <option>DD/MM/AAAA</option>
        <option>MM/DD/AAAA</option>
        <option>AAAA/MM/DD</option>
      </select>
    </div>
    
    <div style={{ marginBottom: '24px' }}>
      <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Zona horaria</label>
      <select style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ddd' }}>
        <option>(GMT-06:00) Ciudad de México</option>
        <option>(GMT-05:00) Nueva York</option>
        <option>(GMT+01:00) Madrid</option>
      </select>
    </div>
    
    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', marginTop: '32px' }}>
      <button style={{ padding: '8px 16px', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: 'white' }}>
        Descartar cambios
      </button>
      <button style={{ padding: '8px 16px', border: 'none', borderRadius: '4px', backgroundColor: '#E84142', color: 'white' }}>
        Aplicar
      </button>
    </div>
  </div>
);

const SecurityExample = () => (
  <div>
    <h2 style={{ fontSize: '18px', marginBottom: '16px', fontWeight: 500 }}>Seguridad</h2>
    <p style={{ marginBottom: '24px', color: '#666' }}>Gestiona tus opciones de seguridad.</p>
    
    <h3 style={{ fontSize: '16px', marginBottom: '12px', fontWeight: 500 }}>Autenticación de dos factores</h3>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px' }}>
      <span style={{ marginRight: '16px', color: '#666' }}>Desactivado</span>
      <button style={{ padding: '8px 16px', border: 'none', borderRadius: '4px', backgroundColor: '#E84142', color: 'white' }}>
        Activar
      </button>
    </div>
    
    <h3 style={{ fontSize: '16px', marginBottom: '12px', fontWeight: 500 }}>Contraseña</h3>
    <p style={{ marginBottom: '16px', color: '#666' }}>Cambia tu contraseña regularmente para mantener tu cuenta segura.</p>
    
    <div style={{ marginBottom: '32px' }}>
      <button style={{ padding: '8px 16px', border: '1px solid #E84142', borderRadius: '4px', backgroundColor: 'white', color: '#E84142' }}>
        Cambiar contraseña
      </button>
    </div>
    
    <h3 style={{ fontSize: '16px', marginBottom: '12px', fontWeight: 500 }}>Sesiones activas</h3>
    <div style={{ padding: '16px', border: '1px solid #eee', borderRadius: '4px', marginBottom: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontWeight: 500 }}>Chrome - Windows</div>
          <div style={{ fontSize: '12px', color: '#666' }}>Conectado ahora • Ciudad de México</div>
        </div>
        <div style={{ color: 'green', fontSize: '12px', fontWeight: 500 }}>
          ACTUAL
        </div>
      </div>
    </div>
    
    <div style={{ padding: '16px', border: '1px solid #eee', borderRadius: '4px', marginBottom: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontWeight: 500 }}>Safari - iPhone</div>
          <div style={{ fontSize: '12px', color: '#666' }}>Hace 2 días • Ciudad de México</div>
        </div>
        <button style={{ padding: '4px 8px', border: 'none', borderRadius: '4px', backgroundColor: '#f5f5f5', color: '#666', fontSize: '12px' }}>
          Cerrar sesión
        </button>
      </div>
    </div>
  </div>
);

// Iconos simulados para el ejemplo
const MockIcon = ({ icon, width, height }: { icon: string, width: number, height: number }) => {
  const getColor = () => {
    if (icon === 'smallUserIcon') return '#333';
    if (icon === 'languageIcon') return '#333';
    if (icon === 'padlockIcon') return '#333';
    return '#333';
  };

  return (
    <div
      style={{
        width,
        height,
        color: getColor(),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {icon === 'smallUserIcon' && '👤'}
      {icon === 'languageIcon' && '🌐'}
      {icon === 'padlockIcon' && '🔒'}
    </div>
  );
};

// Opciones de menú para los ejemplos
const menuOptions = [
  {
    id: 1,
    label: 'Información personal',
    icon: 'smallUserIcon',
    value: 0,
    component: <PersonalInfoExample />
  },
  {
    id: 2,
    label: 'Idioma y región',
    icon: 'languageIcon',
    value: 1,
    component: <LanguageExample />
  },
  {
    id: 3,
    label: 'Seguridad',
    icon: 'padlockIcon',
    value: 2,
    component: <SecurityExample />
  }
];

// Definición de meta para Storybook
const meta: Meta<typeof ModalComponent> = {
  title: 'Components/ModalComponent',
  component: ModalComponent,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [BackgroundDecorator],
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    onClose: { action: 'closed' },
    className: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof ModalComponent>;

// Story principal
export const Default: Story = {
  args: {
    title: 'Mi perfil',
    menuOptions,
    iconComponent: MockIcon,
    closeIcon: <CloseButtonT1 />,
    className: {
      menuItem: 'menu-item',
      menuItemSelected: 'menu-item-selected'
    },
    styles: {
      mainContainer: { 
        position: 'fixed',
        top: '65px'
      },
      contentContainer: {
        backgroundColor: '#FFFFFF'
      }
    }
  },
};

// Story con estilo personalizado
export const CustomStyling: Story = {
  args: {
    ...Default.args,
    title: 'Perfil de Usuario',
    className: {
      ...Default.args?.className,
    }
  },
};

// Story con vista móvil
export const MobileView: Story = {
  args: {
    ...Default.args,
    title: 'Mi perfil',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};