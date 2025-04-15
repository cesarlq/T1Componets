import { CheckboxProps, ButtonProps, TextFieldProps, StandardTextFieldProps, Theme, SxProps } from "@mui/material";
import { ReactNode } from "react";
export interface SelectComponentPropsI {
    onClick?: () => void;
    buttonType?: 'solid' | 'outline' | 'text';
    label?: string;
    endIcon?: React.ReactNode | null;
    startIcon?: React.ReactNode | null;
    menuProps?: menuPropsI;
    ratioOptions?: RatioOptionI;
    additionalItems?: AdditionalItemI[];
    showDividerBeforeAdditional?: boolean;
    children: React.ReactNode;
    childrenProps?: ChildrenProps | ChildrenProps[];
    options?: MenuOptionI[];
    className?: string;
    additionalIcon?: React.ReactNode;
    onAdditionalIconClick?: () => void;
}
export interface SearchInputI {
    onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
    textFieldProps?: StandardTextFieldProps;
    onClickButton?: (value: string) => void;
    defaultValue?: string;
    placeholder?: string;
    className?: string;
}
export interface PBIconProps {
    icon: string;
    width?: number;
    height?: number;
    sx?: any;
    className?: string;
}
export interface CustomInputI {
    label?: string | React.ReactNode;
    required?: boolean;
    className?: string;
    textFieldProps: TextFieldProps;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    button?: boolean;
    buttonText?: string;
    buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    startIconButton?: ReactNode;
    endIconButton?: ReactNode;
    tooltip?: string;
}
export interface ButtonT1PropsI {
    children?: React.ReactNode;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    additionalIcon?: React.ReactNode;
    variant?: 'text' | 'outlined' | 'contained';
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    confirmationMessage?: string;
    confirmationCancelText?: string;
    confirmationConfirmText?: string;
    confirmationTitle?: string;
    tooltipText?: string;
    tooltipPlacement?: 'top' | 'bottom' | 'left' | 'right';
    responsive?: boolean;
    sx?: SxProps<Theme>;
    color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'success' | 'info' | 'warning';
    size?: 'small' | 'medium' | 'large';
    disableElevation?: boolean;
    fullWidth?: boolean;
    preventDoubleClick?: boolean;
}
export interface ChildrenProps {
    checkbox?: boolean;
    icon?: string;
    label?: string;
    onCheckboxClick?: () => void;
}
export interface CheckboxOptionI {
    checked: any;
}
export interface ButtonT1PropsI extends ButtonProps {
    additionalIcon?: React.ReactNode;
    loading?: boolean;
    tooltipText?: string;
    confirmationMessage?: string;
    responsive?: boolean;
}
export interface actionMenuI {
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent) => void;
    onClose?: (event: React.SyntheticEvent) => void;
}
export interface InputComponentT1I {
    size?: 'small' | 'medium';
    sx?: object;
    onclick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    value?: string | number;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    InputProps?: object;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
}
export interface ExtendedCheckBoxProps extends CheckboxProps {
    renderIcon?: (props: CheckboxProps) => React.ReactNode;
    children?: React.ReactNode;
}
export interface ExtendedChipProps {
    variant?: 'filled' | 'outlined';
    size?: 'small' | 'medium';
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    onDelete?: (event: React.MouseEvent<HTMLDivElement>) => void;
    icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    label?: React.ReactNode;
    deleteIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
    color?: "default" | "primary" | "secondary" | "error" | "warning" | "info" | "success" | undefined;
    sx?: object;
    className?: string;
}
export interface AdditionalItemI {
    id: string;
    label: string;
    onClick: () => void;
    type?: 'divider' | 'action';
    className?: string;
}
export interface MenuOptionI {
    id?: string;
    label?: string;
    icon?: string;
    menuItemsProps?: MenuItemPropsI;
    onClick?: () => void;
    href?: string;
    FormControlProps?: FormControlPropsI;
    checkboxOptions?: CheckboxOptionI;
    iconSrc?: string;
}
export interface RatioOptionI {
    value: boolean | string;
}
export interface ButtonI {
    onClick?: () => void;
}
export interface menuPropsI {
    onCLick?: (event: any) => void;
    onClose?: (event: any) => void;
    anchorOrigin?: {
        vertical?: "top" | "bottom" | "center";
        horizontal?: "left" | "right" | "center";
    };
    sx?: any;
}
export interface MenuItemPropsI {
    onClick?: () => void;
}
export interface FormControlPropsI {
    value?: boolean | string;
    label: string | boolean;
}
