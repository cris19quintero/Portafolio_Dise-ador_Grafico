import React from 'react';
import './About.css';

function About() {
  return (
    <div className="page page-about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>Sobre Mí</h1>
          <p>Conoce mi trayectoria y experiencia</p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section bio-section">
        <div className="container">
          <div className="bio-grid">
            <div className="bio-text fade-in">
              <h2>César A. Saavedra</h2>
              <h3>Diseñador Gráfico & Arquitecto</h3>

              <p>
                Profesional en Licenciatura en Diseño Gráfico y Arquitectura con grandes atributos de liderazgo y responsabilidad. 
                Mi passion radica en transformar ideas abstractas en soluciones visuales concretas que comunican efectivamente y generan impacto real.
              </p>

              <p>
                Mi trayectoria combina formación rigurosa en diseño gráfico con pensamiento arquitectónico, permitiéndome abordar proyectos desde múltiples perspectivas. 
                Esta combinación única de disciplinas me permite crear no solo elementos visuales hermosos, sino también funcionalmente estratégicos.
              </p>

              <div className="bio-highlights">
                <div className="bio-highlight">
                  <span className="highlight-icon">📚</span>
                  <div>
                    <h4>Formación</h4>
                    <p>Licenciatura en Diseño Gráfico y Arquitectura</p>
                  </div>
                </div>

                <div className="bio-highlight">
                  <span className="highlight-icon">🎯</span>
                  <div>
                    <h4>Especialidades</h4>
                    <p>9 áreas de expertise complementarias</p>
                  </div>
                </div>

                <div className="bio-highlight">
                  <span className="highlight-icon">💾</span>
                  <div>
                    <h4>Portafolio</h4>
                    <p>2.73 GB en activos digitales profesionales</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bio-image slide-in-right">
              <div className="image-placeholder">
                <span>👨‍💼</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section approach-section">
        <div className="container">
          <div className="section-header">
            <h2>Mi Enfoque</h2>
            <p>Metodología y valores profesionales</p>
          </div>

          <div className="approach-grid grid grid-2">
            <div className="approach-card card fade-in">
              <span className="approach-icon">🎨</span>
              <h3>Creatividad Estratégica</h3>
              <p>
                No creo simplemente por crear. Cada proyecto está pensado estratégicamente para cumplir objetivos comerciales concretos 
                y generar conexión emocional con el público objetivo.
              </p>
            </div>

            <div className="approach-card card fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="approach-icon">⚙️</span>
              <h3>Precisión Técnica</h3>
              <p>
                Mi formación arquitectónica garantiza que cada proyecto sea técnicamente sólido, escalable y funcional. 
                La belleza visual sin estructura es incompleta.
              </p>
            </div>

            <div className="approach-card card fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="approach-icon">🤝</span>
              <h3>Colaboración Activa</h3>
              <p>
                Trabajo estrechamente con mis clientes para entender su visión, sus desafíos y sus objetivos. 
                Tu éxito es mi éxito.
              </p>
            </div>

            <div className="approach-card card fade-in" style={{ animationDelay: '0.3s' }}>
              <span className="approach-icon">🚀</span>
              <h3>Innovación Continua</h3>
              <p>
                Mantengo actualización constante en tendencias de diseño, tecnología y estrategia digital. 
                El mundo visual evoluciona rápidamente y yo evoluciono con él.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills-section">
        <div className="container">
          <div className="section-header">
            <h2>Áreas de Expertise</h2>
            <p>Disciplinas en las que puedo agregar valor a tu proyecto</p>
          </div>

          <div className="skills-grid grid grid-3">
            <div className="skill-card fade-in">
              <h3>Diseño Gráfico</h3>
              <ul>
                <li>Identidades visuales</li>
                <li>Fotografía profesional</li>
                <li>Diseño digital</li>
              </ul>
            </div>

            <div className="skill-card fade-in" style={{ animationDelay: '0.1s' }}>
              <h3>Campaña Publicitaria</h3>
              <ul>
                <li>Estrategia visual</li>
                <li>Adaptación multiplataforma</li>
                <li>Contenido comercial</li>
              </ul>
            </div>

            <div className="skill-card fade-in" style={{ animationDelay: '0.2s' }}>
              <h3>Animaciones</h3>
              <ul>
                <li>Motion graphics</li>
                <li>Contenido dinámico</li>
                <li>Transiciones profesionales</li>
              </ul>
            </div>

            <div className="skill-card fade-in" style={{ animationDelay: '0.3s' }}>
              <h3>Diseño 3D</h3>
              <ul>
                <li>Modelado tridimensional</li>
                <li>Visualización arquitectónica</li>
                <li>Representación de productos</li>
              </ul>
            </div>

            <div className="skill-card fade-in" style={{ animationDelay: '0.4s' }}>
              <h3>Renders & Visuals</h3>
              <ul>
                <li>Fotorrealismo digital</li>
                <li>Iluminación profesional</li>
                <li>Ambientación estratégica</li>
              </ul>
            </div>

            <div className="skill-card fade-in" style={{ animationDelay: '0.5s' }}>
              <h3>Espacios & Experiencias</h3>
              <ul>
                <li>Diseño de interiores</li>
                <li>Experiencias inmersivas</li>
                <li>Narrativa visual</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container text-center">
          <h2>¿Listo para colaborar?</h2>
          <p>Contáctame para discutir cómo puedo ayudarte a llevar tu proyecto al siguiente nivel</p>
          <a href="mailto:cesar@example.com" className="btn btn-primary mt-20">
            Iniciar Conversación
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
