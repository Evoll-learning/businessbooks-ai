import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Analytics.css';

const Analytics = () => {
  const readingTimeData = [
    { name: 'Lun', minutos: 45 },
    { name: 'Mar', minutos: 30 },
    { name: 'Mié', minutos: 60 },
    { name: 'Jue', minutos: 40 },
    { name: 'Vie', minutos: 55 },
    { name: 'Sáb', minutos: 70 },
    { name: 'Dom', minutos: 80 }
  ];

  const categoryData = [
    { name: 'Emprendimiento', value: 35, color: '#8884d8' },
    { name: 'Marketing', value: 25, color: '#82ca9d' },
    { name: 'Liderazgo', value: 20, color: '#ffc658' },
    { name: 'Finanzas', value: 20, color: '#ff7c7c' }
  ];

  return (
    <div className="analytics-container">
      <div className="analytics-grid">
        <div className="chart-card">
          <h3>Tiempo de Lectura Diario</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={readingTimeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="minutos" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Progreso por Categoría</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="metrics-card">
          <h3>Métricas Clave</h3>
          <div className="metrics-grid">
            <div className="metric-item">
              <div className="metric-value">245</div>
              <div className="metric-label">Minutos totales</div>
            </div>
            <div className="metric-item">
              <div className="metric-value">12</div>
              <div className="metric-label">Libros completados</div>
            </div>
            <div className="metric-item">
              <div className="metric-value">1,250</div>
              <div className="metric-label">XP acumulado</div>
            </div>
            <div className="metric-item">
              <div className="metric-value">7</div>
              <div className="metric-label">Días de racha</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
