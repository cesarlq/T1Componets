import React from 'react';
export interface TableColumnT1<T = any> {
    id: string;
    label: string;
    numeric?: boolean;
    width?: string | number;
    sortable?: boolean;
    renderCell?: (row: T) => React.ReactNode;
    align?: 'left' | 'right' | 'center';
    cellClassName?: string;
    headerClassName?: string;
    hidden?: boolean;
}
export interface TableT1Props<T = any> {
    columns: TableColumnT1<T>[];
    data: T[];
    idKey?: string;
    loading?: boolean;
    error?: string;
    emptyMessage?: string;
    selectable?: boolean;
    sortable?: boolean;
    pageable?: boolean;
    searchable?: boolean;
    expandable?: boolean;
    onRowClick?: (row: T) => void;
    onRowExpand?: (row: T) => void;
    onSelectionChange?: (selectedRows: T[]) => void;
    pageSize?: number;
    pageSizeOptions?: number[];
    renderRowActions?: (row: T) => React.ReactNode;
    renderExpandedRow?: (row: T) => React.ReactNode;
    renderTableHeader?: () => React.ReactNode;
    containerSx?: any;
    tableSx?: any;
    headerRowSx?: any;
    bodyRowSx?: any;
    expansionPanelSx?: any;
    searchPlaceholder?: string;
    stickyHeader?: boolean;
    searchDelay?: number;
    onSearchChange?: (searchTerm: string) => void;
    defaultSortColumn?: string;
    defaultSortDirection?: 'asc' | 'desc';
}
declare const TableT1: <T extends Record<string, any>>({ columns, data, idKey, loading, error, emptyMessage, selectable, sortable, pageable, searchable, expandable, onRowClick, onRowExpand, onSelectionChange, pageSize, pageSizeOptions, renderRowActions, renderExpandedRow, renderTableHeader, containerSx, tableSx, headerRowSx, bodyRowSx, expansionPanelSx, searchPlaceholder, stickyHeader, searchDelay, onSearchChange, defaultSortColumn, defaultSortDirection }: TableT1Props<T>) => React.ReactElement;
export default TableT1;
