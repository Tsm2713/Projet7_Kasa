import React from 'react';
import './card.scss';
import { Link } from 'react-router-dom';

function Card({ id, title, cover }) {
  return (
    <Link to={`/rental/${id}`} className="gallery_card">
      <img src={cover} alt={`Kasa - ${title}`} />
      <h3>{title}</h3>
    </Link>
  );
}

export default Card;