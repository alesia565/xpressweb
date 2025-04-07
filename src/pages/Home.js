import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/Home.css";

import heroImage from "../assets/contact.jpg";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import process1 from "../assets/process1.jpg";
import process2 from "../assets/process2.jpg";
import process3 from "../assets/process3.jpg";

import { motion } from "framer-motion";

const fadeFromBottom = {
  initial: { opacity: 0, y: 80 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1 }
};

const getCardAnimation = (direction) => {
  const offset = 100;
  const variants = {
    topLeft: { x: -offset, y: -offset },
    topRight: { x: offset, y: -offset },
    bottomLeft: { x: -offset, y: offset },
    bottomRight: { x: offset, y: offset }
  };
  return {
    initial: { opacity: 0, ...variants[direction] },
    animate: { opacity: 1, x: 0, y: 0 },
    transition: { duration: 0.8 }
  };
};

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      {/* Hero */}
      <motion.section className="hero" {...fadeFromBottom}>
        <img src={heroImage} alt="Hero Background" className="hero-image" />
        <div className="hero-content">
          <h1>{t("home.hero.title")}</h1>
          <p>{t("home.hero.subtitle")}</p>
          <Link to="/contact" className="cta-button">
            {t("home.hero.button")}
          </Link>
        </div>
      </motion.section>

      {/* Beneficios */}
      <section className="benefits">
        <h2>{t("home.benefits.title")}</h2>
        <div className="benefits-grid">
          {[1, 2, 3].map((i, index) => {
            const directions = ["topLeft", "topRight", "bottomLeft"];
            return (
              <motion.div
                key={i}
                className="benefit-item"
                {...getCardAnimation(directions[index])}
                whileHover={{ scale: 1.05 }}
              >
                <h3>{t(`home.benefits.item${i}.title`)}</h3>
                <p>{t(`home.benefits.item${i}.text`)}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Servicios */}
      <section className="services">
        <h2>{t("home.services.title")}</h2>
        <div className="service-grid">
          {[service1, service2, service3].map((img, index) => {
            const directions = ["bottomRight", "topLeft", "topRight"];
            return (
              <motion.div
                key={index}
                className="service-item"
                {...getCardAnimation(directions[index])}
                whileHover={{ scale: 1.05 }}
              >
                <img src={img} alt={`Servicio ${index + 1}`} />
                <h3>{t(`home.services.item${index + 1}.title`)}</h3>
                <p>{t(`home.services.item${index + 1}.text`)}</p>
                <Link to="/whatwedo" className="service-button">
                  {t("home.services.button")}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Proceso */}
      <section className="process">
        <h2>{t("home.process.title")}</h2>
        <div className="process-grid">
          {[process1, process2, process3].map((img, index) => {
            const directions = ["topLeft", "bottomLeft", "bottomRight"];
            return (
              <motion.div
                key={index}
                className="process-step"
                {...getCardAnimation(directions[index])}
                whileHover={{ scale: 1.05 }}
              >
                <img src={img} alt={`Paso ${index + 1}`} />
                <h3>{t(`home.process.item${index + 1}.title`)}</h3>
                <p>{t(`home.process.item${index + 1}.text`)}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <motion.section className="cta" {...fadeFromBottom}>
        <h2>{t("home.cta.title")}</h2>
        <p>{t("home.cta.text")}</p>
        <Link to="/contact" className="cta-button">
          {t("home.cta.button")}
        </Link>
      </motion.section>
    </div>
  );
};

export default Home;
