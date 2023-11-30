import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    text: { primary: '#2c2935', secondary: '#6e6e73' },
    primary: { main: '#774af6', contrastText: '#ffffff' },
  },
  components: {
    MuiInputLabel: { defaultProps: { style: { fontSize: 13 } } },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          fontSize: 12,
          fontWeight: 500,
          '&:before': { borderBottom: '0.5px solid #efefef !important' },
          '&:hover': { borderBottom: '0.5px solid #efefef !important' },
        },
      },
      defaultProps: {
        style: { background: '#FAFAFA' },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: { '&:hover:not': { borderBottom: '0.5px solid #efefef' } },
      },
      defaultProps: { style: { fontSize: 12 } },
    },
  },
  typography: { fontFamily: 'Rubik' },
});
