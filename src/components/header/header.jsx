import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/Logo.png';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo Kasa" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink
              to="/" className={({ isActive }) => isActive ? 'active' : ''} > Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? 'active' : ''} > A Propos
            </NavLink>
          </li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;
