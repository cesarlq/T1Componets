import React from "react";
import { ButtonProps, SxProps, Theme } from "@mui/material";
interface AdditionalItemI {
    id: string;
    type?: 'item' | 'divider';
    label?: string;
    className?: string;
    onClick?: () => void;
}
interface SelectComponentPropsI {
    menuProps?: {
        sx?: SxProps<Theme>;
        anchorOrigin?: {
            vertical?: 'top' | 'bottom' | 'center';
            horizontal?: 'left' | 'right' | 'center';
        };
        onClose?: (event: React.SyntheticEvent) => void;
        onClick?: (event: React.MouseEvent) => void;
    };
    disableElevation?: boolean;
    sx?: SxProps<Theme>;
    additionalItems?: AdditionalItemI[];
    children?: React.ReactNode;
    label: string;
    endIcon?: React.ReactNode;
    startIcon?: React.ReactNode;
    additionalIcon?: React.ReactNode;
    buttonType?: 'text' | 'outlined' | 'contained';
    className?: string;
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    ariaLabel?: string;
    testId?: string;
    buttonProps?: ButtonProps;
}
declare const _default: React.NamedExoticComponent<SelectComponentPropsI>;
export default _default;
