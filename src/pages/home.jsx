import React from 'react';
import Banner from '../components/banner/banner.jsx';
import homeBanner from "../assets/home_banner.png"
import Card from '../components/card/Card.jsx';
import data from '../data/logements.json';
import './home.scss';
console.log(data);


function Home() {
  return (
    <div className="home">
     <Banner image={homeBanner} text="Chez vous, partout et ailleurs" />
      <div className="gallery">
        {data?.map(({title,cover,id}) =><Card title={title} id={id} cover={cover}/> )} 
      </div>
  </div>
  )
}
export default Home;