import { Meta, StoryObj } from '@storybook/react';
import Sidebar from '../Components/SideBar';
/**
 * `SideBar` is a navigational component for applications that provides a vertical menu
 * with expandable sections and service switching functionality.
 *
 * The sidebar can be displayed in expanded or reduced states, and responsively adjusts
 * based on screen width. It supports hierarchical navigation with collapsible submenu items.
 *
 * ## Features
 * - Expandable/collapsible navigation menu
 * - Service switching capability
 * - Responsive design with breakpoint control
 * - Submenu support for nested navigation
 * - Customizable styling
 * - Controlled or uncontrolled expand/collapse state
 * - Hidden items support for conditional navigation
 *
 * The sidebar is commonly used as the main navigation element in dashboard-style applications
 * and admin interfaces.
 *
 * @component
 */
declare const meta: Meta<typeof Sidebar>;
export default meta;
type Story = StoryObj<typeof Sidebar>;
/**
 * Default expanded view of the sidebar with all standard features enabled.
 *
 * This example shows the sidebar in its expanded state with the full menu text visible.
 * It includes service options at the top and a complete menu structure with both direct
 * navigation items and expandable sections with subitems.
 */
export declare const Default: Story;
/**
 * Collapsed version of the sidebar showing only icons.
 *
 * In the reduced state, the sidebar displays only icons to save space while
 * still providing navigation functionality. This is useful for maximizing
 * content area space while keeping navigation accessible.
 */
export declare const Reduced: Story;
/**
 * Sidebar with conditionally hidden menu items.
 *
 * This example demonstrates how certain menu items can be hidden based on
 * user permissions or application state. The hidden items do not appear in
 * the navigation at all.
 */
export declare const WithHiddenItems: Story;
/**
 * Dark themed version of the sidebar.
 *
 * This example shows how to customize the sidebar's appearance with a dark theme
 * using the customStyles prop. This is useful for applications with dark mode
 * or for creating visual distinction between different sections.
 */
export declare const DarkTheme: Story;
/**
 * Sidebar displaying menu items with very long titles.
 *
 * This example tests how the sidebar handles menu items with exceptionally long
 * titles, demonstrating text truncation and overflow handling.
 */
export declare const LongMenuNames: Story;
/**
 * Sidebar without service switching functionality.
 *
 * This example shows the sidebar without the service options section,
 * useful for applications that don't require service switching.
 */
export declare const NoServiceOptions: Story;
/**
 * Sidebar with extensive visual customization.
 *
 * This example demonstrates the flexibility of the sidebar's styling system,
 * with custom colors, borders, shadows, and spacing applied to different sections.
 */
export declare const CustomStyles: Story;
