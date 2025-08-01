import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./collapse.scss";

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false); // chaque instance a son propre état

  return (
    <div className="collapse">
      <div
        className={`collapse-header ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2>{title}</h2>
        <FontAwesomeIcon icon={faChevronDown} className={`arrow-icon ${isOpen ? "rotated" : ""}`} />
      </div>
      {isOpen && (
        <div className="collapse-content">
          {children}
        </div>
      )}
    </div>
  );
}
