import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleOpen}>
        <h2>{title}</h2>
        <FontAwesomeIcon
          icon={isOpen ? faChevronDown  : faChevronUp}
          className="arrow-icon"
        />
      </div>

      {isOpen && (
        <div className="collapse-content">
          {children}
        </div>
      )}
    </div>
  );
}

export default Collapse;
