import React, { forwardRef, useState, useEffect } from 'react';
import { 
  TextField, 
  Tooltip, 
  InputAdornment, 
  IconButton, 
  FormHelperText,
  OutlinedTextFieldProps,
  Theme,
  SxProps,
  Typography,
  Box,
  StandardTextFieldProps, 
  FilledTextFieldProps
} from '@mui/material';
import styles from '../styles/common/CommonStyles.module.scss';
import T1Icon from './T1Icon';
import { fontSize, fontWeight, letterSpacing, lineHeight } from '@mui/system';

// Define el tipo para textFieldProps con todas las posibles variantes
type TextFieldPropsVariants = StandardTextFieldProps | FilledTextFieldProps | OutlinedTextFieldProps;

// Define la interfaz CustomInputProps
interface CustomInputProps {
  // Propiedades básicas
  label?: string | React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  
  // Contenido y valor
  textFieldProps?: TextFieldPropsVariants & {
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  };
  value?: string | number;
  defaultValue?: string | number;
  placeholder?: string;
  
  // Validación
  error?: boolean;
  helperText?: string | React.ReactNode;
  validation?: (value: string) => boolean | { isValid: boolean; message?: string };
  maxLength?: number;
  minLength?: number;
  validateOnBlur?: boolean;
  validateOnChange?: boolean;
  
  // Comportamiento
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onEnterPress?: () => void;
  autoFocus?: boolean;
  clearable?: boolean;
  
  // Personalización visual
  tooltip?: string | React.ReactNode;
  tooltipPlacement?: 'top' | 'right' | 'bottom' | 'left';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: 'outlined' | 'filled' | 'standard';
  size?: 'small' | 'medium';
  style?: React.CSSProperties;
  sx?: SxProps<Theme>;
  labelSx?: SxProps<Theme>;
  inputSx?: SxProps<Theme>;
  helperTextSx?: SxProps<Theme>;
  borderRadius?: number | string;
  borderColor?: string;
  focusBorderColor?: string;
  
  // Control del diseño
  fullWidth?: boolean;
  hideLabel?: boolean;
  compact?: boolean;
  customStyles?: {
    container?: React.CSSProperties;
    label?: React.CSSProperties;
    input?: React.CSSProperties;
    helperText?: React.CSSProperties;
  };
  showCharCount?: boolean;

  // Para componentes tipo select
  children?: React.ReactNode;

  // Resto de props para el TextField
  [x: string]: any;
}

/**
 * CustomInput es un componente de entrada mejorado con funciones extendidas como validación,
 * personalización visual avanzada, y características adicionales como conteo de caracteres,
 * iconos personalizados y más.
 */
const CustomInput = forwardRef<HTMLDivElement, CustomInputProps>((
  {
    // Propiedades básicas
    label,
    required = false,
    disabled = false,
    readOnly = false,
    
    // Contenido y valor
    textFieldProps = {} as TextFieldPropsVariants,
    value,
    defaultValue,
    placeholder,
    
    // Validación
    error,
    helperText,
    validation,
    maxLength,
    minLength,
    validateOnBlur = true,
    validateOnChange = false,
    
    // Comportamiento
    onChange,
    onBlur,
    onFocus,
    onEnterPress,
    autoFocus = false,
    clearable = false,
    
    // Personalización visual
    tooltip,
    tooltipPlacement = 'top',
    startIcon,
    endIcon,
    variant = 'outlined',
    size = 'medium',
    style,
    sx,
    labelSx,
    inputSx,
    helperTextSx,
    borderRadius,
    borderColor,
    focusBorderColor,
    
    // Control del diseño
    fullWidth = false,
    hideLabel = false,
    compact = false,
    customStyles,
    showCharCount = false,
    
    // Props para el select
    children,
    
    // Resto de props
    ...rest
  }, 
  ref
) => {
  // Estados internos
  const [inputValue, setInputValue] = useState<string>(
    (value !== undefined ? String(value) : defaultValue !== undefined ? String(defaultValue) : '') as string
  );
  const [isFocused, setIsFocused] = useState(false);
  const [validationState, setValidationState] = useState<{
    isValid: boolean;
    message?: string;
  }>({ isValid: true });
  const [showPassword, setShowPassword] = useState(false);

  // Efecto para sincronizar valor externo
  useEffect(() => {
    if (value !== undefined) {
      setInputValue(String(value));
    }
  }, [value]);

  // Manejador de cambio
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    // Comprobar máximo de caracteres
    if (maxLength && newValue.length > maxLength) {
      return;
    }
    
    setInputValue(newValue);
    
    // Validación en cambio si está habilitada
    if (validateOnChange && validation) {
      const validationResult = validation(newValue);
      
      if (typeof validationResult === 'boolean') {
        setValidationState({ isValid: validationResult });
      } else {
        setValidationState(validationResult);
      }
    }
    
    // Propagar el evento
    if (onChange) {
      onChange(e);
    }
    
    // Llamar al onChange de textFieldProps si existe
    if ('onChange' in textFieldProps && typeof textFieldProps.onChange === 'function') {
      textFieldProps.onChange(e as any);
    }
  };

  // Manejador de pérdida de foco
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    
    // Validación en blur si está habilitada
    if (validateOnBlur && validation) {
      const validationResult = validation(inputValue);
      
      if (typeof validationResult === 'boolean') {
        setValidationState({ isValid: validationResult });
      } else {
        setValidationState(validationResult);
      }
    }
    
    // Comprobar longitud mínima
    if (minLength && inputValue.length < minLength && inputValue.length > 0) {
      setValidationState({
        isValid: false,
        message: `Debe tener al menos ${minLength} caracteres`
      });
    }
    
    // Propagar el evento
    if (onBlur) {
      onBlur(e);
    }
    
    // Llamar al onBlur de textFieldProps si existe
    if ('onBlur' in textFieldProps && typeof textFieldProps.onBlur === 'function') {
      textFieldProps.onBlur(e as any);
    }
  };

  // Manejador de foco
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    
    // Propagar el evento
    if (onFocus) {
      onFocus(e);
    }
    
    // Llamar al onFocus de textFieldProps si existe
    if ('onFocus' in textFieldProps && typeof textFieldProps.onFocus === 'function') {
      textFieldProps.onFocus(e as any);
    }
  };

  // Manejador de tecla pulsada
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Ejecutar callback cuando se presiona Enter
    if (e.key === 'Enter' && onEnterPress) {
      onEnterPress();
    }
    
    // Llamar al onKeyDown de textFieldProps si existe
    if ('onKeyDown' in textFieldProps && typeof textFieldProps.onKeyDown === 'function') {
      textFieldProps.onKeyDown(e as any);
    }
  };

  // Función para limpiar el campo
  const handleClear = () => {
    setInputValue('');
    
    // Simulamos un evento de cambio para mantener consistencia
    const simulatedEvent = {
      target: { value: '' }
    } as React.ChangeEvent<HTMLInputElement>;
    
    if (onChange) {
      onChange(simulatedEvent);
    }
    
    if ('onChange' in textFieldProps && typeof textFieldProps.onChange === 'function') {
      textFieldProps.onChange(simulatedEvent as any);
    }
  };

  // Alternar visibilidad de contraseña
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Determinar el tipo de entrada (password vs text)
  const inputType = 
    textFieldProps.type === 'password' 
      ? (showPassword ? 'text' : 'password') 
      : textFieldProps.type;

  // Configurar adornos para el input
  const startAdornment = startIcon ? (
    <InputAdornment position="start">
      {startIcon}
    </InputAdornment>
  ) : textFieldProps.InputProps?.startAdornment;

  let endAdornment = (
    <InputAdornment position="end">
      {/* Botón de limpiar */}
      {clearable && inputValue && !disabled && !readOnly && (
        <IconButton 
          onClick={handleClear}
          edge="end"
          size="small"
          aria-label="clear input"
        >
          <T1Icon icon="closeIcon" />
        </IconButton>
      )}
      
      {/* Botón de mostrar/ocultar contraseña */}
      {textFieldProps.type === 'password' && (
        <IconButton
          onClick={togglePasswordVisibility}
          edge="end"
          size="small"
          aria-label={showPassword ? 'hide password' : 'show password'}
        >
          <T1Icon icon={showPassword ? "eyeOffIcon" : "eyeIcon"} />
        </IconButton>
      )}
      
      {/* Ícono personalizado al final */}
      {endIcon}
      
      {/* Adornos existentes */}
      {!clearable && !textFieldProps.type && !endIcon && textFieldProps.InputProps?.endAdornment}
    </InputAdornment>
  );

  // Si no hay ningún elemento en endAdornment, lo ponemos a null
  if (
    !clearable && 
    textFieldProps.type !== 'password' && 
    !endIcon && 
    !textFieldProps.InputProps?.endAdornment
  ) {
    endAdornment = <></>;
  }

  // Determinar si hay error
  const hasError = error !== undefined 
    ? error 
    : validation ? !validationState.isValid : false;

  // Determinar mensaje de ayuda
  const displayHelperText = validationState.message || helperText;

  // Estilos de borde
  const getBorderStyles = () => {
    if (hasError) {
      return { borderColor: '#d32f2f' }; // Color de error
    }
    
    if (isFocused) {
      return { borderColor: focusBorderColor || '#1976d2' }; // Color primario o personalizado
    }
    
    return { borderColor: borderColor || '#c4c4c4' }; // Color normal o personalizado
  };

  // Calcular conteo de caracteres
  const charCount = maxLength ? `${inputValue.length}/${maxLength}` : undefined;

  // Estilos del contenedor
  const containerStyles = {
    width: fullWidth ? '100%' : 'auto',
    ...style,
    ...customStyles?.container
  };

  // Estilos para el label
  const labelStyles = {
	margin: '0',
    lineHeight: '1.43',
    letterSpacing: '0.01071em',
    fontSize: '13px',
    fontWeight: '500',
    ...customStyles?.label
  };

  // Estilos para el input
  const inputStyles = {
	borderRadius: '12px!important',
    ...getBorderStyles(),
    ...customStyles?.input
  };

  // Estilos para el helperText
  const helperTextStyles = {
    ...customStyles?.helperText
  };

  // Obtener className del TextField si existe
  const textFieldClassName = 'className' in textFieldProps ? textFieldProps.className as string : '';

  return (
    <Box
      ref={ref}
      className={`${styles.container} ${textFieldClassName}`}
      style={containerStyles}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        ...sx
      }}
    >
      {/* Label con tooltip */}
      {!hideLabel && label && (
        <Box 
          className={styles['label-container']} 
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 0.5,
            ...labelSx
          }}
        >
          <Typography 
            variant="body2"
            component="label"
            className={styles.label}
            style={labelStyles}
            sx={{ fontWeight: 500 }}
          >
            {label}
            {required && (
              <Box component="span" sx={{ color: 'error.main', ml: 0.5 }}>*</Box>
            )}
          </Typography>
          
          {tooltip && (
            <Tooltip title={tooltip} placement={tooltipPlacement}>
              <Box className={styles.tooltip} sx={{ ml: 0.5, display: 'flex', alignItems: 'center' }}>
                <T1Icon icon="helpIcon" />
              </Box>
            </Tooltip>
          )}
        </Box>
      )}
      
      {/* Input principal */}
      <TextField
        {...rest}
        {...textFieldProps}
        value={'value' in textFieldProps ? textFieldProps.value : inputValue}
        defaultValue={'defaultValue' in textFieldProps ? textFieldProps.defaultValue : defaultValue}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        error={hasError}
        disabled={disabled || ('disabled' in textFieldProps ? textFieldProps.disabled : false)}
        placeholder={placeholder || ('placeholder' in textFieldProps ? textFieldProps.placeholder : '')}
        variant={variant}
        size={size}
        fullWidth={fullWidth || ('fullWidth' in textFieldProps ? textFieldProps.fullWidth : false)}
        autoFocus={autoFocus || ('autoFocus' in textFieldProps ? textFieldProps.autoFocus : false)}
        InputProps={{
          ...textFieldProps.InputProps,
          readOnly: readOnly || (textFieldProps.InputProps?.readOnly ?? false),
          startAdornment,
          endAdornment,
          sx: {
            ...inputStyles,
			height:'35px',
			border: '1px solid #c4c4c4',
            ...(textFieldProps.InputProps?.sx as any),
            ...inputSx
          }
        }}
        inputProps={{
          ...('inputProps' in textFieldProps ? textFieldProps.inputProps : {}),
          maxLength: maxLength,
          type: inputType
        }}
      >
        {'select' in textFieldProps && textFieldProps.select && children}
      </TextField>
      
      {/* Área de ayuda y contador */}
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 0.5,
          minHeight: '1.25rem' // Espacio consistente incluso sin texto
        }}
      >
        {/* Texto de ayuda o error */}
        {displayHelperText && (
          <FormHelperText
            error={hasError}
            style={helperTextStyles}
            sx={{
              m: 0,
              ...helperTextSx
            }}
          >
            {displayHelperText}
          </FormHelperText>
        )}
        
        {/* Contador de caracteres */}
        {showCharCount && maxLength && (
          <Typography
            variant="caption"
            sx={{ 
              color: inputValue.length >= maxLength ? 'error.main' : 'text.secondary',
              ml: 'auto',
              fontSize: '0.75rem'
            }}
          >
            {charCount}
          </Typography>
        )}
      </Box>
    </Box>
  );
});

CustomInput.displayName = 'CustomInput';

export default CustomInput;