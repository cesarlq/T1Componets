import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { InputComponentT1I } from '../interfaces/commonInterfaces';

const InputComponentT1: React.FC<InputComponentT1I> = ({
    required,
    minLength,
    maxLength,
    pattern,
    ...props
}) => {
    const [error, setError] = useState<string | null>(null);

    const validateInput = (value: string) => {
        if (required && !value) {
            setError('This field is required');
            return false;
        }

        if (minLength && value.length < minLength) {
            setError(`Minimum length is ${minLength}`);
            return false;
        }

        if (maxLength && value.length > maxLength) {
            setError(`Maximum length is ${maxLength}`);
            return false;
        }

        if (pattern && !new RegExp(pattern).test(value)) {
            setError('Invalid format');
            return false;
        }

        setError(null);
        return true;
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        validateInput(event.target.value);
        props.onChange?.(event);
    };

    return (
        <TextField
            {...props}
            error={!!error}
            helperText={error}
            onChange={handleChange}
        />
    );
};
export default InputComponentT1;