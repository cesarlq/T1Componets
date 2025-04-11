import { StandardTextFieldProps } from '@mui/material';
import * as React from 'react';
import { FieldValues, UseControllerProps } from 'react-hook-form';
interface NumericFormatProps {
    onChange: (event: {
        target: {
            name?: string;
            value?: number;
        };
    }) => void;
    name?: string;
    currency?: string;
    min?: number;
}
export declare const CurrencyNumericFormat: React.ForwardRefExoticComponent<NumericFormatProps & React.RefAttributes<unknown>>;
export interface AmountInput<T extends FieldValues> extends UseControllerProps<T> {
    textFieldProps?: StandardTextFieldProps;
    currency?: string;
    label?: string;
    onChange?: any;
    tooltip?: string;
}
declare const AmountInput: <T extends FieldValues>({ textFieldProps, currency, label, onChange, tooltip, ...other }: AmountInput<T>) => React.JSX.Element;
export default AmountInput;
