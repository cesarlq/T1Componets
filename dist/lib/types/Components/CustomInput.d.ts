import React from 'react';
import { OutlinedTextFieldProps, Theme, SxProps, StandardTextFieldProps, FilledTextFieldProps } from '@mui/material';
type TextFieldPropsVariants = StandardTextFieldProps | FilledTextFieldProps | OutlinedTextFieldProps;
interface CustomInputProps {
    label?: string | React.ReactNode;
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    textFieldProps?: TextFieldPropsVariants & {
        inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    };
    value?: string | number;
    defaultValue?: string | number;
    placeholder?: string;
    error?: boolean;
    helperText?: string | React.ReactNode;
    validation?: (value: string) => boolean | {
        isValid: boolean;
        message?: string;
    };
    maxLength?: number;
    minLength?: number;
    validateOnBlur?: boolean;
    validateOnChange?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onEnterPress?: () => void;
    autoFocus?: boolean;
    clearable?: boolean;
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
    children?: React.ReactNode;
    [x: string]: any;
}
/**
 * CustomInput es un componente de entrada mejorado con funciones extendidas como validación,
 * personalización visual avanzada, y características adicionales como conteo de caracteres,
 * iconos personalizados y más.
 */
declare const CustomInput: React.ForwardRefExoticComponent<Omit<CustomInputProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default CustomInput;
