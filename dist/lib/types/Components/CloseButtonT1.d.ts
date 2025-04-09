import React from 'react';
interface CloseButtonT1Props {
    onClick?: () => void;
    size?: 'small' | 'medium' | 'large';
    color?: 'default' | 'primary' | 'secondary' | 'error';
    variant?: 'text' | 'outlined' | 'contained';
    disabled?: boolean;
    className?: string;
    ariaLabel?: string;
}
declare const CloseButtonT1: React.FC<CloseButtonT1Props>;
export default CloseButtonT1;
