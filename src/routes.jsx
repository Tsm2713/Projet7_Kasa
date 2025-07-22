import { Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Rental from './pages/rental.jsx';
import Error from './pages/error.jsx';
import Layout from './layout/Layout.jsx';

function Router() {
  return (
    <Routes>
      {/* Route parent utilisant le layout général avec header/footer */}
      <Route element={<Layout />}>
        {/* Routes enfants pour chaque page */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rental/:id" element={<Rental />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default Router;
