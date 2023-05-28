import { createTheme } from '@mui/material';

const denim = '#022959';
const grey = '#9699AA';
const white = '#FFFFFF';

export default createTheme({
  typography: {
    body2: {
      fontSize: 14,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
    },
    h1: {
      fontSize: 37,
      color: denim,
      fontWeight: 700,
    },
    h2: {
      fontSize: 20,
      color: grey,
    },
    h3: {
      fontSize: 18,
    },
  },
  palette: {
    primary: {
      main: denim,
    },
    white: {
      main: white,
    },
    grey: {
      main: grey,
    },
  },
});
