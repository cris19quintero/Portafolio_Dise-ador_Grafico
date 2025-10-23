import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

function Home() {
  const services = [
    {
      id: 'diseno-grafico',
      title: 'Diseño Gráfico',
      subtitle: 'Identidades visuales',
      description: 'Logos atractivos, fotografía profesional y contenido visual optimizado para plataformas digitales.',
      emoji: '🎨'
    },
    {
      id: 'campanas',
      title: 'Campañas Publicitarias',
      subtitle: 'Estrategia visual',
      description: 'Diseño con propósito comercial adaptado a multiplataformas, generando conexión emocional.',
      emoji: '🎯'
    },
    {
      id: 'animaciones',
      title: 'Animaciones',
      subtitle: 'Experiencias dinámicas',
      description: 'Animaciones envolventes para redes sociales, logotipos animados y contenido interactivo.',
      emoji: '🎬'
    },
    {
      id: 'fichas-tecnicas',
      title: 'Fichas Técnicas',
      subtitle: 'Documentación precisa',
      description: 'Fichas técnicas funcionales con detalles constructivos y visualización clara para producción.',
      emoji: '📐'
    },
    {
      id: 'dibujo-3d',
      title: 'Dibujo 3D',
      subtitle: 'Visualización tridimensional',
      description: 'Modelado 3D detallado con enfoque estético y funcional, representaciones precisas.',
      emoji: '📦'
    },
    {
      id: 'render',
      title: 'Renders',
      subtitle: 'Fotorrealismo digital',
      description: 'Renders de alta calidad con iluminación profesional, texturas realistas y ambientación.',
      emoji: '💡'
    },
    {
      id: 'mobiliarios',
      title: 'Diseño de Mobiliarios',
      subtitle: 'Exhibición comercial',
      description: 'Showrooms, corners y tiendas completas con identidad visual integrada que comunican.',
      emoji: '🏬'
    },
    {
      id: 'recorrido-virtual',
      title: 'Recorrido Virtual',
      subtitle: 'Experiencias inmersivas',
      description: 'Recorridos virtuales arquitectónicos interactivos con narrativa visual completa.',
      emoji: '🏡'
    }
  ];

  return (
    <div className="page page-home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text slide-in-left">
              <h1 className="hero-title">
                Diseño que <span className="gradient-text">comunica</span> y <span className="gradient-text">transforma</span>
              </h1>
              <p className="hero-subtitle">
                Profesional en Diseño Gráfico y Arquitectura especializado en crear soluciones visuales estratégicas que conectan con audiencias y generan impacto real.
              </p>
              <div className="hero-cta">
                <Link to="/projects" className="btn btn-primary">
                  Explorar Proyectos
                </Link>
                <a href="mailto:cesar@example.com" className="btn btn-secondary">
                  Contactarme
                </a>
              </div>
            </div>

            <div className="hero-visual slide-in-right">
              <div className="visual-card">
                <span>✨</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <h2>Mis Servicios</h2>
            <p>Soluciones visuales completas para tu marca</p>
          </div>

          <div className="services-grid grid grid-3">
            {services.map((service, index) => (
              <Link
                key={service.id}
                to={`/projects/${service.id}`}
                className="service-card card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="card-icon">{service.emoji}</span>
                <h3>{service.title}</h3>
                <p className="card-subtitle">{service.subtitle}</p>
                <p>{service.description}</p>
                <div className="card-cta">
                  Ver proyectos →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="section featured-section">
        <div className="container">
          <div className="section-header">
            <h2>Proyectos Destacados</h2>
            <p>Trabajos recientes que demuestran experiencia y creatividad</p>
          </div>

          <div className="featured-grid">
            <div className="featured-card fade-in">
              <div className="featured-video">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/7eUIzLqvVBc"
                  title="Campaña Claudio Mamá"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="featured-info">
                <h3>Campaña Claudio Mamá</h3>
                <p>Videoproducción y animación para campaña publicitaria de alto impacto con diseño conceptual profesional.</p>
              </div>
            </div>

            <div className="featured-card fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="featured-video">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/rSFm0-IKGx0"
                  title="Intro Melanie Justine para TV"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="featured-info">
                <h3>Intro Melanie Justine para TV</h3>
                <p>Secuencia de introducción animada para televisión con animación profesional y branding visual integrado.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>¿Listo para transformar tu marca?</h2>
          <p>Estoy disponible para nuevos proyectos y colaboraciones estratégicas</p>
          <a href="mailto:cesar@example.com" className="btn btn-primary mt-20">
            Iniciar Conversación
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
