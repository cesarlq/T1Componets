import type { StoryObj } from '@storybook/react';
import React from 'react';
declare const meta: {
    title: string;
    component: React.FC<import("../interfaces/commonInterfaces").SelectComponentPropsI>;
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
        label: {
            control: "text";
            description: string;
        };
        buttonType: {
            control: "select";
            options: (string | undefined)[];
            description: string;
        };
        className: {
            control: "text";
            description: string;
        };
        menuProps: {
            control: "object";
            description: string;
        };
    };
    decorators: ((Story: import("@storybook/core/csf").PartialStoryFn<import("@storybook/react").ReactRenderer, {
        onClick?: (() => void) | undefined;
        buttonType?: "solid" | "outline" | "text" | undefined;
        label?: string | undefined;
        endIcon?: React.ReactNode;
        startIcon?: React.ReactNode;
        menuProps?: import("../interfaces/commonInterfaces").menuPropsI | undefined;
        ratioOptions?: import("../interfaces/commonInterfaces").RatioOptionI | undefined;
        additionalItems?: import("../interfaces/commonInterfaces").AdditionalItemI[] | undefined;
        showDividerBeforeAdditional?: boolean | undefined;
        children: React.ReactNode;
        childrenProps?: (import("../interfaces/commonInterfaces").ChildrenProps | import("../interfaces/commonInterfaces").ChildrenProps[]) | undefined;
        options?: import("../interfaces/commonInterfaces").MenuOptionI[] | undefined;
        className?: string | undefined;
        additionalIcon?: React.ReactNode;
        onAdditionalIconClick?: (() => void) | undefined;
    }>) => React.JSX.Element)[];
    args: {
        label: string;
        onClick: import("@vitest/spy").Mock<(...args: any[]) => any>;
        children: React.FunctionComponentElement<import("@mui/material/OverridableComponent").DefaultComponentProps<import("@mui/material").ExtendButtonBaseTypeMap<import("@mui/material/MenuItem").MenuItemTypeMap<{}, "li">>>>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const OutlineStyle: Story;
export declare const WithAdditionalItems: Story;
export declare const CustomClass: Story;
export declare const CustomMenuProps: Story;
