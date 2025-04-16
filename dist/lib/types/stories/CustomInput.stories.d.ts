import type { StoryObj } from '@storybook/react';
import React from 'react';
declare const meta: {
    title: string;
    component: React.FC<import("../interfaces/commonInterfaces").CustomInputI>;
    parameters: {
        layout: string;
        docs: {
            description: {
                component: string;
            };
        };
    };
    tags: string[];
    decorators: ((Story: import("@storybook/core/csf").PartialStoryFn<import("@storybook/react").ReactRenderer, {
        label?: React.ReactNode;
        required?: boolean | undefined;
        className?: string | undefined;
        textFieldProps: import("@mui/material").TextFieldProps;
        children?: React.ReactNode;
        style?: React.CSSProperties | undefined;
        button?: boolean | undefined;
        buttonText?: string | undefined;
        buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement> | undefined;
        startIconButton?: React.ReactNode;
        endIconButton?: React.ReactNode;
        tooltip?: string | undefined;
    }>) => React.JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const Required: Story;
export declare const WithTooltip: Story;
export declare const WithHelperText: Story;
export declare const WithError: Story;
export declare const Disabled: Story;
export declare const FilledVariant: Story;
export declare const SelectField: Story;
export declare const Multiline: Story;
export declare const CustomStyle: Story;
