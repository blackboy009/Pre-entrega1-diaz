// src/components/NavBar.js

import React from 'react';
import './NavBar.css'; 
import CartWidget from './CartWidget';  

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="navbar-container container-fluid">
        {/* Logo de la aplicación */}
        <a href="#home" className="navbar-logo navbar-brand">
          MyLogo
        </a>

        {/* Botón de menú para pantallas pequeñas */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-menu navbar-nav">
            <li className="navbar-item nav-item">
              <a href="#home" className="navbar-link nav-link">Home</a>
            </li>
            <li className="navbar-item nav-item">
              <a href="#about" className="navbar-link nav-link">About</a>
            </li>
            <li className="navbar-item nav-item">
              <a href="#services" className="navbar-link nav-link">Services</a>
            </li>
            <li className="navbar-item nav-item">
              <a href="#contact" className="navbar-link nav-link">Contact</a>
            </li>
          </ul>
        </div>

        {/* Carrito de compras (CartWidget) en el lado derecho */}
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;

