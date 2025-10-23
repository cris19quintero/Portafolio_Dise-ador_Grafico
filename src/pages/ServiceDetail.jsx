import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ServiceDetail.css';

function ServiceDetail() {
  const { category } = useParams();

  const serviceDetails = {
    'diseno-grafico': {
      name: 'Diseño Gráfico',
      emoji: '🎨',
      description: 'Especializado en crear identidades visuales impactantes que conectan con el público y potencian la presencia digital.',
      highlights: [
        'Diseño de Logos Atractivos y Texturizados',
        'Fotografía y Postproducción Profesional',
        'Contenido Visual para Plataformas Digitales'
      ],
      projects: [
        { title: 'Identidad Visual Completa', description: 'Sistema de diseño coherente' },
        { title: 'Portadas de Álbumes', description: 'Diseño musical profesional' },
        { title: 'Contenido para Redes', description: 'Posts optimizados para cada plataforma' }
      ]
    },
    'campanas': {
      name: 'Campañas Publicitarias',
      emoji: '🎯',
      description: 'Diseño creativo para campañas publicitarias de alto impacto con propósito comercial y estrategia visual diferenciadora.',
      highlights: [
        'Diseño con Propósito Comercial',
        'Estrategia Visual que Diferencia',
        'Adaptación Multiplataforma'
      ],
      projects: [
        { title: 'Campaña Claudio Mamá', description: 'Videoproducción y animación' },
        { title: 'Contenido Promocional', description: 'Materiales publicitarios integrados' },
        { title: 'Social Media Campaigns', description: 'Estrategia visual completa' }
      ]
    },
    'animaciones': {
      name: 'Animaciones',
      emoji: '🎬',
      description: 'Crear experiencias visuales dinámicas que comunican, emocionan y posicionan marcas con autenticidad.',
      highlights: [
        'Animaciones Envolventes para Redes',
        'Logotipos Animados',
        'Contenido Interactivo'
      ],
      projects: [
        { title: 'Intro para TV', description: 'Secuencia profesional animada' },
        { title: 'Transiciones Dinámicas', description: 'Efectos visuales sofisticados' },
        { title: 'Motion Graphics', description: 'Contenido dinámico para redes' }
      ]
    },
    'fichas-tecnicas': {
      name: 'Fichas Técnicas',
      emoji: '📐',
      description: 'Desarrollo de fichas técnicas precisas y funcionales que combinan estética con especificaciones de fabricación.',
      highlights: [
        'Detalles Constructivos Claros',
        'Documentación Técnica Completa',
        'Visualización para Producción'
      ],
      projects: [
        { title: 'Mobiliario Comercial', description: 'Especificaciones técnicas' },
        { title: 'Sistemas de Exhibición', description: 'Documentación de instalación' },
        { title: 'Diseño Estructural', description: 'Planos y especificaciones' }
      ]
    },
    'dibujo-3d': {
      name: 'Dibujo 3D',
      emoji: '📦',
      description: 'Visualización 3D detallada de mobiliarios y espacios con enfoque gráfico-arquitectónico profesional.',
      highlights: [
        'Modelado 3D Detallado',
        'Representaciones Precisas',
        'Visualización Arquitectónica'
      ],
      projects: [
        { title: 'Mobiliarios de Exhibición', description: 'Modelos 3D precisos' },
        { title: 'Espacios Comerciales', description: 'Visualización completa' },
        { title: 'Productos y Prototipos', description: 'Renders conceptuales' }
      ]
    },
    'render': {
      name: 'Renders',
      emoji: '💡',
      description: 'Creación de renders fotorrealistas con iluminación profesional, texturas realistas y ambientación estratégica.',
      highlights: [
        'Renders de Alta Calidad',
        'Iluminación Profesional',
        'Texturas Realistas'
      ],
      projects: [
        { title: 'Espacios Comerciales', description: 'Renders fotorrealistas' },
        { title: 'Ambientación Completa', description: 'Diseño de interiores' },
        { title: 'Visualización de Proyectos', description: 'Representación realista' }
      ]
    },
    'mobiliarios': {
      name: 'Diseño de Mobiliarios',
      emoji: '🏬',
      description: 'Diseño de exhibición que transforma espacios en experiencias de marca, desde concepto hasta fabricación e instalación.',
      highlights: [
        'Diseño Conceptual Estratégico',
        'Fabricación e Instalación',
        'Showrooms Completos'
      ],
      projects: [
        { title: 'Tiendas Comerciales', description: 'Diseño integral de espacios' },
        { title: 'Corners de Exhibición', description: 'Mobiliario especializado' },
        { title: 'Showrooms', description: 'Experiencias de marca' }
      ]
    },
    'recorrido-virtual': {
      name: 'Recorrido Virtual',
      emoji: '🏡',
      description: 'Transformación de conceptos arquitectónicos en experiencias inmersivas que comunican con precisión.',
      highlights: [
        'Recorridos Virtuales Interactivos',
        'Modelado 3D Arquitectónico',
        'Experiencias Inmersivas'
      ],
      projects: [
        { title: 'Espacios Residenciales', description: 'Visualización interactiva' },
        { title: 'Proyectos Comerciales', description: 'Recorrido virtual completo' },
        { title: 'Áreas Comunes', description: 'Experiencia inmersiva' }
      ]
    }
  };

  const service = serviceDetails[category] || serviceDetails['diseno-grafico'];

  return (
    <div className="page page-service-detail">
      {/* Header */}
      <section className="service-header">
        <div className="container">
          <Link to="/projects" className="back-link">← Volver a Proyectos</Link>
          <h1>{service.emoji} {service.name}</h1>
          <p>{service.description}</p>
        </div>
      </section>

      {/* Highlights */}
      <section className="section highlights-section">
        <div className="container">
          <h2>Especialidades</h2>
          <div className="highlights-grid">
            {service.highlights.map((highlight, index) => (
              <div key={index} className="highlight-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="highlight-number">{String(index + 1).padStart(2, '0')}</div>
                <h3>{highlight}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="section projects-gallery-section">
        <div className="container">
          <h2>Proyectos en esta categoría</h2>
          <div className="projects-showcase">
            {service.projects.map((project, index) => (
              <div key={index} className="project-showcase-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="project-thumbnail">
                  <span className="placeholder-icon">📸</span>
                </div>
                <div className="project-details">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="section gallery-placeholder-section">
        <div className="container">
          <h2>Galería de Trabajos</h2>
          <div className="gallery-placeholder">
            <div className="placeholder-message">
              <h3>📂 Tus imágenes y videos irán aquí</h3>
              <p>
                Este espacio está listo para mostrar tus proyectos con imágenes y videos.
                Puedes organizar tus activos por categoría para una presentación profesional.
              </p>
              <p className="hint">Con más de 2.73 GB en activos digitales, tienes amplio contenido para mostrar aquí.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container text-center">
          <h2>¿Interesado en este servicio?</h2>
          <p>Contáctame para discutir tu proyecto específico</p>
          <a href="mailto:cesar@example.com" className="btn btn-primary">
            Solicitar Presupuesto
          </a>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetail;
