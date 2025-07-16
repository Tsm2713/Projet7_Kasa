import { useState } from 'react'
import './App.scss'
import {Banner}from './components/banner/banner.jsx'
import aboutPicture from './assets/about_banner.png';
import logementsData from './data/logements.json';
import Router from './routes.jsx';

function App() {
  return <Router />;
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

