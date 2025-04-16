import { Meta, StoryObj } from '@storybook/react';
import ChipT1 from '../Components/ChipT1';
/**
 * `ChipT1` is a customizable chip component based on Material UI's Chip.
 *
 * It can be used to display compact elements like tags, filters, or status indicators.
 * The component supports different colors, sizes, and styles to match your design needs.
 *
 * ## Features
 * - Multiple color variations (primary, error, success, warning, default)
 * - Two variants (filled, outlined)
 * - Two sizes (small, medium)
 * - Support for custom colors
 * - Interactive states (hover effects, clickable, deletable)
 *
 * ## Accessibility
 * The component includes proper ARIA attributes for better screen reader support.
 *
 * @component
 */
declare const meta: Meta<typeof ChipT1>;
export default meta;
type Story = StoryObj<typeof ChipT1>;
/**
 * Different color variations of the ChipT1 component in both filled and outlined variants.
 *
 * This example demonstrates all the available color options:
 * - primary: Used for main actions or primary tags
 * - error: Used for error states or destructive tags
 * - success: Used for success states or confirmations
 * - warning: Used for warnings or attention-required states
 * - default: Used for neutral or less emphasized tags
 */
export declare const ColorVariations: Story;
/**
 * The ChipT1 component comes in two sizes: small and medium.
 *
 * - small: Compact size, useful when space is limited or for dense UIs
 * - medium: Standard size, provides better visibility and touch target
 */
export declare const SizeVariations: Story;
/**
 * The ChipT1 component supports custom styling options:
 *
 * - Hover effects can make chips more interactive
 * - Custom colors allow for brand-specific styling
 */
export declare const CustomStyledChips: Story;
/**
 * ChipT1 can display different types of content and interactions:
 *
 * - Various text lengths
 * - Deletable chips (with delete icon)
 * - Clickable chips (for actions or toggling)
 */
export declare const ContentVariations: Story;
/**
 * Example of an interactive chip that changes appearance based on state.
 *
 * This demonstrates how ChipT1 can be used for toggling or selection behaviors.
 */
export declare const InteractiveChips: Story;
/**
 * This example demonstrates accessibility features of the ChipT1 component.
 *
 * The chip includes appropriate ARIA attributes for better screen reader support.
 */
export declare const AccessibilityDemo: Story;
