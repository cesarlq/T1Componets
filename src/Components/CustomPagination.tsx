import React from 'react';
import { 
  Box, 
  Typography, 
  Select, 
  MenuItem, 
  IconButton, 
  TextField,
  InputAdornment,
  SelectChangeEvent 
} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { SelectComponent, SelectItem } from 't1componets';

interface CustomPaginationProps {
  count: number;
  rowsPerPage: number;
  page: number;
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange: (event: SelectChangeEvent<number>) => void;
  rowsPerPageOptions: number[];
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  count,
  rowsPerPage,
  page,
  onPageChange,
  onRowsPerPageChange,
  rowsPerPageOptions
}) => {
  const totalPages = Math.ceil(count / rowsPerPage);
  const [goToPage, setGoToPage] = React.useState<string>((page + 1).toString());

  const handlePreviousPage = () => {
    onPageChange(null, Math.max(0, page - 1));
  };

  const handleNextPage = () => {
    onPageChange(null, Math.min(totalPages - 1, page + 1));
  };

  const handleGoToPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGoToPage(event.target.value);
  };

  const handleGoToPageKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      const pageNumber = parseInt(goToPage, 10);
      if (!isNaN(pageNumber) && pageNumber > 0 && pageNumber <= totalPages) {
        onPageChange(null, pageNumber - 1);
      }
    }
  };

  // Función para generar los botones de página
  const renderPageNumbers = () => {
    const pageButtons = [];
    
    // Mostrar solo un número limitado de páginas
    let startPage = Math.max(1, page - 1);
    let endPage = Math.min(totalPages, page + 3);
    
    // Si estamos en las primeras páginas, mostrar más páginas adelante
    if (page < 2) {
      endPage = Math.min(5, totalPages);
    }
    
    // Si estamos en las últimas páginas, mostrar más páginas atrás
    if (page > totalPages - 3) {
      startPage = Math.max(1, totalPages - 4);
    }
    
    // Botones para cada página visible
    for (let i = startPage; i <= endPage; i++) {
      const pageIndex = i - 1;
      pageButtons.push(
        <Box
          key={i}
          onClick={() => onPageChange(null, pageIndex)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '4px',
            justifyContent: 'center',
            border:'0.8px',
            minWidth: '30px',
            height: '30px',
            cursor: 'pointer',
            ...(page === pageIndex ? {
              backgroundColor: '#DB3B2B',
              color: 'white',
            } : {
              backgroundColor: 'transparent',
              color: 'inherit',
            }),
            fontWeight: 'medium',
            mx: 0.5
          }}
        >
          {i}
        </Box>
      );
    }
    
    // Añadir puntos suspensivos si hay más páginas al principio
    if (startPage > 1) {
      pageButtons.unshift(
        <Box key="startEllipsis" sx={{ mx: 1 }}>...</Box>
      );
      
      // Añadir también el botón de la primera página
      pageButtons.unshift(
        <Box
          key="firstPage"
          onClick={() => onPageChange(null, 0)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '40px',
            height: '40px',
            cursor: 'pointer',
            backgroundColor: page === 0 ? '#d9534f' : 'transparent',
            color: page === 0 ? 'white' : 'inherit',
            fontWeight: 'medium',
            mx: 0.5
          }}
        >
          1
        </Box>
      );
    }
    
    // Añadir puntos suspensivos si hay más páginas al final
    if (endPage < totalPages) {
      pageButtons.push(
        <Box key="endEllipsis" sx={{ mx: 1 }}>...</Box>
      );
      
      // Añadir también el botón de la última página
      pageButtons.push(
        <Box
          key="lastPage"
          onClick={() => onPageChange(null, totalPages - 1)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '40px',
            height: '40px',
            cursor: 'pointer',
            backgroundColor: page === totalPages - 1 ? '#d9534f' : 'transparent',
            color: page === totalPages - 1 ? 'white' : 'inherit',
            fontWeight: 'medium',
            mx: 0.5
          }}
        >
          {totalPages}
        </Box>
      );
    }

    return pageButtons;
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        p: 2
      }}
    >
      <Typography variant="body1">
        En total {count} registros
      </Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {/* Flechas y números de página */}
        <IconButton 
          onClick={handlePreviousPage} 
          disabled={page === 0}
          size="small"
        >
          <KeyboardArrowLeftIcon />
        </IconButton>
        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {renderPageNumbers()}
        </Box>
        
        <IconButton 
          onClick={handleNextPage} 
          disabled={page >= totalPages - 1}
          size="small"
        >
          <KeyboardArrowRightIcon />
        </IconButton>
        
        {/* Selector de registros por página */}
        <Select
          value={rowsPerPage}
          onChange={onRowsPerPageChange}
          size="small"
          sx={{ 
            minWidth: '200px',
            '& .MuiSelect-select': { 
              py: 1, 
              px: 2 
            }
          }}
        >
          {rowsPerPageOptions.map((option) => (
            <MenuItem  key={option} value={option}>
              {option} registros / pagina
            </MenuItem>
          ))}
        </Select>

        <SelectComponent 
          label={`${rowsPerPage.toString()}registros / pagina`}
        >
          {rowsPerPageOptions.map((option) => (
            <SelectItem  key={option} label={`${option.toString()}registros / pagina`} value={option.toString()} onClick={() => onRowsPerPageChange({ target: { value: option } } as SelectChangeEvent<number>)}/>
          ))}
        </SelectComponent>
        
        {/* Campo para ir a una página específica */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ mr: 1 }}>
            Ir a la página
          </Typography>
          <TextField
            value={goToPage}
            onChange={handleGoToPageChange}
            onKeyPress={handleGoToPageKeyPress}
            size="small"
            sx={{ 
              width: '70px',
              '& .MuiInputBase-input': {
                py: 1,
                px: 1.5
              }
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    size="small"
                    onClick={() => {
                      const pageNumber = parseInt(goToPage, 10);
                      if (!isNaN(pageNumber) && pageNumber > 0 && pageNumber <= totalPages) {
                        onPageChange(null, pageNumber - 1);
                      }
                    }}
                  >
                    <KeyboardArrowRightIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CustomPagination;