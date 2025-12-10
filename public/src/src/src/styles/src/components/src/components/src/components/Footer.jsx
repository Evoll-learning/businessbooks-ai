import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>BusinessBooks AI</h3>
            <p>Acelera tu aprendizaje empresarial con el poder de la IA.</p>
          </div>
          <div className="footer-section">
            <h4>Enlaces</h4>
            <ul>
              <li><a href="#features">Características</a></li>
              <li><a href="#pricing">Precios</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BusinessBooks AI. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
