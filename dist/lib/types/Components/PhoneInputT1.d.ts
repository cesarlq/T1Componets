import React from 'react';
interface Country {
    code: string;
    name: string;
    prefix: string;
}
interface PhoneInputT1Props {
    initialRegion?: string;
    initialPhoneNumber?: string;
    countries?: Country[];
    onChange?: (region: string, phoneNumber: string) => void;
    placeholder?: string;
    error?: boolean;
    helperText?: string;
}
declare const PhoneInputT1: React.FC<PhoneInputT1Props>;
export default PhoneInputT1;
