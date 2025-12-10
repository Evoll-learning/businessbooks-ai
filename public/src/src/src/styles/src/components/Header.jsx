import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <Link to="/" className="logo">
          📚 BusinessBooks AI
        </Link>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/dashboard">Dashboard</Link>
          <button className="btn btn-primary">Iniciar Sesión</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
