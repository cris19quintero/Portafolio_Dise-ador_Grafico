import React from 'react';
import './Contact.css';

function Contact() {
  const contactMethods = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      emoji: '💬',
      description: 'Conversación directa por WhatsApp',
      desktopLink: 'https://wa.me/1234567890?text=Hola%20César,%20me%20interesa%20hablar%20sobre%20un%20proyecto',
      mobileLink: 'whatsapp://send?phone=1234567890&text=Hola%20César,%20me%20interesa%20hablar%20sobre%20un%20proyecto'
    },
    {
      id: 'email',
      name: 'Email',
      emoji: '📧',
      description: 'Envíame un correo directo',
      link: 'mailto:cesar@example.com?subject=Interesado%20en%20tus%20servicios'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      emoji: '📸',
      description: 'Sígueme en Instagram',
      link: 'https://instagram.com/cesar.saavedra'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      emoji: '🔗',
      description: 'Conéctate en LinkedIn',
      link: 'https://linkedin.com/in/cesar-saavedra'
    }
  ];

  const getContactLink = (method) => {
    if (method.id === 'whatsapp') {
      // Detectar si es móvil
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      return isMobile ? method.mobileLink : method.desktopLink;
    }
    return method.link;
  };

  return (
    <div className="page page-contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Ponte en Contacto</h1>
          <p>Estoy disponible para nuevos proyectos y colaboraciones</p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Métodos de Contacto</h2>
            <p>Elige la forma que más te convenga para comunicarte</p>
          </div>

          <div className="contact-methods-grid">
            {contactMethods.map((method, index) => (
              <a
                key={method.id}
                href={getContactLink(method)}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method-card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="contact-icon">{method.emoji}</div>
                <h3>{method.name}</h3>
                <p>{method.description}</p>
                <span className="contact-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section contact-info-section">
        <div className="container">
          <div className="info-grid">
            <div className="info-card fade-in">
              <h3>Respuesta Rápida</h3>
              <p>Intento responder a todos los mensajes dentro de 24 horas</p>
            </div>

            <div className="info-card fade-in" style={{ animationDelay: '0.1s' }}>
              <h3>Disponibilidad</h3>
              <p>Disponible para proyectos a corto y largo plazo</p>
            </div>

            <div className="info-card fade-in" style={{ animationDelay: '0.2s' }}>
              <h3>Experiencia</h3>
              <p>Más de 8 áreas de expertise en diseño y arquitectura</p>
            </div>

            <div className="info-card fade-in" style={{ animationDelay: '0.3s' }}>
              <h3>Consulta Gratis</h3>
              <p>Primera consulta sin compromiso para evaluar tu proyecto</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="container text-center">
          <h2>¿Listo para comenzar?</h2>
          <p>No dudes en contactarme con tus ideas, preguntas o proyectos</p>
        </div>
      </section>
    </div>
  );
}

export default Contact;