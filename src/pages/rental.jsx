import { useParams } from 'react-router-dom';
import logements from '../data/logements.json';
import './rental.scss';


function Rental() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const logement = logements.find((item) => item.id === id); // Cherche le logement

  if (!logement) {
    return <p>Logement introuvable.</p>; // Gestion d'erreur si mauvais ID
  }

  return (
    <div>
      <h1>{logement.title}</h1>
      <p>{logement.location}</p>
      {/* Ajoute plus d’infos ici : tags, images, etc. */}
    </div>
  );
}

export default Rental;
