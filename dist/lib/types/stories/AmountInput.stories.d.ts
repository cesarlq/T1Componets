import type { StoryObj } from '@storybook/react';
import React from 'react';
declare const meta: {
    title: string;
    component: (props: any) => React.JSX.Element;
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
        [x: string]: any;
    }>) => React.JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithCurrency: Story;
export declare const NoCurrencySymbol: Story;
export declare const WithTooltip: Story;
export declare const WithMinimumValue: Story;
export declare const CustomStyling: Story;
export declare const Disabled: Story;
export declare const WithError: Story;
export declare const FilledVariant: Story;
