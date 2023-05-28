import React from 'react';
import Theme from '../../Theme';
import { ThemeProvider } from '@emotion/react';

function MockTheme({ children }) {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
}

export default MockTheme;
