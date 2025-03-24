import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/Home.css";

// Importar imágenes
import heroImage from "../assets/hero.jpg";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import process1 from "../assets/process1.jpg";
import process2 from "../assets/process2.jpg";
import process3 from "../assets/process3.jpg";

const Home = () => {
  const { t } = useTranslation(); // Hook para traducir

  return (
    <div className="home">
      
      {/* Sección Hero */}
      <section className="hero">
        <img src={heroImage} alt="Hero Background" className="hero-image" />
        <div className="hero-content">
          <h1>{t("home.hero.title")}</h1>
          <p>{t("home.hero.subtitle")}</p>
          <Link to="/contact" className="cta-button">{t("home.hero.button")}</Link>
        </div>
      </section>

      {/* Beneficios de una Página Web */}
      <section className="benefits">
        <h2>{t("home.benefits.title")}</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h3>{t("home.benefits.item1.title")}</h3>
            <p>{t("home.benefits.item1.text")}</p>
          </div>
          <div className="benefit-item">
            <h3>{t("home.benefits.item2.title")}</h3>
            <p>{t("home.benefits.item2.text")}</p>
          </div>
          <div className="benefit-item">
            <h3>{t("home.benefits.item3.title")}</h3>
            <p>{t("home.benefits.item3.text")}</p>
          </div>
        </div>
      </section>

      {/* Nuestros Servicios */}
      <section className="services">
        <h2>{t("home.services.title")}</h2>
        <div className="service-grid">
          <div className="service-item">
            <img src={service1} alt="Landing Page" />
            <h3>{t("home.services.item1.title")}</h3>
            <p>{t("home.services.item1.text")}</p>
            <Link to="/whatwedo" className="service-button">{t("home.services.button")}</Link>
          </div>
          <div className="service-item">
            <img src={service2} alt="Web Corporativa" />
            <h3>{t("home.services.item2.title")}</h3>
            <p>{t("home.services.item2.text")}</p>
            <Link to="/whatwedo" className="service-button">{t("home.services.button")}</Link>
          </div>
          <div className="service-item">
            <img src={service3} alt="Tienda Online" />
            <h3>{t("home.services.item3.title")}</h3>
            <p>{t("home.services.item3.text")}</p>
            <Link to="/whatwedo" className="service-button">{t("home.services.button")}</Link>
          </div>
        </div>
      </section>

      {/* Nuestro Proceso de Trabajo */}
      <section className="process">
        <h2>{t("home.process.title")}</h2>
        <div className="process-grid">
          <div className="process-step">
            <img src={process1} alt="Consulta" />
            <h3>{t("home.process.item1.title")}</h3>
            <p>{t("home.process.item1.text")}</p>
          </div>
          <div className="process-step">
            <img src={process2} alt="Diseño" />
            <h3>{t("home.process.item2.title")}</h3>
            <p>{t("home.process.item2.text")}</p>
          </div>
          <div className="process-step">
            <img src={process3} alt="Entrega" />
            <h3>{t("home.process.item3.title")}</h3>
            <p>{t("home.process.item3.text")}</p>
          </div>
        </div>
      </section>

      {/* Llamado a la Acción */}
      <section className="cta">
        <h2>{t("home.cta.title")}</h2>
        <p>{t("home.cta.text")}</p>
        <Link to="/contact" className="cta-button">{t("home.cta.button")}</Link>
      </section>

    </div>
  );
};

export default Home;