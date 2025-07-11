import { useState } from 'react'
import './App.scss'
import {Banner}from './components/banner/banner.jsx'
import aboutPicture from './assets/about_banner.png';
import logementsData from './data/logements.json';


function App() {
  return (
  <div>
    <h1>Bienvenue sur Kasa</h1>
    <p>Nombre de logements : {logementsData.length}</p>
  </div>
);
}
export default App;
/*
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Rental/:id" element={<Rental />} />{' '}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}*/

