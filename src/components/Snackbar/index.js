import React from 'react';
import { Snackbar as MuiSnackbar, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { Close as CloseIcon } from '@mui/icons-material';

const StyledSnackbar = styled(MuiSnackbar)(({ theme }) => ({
  '& .MuiSnackbarContent-root': {
    borderRadius: '0.5rem',
    padding: theme.spacing(0.5, 1),
    backgroundColor: theme.palette.primary.main,
    minWidth: 'unset',
    color: theme.palette.primary.contrastText,
  },
}));

const Snackbar = ({ open, onClose, message }) => {
  return (
    <StyledSnackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={open}
      onClose={onClose}
      message={message}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  );
};

export default Snackbar;
