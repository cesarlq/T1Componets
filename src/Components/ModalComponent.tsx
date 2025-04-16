import React, { useEffect, useState} from 'react';
import { 
  useTheme, 
  useMediaQuery, 
  Divider, 
  Stack, 
  Paper, 
  MenuList, 
  ListItemIcon, 
  ListItemText, 
  Tabs, 
  Tab, 
  Box,
  styled
} from '@mui/material';
import CloseButtonT1 from './CloseButtonT1';
import { ProfileComponentProps, TabPanelProps } from '../interfaces/commonInterfaces';

// Estilos para la animación
const AnimatedModal = styled(Box)(({ theme }) => ({
  '&.modal-enter': {
    transform: 'translateY(100%)',
    opacity: 0,
  },
  '&.modal-enter-active': {
    transform: 'translateY(0)',
    opacity: 1,
    transition: 'transform 300ms ease-in-out, opacity 300ms ease-in-out',
  },
  '&.modal-exit': {
    transform: 'translateY(0)',
    opacity: 1,
  },
  '&.modal-exit-active': {
    transform: 'translateY(100%)',
    opacity: 0,
    transition: 'transform 300ms ease-in-out, opacity 300ms ease-in-out',
  },
}));


// Creamos un MenuItem personalizado para evitar problemas de tipado
const StyledMenuItem = styled('div')<{ isSelected?: boolean }>(({ theme, isSelected }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '8px',
  height: '40px',
  borderRadius: '7px',
  marginBottom: '8px',
  cursor: 'pointer',
  backgroundColor: isSelected ? '#FADEDE' : 'transparent',
  '&:hover': {
    backgroundColor: isSelected ? '#FADEDE' : '#f5f5f5',
  }
}));

/**
 * Componente TabPanel para mostrar contenido basado en pestaña seleccionada
 */
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

/**
 * Interfaz para cada opción del menú
 */


/**
 * Componente de Perfil Reutilizable
 */
const ModalComponent: React.FC<ProfileComponentProps> = ({
  title,
  onClose,
  menuOptions,
  closeIcon,
  iconComponent: IconComponent,
  className = {},
  styles = {}
}) => {
  // Estados
  const [viewSelected, setViewSelected] = useState<number | null>(0);
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [modalClass, setModalClass] = useState('modal-enter');
  
  // Theme y responsive
  const theme = useTheme();
  const isSmartphone = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));
  
  const dimensionsIcon = { width: 16, height: 16 };

  // Efecto para manejar la animación de entrada
  useEffect(() => {
    const timer = setTimeout(() => {
      setModalClass('modal-enter modal-enter-active');
    }, 10);

    return () => clearTimeout(timer);
  }, []);

   // Handler para cerrar con animación
   const handleClose = () => {
    setModalClass('modal-exit modal-exit-active');
    
    const timer = setTimeout(() => {
      onClose();
    }, 300);

    return () => clearTimeout(timer);
  };

  // Handlers
  const handleMenuItemClick = (index: number) => {
    setViewSelected(index);
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <div style={{ position: 'absolute', top:'0px', zIndex: 1, width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: '#0000006b' }}>
      <AnimatedModal
        className={`${className.mainContainer} ${modalClass}`}
        sx={{
          backgroundColor: '#FFFFFF',
          position: 'fixed',
          top: '65px',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
          overflow: 'auto',
          boxShadow: '0px -2px 10px rgba(0,0,0,0.1)',
          borderRadius: '20px 20px 0px 0px',
          ...styles.mainContainer
        }}
      >
    <Box
      component="header" 
      className={className.headerProfile}
      sx={{
        ...styles.headerProfile
      }}
    >
        <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" sx={{ p: 2 }}>
          <h1 >{title}</h1>
          <CloseButtonT1 
            className={className.btnClose} 
            aria-label="close" 
            onClick={handleClose} 
            size="small" 
          />
        </Stack>
      </Box>
      <Divider />
      <Box
        component="section"
        className={className.sectionProfile}
        style={{ backgroundColor: '#FFFFFF!important', }}
        sx={{
          ...styles.sectionProfile,
          backgroundColor: '#FFFFFF!important',
        }}
      >
        {(isDesktop || isLargeScreen || isExtraLargeScreen) && (
          <Box sx={{ display: 'flex', gap: 3, p: 3, backgroundColor: '#FFFFFF', ...styles.contentContainer }}>
            <Box sx={{ width: '250px', flexShrink: 0, backgroundColor: '#FFFFFF', }} className={className.containerLeft}>
              <Paper className={className.paper} elevation={0} sx={{ p: 0 }}>
                <MenuList>
                  {menuOptions.map((option, index) => (
                    <StyledMenuItem 
                      key={option.id}
                      onClick={() => handleMenuItemClick(index)}
                      isSelected={viewSelected === index}
                      className={viewSelected === index ? className.menuItemSelected : className.menuItem}
                    >
                      <ListItemIcon sx={{ minWidth: '35px' }}>
                        <IconComponent 
                          icon={option.icon} 
                          width={dimensionsIcon.width} 
                          height={dimensionsIcon.height} 
                        />
                      </ListItemIcon>
                      <ListItemText 
                        className={className.listItemText} 
                        primary={option.label} 
                        primaryTypographyProps={{ 
                          fontSize: '14px', 
                          fontWeight: viewSelected === index ? 500 : 400,
                          color: viewSelected === index ? '#E84142' : '#333333'
                        }}
                      />
                    </StyledMenuItem>
                  ))}
                </MenuList>
              </Paper>
            </Box>
            <Box sx={{ flexGrow: 1, backgroundColor: '#FFFFFF', borderRadius: '8px', p: 3 }}>
              {viewSelected !== null && menuOptions[viewSelected]?.component}
            </Box>
          </Box>
        )}

        {(isSmartphone || isTablet) && (
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={currentTab} onChange={handleTabChange} aria-label="profile tabs">
              {menuOptions.map((option) => (
                <Tab key={option.id} label={option.label} />
              ))}
            </Tabs>
            {menuOptions.map((option, index) => (
              <TabPanel key={option.id} value={currentTab} index={index}>
                {option.component}
              </TabPanel>
            ))}
          </Box>
        )}
      </Box>
    </AnimatedModal>
    </div>
  );
};

export default ModalComponent;