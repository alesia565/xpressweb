import React from "react";
import "../styles/Services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Nuestros Servicios</h2>
      <p>Ofrecemos páginas web profesionales para negocios, emprendimientos y marcas personales.</p>

      <div className="service-cards">
        <div className="service-card">
          <h3>Landing Page</h3>
          <p>Una página web sencilla con toda la información esencial de tu negocio.</p>
          <p><strong>Desde 300€</strong></p>
        </div>

        <div className="service-card">
          <h3>Web Corporativa</h3>
          <p>Ideal para empresas que necesitan una presencia profesional en línea.</p>
          <p><strong>Desde 1000€</strong></p>
        </div>

        <div className="service-card">
          <h3>E-commerce</h3>
          <p>Tiendas en línea con carrito de compras y pasarela de pago.</p>
          <p><strong>Desde 5000€</strong></p>
        </div>
      </div>

      <a href="#contact" className="cta-button">Solicita tu página web</a>
    </section>
  );
};

export default Services;