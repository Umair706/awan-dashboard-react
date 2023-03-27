import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { H4 } from '../Text';

const Header = () => {
  return (
    // <AppBar position="static">
    <Toolbar>
      <H4 variant="h4">My App</H4>
    </Toolbar>
    // </AppBar>
  );
};

export default Header;
