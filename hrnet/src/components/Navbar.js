import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logos/wh.png';
import '../assets/components/Navbar.scss';

// Composant de navigation pour l'application
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Section de gauche avec le logo et le titre */}
      <div className="navbar-left">
        <img src={ Logo } alt="Logo" className="navbar-logo" /> {/* Affiche le logo de l'application */}
        <span className="navbar-title">WealthHealth HRnet</span> {/* Titre de l'application */}
      </div>
      {/* Section de droite avec les liens de navigation */}
      <div className="navbar-right">
        <Link to="/" className="nav-link">Create Employee</Link> {/* Lien vers la page de création d'employé */}
        <Link to="/employee-list" className="nav-link">Employee List</Link> {/* Lien vers la page de liste des employés */}
      </div>
    </nav>
  );
};

export default Navbar;
