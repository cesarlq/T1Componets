import type { StoryObj } from '@storybook/react';
import React from 'react';
declare const meta: {
    title: string;
    component: React.FC<import("../interfaces/commonInterfaces").actionMenuI>;
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
        onClick: {
            action: string;
        };
        onClose: {
            action: string;
        };
    };
    decorators: ((Story: import("@storybook/core/csf").PartialStoryFn<import("@storybook/react").ReactRenderer, {
        children?: React.ReactNode;
        onClick?: ((event: React.MouseEvent) => void) | undefined;
        onClose?: ((event: React.SyntheticEvent) => void) | undefined;
    }>) => React.JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const WithMaterialMenuItems: Story;
export declare const WithIcons: Story;
export declare const WithMaterialIcons: Story;
export declare const ComplexMenu: Story;
export declare const MobileOptimized: Story;
export declare const CustomStyled: Story;
