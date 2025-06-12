import React from 'react';
import { Typography } from '@mui/material';
import { CheckBoxSelectProps } from '@/interfaces/commonInterfaces';



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