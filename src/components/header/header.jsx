import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/Logo.png';

function Header() {
  return (
    <header className="header">
      {/* Logo Kasa à gauche */}
      <div className="logo">
        <img src={logo} alt="Logo Kasa" />
      </div>
      {/* Menu de navigation à droite */}
      <nav className="nav">
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À Propos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
