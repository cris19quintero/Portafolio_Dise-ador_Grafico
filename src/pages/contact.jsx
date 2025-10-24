import React from 'react';
import './contact.css';

function Contact() {
  const contactMethods = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: '📱',
      description: 'Conversación directa por WhatsApp',
      desktopLink: 'https://wa.me/50765505130?text=Hola%20César,%20me%20interesa%20hablar%20sobre%20un%20proyecto',
      mobileLink: 'whatsapp://send?phone=50765505130&text=Hola%20César,%20me%20interesa%20hablar%20sobre%20un%20proyecto'
    },
    {
      id: 'email',
      name: 'Email',
      icon: '✉️',
      description: 'Envíame un correo directo',
      link: 'mailto:cesarsaavedra0727@gmail.com?subject=Interesado%20en%20tus%20servicios'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: '📷',
      description: 'Sígueme en Instagram',
      link: 'https://instagram.com/cesarsaavedra0727'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: '💼',
      description: 'Conéctate en LinkedIn',
      link: 'https://www.linkedin.com/in/cesar-saavedra-ab8b9a89'
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

  const handleContactClick = (method) => {
    const link = getContactLink(method);
    window.open(link, '_blank');
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
              <div
                key={method.id}
                onClick={() => handleContactClick(method)}
                className="contact-method-card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="contact-icon">{method.icon}</div>
                <h3>{method.name}</h3>
                <p>{method.description}</p>
                <span className="contact-arrow">→</span>
              </div>
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
          <button 
            className="btn btn-primary mt-20"
            onClick={() => handleContactClick(contactMethods[0])}
          >
            Contactar por WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
}

export default Contact;