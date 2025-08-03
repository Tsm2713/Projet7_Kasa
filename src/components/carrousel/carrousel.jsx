import { useState } from "react";
import "./carrousel.scss";  // Import du fichier SCSS associé au composant

function Carrousel({ images }) {
  // État local pour l'index de l'image courante
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gestion du clic sur la flèche "suivante"
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  // Gestion du clic sur la flèche "précédente"
  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };


  if (!images || images.length === 0) {
    return null;
  }

  // Image courante à afficher
  const currentImage = images[currentIndex];

  return (
    <div className="carrousel">
      {/* Image du carrousel */}
      <img
        src={currentImage}
        alt="Photo du logement"
        className="carrousel__image"
      />

      {/* Affichage des flèches et du compteur seulement s'il y a plus d'une image */}
      {images.length > 1 && (
        <>
          {/* Flèche gauche */}
          <button className="carrousel__arrow carrousel__arrow--left" onClick={handlePrev}>
            ❮
          </button>

          {/* Flèche droite */}
          <button className="carrousel__arrow carrousel__arrow--right" onClick={handleNext}>
            ❯
          </button>

          {/* Compteur d'images */}
          <div className="carrousel__counter">
            {currentIndex + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
}

export default Carrousel;
