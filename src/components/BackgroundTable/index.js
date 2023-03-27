import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { styled } from '@mui/system';
const StyledTableCell = styled(TableCell)`
  background-color: transparent;
  border: none;
`;

const StyledTableContainer = styled(TableContainer)`
  background-color: transparent;
  box-shadow: none;
`;
const BackgroundTable = ({ columns, data }) => {
  return (
    <StyledTableContainer component={Paper} elevation={1}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <StyledTableCell key={index}>{column}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <StyledTableCell key={cellIndex}>{cell}</StyledTableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default BackgroundTable;
