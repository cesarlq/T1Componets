import * as React from 'react';
import { FieldValues } from 'react-hook-form';
import { NumericFormatProps, AmountInputI } from '../interfaces/commonInterfaces';
export declare const CurrencyNumericFormat: React.ForwardRefExoticComponent<NumericFormatProps & React.RefAttributes<unknown>>;
declare const AmountInput: <T extends FieldValues>({ textFieldProps, currency, label, onChange, tooltip, ...other }: AmountInputI<T>) => React.JSX.Element;
export default AmountInput;
