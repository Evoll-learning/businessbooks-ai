import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="container">
          <h1>Aprende Negocios al Doble de Velocidad con IA</h1>
          <p>Transforma cualquier libro, documento o audio en un mentor personal que te responde al instante.</p>
          <Link to="/dashboard" className="btn btn-primary btn-large">
            Ver Demo del Dashboard
          </Link>
        </div>
      </section>
      
      <section className="features" id="features">
        <div className="container">
          <h2>Características Principales</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>📊 Analytics Avanzados</h3>
              <p>Visualiza tu progreso de aprendizaje con gráficos interactivos y métricas en tiempo real.</p>
            </div>
            <div className="feature-card">
              <h3>🤖 Chat Inteligente</h3>
              <p>Interactúa con tus documentos como si conversaras con el autor. Haz cualquier pregunta.</p>
            </div>
            <div className="feature-card">
              <h3>🎤 Soporte Multi-formato</h3>
              <p>Sube PDFs, documentos de Word, audios y videos. Nuestra IA lo procesa todo.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
