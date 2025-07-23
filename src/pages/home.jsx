import React from 'react';
import Banner from '../components/banner/banner.jsx';
import homeBanner from "../assets/home_banner.png"
import Card from '../components/card/Card.jsx';
import './home.scss';

function Home() {
  return (
    <div className="home">
     <Banner image={homeBanner} text="Chez vous, partout et ailleurs" />
      <div className="gallery">
        <Card /><Card /><Card />
        <Card /><Card /><Card />
      </div>
    </div>
  );
}

export default Home;
