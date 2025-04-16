import { Meta, StoryObj } from '@storybook/react';
import SelectComponent from '../Components/SelectComponent/SelectComponent';
/**
 * `SelectComponent` is a flexible dropdown component for displaying selectable options.
 *
 * It combines the functionality of a dropdown menu with the visual appearance of a button.
 * The component supports various configurations including different button styles, icons,
 * and specialized selection items like checkboxes.
 *
 * ## Features
 * - Multiple button types (contained, outlined, text)
 * - Support for various Material UI colors
 * - Icons at start, end, or as additional elements
 * - Support for checkbox selections
 * - Customizable menu items
 * - Accessibility built-in
 *
 * ## Components
 * The select system consists of multiple components:
 * - `SelectComponent`: The main container component
 * - `SelectItem`: Standard selectable item with icon support
 * - `CheckBoxSelect`: Item with checkbox for multi-select functionality
 * - `FormControlSelect`: Container for select items
 *
 * @component
 */
declare const meta: Meta<typeof SelectComponent>;
export default meta;
type Story = StoryObj<typeof SelectComponent>;
/**
 * This example shows how to use the `CheckBoxSelect` component within the dropdown.
 *
 * The CheckBoxSelect component allows for multi-select functionality where users
 * can toggle options on and off via checkboxes. This is useful for filter menus
 * or settings panels where multiple options can be selected simultaneously.
 */
export declare const WithCheckboxSelect: Story;
/**
 * This example shows how to use custom `SelectItem` components with icons.
 *
 * SelectItem components provide a standardized way to display selectable options
 * with optional icons. They are wrapped in a FormControlSelect to maintain proper
 * structure and accessibility.
 */
export declare const WithSelectItemsAndIcons: Story;
/**
 * This example demonstrates a complex use case combining different item types
 * and additional items at the bottom of the menu.
 *
 * The `additionalItems` prop allows adding extra items such as actions, dividers,
 * or any custom menu items at the bottom of the dropdown menu.
 */
export declare const ComplexSelectWithMixedComponents: Story;
/**
 * This example shows how to create accessible select components with built-in
 * accessibility attributes and testing identifiers.
 *
 * Setting appropriate aria labels and test IDs ensures the component is both
 * accessible to screen readers and easily testable in automated tests.
 */
export declare const AccessibleCustomSelect: Story;
/**
 * This example showcases different button types and color variants available for
 * the SelectComponent.
 *
 * The component supports all Material UI button types (contained, outlined, text)
 * and color variants (primary, secondary, error, info, success, warning, inherit).
 */
export declare const ButtonVariantsWithIcons: Story;
