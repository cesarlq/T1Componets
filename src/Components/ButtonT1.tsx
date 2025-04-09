import React, { useState } from 'react';
import { 
  Button,
  Divider, 
  CircularProgress, 
  Tooltip 
} from '@mui/material';
import { SxProps, Theme, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ButtonT1PropsI } from '../interfaces/commonInterfaces';

const ButtonT1: React.FC<ButtonT1PropsI> = ({
    children,
    startIcon,
    endIcon,
    additionalIcon,
    variant = 'contained',
    className,
    onClick,
    disabled,
    loading = false,
    confirmationMessage,
    tooltipText,
    responsive = false,
    sx,
    color = 'primary',
    size = 'medium',
    ...props
}) => {
    const [isConfirming, setIsConfirming] = useState(false);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    // Handle click with confirmation logic
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // Confirmation logic
        if (confirmationMessage && !isConfirming) {
            setIsConfirming(true);
            return;
        }

        // Reset confirmation state
        if (isConfirming) {
            setIsConfirming(false);
        }

        // Original click handler
        event.stopPropagation();
        onClick?.();
    };

    // Determine responsive props
    const responsiveProps = responsive && isSmallScreen 
        ? { 
            size: 'small' as const, 
            fullWidth: true 
        } 
        : {};

    // Custom styling
    const customSx: SxProps<Theme> = {
        ...(variant === 'contained' && {
            boxShadow: theme.shadows[2],
            transition: 'all 0.3s ease',
            '&:hover': {
                boxShadow: theme.shadows[4],
                transform: 'translateY(-2px)',
            }
        }),
        ...sx
    };

    // Prepare end icon with additional icon
    const fullEndIcon = endIcon || additionalIcon ? (
        <div className="flex items-center gap-2">
            {endIcon}
            {additionalIcon && (
                <>
                    <Divider orientation="vertical" flexItem />
                    {additionalIcon}
                </>
            )}
        </div>
    ) : undefined;

    // Render button content
    const buttonContent = (
        <Button
            {...props}
            {...responsiveProps}
            className={`${className || ''}`}
            variant={variant}
            color={color}
            size={size}
            startIcon={startIcon}
            endIcon={fullEndIcon}
            disabled={disabled || loading}
            onClick={handleClick}
            sx={customSx}
        >
            {isConfirming ? confirmationMessage : children}
            {loading && (
                <CircularProgress 
                    size={24} 
                    sx={{ 
                        position: 'absolute', 
                        top: '50%', 
                        left: '50%', 
                        marginTop: '-12px', 
                        marginLeft: '-12px' 
                    }} 
                />
            )}
        </Button>
    );

    // Wrap with tooltip if tooltip text is provided
    return tooltipText ? (
        <Tooltip title={tooltipText}>
            {buttonContent}
        </Tooltip>
    ) : buttonContent;
};

export default ButtonT1;