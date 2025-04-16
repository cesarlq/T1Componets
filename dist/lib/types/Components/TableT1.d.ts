import React from 'react';
import { TableT1Props } from '../interfaces/commonInterfaces';
declare const TableT1: <T extends Record<string, any>>({ columns, data, idKey, loading, error, emptyMessage, selectable, sortable, pageable, searchable, expandable, onRowClick, onRowExpand, onSelectionChange, serverSidePagination, totalCount, onPageChange, onSortChange, pageSize, pageSizeOptions, renderRowActions, renderExpandedRow, renderTableHeader, containerSx, tableSx, headerRowSx, bodyRowSx, expansionPanelSx, searchPlaceholder, stickyHeader, searchDelay, onSearchChange, defaultSortColumn, defaultSortDirection }: TableT1Props<T>) => React.ReactElement;
export default TableT1;
