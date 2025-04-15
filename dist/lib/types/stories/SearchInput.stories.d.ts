import type { StoryObj } from '@storybook/react';
import React from 'react';
declare const meta: {
    title: string;
    component: React.FC<import("../interfaces/commonInterfaces").SearchInputI>;
    parameters: {
        layout: string;
        docs: {
            description: {
                component: string;
            };
        };
    };
    tags: string[];
    argTypes: {
        onChange: {
            action: string;
        };
        onClickButton: {
            action: string;
        };
    };
    decorators: ((Story: import("@storybook/core/csf").PartialStoryFn<import("@storybook/react").ReactRenderer, {
        onChange?: ((value: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
        textFieldProps?: import("@mui/material").StandardTextFieldProps | undefined;
        onClickButton?: ((value: string) => void) | undefined;
        defaultValue?: string | undefined;
        placeholder?: string | undefined;
        className?: string | undefined;
    }>) => React.JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithDefaultValue: Story;
export declare const CustomPlaceholder: Story;
export declare const WithEvents: Story;
export declare const Focused: Story;
export declare const WithLongDefaultValue: Story;
export declare const CustomStyling: Story;
export declare const MobileVersion: Story;
