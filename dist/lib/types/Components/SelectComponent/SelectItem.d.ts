import React from 'react';
import { TypographyProps } from '@mui/material';
interface ExtendedTypographyProps extends TypographyProps {
    value?: boolean | string | number;
    label?: string;
    icon?: string;
    cheked?: string | boolean;
    onClick?: (e: any) => void;
}
declare const SelectItem: React.FC<ExtendedTypographyProps>;
export default SelectItem;
