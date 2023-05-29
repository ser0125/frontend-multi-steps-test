import { createTheme } from '@mui/material/styles';

const denim = '#022959';
const grey = '#9699AA';
const white = '#FFFFFF';
const purple = '#483EFF';

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
    h3: {
      fontSize: 24,
    },
    h4: {
      fontSize: 20,
    },
    h5: {
      fontSize: 18,
    },
    h6: {
      fontSize: 12,
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
    secondary: {
      main: purple,
    },
  },
});
