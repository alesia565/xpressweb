import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
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

const fadeIn = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const WhatWeDo = () => {
  const { t } = useTranslation();

  const landingList = t("whatwedo.landing.list", { returnObjects: true });
  const corporateList = t("whatwedo.corporate.list", { returnObjects: true });
  const ecommerceList = t("whatwedo.ecommerce.list", { returnObjects: true });

  const renderImages = (images) =>
    images.map((img, i) => (
      <motion.img
        key={i}
        src={img}
        alt={`Service ${i + 1}`}
        className="interactive-image"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
    ));

  const renderList = (items) =>
    Array.isArray(items)
      ? items.map((item, i) => (
          <motion.li
            key={i}
            whileHover={{ scale: 1.03, color: "#e600a8" }}
            transition={{ duration: 0.2 }}
          >
            ✅ {item}
          </motion.li>
        ))
      : null;

  return (
    <motion.section className="services" id="services" {...fadeIn}>
      <h2>{t("whatwedo.title")}</h2>
      <p>{t("whatwedo.subtitle")}</p>

      {/* Landing Page */}
      <motion.div className="service-category" {...fadeIn}>
        <h3>{t("whatwedo.landing.title")}</h3>
        <p>{t("whatwedo.landing.desc")}</p>
        <p><strong>{t("whatwedo.landing.benefits")}:</strong></p>
        <ul>{renderList(landingList)}</ul>
        <p><strong>{t("whatwedo.landing.ideal")}</strong></p>
        <div className="image-grid">{renderImages([landing1, landing2, landing3, landing4])}</div>
        <Link to="/contact" className="service-button">{t("whatwedo.button")}</Link>
      </motion.div>

      {/* Web Corporativa */}
      <motion.div className="service-category" {...fadeIn}>
        <h3>{t("whatwedo.corporate.title")}</h3>
        <p>{t("whatwedo.corporate.desc")}</p>
        <p><strong>{t("whatwedo.corporate.benefits")}:</strong></p>
        <ul>{renderList(corporateList)}</ul>
        <p><strong>{t("whatwedo.corporate.ideal")}</strong></p>
        <div className="image-grid">{renderImages([corporate1, corporate2, corporate3, corporate4])}</div>
        <Link to="/contact" className="service-button">{t("whatwedo.button")}</Link>
      </motion.div>

      {/* Tienda Online */}
      <motion.div className="service-category" {...fadeIn}>
        <h3>{t("whatwedo.ecommerce.title")}</h3>
        <p>{t("whatwedo.ecommerce.desc")}</p>
        <p><strong>{t("whatwedo.ecommerce.benefits")}:</strong></p>
        <ul>{renderList(ecommerceList)}</ul>
        <p><strong>{t("whatwedo.ecommerce.ideal")}</strong></p>
        <div className="image-grid">{renderImages([ecommerce1, ecommerce2, ecommerce3, ecommerce4])}</div>
        <Link to="/contact" className="service-button">{t("whatwedo.button")}</Link>
      </motion.div>
    </motion.section>
  );
};

export default WhatWeDo;
