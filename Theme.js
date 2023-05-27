import { createTheme } from '@mui/material';

const purpleMain = '#483EFF';
const lightBlue = '#ABBCFF';
const denim = '#022959';
const grey = '#9699AA';

export default createTheme({
  typography: {
    body2: {
      fontSize: 14,
      color: lightBlue,
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
  },
  palette: {
    primary: {
      main: denim,
    },
  },
});
