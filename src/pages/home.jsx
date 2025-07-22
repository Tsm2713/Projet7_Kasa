import React from 'react';
import Banner from '../components/banner/banner.jsx';
import Card from '../components/card/Card.jsx';
import './home.scss';

function Home() {
  return (
    <div className="home">
      {/* Bannière principale de la page d'accueil */}
      <Banner />
      {/* Grille statique de 6 cartes de location */}
      <div className="gallery">
        <Card /><Card /><Card />
        <Card /><Card /><Card />
      </div>
    </div>
  );
}

export default Home;
