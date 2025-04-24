import React, { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  Select, 
  MenuItem, 
  InputBase,
  SelectChangeEvent,
  Theme,
  SxProps,
  FormHelperText,
  Typography,
  InputAdornment,
  IconButton
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClearIcon from '@mui/icons-material/Clear';
import Flag from 'react-world-flags';
import { styled } from '@mui/material/styles';
import theme from '../styles/theme';

// Interfaces
export interface Country {
  code: string;
  name: string;
  prefix: string;
  flagEmoji?: string; // Opcional: emoji de bandera como alternativa
}

export interface PhoneInputT1Props {
  // Valores iniciales
  initialRegion?: string;
  initialPhoneNumber?: string;
  
  // Configuración
  countries?: Country[];
  defaultCountry?: string; // código del país por defecto
  
  // Callbacks
  onChange?: (prefix: string, phoneNumber: string, isValid: boolean, formattedNumber?: string) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  // Validación
  required?: boolean;
  error?: boolean;
  helperText?: string;
  customValidation?: (phoneNumber: string) => boolean;
  
  // Comportamiento
  autoFocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  
  // Estilos y presentación
  label?: string | React.ReactNode;
  placeholder?: string;
  variant?: 'outlined' | 'filled' | 'standard';
  size?: 'small' | 'medium';
  fullWidth?: boolean;
  showCountryName?: boolean;
  formatPhoneNumber?: boolean;
  clearable?: boolean;
  
  // Estilos avanzados
  sx?: SxProps<Theme>;
  inputSx?: SxProps<Theme>;
  selectSx?: SxProps<Theme>;
  borderRadius?: number | string;
  borderColor?: string;
  focusBorderColor?: string;
  maxWidth?: number | string;
  
  // Clases personalizadas
  className?: string;
  inputClassName?: string;
  selectClassName?: string;
  
  // Props HTML
  id?: string;
  name?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  
  // Propiedades de accesibilidad
  ariaLabel?: string;
  ariaDescribedby?: string;
}

// Lista de países predefinidos
const DEFAULT_COUNTRIES: Country[] = [
  { code: 'MX', name: 'Mexico', prefix: '+52', flagEmoji: '🇲🇽' },
  { code: 'US', name: 'United States', prefix: '+1', flagEmoji: '🇺🇸' },
  { code: 'ES', name: 'Spain', prefix: '+34', flagEmoji: '🇪🇸' },
  { code: 'CA', name: 'Canada', prefix: '+1', flagEmoji: '🇨🇦' },
  { code: 'BR', name: 'Brazil', prefix: '+55', flagEmoji: '🇧🇷' },
  { code: 'AR', name: 'Argentina', prefix: '+54', flagEmoji: '🇦🇷' },
  { code: 'GB', name: 'United Kingdom', prefix: '+44', flagEmoji: '🇬🇧' },
  { code: 'FR', name: 'France', prefix: '+33', flagEmoji: '🇫🇷' },
  { code: 'DE', name: 'Germany', prefix: '+49', flagEmoji: '🇩🇪' },
  { code: 'IT', name: 'Italy', prefix: '+39', flagEmoji: '🇮🇹' },
  { code: 'PT', name: 'Portugal', prefix: '+351', flagEmoji: '🇵🇹' },
  { code: 'JP', name: 'Japan', prefix: '+81', flagEmoji: '🇯🇵' },
  { code: 'CN', name: 'China', prefix: '+86', flagEmoji: '🇨🇳' },
  { code: 'AU', name: 'Australia', prefix: '+61', flagEmoji: '🇦🇺' },
  { code: 'NZ', name: 'New Zealand', prefix: '+64', flagEmoji: '🇳🇿' },
  { code: 'IN', name: 'India', prefix: '+91', flagEmoji: '🇮🇳' }
];

// Componente estilizado para el InputBase con bordes persistentes
const StyledInputBase = styled(InputBase, {
  shouldForwardProp: (prop) => prop !== 'customBorderColor' && prop !== 'customBorderRadius'
})<{ 
  customBorderColor?: string;
  customBorderRadius?: string | number;
  error?: boolean;
}>(({ theme, error, customBorderColor, customBorderRadius }) => ({
  flex: 1,
  paddingLeft: theme.spacing(2),
  paddingRight: '20px',
  color: error ? theme.palette.error.main : 'inherit',
  // Eliminar los estilos de enfoque que causan la desaparición del borde
  '& .MuiInputBase-input': {
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
  },
  // Preservar consistencia visual cuando se enfoca
  '&.Mui-focused': {
    '& .MuiInputBase-input': {
      border: 'none',
      boxShadow: 'none',
    }
  }
}));

// Componente principal
const PhoneInputT1: React.FC<PhoneInputT1Props> = ({
  // Valores iniciales
  initialRegion,
  initialPhoneNumber = '',
  
  // Configuración
  countries = DEFAULT_COUNTRIES,
  defaultCountry = 'MX',
  
  // Callbacks
  onChange,
  onBlur,
  onFocus,
  
  // Validación
  required = false,
  error = false,
  helperText,
  customValidation,
  
  // Comportamiento
  autoFocus = false,
  disabled = false,
  readOnly = false,
  
  // Estilos y presentación
  label,
  placeholder = 'Cellphone number',
  variant = 'outlined',
  size = 'medium',
  fullWidth = false,
  showCountryName = false,
  formatPhoneNumber = false,
  clearable = false,
  
  // Estilos avanzados
  sx,
  inputSx,
  selectSx,
  borderRadius = '12px',
  borderColor = '#c4c4c4',
  focusBorderColor,
  maxWidth,
  
  // Clases personalizadas
  className,
  inputClassName,
  selectClassName,
  
  // Props HTML
  id,
  name,
  inputProps,
  
  // Propiedades de accesibilidad
  ariaLabel,
  ariaDescribedby
}) => {
  // Refs para mantener el estado del componente
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Encontrar país inicial
  const getInitialCountry = (): Country => {
    // Por prefix si está definido
    if (initialRegion) {
      const country = countries.find(c => c.prefix === initialRegion);
      if (country) return country;
    }
    
    // Por código de país por defecto
    const defaultCountryObj = countries.find(c => c.code === defaultCountry);
    
    // Fallback al primer país en la lista
    return defaultCountryObj || countries[0];
  };

  // Estados
  const [selectedCountry, setSelectedCountry] = useState<Country>(getInitialCountry());
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);
  const [isFocused, setIsFocused] = useState(false);
  
  // Efecto para actualizar país si cambia initialRegion
  useEffect(() => {
    if (initialRegion) {
      const country = countries.find(c => c.prefix === initialRegion);
      if (country) setSelectedCountry(country);
    }
  }, [initialRegion, countries]);
  
  // Efecto para actualizar número si cambia initialPhoneNumber
  useEffect(() => {
    setPhoneNumber(initialPhoneNumber);
  }, [initialPhoneNumber]);
  
  // Manejador de cambio de país
  const handleCountryChange = (event: SelectChangeEvent<string>) => {
    const country = countries.find(c => c.code === event.target.value);
    if (country) {
      setSelectedCountry(country);
      const isValid = validatePhone(phoneNumber);
      onChange?.(country.prefix, phoneNumber, isValid, formatNumber(phoneNumber));
    }
  };
  
  // Validación de número de teléfono
  const validatePhone = (value: string): boolean => {
    // Validación personalizada si se proporciona
    if (customValidation) return customValidation(value);
    
    // Validación básica predeterminada (10 dígitos)
    return value.length === 10;
  };
  
  // Formateo de número de teléfono (personalizable según el país)
  const formatNumber = (value: string): string => {
    if (!formatPhoneNumber) return value;
    
    // Formato para México: (XXX) XXX-XXXX
    if (selectedCountry.code === 'MX' && value.length === 10) {
      return `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
    }
    
    // Formato para USA/Canada: (XXX) XXX-XXXX
    if (['US', 'CA'].includes(selectedCountry.code) && value.length === 10) {
      return `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
    }
    
    // Formato genérico con guiones cada 3 dígitos
    return value.replace(/(\d{3})(?=\d)/g, '$1-');
  };
  
  // Manejador de cambio de número de teléfono
  const handlePhoneNumberChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value.replace(/[^0-9]/g, '').slice(0, 10);
    
    if (value === '' || /^\d{0,10}$/.test(value)) {
      setPhoneNumber(value);
      const isValid = validatePhone(value);
      onChange?.(selectedCountry.prefix, value, isValid, formatNumber(value));
    }
  };
  
  // Manejadores de eventos de foco
  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(event);
  };
  
  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(event);
  };
  
  // Manejador para limpiar el campo
  const handleClear = () => {
    setPhoneNumber('');
    onChange?.(selectedCountry.prefix, '', false, '');
  };
  
  // Calcular error
  const hasError = error || (required && phoneNumber === '') || (phoneNumber.length > 0 && !validatePhone(phoneNumber));
  
  // Determinar mensaje de error
  const errorMessage = helperText || (
    phoneNumber.length > 0 && phoneNumber.length < 10 
      ? 'Cellphone number must be at least 10 digits' 
      : required && phoneNumber === '' 
        ? 'This field is required' 
        : ''
  );

  // Calcular color del borde
  const activeBorderColor = hasError 
    ? '#d32f2f' // error.main
    : isFocused 
      ? (focusBorderColor || theme.palette.primary.main) // primary.main o color personalizado
      : borderColor;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: fullWidth ? '100%' : 'auto',
        maxWidth: maxWidth,
        ...sx
      }}
      className={className}
    >
      {label && (
        <Typography 
          variant="body2" 
          component="label" 
          htmlFor={id || "phone-input"}
          sx={{ mb: 0.5, fontWeight: 500 }}
        >
          {label}
          {required && <Box component="span" sx={{ color: 'error.main', ml: 0.5 }}>*</Box>}
        </Typography>
      )}
      
      <Box
        ref={containerRef}
        sx={{
          display: 'flex',
          alignItems: 'center',
          border: `1px solid ${activeBorderColor}`,
          borderRadius,
          height:'36px',
          overflow: 'hidden',
          bgcolor: disabled ? 'action.disabledBackground' : 'background.paper',
          opacity: disabled ? 0.7 : 1,
          transition: 'border-color 0.2s ease-in-out',
          '&:hover': {
            borderColor: !disabled && !hasError ? (focusBorderColor || theme.palette.primary.main ) : undefined
          }
        }}
      >
        <Select
          value={selectedCountry.code}
          onChange={handleCountryChange}
          disabled={disabled || readOnly}
          IconComponent={KeyboardArrowDownIcon}
          className={selectClassName}
          // Deshabilitar el efecto de enfoque predeterminado del Select
          sx={{
            minWidth: 'auto',
            height: size === 'small' ? '40px' : '48px',
            '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
            '& .MuiOutlinedInput-input': {
              paddingRight: '27px!important'
            },
            '& .MuiBox-root': {
                gap:'0px'
            },
            '& .MuiSelect-select': { 
              padding: size === 'small' ? '4px 6px' : '6px 8px',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            },
            borderRight: `1px solid ${hasError ? '#d32f2f' : borderColor}`,
            borderRadius: '0 !important',
            // Importante: eliminar estilos de enfoque
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": { 
                border: "none" 
              }
            },
            ...selectSx
          }}
          renderValue={(value) => {
            const country = countries.find(c => c.code === value);
            return (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: '24px', height: 'auto', display:'flex', alignItems: 'center' }}>
                  {country?.flagEmoji ? (
                    <Typography fontSize="16px">{country.flagEmoji}</Typography>
                  ) : (
                    <Flag code={country?.code} height="16" width="24" />
                  )}
                </Box>
                <span>{country?.prefix}</span>
                {showCountryName && (
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      maxWidth: '75px', 
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {country?.name}
                  </Typography>
                )}
              </Box>
            );
          }}
        >
          {countries.map((country) => (
            <MenuItem key={country.code} value={country.code}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: '24px', height: '16px' }}>
                  {country.flagEmoji ? (
                    <Typography fontSize="16px">{country.flagEmoji}</Typography>
                  ) : (
                    <Flag code={country.code} height="16" width="24" />
                  )}
                </Box>
                <span>{country.prefix}</span>
                <Typography>{country.name}</Typography>
              </Box>
            </MenuItem>
          ))}
        </Select>
        
        <StyledInputBase
          id={id || "phone-input"}
          name={name}
          placeholder={placeholder}
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          error={hasError}
          disabled={disabled}
          readOnly={readOnly}
          autoFocus={autoFocus}
          className={inputClassName}
          customBorderColor={activeBorderColor}
          customBorderRadius={borderRadius}
          inputProps={{ 
            pattern: '[0-9]*', 
            maxLength: 10, 
            inputMode: 'numeric',
            'aria-label': ariaLabel || 'Phone number input',
            'aria-describedby': ariaDescribedby,
            style: { boxShadow: 'none' }, // Asegurar que no hay sombras
            ...inputProps
          }}
          endAdornment={
            clearable && phoneNumber && !disabled && !readOnly ? (
              <InputAdornment position="end">
                <IconButton
                  aria-label="clear phone number"
                  onClick={handleClear}
                  edge="end"
                  size="small"
                >
                  <ClearIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ) : null
          }
          // Importante: deshabilita completamente los estilos de enfoque
          sx={{
            '& .MuiInputBase-root': {
              boxShadow: 'none',
            },
            '&.Mui-focused': {
              outline: 'none',
              boxShadow: 'none',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            ...inputSx
          }}
        />
      </Box>

      {(hasError && errorMessage) && (
        <FormHelperText
          error={hasError}
          sx={{
            mx: 1.5,
            mt: 0.5,
            fontSize: '0.75rem'
          }}
        >
          {errorMessage}
        </FormHelperText>
      )}
    </Box>
  );
};

export default PhoneInputT1;