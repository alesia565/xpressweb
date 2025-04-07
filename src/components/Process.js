import React from "react";
import "../styles/Process.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

// Imágenes
import consultationImg from "../assets/consultation.webp";
import designImg from "../assets/design.webp";
import developmentImg from "../assets/development.webp";
import launchImg from "../assets/launch.webp";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const Process = () => {
  const { t } = useTranslation();

  const steps = [
    {
      img: consultationImg,
      title: t("process.step1.title"),
      text: t("process.step1.text"),
      reverse: false
    },
    {
      img: designImg,
      title: t("process.step2.title"),
      text: t("process.step2.text"),
      reverse: true
    },
    {
      img: developmentImg,
      title: t("process.step3.title"),
      text: t("process.step3.text"),
      reverse: false
    },
    {
      img: launchImg,
      title: t("process.step4.title"),
      text: t("process.step4.text"),
      reverse: true
    }
  ];

  return (
    <div className="process-page">
      {/* Hero */}
      <motion.section className="process-hero" {...fadeInUp}>
        <h1>{t("process.title")}</h1>
        <p>{t("process.subtitle")}</p>
      </motion.section>

      {/* Pasos del proceso */}
      <section className="process-steps">
        {steps.map((step, index) => (
          <motion.div
            className={`step ${step.reverse ? "reverse" : ""}`}
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={step.img}
              alt={step.title}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
            <div className="step-content">
              <h2>{index + 1}. {step.title}</h2>
              <p>{step.text}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Process;
