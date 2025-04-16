import type { StoryObj } from '@storybook/react';
import React from 'react';
declare const meta: {
    title: string;
    component: React.FC<import("../interfaces/commonInterfaces").CollapsibleCardT1Props>;
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
        title: {
            control: "text";
            description: string;
        };
        defaultCollapsed: {
            control: "boolean";
            description: string;
        };
        hideCollapseButton: {
            control: "boolean";
            description: string;
        };
        loading: {
            control: "boolean";
            description: string;
        };
    };
    args: {
        title: string;
        defaultCollapsed: false;
        hideCollapseButton: false;
        loading: false;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const WithCollapsibleContent: Story;
export declare const CustomStyling: Story;
export declare const Loading: Story;
export declare const DefaultCollapsed: Story;
