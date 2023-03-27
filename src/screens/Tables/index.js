import React from 'react';
import Layout from '../../Layout';
import {
  BackgroundTable,
  Menu,
  PaginatedTable,
  TransparentTable,
} from '../../components';
import { Grid } from '@mui/material';

const Tables = ({ type = 'paginated' }) => {
  const columns = ['ID', 'Name', 'Age'];
  const data = [
    [1, 'Alice', 28],
    [2, 'Bob', 34],
    [3, 'Charlie', 22],
    [3, 'Charlie', 22],
    [3, 'Charlie', 22],
    [3, 'Charlie', 22],
  ];
  return (
    <Grid container spacing={2}>
      {type === 'paginated' && (
        <Grid item xs={12}>
          <PaginatedTable columns={columns} data={data} />
        </Grid>
      )}
      {type === 'transparent' && (
        <Grid item xs={12}>
          <TransparentTable columns={columns} data={data} />
        </Grid>
      )}
      {type === 'background' && (
        <Grid item xs={12}>
          <BackgroundTable columns={columns} data={data} />
        </Grid>
      )}
    </Grid>
  );
};

export default Layout(Tables);
