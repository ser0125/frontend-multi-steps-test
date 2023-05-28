import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import Theme from '../Theme';
import Layout from '../pages/Layout.jsx';
import InfoForm from './components/forms/InfoForm/InfoForm';
import PlanForm from './components/forms/PlanForm/PlanForm';
import AddonsForm from './components/forms/AddonsForm/AddonsForm';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <InfoForm />,
      },
      {
        path: '/plan',
        element: <PlanForm />,
      },
      {
        path: '/addons',
        element: <AddonsForm />,
      },
    ],
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
