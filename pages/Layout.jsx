import { Outlet } from 'react-router-dom';
import StepsBar from '../src/components/StepsBar/StepsBar';
import './Layout.sass';

function Layout() {
  return (
    <main className="main">
      <StepsBar />
      <Outlet />
    </main>
  );
}

export default Layout;
