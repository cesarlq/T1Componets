import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

interface ExtendedTypographyProps extends TypographyProps {
    value?: boolean | string | number;
    label?: string;
    icon?: string | React.ReactNode;
    cheked?: string | boolean;
    onClick?: (e:any) => void;
}

const SelectItem: React.FC<ExtendedTypographyProps> = ({ 
  ...typographyProps
}) => {
  // This component now only renders Typography
  // The actual click handling is done in the parent FormControlSelect
  return <Typography {...typographyProps}>{typographyProps.label}</Typography>;
};

export default SelectItem; 