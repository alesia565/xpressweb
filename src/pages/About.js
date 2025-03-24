import React from "react";
import "../styles/About.css";
import { useTranslation } from "react-i18next";

// Importar imágenes
import teamImage from "../assets/team.jpg";
import missionImage from "../assets/mission.jpg";
import valuesImage from "../assets/values.jpg";
import testimonialsImage from "../assets/testimonials.jpg";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>{t("about.hero.title")}</h1>
          <p>{t("about.hero.subtitle")}</p>
        </div>
      </section>

      {/* Quiénes somos */}
      <section className="about-intro">
        <div className="about-text">
          <h2>{t("about.intro.title")}</h2>
          <p>{t("about.intro.text1")}</p>
          <p>{t("about.intro.text2")}</p>
        </div>
        <img src={teamImage} alt="Equipo" className="about-image" />
      </section>

      {/* Misión y Visión */}
      <section className="about-mission">
        <img src={missionImage} alt="Misión" className="about-image" />
        <div className="about-text">
          <h2>{t("about.mission.title")}</h2>
          <p>{t("about.mission.text")}</p>
          <h2>{t("about.vision.title")}</h2>
          <p>{t("about.vision.text")}</p>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="about-values">
        <h2>{t("about.values.title")}</h2>
        <div className="values-grid">
          <div className="value-item">🚀 {t("about.values.item1")}</div>
          <div className="value-item">💡 {t("about.values.item2")}</div>
          <div className="value-item">🤝 {t("about.values.item3")}</div>
          <div className="value-item">🎯 {t("about.values.item4")}</div>
        </div>
      </section>

      {/* ¿Por qué elegirnos? */}
      <section className="about-why">
        <h2>{t("about.why.title")}</h2>
        <p>{t("about.why.subtitle")}</p>
        <ul>
          <li>✅ {t("about.why.reason1")}</li>
          <li>✅ {t("about.why.reason2")}</li>
          <li>✅ {t("about.why.reason3")}</li>
          <li>✅ {t("about.why.reason4")}</li>
          <li>✅ {t("about.why.reason5")}</li>
        </ul>
      </section>

      {/* Testimonios */}
      <section className="about-testimonials">
        <h2>{t("about.testimonials.title")}</h2>
        <img src={testimonialsImage} alt="Clientes satisfechos" className="about-image" />
        <div className="testimonial">
          <p>⭐️⭐️⭐️⭐️⭐️ {t("about.testimonials.testimonial1")}</p>
        </div>
        <div className="testimonial">
          <p>⭐️⭐️⭐️⭐️⭐️ {t("about.testimonials.testimonial2")}</p>
        </div>
      </section>
    </div>
  );
};

export default About;