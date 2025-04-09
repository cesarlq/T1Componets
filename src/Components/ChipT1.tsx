import React from 'react';
import { Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ExtendedChipProps } from '../interfaces/commonInterfaces';


const StyledChip = styled(Chip, {
    shouldForwardProp: (prop) => prop !== 'color'
})<{ color?: string }>(({ color, variant }) => {
    switch (color) {
        case 'primary':
            return {
                backgroundColor: variant === 'filled' ? '#eaf3ff' : 'transparent',
                color: '#4f89fd',
                borderColor: variant === 'filled' ? '#eaf3ff' : '#4f89fd'
            };

        case 'error':
            return {
                backgroundColor: variant === 'filled' ? '#ffeeef' : 'transparent',
                color: '#f54f62',
                borderColor: variant === 'filled' ? '#ffeeef' : '#f54f62',
            };

        case 'default':
            return {
                backgroundColor: variant === 'filled' ? '#ffefe6' : 'transparent',
                color: '#f56e02',
                borderColor: variant === 'filled' ? '#ffefe6' : '#f56e02',
            };
        case 'success':
            return {
                backgroundColor: variant === 'filled' ? '#52F5B01A' : 'transparent',
                color: '#4FC153',
                borderColor: variant === 'filled' ? '#52F5B01A' : '#4FC153',
            };
        case 'warning':
            return {
                backgroundColor: variant === 'filled' ? '#EDBD551A' : 'transparent',
                color: '#976905',
                borderColor: variant === 'filled' ? '#976905' : '#EDBD551A',
            };
        
        default:
            return {};
    }
});

const ChipT1: React.FC<ExtendedChipProps> = ({
    ...props
}) => {
    return (
        <StyledChip
            sx={{
                fontSize: '11px',
                padding: '4px 10px 4px 10px',
                fontWeight: 700,
                letterSpacing: '0px',
                lineHeight: '100%',
                ...props.sx,
            }}
            {...props}
        />
    );
};

export default ChipT1;