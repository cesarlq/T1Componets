
import { Checkbox } from '@mui/material';
import React from 'react';
import { ExtendedCheckBoxProps } from '../interfaces/commonInterfaces';


const CheckBoxT1: React.FC<ExtendedCheckBoxProps> = ({
    children,
    renderIcon,
    ...props
}) => {
    const customIcon = renderIcon ? renderIcon(props) : undefined;

    if (children) {
        return (
            <div>
                <Checkbox
                    {...props}
                    icon={customIcon || undefined}
                    checkedIcon={customIcon || undefined}
                />
                {children}
            </div>
        );
    }

    return (
        <Checkbox
            {...props}
            icon={customIcon || undefined}
            checkedIcon={customIcon || undefined}
        />
    );
};

export default CheckBoxT1;