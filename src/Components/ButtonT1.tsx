import React, { useState, forwardRef } from 'react';
import { 
  Button,
  Divider, 
  CircularProgress, 
  Tooltip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import { SxProps, Theme, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ButtonT1PropsI } from '../interfaces/commonInterfaces';
import clsx from 'clsx';

const ButtonT1 = forwardRef<HTMLButtonElement, ButtonT1PropsI>(({
    children,
    startIcon,
    endIcon,
    additionalIcon,
    variant = 'contained',
    className,
    onClick,
    disabled = false,
    loading = false,
    confirmationMessage,
    confirmationTitle = 'Confirm Action',
    confirmationCancelText = 'Cancel',
    confirmationConfirmText = 'Confirm',
    tooltipText,
    tooltipPlacement = 'top',
    responsive = false,
    sx,
    color = 'primary',
    size = 'medium',
    disableElevation = false,
    fullWidth = false,
    preventDoubleClick = false,
    ...props
}, ref) => {
    // State
    const [isConfirming, setIsConfirming] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [clickDisabled, setClickDisabled] = useState(false);
    
    // Theme
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    // Handle click with confirmation logic
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // Prevent propagation
        event.stopPropagation();
        
        // Check if button is disabled due to loading, disabled prop, or double-click prevention
        if (loading || disabled || clickDisabled) {
            return;
        }
        
        // Double-click prevention
        if (preventDoubleClick) {
            setClickDisabled(true);
            setTimeout(() => setClickDisabled(false), 1000); // Reset after 1 second
        }
        
        // Dialog confirmation logic
        if (confirmationMessage) {
            setDialogOpen(true);
            return;
        }
        
        // Simple confirmation logic (deprecated, maintained for backward compatibility)
        if (isConfirming) {
            setIsConfirming(false);
            onClick?.();
            return;
        }
        
        // Regular click or simple confirmation first step
        if (confirmationMessage && !isConfirming) {
            setIsConfirming(true);
            return;
        } else {
            onClick?.();
        }
    };
    
    // Dialog handlers
    const handleDialogClose = () => {
        setDialogOpen(false);
    };
    
    const handleConfirm = () => {
        setDialogOpen(false);
        setIsConfirming(false);
        onClick?.();
    };

    // Determine responsive props
    const responsiveProps = responsive && isSmallScreen 
        ? { 
            size: 'small' as const, 
            fullWidth: true 
        } 
        : {};

    // Determine content based on loading and confirmation state
    const buttonContent = loading ? (
        <CircularProgress 
            size={size === 'small' ? 16 : 24}
            color="inherit"
            className="mr-2"
        />
    ) : isConfirming ? (
        confirmationMessage
    ) : children;
    
    // Custom styling with more robust defaults
    const customSx: SxProps<Theme> = {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        ...(variant === 'contained' && !disableElevation && {
            boxShadow: theme.shadows[2],
            transition: 'all 0.3s ease',
            '&:hover': {
                boxShadow: theme.shadows[4],
                transform: 'translateY(-2px)',
            },
            '&:active': {
                boxShadow: theme.shadows[1],
                transform: 'translateY(0)',
            }
        }),
        ...(loading && {
            opacity: 0.8,
            pointerEvents: 'none' as const
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
    
    // Base button component
    const ButtonComponent = (
        <Button
            ref={ref}
            variant={variant}
            color={color}
            size={size}
            disabled={disabled || loading || clickDisabled}
            startIcon={!loading && startIcon}
            endIcon={!loading && fullEndIcon}
            onClick={handleClick}
            sx={customSx}
            fullWidth={fullWidth || (responsiveProps as any).fullWidth}
            disableElevation={disableElevation}
            className={clsx(
                'button-t1',
                {
                    'button-t1--loading': loading,
                    'button-t1--confirming': isConfirming
                },
                className
            )}
            {...props}
            {...responsiveProps}
        >
            {buttonContent}
        </Button>
    );
    
    // Confirmation dialog
    const confirmationDialog = (
        <Dialog
            open={dialogOpen}
            onClose={handleDialogClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {confirmationTitle}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {confirmationMessage}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDialogClose} color="primary" variant="outlined">
                    {confirmationCancelText}
                </Button>
                <Button onClick={handleConfirm} color="primary" variant="contained" autoFocus>
                    {confirmationConfirmText}
                </Button>
            </DialogActions>
        </Dialog>
    );

    // Final return with optional tooltip wrapper
    return (
        <>
            {tooltipText ? (
                <Tooltip title={tooltipText} placement={tooltipPlacement}>
                    <span>{ButtonComponent}</span>
                </Tooltip>
            ) : (
                ButtonComponent
            )}
            {confirmationMessage && confirmationDialog}
        </>
    );
});

ButtonT1.displayName = 'ButtonT1';

export default ButtonT1;