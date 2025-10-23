import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const projectCategories = [
    {
      id: 'diseno-grafico',
      name: 'Diseño Gráfico',
      emoji: '🎨',
      description: 'Logos, identidades visuales, contenido digital'
    },
    {
      id: 'campanas',
      name: 'Campañas Publicitarias',
      emoji: '🎯',
      description: 'Estrategia visual y diseño comercial'
    },
    {
      id: 'animaciones',
      name: 'Animaciones',
      emoji: '🎬',
      description: 'Contenido dinámico para redes sociales'
    },
    {
      id: 'fichas-tecnicas',
      name: 'Fichas Técnicas',
      emoji: '📐',
      description: 'Documentación de fabricación'
    },
    {
      id: 'dibujo-3d',
      name: 'Dibujo 3D',
      emoji: '📦',
      description: 'Modelado tridimensional'
    },
    {
      id: 'render',
      name: 'Renders',
      emoji: '💡',
      description: 'Fotorrealismo digital'
    },
    {
      id: 'mobiliarios',
      name: 'Diseño de Mobiliarios',
      emoji: '🏬',
      description: 'Exhibición comercial'
    },
    {
      id: 'recorrido-virtual',
      name: 'Recorrido Virtual',
      emoji: '🏡',
      description: 'Experiencias inmersivas'
    }
  ];

  return (
    <div className="page page-projects">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="container">
          <h1>Galería de Proyectos</h1>
          <p>Explora todos mis trabajos organizados por categoría</p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section projects-section">
        <div className="container">
          <div className="categories-grid">
            {projectCategories.map((category, index) => (
              <Link
                key={category.id}
                to={`/projects/${category.id}`}
                className="category-card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="category-header">
                  <span className="category-emoji">{category.emoji}</span>
                </div>
                <div className="category-content">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <span className="category-arrow">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="container text-center">
          <h2>Amplio Portafolio de Proyectos</h2>
          <p>
            Con más de 2.73 GB en activos digitales, incluyendo animaciones, videos,
            renders, diseños gráficos y recorridos virtuales, estoy preparado para
            proyectos de cualquier escala y complejidad.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Projects;
