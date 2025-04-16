import React from 'react';
import { TypographyProps } from '@mui/material';
interface CheckBoxSelectProps extends Omit<TypographyProps, 'checkbox' | 'icon' | 'onCheckboxClick'> {
    checkbox?: boolean;
    icon?: string | React.ReactNode;
    onCheckboxClick?: () => void;
    children?: React.ReactNode;
}
declare const CheckBoxSelect: React.FC<CheckBoxSelectProps>;
export default CheckBoxSelect;
