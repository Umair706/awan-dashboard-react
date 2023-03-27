import { createTheme } from '@mui/material';
const commonTypography = {
  h1: {
    fontSize: '1.75rem',
    fontWeight: 500,
    lineHeight: 1.2,
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  },
  h2: {
    fontSize: '1.5rem',
    fontWeight: 500,
    lineHeight: 1.3,
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  },
  h3: {
    fontSize: '1.25rem',
    fontWeight: 500,
    lineHeight: 1.4,
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  },
  h4: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.4,
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  },
  h5: {
    fontSize: '0.875rem',
    fontWeight: 700,
    lineHeight: 1.625,
    letterSpacing: '0.0075em',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  },
  body1: {
    fontSize: '0.75rem',
    lineHeight: '1.5',
    letterSpacing: '0.02857em',
    opacity: 1,
    fontWeight: 300,
    fontFamily: 'Open Sans, sans-serif',
    '@media (max-width:600px)': {
      fontSize: '0.6875rem',
      lineHeight: '1.4',
    },
  },
  body2: {
    fontSize: '0.75rem',
    lineHeight: '1.5',
    letterSpacing: '0.02857em',
    opacity: 1,
    fontWeight: 300,
    fontFamily: 'Open Sans, sans-serif',
    '@media (max-width:600px)': {
      fontSize: '0.6875rem',
      lineHeight: '1.4',
    },
  },
  subtitle1: {
    fontSize: '0.875rem',
    lineHeight: 1.6,
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  },
  subtitle2: {
    fontSize: '0.75rem',
    lineHeight: 1.6,
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976D2',
      contrastText: '#fff',
    },
    secondary: {
      main: '#FFC107',
      contrastText: '#000',
    },
    background: {
      default: '#F5F5F5',
      paper: '#fff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
    },
    action: {
      hover: 'rgba(25, 118, 210, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(25, 118, 210, 0.14)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
    },
  },
  typography: {
    ...commonTypography,
  },
  shadows: {
    default: 'none',
    primary:
      'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
    secondary: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  },
  gradients: {
    moonlight: 'linear-gradient(to right, #0f2027, #203a43, #2c5364);',
    darkOcean: 'linear-gradient(to right, #373b44, #4286f4);',
    yoda: 'linear-gradient(to right, #ff0099, #493240);',
    harvey: 'linear-gradient(to right, #1f4037, #99f2c8);',
    citrus: 'linear-gradient(to right, #fdc830, #f37335);',
    red: 'linear-gradient(to right, #ed213a, #93291e);',
    red: 'linear-gradient(195deg, rgb(239, 33, 57), rgb(147, 41, 30))',
    yellow: 'linear-gradient(195deg, rgb(253, 202, 48), rgb(243, 119, 53))',
    green: 'linear-gradient(195deg, rgb(78, 201, 176), rgb(34, 166, 179))',
    black: 'linear-gradient(195deg, rgb(34, 34, 34), rgb(68, 68, 68))',
    gray: 'linear-gradient(195deg, rgb(217, 217, 217), rgb(187, 187, 187))',
    pink: 'linear-gradient(195deg, rgb(252, 119, 183), rgb(231, 70, 141))',
    purple: 'linear-gradient(195deg, rgb(194, 108, 218), rgb(94, 53, 177))',
    blue: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))',
    // Add more gradients here
  },
});
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2282F8',
      contrastText: '#fff',
    },
    secondary: {
      main: '#FFCC80',
      contrastText: '#fff',
    },
    background: {
      default: '#1E1E2E',
      highlight: '#247AF6',
      paper: '#27293D',
    },
    text: {
      primary: '#fff',
      secondary: '#fff',
    },
    action: {
      hover: 'rgba(34,130,248,0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(34,130,248, 0.14)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
    },
  },
  typography: {
    ...commonTypography,
  },
  shadows: {
    default: 'none',
    primary:
      'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
    secondary: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    // ... (other shadow values)
  },
  gradients: {
    moonlight: 'linear-gradient(to right, #0f2027, #203a43, #2c5364);',
    darkOcean: 'linear-gradient(to right, #373b44, #4286f4);',
    yoda: 'linear-gradient(to right, #ff0099, #493240);',
    harvey: 'linear-gradient(to right, #1f4037, #99f2c8);',
    citrus: 'linear-gradient(to right, #fdc830, #f37335);',
    red: 'linear-gradient(to right, #ed213a, #93291e);',
    blue: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))',
    red: 'linear-gradient(195deg, rgb(239, 33, 57), rgb(147, 41, 30))',
    yellow: 'linear-gradient(195deg, rgb(253, 202, 48), rgb(243, 119, 53))',
    green: 'linear-gradient(195deg, rgb(78, 201, 176), rgb(34, 166, 179))',
    black: 'linear-gradient(195deg, rgb(34, 34, 34), rgb(68, 68, 68))',
    gray: 'linear-gradient(195deg, rgb(217, 217, 217), rgb(187, 187, 187))',
    pink: 'linear-gradient(195deg, rgb(252, 119, 183), rgb(231, 70, 141))',
    purple: 'linear-gradient(195deg, rgb(194, 108, 218), rgb(94, 53, 177))',

    // Add more gradients here
  },
});
