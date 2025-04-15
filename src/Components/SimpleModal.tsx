import React, { ReactNode } from 'react';
import { 
  IconButton, 
  Stack, 
  Box,
  Divider,
  styled
} from '@mui/material';
import { CloseButtonT1 } from 't1componets';

/**
 * Props para el componente SimpleModalComponent
 */
export interface SimpleModalProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
  closeIcon?: ReactNode;
  className?: {
    mainContainer?: string;
    headerProfile?: string;
    btnClose?: string;
    contentContainer?: string;
  };
  styles?: {
    mainContainer?: React.CSSProperties;
    headerProfile?: React.CSSProperties;
    contentContainer?: React.CSSProperties;
  };
}

/**
 * Componente Modal Simple - Sin menú lateral
 * Versión simplificada que solo muestra un título, botón de cierre y contenido
 */
const SimpleModalComponent: React.FC<SimpleModalProps> = ({
  title,
  onClose,
  children,
  closeIcon,
  className = {},
  styles = {}
}) => {
  return (
    <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%', overflow: 'hidden', backgroundColor: '#0000006b' }}>
    <Box
      component="main"
      className={className.mainContainer} 
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
          <h1>{title}</h1>
          <CloseButtonT1 
            className={className.btnClose} 
            aria-label="close" 
            onClick={onClose} 
            size="small" 
          />
        </Stack>
      </Box>
      <Divider />
      <Box
        className={className.contentContainer}
        sx={{ 
          p: 3, 
          backgroundColor: '#FFFFFF',
          ...styles.contentContainer 
        }}
      >
        {children}
      </Box>
    </Box>
    </div>
  );
};

export default SimpleModalComponent;