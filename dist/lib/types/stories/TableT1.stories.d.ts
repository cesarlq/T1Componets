import type { StoryObj } from '@storybook/react';
import React from 'react';
declare const meta: {
    title: string;
    component: <T extends Record<string, any>>({ columns, data, idKey, loading, error, emptyMessage, selectable, sortable, pageable, searchable, expandable, onRowClick, onRowExpand, onSelectionChange, serverSidePagination, totalCount, onPageChange, onSortChange, pageSize, pageSizeOptions, renderRowActions, renderExpandedRow, renderTableHeader, containerSx, tableSx, headerRowSx, bodyRowSx, expansionPanelSx, searchPlaceholder, stickyHeader, searchDelay, onSearchChange, defaultSortColumn, defaultSortDirection }: import("../interfaces/commonInterfaces").TableT1Props<T>) => React.ReactElement;
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
        onRowClick: {
            action: string;
        };
        onRowExpand: {
            action: string;
        };
        onSelectionChange: {
            action: string;
        };
        onSearchChange: {
            action: string;
        };
    };
    args: {
        columns: ({
            id: string;
            label: string;
            width: string;
            renderCell?: undefined;
        } | {
            id: string;
            label: string;
            width?: undefined;
            renderCell?: undefined;
        } | {
            id: string;
            label: string;
            renderCell: (row: any) => React.JSX.Element;
            width?: undefined;
        })[];
        data: {
            id: number;
            name: string;
            email: string;
            status: string;
            role: string;
            lastLogin: string;
        }[];
        loading: false;
        selectable: false;
        pageable: true;
        searchable: false;
        expandable: false;
        stickyHeader: true;
        idKey: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const WithSearch: Story;
export declare const WithSelection: Story;
export declare const WithRowActions: Story;
export declare const WithExpandableRows: Story;
export declare const ComprehensiveTable: Story;
export declare const LoadingState: Story;
export declare const EmptyState: Story;
export declare const ErrorState: Story;
export declare const CustomStyling: Story;
