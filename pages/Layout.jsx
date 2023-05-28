import { Outlet } from 'react-router-dom';
import StepsBar from '../src/components/StepsBar/StepsBar';
import './Layout.sass';
import { FormProvider } from '../src/FormContext';

function Layout() {
  return (
    <main className="main">
      <StepsBar />
      <FormProvider>
        <Outlet />
      </FormProvider>
    </main>
  );
}

export default Layout;
