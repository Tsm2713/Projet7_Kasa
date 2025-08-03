import React from 'react';
import starFilled from '/src/assets/star-filled.svg';
import starOutline from '/src/assets/star-outline.png';
import './rating.scss';

const Rating = ({ rating }) => {
  return (
    <div className="rating">
      {[...Array(5)].map((_, i) => (
        <img
          key={i}
          src={i < rating ? starFilled : starOutline}
          alt={i < rating ? 'Étoile pleine' : 'Étoile vide'}
          width={24}
          height={24}
        />
      ))}
    </div>
  );
};

export default Rating;

