import { Outlet, useNavigate } from 'react-router-dom';
import StepsBar from '../components/StepsBar/StepsBar';
import './Layout.sass';
import { FormProvider } from '../FormContext';
import { useEffect } from 'react';

function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/', { replace: true });
  }, []);

  return (
    <main className="main">
      <FormProvider>
        <StepsBar />
        <Outlet />
      </FormProvider>
    </main>
  );
}

export default Layout;
