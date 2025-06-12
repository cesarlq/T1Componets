import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Image from 'next/image';
import ButtonT1 from '../Components/ButtonT1';
import LockIcon from '../assets/svg-icons/Lock.svg';
import replyIcon from '../assets/svg-icons/reply.svg';

export interface RestrictedAccessProps {
  /**
   * Title text for the restricted access page
   * @default "Acceso restringido"
   */
  title?: string;
  
  /**
   * Main description text
   * @default "Tu rol actual no permite acceder a este módulo."
   */
  description?: string;
  
  /**
   * Instructions text for requesting permissions
   * @default "Solicita al propietario de la tienda que te otorgue permisos en"
   */
  instructionsText?: string;
  
  /**
   * Path text showing where to request permissions
   * @default "Perfil > Gestionar cuenta > Roles y permisos"
   */
  permissionsPath?: string;
  
  /**
   * Button text for returning to home
   * @default "Volver al inicio"
   */
  buttonText?: string;
  
  /**
   * Callback function when the return button is clicked
   */
  onReturnHome?: () => void;
  
  /**
   * Custom styling for the container
   */
  sx?: React.CSSProperties;
  
  /**
   * Custom class name for styling
   */
  className?: string;
}

const RestrictedAccess: React.FC<RestrictedAccessProps> = ({
  title = "Acceso restringido",
  description = "Tu rol actual no permite acceder a este módulo.",
  instructionsText = "Solicita al propietario de la tienda que te otorgue permisos en",
  permissionsPath = "Perfil > Gestionar cuenta > Roles y permisos",
  buttonText = "Volver al inicio",
  onReturnHome,
  sx,
  className
}) => {
  const handleReturnHome = () => {
    if (onReturnHome) {
      onReturnHome();
    } else {
      // Default behavior - could navigate to home or reload
      console.log('Return to home clicked');
    }
  };

  return (
    <Container
      maxWidth="sm"
      className={className}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center',
        padding: 4,
        ...sx
      }}
    >
      {/* Lock Icon */}
      <Box
        sx={{
          marginBottom: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <Image src={LockIcon} width={28.24} height={43} alt='LockIcon' />
        <Typography
            variant="h4"
            component="h1"
            sx={{
            fontWeight: 700,
            color: '#4C4C4C',
            marginBottom: 0,
            fontSize: '24px'
            }}
        >
            {title}
        </Typography>
      </Box>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          color: '#4C4C4C',
          marginBottom: 2,
          fontSize: '16px',
          fontWeight:'400',
          lineHeight: 1.6
        }}
      >
        {description}
      </Typography>

      {/* Instructions */}
      <Typography
        variant="body2"
        sx={{
          color: '#4C4C4C',
          fontWeight: 400,
          marginBottom: 1,
          fontSize: '14px',
          lineHeight: '24px'
        }}
      >
        {instructionsText}
      </Typography>

      {/* Permissions Path */}
      <Typography
        variant="body2"
        sx={{
          color: '#4C4C4C',
          fontWeight: 700,
          marginBottom: 4,
          fontSize: '0.875rem'
        }}
      >
        {permissionsPath}
      </Typography>

      {/* Return Button */}
      <ButtonT1
        variant='text'
        onClick={handleReturnHome}
        startIcon={<Image src={replyIcon} width={18} height={18} alt='replyIcon' />}
        sx={{
          textTransform: 'none',
          padding: '10px 24px',
          fontSize: '12px',
          fontWeight: 700,
          color: '#4C4C4C'
        }}
      >
        {buttonText}
      </ButtonT1>
    </Container>
  );
};

export default RestrictedAccess;
