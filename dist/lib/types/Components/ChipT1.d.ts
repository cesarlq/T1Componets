import React from 'react';
import { ChipProps } from '@mui/material';
interface ChipColorDefinition {
    backgroundColor: {
        filled: string;
        outlined: string;
    };
    color: {
        filled: string;
        outlined: string;
    };
    borderColor: {
        filled: string;
        outlined: string;
    };
}
interface ExtendedChipProps extends ChipProps {
    customColorDefinition?: Partial<ChipColorDefinition>;
    hoverEffect?: boolean;
}
declare const ChipT1: React.FC<ExtendedChipProps>;
export default ChipT1;
