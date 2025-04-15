import React, { useState, useEffect } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TablePagination,
  Paper,
  Checkbox,
  IconButton,
  Typography,
  CircularProgress,
  TextField,
  InputAdornment,
  Tooltip,
  Chip
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { visuallyHidden } from '@mui/utils';
import CustomPagination from './CustomPagination';
import SearchInput from './SearchInput';

// Types for table props
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
  // Core data
  columns: TableColumnT1<T>[];
  data: T[];
  
  // Key configuration
  idKey?: string;
  
  // State options
  loading?: boolean;
  error?: string;
  emptyMessage?: string;
  
  // Features flags
  selectable?: boolean;
  sortable?: boolean;
  pageable?: boolean;
  searchable?: boolean;
  expandable?: boolean;
  
  // Callbacks
  onRowClick?: (row: T) => void;
  onRowExpand?: (row: T) => void;
  onSelectionChange?: (selectedRows: T[]) => void;
  
  // Pagination options
  pageSize?: number;
  pageSizeOptions?: number[];
  
  // Custom renderers
  renderRowActions?: (row: T) => React.ReactNode;
  renderExpandedRow?: (row: T) => React.ReactNode;
  renderTableHeader?: () => React.ReactNode;
  
  // Styling
  containerSx?: any;
  tableSx?: any;
  headerRowSx?: any;
  bodyRowSx?: any;
  expansionPanelSx?: any;
  
  // Additional options
  searchPlaceholder?: string;
  stickyHeader?: boolean;
  searchDelay?: number;
  onSearchChange?: (searchTerm: string) => void;
  defaultSortColumn?: string;
  defaultSortDirection?: 'asc' | 'desc';
}

type Order = 'asc' | 'desc';

const TableT1 = <T extends Record<string, any>>({
  // Core data
  columns,
  data,
  
  // Key configuration
  idKey = 'id',
  
  // State options
  loading = false,
  error = '',
  emptyMessage = 'No data available',
  
  // Features flags
  selectable = false,
  sortable = true,
  pageable = true,
  searchable = false,
  expandable = false,
  
  // Callbacks
  onRowClick,
  onRowExpand,
  onSelectionChange,
  
  // Pagination options
  pageSize = 10,
  pageSizeOptions = [5, 10, 25, 50],
  
  // Custom renderers
  renderRowActions,
  renderExpandedRow,
  renderTableHeader,
  
  // Styling
  containerSx = {},
  tableSx = {},
  headerRowSx = {},
  bodyRowSx = {},
  expansionPanelSx = {},
  
  // Additional options
  searchPlaceholder = 'Search...',
  stickyHeader = true,
  searchDelay = 300,
  onSearchChange,
  defaultSortColumn = '',
  defaultSortDirection = 'asc'
}: TableT1Props<T>): React.ReactElement => {
  // State
  const [order, setOrder] = useState<Order>(defaultSortDirection);
  const [orderBy, setOrderBy] = useState<string>(defaultSortColumn);
  const [selected, setSelected] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(pageSize);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [filteredData, setFilteredData] = useState<T[]>(data);
  const [searchInputValue, setSearchInputValue] = useState('');

  // Update filtered data when data changes or search term changes
  useEffect(() => {
    if (!searchTerm) {
      setFilteredData(data);
      return;
    }

    const searchTermLower = searchTerm.toLowerCase();
    const filtered = data.filter(row => {
      return Object.entries(row).some(([key, value]) => {
        // Only search through string or number values
        if (typeof value === 'string' || typeof value === 'number') {
          return String(value).toLowerCase().includes(searchTermLower);
        }
        return false;
      });
    });

    setFilteredData(filtered);
  }, [data, searchTerm]);

  // Handle search input with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(searchInputValue);
      if (onSearchChange) {
        onSearchChange(searchInputValue);
      }
    }, searchDelay);

    return () => clearTimeout(timer);
  }, [searchInputValue, searchDelay, onSearchChange]);

  // Reset pagination when data changes
  useEffect(() => {
    setPage(1);
  }, [filteredData]);

  // Update selected rows callback
  useEffect(() => {
    if (onSelectionChange) {
      const selectedRows = filteredData.filter(row => 
        selected.includes(String(row[idKey]))
      );
      onSelectionChange(selectedRows);
    }
  }, [selected, filteredData, idKey, onSelectionChange]);

  // Handle sort request
  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // Sort function
  const getSorting = (order: Order, orderBy: string) => {
    return order === 'desc'
      ? (a: T, b: T) => descendingComparator(a, b, orderBy)
      : (a: T, b: T) => -descendingComparator(a, b, orderBy);
  };

  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  // Handle select all click
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = filteredData.map(n => String(n[idKey]));
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  // Handle row selection
  const handleRowSelect = (id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  // Handle page change
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Handle row expansion
  const handleRowExpand = (id: string, row: T) => {
    setExpandedRow(expandedRow === id ? null : id);
    if (onRowExpand) {
      onRowExpand(row);
    }
  };

  // Handle row click
  const handleRowClick = (row: T) => {
    if (onRowClick) {
      onRowClick(row);
    }
  };

  // Check if row is selected
  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  // Render empty state
  const renderEmptyState = () => (
    <TableRow>
      <TableCell 
        colSpan={columns.length + (selectable ? 1 : 0) + (renderRowActions ? 1 : 0) + (expandable ? 1 : 0)}
        align="center"
        sx={{ py: 5 }}
      >
        <Typography variant="body1" color="text.secondary">
          {error ? error : emptyMessage}
        </Typography>
      </TableCell>
    </TableRow>
  );

  // Render loading state
  const renderLoadingState = () => (
    <TableRow>
      <TableCell 
        colSpan={columns.length + (selectable ? 1 : 0) + (renderRowActions ? 1 : 0) + (expandable ? 1 : 0)}
        align="center"
        sx={{ py: 5 }}
      >
        <CircularProgress size={32} />
      </TableCell>
    </TableRow>
  );

  // Apply sorting and pagination
  const visibleRows = React.useMemo(() => {
    if (orderBy && sortable) {
      return [...filteredData].sort(getSorting(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      );
    } else {
      return filteredData.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      );
    }
  }, [filteredData, order, orderBy, page, rowsPerPage, sortable]);

  // Get visible columns (non-hidden)
  const visibleColumns = columns.filter(column => !column.hidden);

  return (
    <Box sx={{ width: '100%', ...containerSx }}>
      {/* Table header area */}
      {(searchable || renderTableHeader) && (
        <Box sx={{ 
          mb: 2, 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2
        }}>
          {renderTableHeader ? (
            renderTableHeader()
          ) : (
            <Box />
          )}
          
          {searchable && (
            <SearchInput 
              textFieldProps={{ sx: { width: '30rem' } }}
            />
          )}
        </Box>
      )}

      {/* Main table */}
      <TableContainer 
        component={Paper} 
        sx={{ 
          maxHeight: stickyHeader ? 600 : undefined,
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <Table 
          sx={{ minWidth: 750, ...tableSx }} 
          aria-labelledby="tableTitle"
          size="medium"
          stickyHeader={stickyHeader}
        >
          <TableHead>
            <TableRow sx={{ ...headerRowSx }}>
              {/* Selection checkbox column */}
              {selectable && (
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={selected.length > 0 && selected.length < filteredData.length}
                    checked={filteredData.length > 0 && selected.length === filteredData.length}
                    onChange={handleSelectAllClick}
                    inputProps={{ 'aria-label': 'select all' }}
                  />
                </TableCell>
              )}
              
              {/* Expansion column */}
              {expandable && (
                <TableCell width="50px" />
              )}
              
              {/* Data columns */}
              {visibleColumns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || (column.numeric ? 'right' : 'left')}
                  sortDirection={orderBy === column.id ? order : false}
                  width={column.width}
                  className={column.headerClassName}
                  sx={{ fontWeight: 600 }}
                >
                  {column.sortable !== false && sortable ? (
                    <TableSortLabel
                      active={orderBy === column.id}
                      direction={orderBy === column.id ? order : 'asc'}
                      onClick={() => handleRequestSort(column.id)}
                    >
                      {column.label}
                      {orderBy === column.id ? (
                        <Box component="span" sx={visuallyHidden}>
                          {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  ) : (
                    column.label
                  )}
                </TableCell>
              ))}
              
              {/* Actions column */}
              {renderRowActions && (
                <TableCell align="right" width="100px">
                  Actions
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              renderLoadingState()
            ) : visibleRows.length === 0 ? (
              renderEmptyState()
            ) : (
              visibleRows.map((row, index) => {
                const rowId = String(row[idKey]);
                const isItemSelected = isSelected(rowId);
                const isExpanded = expandedRow === rowId;
                const labelId = `table-checkbox-${index}`;

                return (
                  <React.Fragment key={rowId}>
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      selected={isItemSelected}
                      sx={{ 
                        cursor: onRowClick ? 'pointer' : 'default',
                        '&.Mui-selected': {
                          backgroundColor: 'rgba(25, 118, 210, 0.08)',
                        },
                        ...bodyRowSx
                      }}
                      onClick={() => onRowClick && handleRowClick(row)}
                    >
                      {/* Selection checkbox */}
                      {selectable && (
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ 'aria-labelledby': labelId }}
                            onClick={(event) => {
                              event.stopPropagation();
                              handleRowSelect(rowId);
                            }}
                          />
                        </TableCell>
                      )}
                      
                      {/* Expansion control */}
                      {expandable && (
                        <TableCell>
                          <IconButton 
                            size="small"
                            onClick={(event) => {
                              event.stopPropagation();
                              handleRowExpand(rowId, row);
                            }}
                            sx={{
                              transform: isExpanded ? 'rotate(90deg)' : 'none',
                              transition: 'transform 0.2s'
                            }}
                          >
                            <KeyboardArrowRightIcon />
                          </IconButton>
                        </TableCell>
                      )}
                      
                      {/* Data cells */}
                      {visibleColumns.map((column) => {
                        const cellValue = row[column.id];
                        
                        return (
                          <TableCell 
                            key={column.id} 
                            align={column.align || (column.numeric ? 'right' : 'left')}
                            className={column.cellClassName}
                          >
                            {column.renderCell ? column.renderCell(row) : cellValue}
                          </TableCell>
                        );
                      })}
                      
                      {/* Actions cell */}
                      {renderRowActions && (
                        <TableCell align="right">
                          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            {renderRowActions(row)}
                          </Box>
                        </TableCell>
                      )}
                    </TableRow>
                    
                    {/* Expanded content */}
                    {expandable && renderExpandedRow && isExpanded && (
                      <TableRow>
                        <TableCell 
                          colSpan={columns.length + (selectable ? 1 : 0) + (renderRowActions ? 1 : 0) + (expandable ? 1 : 0)}
                          sx={{ 
                            py: 2, 
                            backgroundColor: 'rgba(0, 0, 0, 0.02)',
                            ...expansionPanelSx
                          }}
                        >
                          {renderExpandedRow(row)}
                        </TableCell>
                      </TableRow>
                    )}
                  </React.Fragment>
                );
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>
      
      {/* Pagination */}
      {pageable && (
        <CustomPagination
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={(e) => {
            console.log('Rows per page changed:', e);
            setRowsPerPage(Number(e.target.value));
            setPage(0);
          }}
          rowsPerPageOptions={pageSizeOptions}
        />
      )}
    </Box>
  );
};

export default TableT1;