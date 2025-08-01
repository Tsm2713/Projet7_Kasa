import { useParams, Navigate } from "react-router-dom";
import data from "../data/logements.json";
import Carrousel from "../components/carrousel/carrousel.jsx";
import Rating from "../components/rating/rating.jsx";
import Collapse from "../components/collapse/collapse.jsx";
import User from "../components/user/user.jsx";
import Tag from "../components/tags/tags.jsx";
import "../pages/rental.scss";

function Rental() {
  const { id } = useParams();
  const rental = data.find((item) => item.id === id);

  if (!rental) {
    return <Navigate to="/error" />;
  }

  const { title, location, tags, host, rating, description, pictures, equipments } = rental;

  return (
    <div className="rental">
      {/* Carrousel d’images */}
      <Carrousel images={pictures} />

      {/* Header du logement */}
      <div className="rental__header">
        <div className="rental__info">
          <h1 className="rental__title">{title}</h1>
          <p className="rental__location">{location}</p>
          <div className="rental__tags">
            {tags.map((tag, index) => (
              <Tag key={index} label={tag} />
            ))}
          </div>
        </div>
        <div className="rental__host">
          <User name={host.name} picture={host.picture} />
          <Rating rating={rating} />
        </div>
      </div>

      {/* Description et équipements */}
      <div className="rental__content">
        <Collapse title="Description">{description}</Collapse>
        <Collapse title="Équipements">
          <ul className="equipments">
            {equipments.map((item, index) => (
              <li key={index} className="equipments__item">
                {item}
              </li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Rental;
