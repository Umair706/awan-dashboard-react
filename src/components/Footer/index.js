import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box mt={4} py={2} textAlign="center" borderTop={1} borderColor="divider">
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} My App. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
