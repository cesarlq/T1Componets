import React from 'react';
import { TypographyProps } from '@mui/material';
interface ExtendedTypographyProps extends TypographyProps {
    value?: boolean | string;
    label?: string;
    icon?: string;
    cheked?: string | boolean;
    onClick?: () => void;
}
declare const SelectItem: React.FC<ExtendedTypographyProps>;
export default SelectItem;
