import React from 'react';
import { SelectChangeEvent } from '@mui/material';
interface CustomPaginationProps {
    count: number;
    rowsPerPage: number;
    page: number;
    onPageChange: (event: unknown, newPage: number) => void;
    onRowsPerPageChange: (event: SelectChangeEvent<number>) => void;
    rowsPerPageOptions: number[];
}
declare const CustomPagination: React.FC<CustomPaginationProps>;
export default CustomPagination;
