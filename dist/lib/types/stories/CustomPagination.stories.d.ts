import { Meta, StoryObj } from '@storybook/react';
import CustomPagination from '../Components/CustomPagination';
/**
 * `CustomPagination` is a responsive pagination component for tables and data grids
 * that offers advanced navigation options.
 *
 * This component provides a complete pagination solution with page number selection,
 * rows per page configuration, and direct page navigation. It's designed to work well
 * across different screen sizes with responsive layout adjustments.
 *
 * ## Features
 * - Previous/Next page navigation
 * - Numbered page buttons with ellipsis for large ranges
 * - Rows per page selector
 * - Direct page input for quick navigation
 * - Responsive design adapting to various screen sizes
 * - Record count display
 *
 * @component
 */
declare const meta: Meta<typeof CustomPagination>;
export default meta;
type Story = StoryObj<typeof CustomPagination>;
/**
 * Interactive pagination component with full functionality.
 * This example demonstrates a controlled pagination component with state management.
 */
export declare const Interactive: Story;
/**
 * Default pagination with standard configuration.
 */
export declare const Default: Story;
/**
 * Pagination with a small number of items, showing fewer page buttons.
 */
export declare const FewItems: Story;
/**
 * Pagination with a large number of items, showing ellipsis for page ranges.
 */
export declare const ManyItems: Story;
/**
 * Pagination showing the middle of a large set, with ellipsis on both sides.
 */
export declare const MiddlePage: Story;
/**
 * Pagination showing the last page of a set.
 */
export declare const LastPage: Story;
/**
 * Custom rows per page options.
 */
export declare const CustomRowsPerPageOptions: Story;
/**
 * Mobile view simulation.
 * This story demonstrates how the pagination looks on small screens.
 */
export declare const MobileView: Story;
