import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PersonalInfo from '../pages/PersonalInfo.jsx';
import { ThemeProvider } from '@emotion/react';
import Theme from '../theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PersonalInfo />,
  },
]);
if (typeof window !== 'undefined') {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ThemeProvider theme={Theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>,
  );
}
