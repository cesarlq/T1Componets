import React from 'react';
interface FormControlSelectItemProps {
    value?: any;
    onClick?: (e: any) => void;
    label?: string;
    children?: React.ReactNode;
    [key: string]: any;
}
declare const FormControlSelect: React.FC<FormControlSelectItemProps>;
export default FormControlSelect;
