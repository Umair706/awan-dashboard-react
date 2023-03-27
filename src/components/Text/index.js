import React from 'react';
import { Typography } from '@mui/material';

export const ErrorText = (props) => (
  <Typography variant="body1" color="error.main" {...props}>
    {props.children}
  </Typography>
);

export const WarningText = (props) => (
  <Typography variant="body1" color="warning.main" {...props}>
    {props.children}
  </Typography>
);

export const H1 = (props) => (
  <Typography variant="h1" {...props}>
    {props.children}
  </Typography>
);

export const H2 = (props) => (
  <Typography variant="h2" {...props}>
    {props.children}
  </Typography>
);

export const H3 = (props) => (
  <Typography variant="h3" {...props}>
    {props.children}
  </Typography>
);

export const H4 = (props) => (
  <Typography variant="h4" {...props}>
    {props.children}
  </Typography>
);

export const Title = (props) => (
  <Typography variant="h5" {...props}>
    {props.children}
  </Typography>
);

export const Text = (props) => (
  <Typography variant="body1" {...props}>
    {props.children}
  </Typography>
);

export const SecondaryText = (props) => (
  <Typography variant="body2" color="text.secondary" {...props}>
    {props.children}
  </Typography>
);
