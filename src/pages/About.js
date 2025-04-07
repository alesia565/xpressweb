import React from "react";
import "../styles/About.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import teamImage from "../assets/team.jpg";
import missionImage from "../assets/mission.jpg";
import valuesImage from "../assets/values.jpg";
import testimonialsImage from "../assets/testimonials.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      {/* Hero */}
      <motion.section className="about-hero" {...fadeInUp}>
        <div className="about-hero-content">
          <h1>{t("about.hero.title")}</h1>
          <p>{t("about.hero.subtitle")}</p>
        </div>
      </motion.section>

      {/* ¿Quiénes somos? */}
      <motion.section className="about-intro" {...fadeInUp}>
        <div className="about-text">
          <h2>{t("about.intro.title")}</h2>
          <p>{t("about.intro.text1")}</p>
          <p>{t("about.intro.text2")}</p>
        </div>
        <motion.img
          src={teamImage}
          alt="Equipo"
          className="about-image"
          whileHover={{ scale: 1.03 }}
        />
      </motion.section>

      {/* Misión y Visión */}
      <motion.section className="about-mission" {...fadeInUp}>
        <motion.img
          src={missionImage}
          alt="Misión"
          className="about-image"
          whileHover={{ scale: 1.03 }}
        />
        <div className="about-text">
          <h2>{t("about.mission.title")}</h2>
          <p>{t("about.mission.text")}</p>
          <h2>{t("about.vision.title")}</h2>
          <p>{t("about.vision.text")}</p>
        </div>
      </motion.section>

      {/* Valores */}
      <motion.section className="about-values" {...fadeInUp}>
        <h2>{t("about.values.title")}</h2>
        <div className="values-grid">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="value-item"
              whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
            >
              {t(`about.values.item${i}`)}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ¿Por qué elegirnos? */}
      <motion.section className="about-why" {...fadeInUp}>
        <h2>{t("about.why.title")}</h2>
        <p>{t("about.why.subtitle")}</p>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.05, color: "#fuchsia" }}
            >
              ✅ {t(`about.why.reason${i}`)}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* Testimonios */}
      <motion.section className="about-testimonials" {...fadeInUp}>
        <h2>{t("about.testimonials.title")}</h2>
        <motion.img
          src={testimonialsImage}
          alt="Clientes satisfechos"
          className="about-image"
          whileHover={{ scale: 1.03 }}
        />
        <div className="testimonial">
          <motion.p whileHover={{ scale: 1.02 }}>
            ⭐️⭐️⭐️⭐️⭐️ {t("about.testimonials.testimonial1")}
          </motion.p>
        </div>
        <div className="testimonial">
          <motion.p whileHover={{ scale: 1.02 }}>
            ⭐️⭐️⭐️⭐️⭐️ {t("about.testimonials.testimonial2")}
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
