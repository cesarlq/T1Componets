import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

interface CheckBoxSelectProps extends Omit<TypographyProps, 'checkbox' | 'icon' | 'onCheckboxClick'> {
  checkbox?: boolean;
  icon?: string;
  onCheckboxClick?: () => void;
  children?: React.ReactNode;
}

const CheckBoxSelect: React.FC<CheckBoxSelectProps> = ({
  checkbox,
  icon,
  onCheckboxClick,
  children,
  ...typographyProps 
}) => {
  return <Typography {...typographyProps}>{children}</Typography>;
};
export default CheckBoxSelect;