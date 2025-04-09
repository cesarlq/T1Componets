import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<import("../interfaces/commonInterfaces").ButtonT1PropsI>;
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
        variant: {
            control: "select";
            options: string[];
            description: string;
        };
        color: {
            control: "select";
            options: string[];
            description: string;
        };
        size: {
            control: "select";
            options: string[];
            description: string;
        };
        disabled: {
            control: "boolean";
            description: string;
        };
        loading: {
            control: "boolean";
            description: string;
        };
        responsive: {
            control: "boolean";
            description: string;
        };
        tooltipText: {
            control: "text";
            description: string;
        };
        confirmationMessage: {
            control: "text";
            description: string;
        };
    };
    args: {
        onClick: import("@vitest/spy").Mock<(...args: any[]) => any>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Loading: Story;
export declare const WithTooltip: Story;
export declare const WithConfirmation: Story;
export declare const Outlined: Story;
export declare const Text: Story;
export declare const Responsive: Story;
export declare const CustomStyle: Story;
