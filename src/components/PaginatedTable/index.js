import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(() => ({
  backgroundColor: 'transparent',
  border: 'none',
}));

const StyledTableContainer = styled(TableContainer)(() => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
}));

const TableWrapper = styled('div')(() => ({
  overflowX: 'auto',
  marginTop: '20px',
  '&::-webkit-scrollbar': {
    height: '5px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#888',
    borderRadius: '2px',
  },
}));

const HeaderRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  '& .MuiTableCell-root': {
    fontWeight: 'bold',
    color: theme.palette.text.primary,
  },
}));

const BodyRow = styled(TableRow)(({ theme }) => ({
  transition: 'background-color 0.2s ease',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    '& .MuiTableCell-root': {
      color: theme.palette.text.primary,
    },
  },
}));

const PaginatedTable = ({
  columns,
  data,
  rowsPerPageOptions = [5, 10, 25],
  defaultRowsPerPage = 5,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const theme = useTheme();

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <TableWrapper>
      <StyledTableContainer component={Paper}>
        <Table>
          <TableHead>
            <HeaderRow theme={theme}>
              {columns.map((column, index) => (
                <StyledTableCell key={index}>{column}</StyledTableCell>
              ))}
            </HeaderRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row, rowIndex) => (
              <BodyRow key={rowIndex} theme={theme}>
                {row.map((cell, cellIndex) => (
                  <StyledTableCell key={cellIndex}>{cell}</StyledTableCell>
                ))}
              </BodyRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableWrapper>
  );
};

export default PaginatedTable;
