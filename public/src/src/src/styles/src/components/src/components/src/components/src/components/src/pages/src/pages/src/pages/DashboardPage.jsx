import React from 'react';
import Analytics from '../components/Analytics';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <div className="container">
        <h1>Dashboard de Analytics</h1>
        <p>Tu progreso de aprendizaje empresarial en tiempo real.</p>
        <Analytics />
      </div>
    </div>
  );
};

export default DashboardPage;
