import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/WhatWeDo.css";

// Imágenes importadas
import landing1 from "../assets/landing1.jpg";
import landing2 from "../assets/landing2.jpg";
import landing3 from "../assets/landing3.jpg";
import landing4 from "../assets/landing4.jpg";

import corporate1 from "../assets/corporate1.jpg";
import corporate2 from "../assets/corporate2.jpg";
import corporate3 from "../assets/corporate3.jpg";
import corporate4 from "../assets/corporate4.jpg";

import ecommerce1 from "../assets/ecommerce1.jpg";
import ecommerce2 from "../assets/ecommerce2.jpg";
import ecommerce3 from "../assets/ecommerce3.jpg";
import ecommerce4 from "../assets/ecommerce4.jpg";

const WhatWeDo = () => {
  const { t } = useTranslation();

  return (
    <section className="services" id="services">
      <h2>{t("whatwedo.title")}</h2>
      <p>{t("whatwedo.subtitle")}</p>

      {/* Landing Page */}
      <div className="service-category">
        <h3>{t("whatwedo.landing.title")}</h3>
        <p>{t("whatwedo.landing.desc")}</p>
        <p><strong>{t("whatwedo.landing.benefits")}:</strong></p>
        <ul>
          {t("whatwedo.landing.list", { returnObjects: true }).map((item, index) => (
            <li key={index}>✅ {item}</li>
          ))}
        </ul>
        <p><strong>{t("whatwedo.landing.ideal")}</strong></p>
        <div className="image-grid">
          <img src={landing1} alt="Landing Page 1" />
          <img src={landing2} alt="Landing Page 2" />
          <img src={landing3} alt="Landing Page 3" />
          <img src={landing4} alt="Landing Page 4" />
        </div>
        <Link to="/contact" className="service-button">{t("whatwedo.button")}</Link>
      </div>

      {/* Web Corporativa */}
      <div className="service-category">
        <h3>{t("whatwedo.corporate.title")}</h3>
        <p>{t("whatwedo.corporate.desc")}</p>
        <p><strong>{t("whatwedo.corporate.benefits")}:</strong></p>
        <ul>
          {t("whatwedo.corporate.list", { returnObjects: true }).map((item, index) => (
            <li key={index}>✅ {item}</li>
          ))}
        </ul>
        <p><strong>{t("whatwedo.corporate.ideal")}</strong></p>
        <div className="image-grid">
          <img src={corporate1} alt="Corporate Website 1" />
          <img src={corporate2} alt="Corporate Website 2" />
          <img src={corporate3} alt="Corporate Website 3" />
          <img src={corporate4} alt="Corporate Website 4" />
        </div>
        <Link to="/contact" className="service-button">{t("whatwedo.button")}</Link>
      </div>

      {/* Tienda Online */}
      <div className="service-category">
        <h3>{t("whatwedo.ecommerce.title")}</h3>
        <p>{t("whatwedo.ecommerce.desc")}</p>
        <p><strong>{t("whatwedo.ecommerce.benefits")}:</strong></p>
        <ul>
          {t("whatwedo.ecommerce.list", { returnObjects: true }).map((item, index) => (
            <li key={index}>✅ {item}</li>
          ))}
        </ul>
        <p><strong>{t("whatwedo.ecommerce.ideal")}</strong></p>
        <div className="image-grid">
          <img src={ecommerce1} alt="Online Store 1" />
          <img src={ecommerce2} alt="Online Store 2" />
          <img src={ecommerce3} alt="Online Store 3" />
          <img src={ecommerce4} alt="Online Store 4" />
        </div>
        <Link to="/contact" className="service-button">{t("whatwedo.button")}</Link>
      </div>

    </section>
  );
};

export default WhatWeDo;