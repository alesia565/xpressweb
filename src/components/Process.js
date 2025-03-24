import React from "react";
import "../styles/Process.css";
import { useTranslation } from "react-i18next";

// Importar imágenes
import consultationImg from "../assets/consultation.jpg";
import designImg from "../assets/design.jpg";
import developmentImg from "../assets/development.jpg";
import launchImg from "../assets/launch.jpg";

const Process = () => {
  const { t } = useTranslation();

  return (
    <div className="process-page">
      {/* Hero Section */}
      <section className="process-hero">
        <h1>{t("process.title")}</h1>
        <p>{t("process.subtitle")}</p>
      </section>

      {/* Etapas del Proceso */}
      <section className="process-steps">
        <div className="step">
          <img src={consultationImg} alt={t("process.step1.title")} />
          <div className="step-content">
            <h2>1. {t("process.step1.title")}</h2>
            <p>{t("process.step1.text")}</p>
          </div>
        </div>

        <div className="step reverse">
          <img src={designImg} alt={t("process.step2.title")} />
          <div className="step-content">
            <h2>2. {t("process.step2.title")}</h2>
            <p>{t("process.step2.text")}</p>
          </div>
        </div>

        <div className="step">
          <img src={developmentImg} alt={t("process.step3.title")} />
          <div className="step-content">
            <h2>3. {t("process.step3.title")}</h2>
            <p>{t("process.step3.text")}</p>
          </div>
        </div>

        <div className="step reverse">
          <img src={launchImg} alt={t("process.step4.title")} />
          <div className="step-content">
            <h2>4. {t("process.step4.title")}</h2>
            <p>{t("process.step4.text")}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;