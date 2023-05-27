import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PersonalInfo from '../pages/PersonalInfo.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PersonalInfo />,
  },
]);
if (typeof window !== 'undefined') {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}
