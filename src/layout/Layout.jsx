import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Ici s'affichera la page actuelle */}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
