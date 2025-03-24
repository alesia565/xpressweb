import React from "react";
import "../styles/Footer.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p>© 2025 XpressWebPro - {t("footer.rights")}</p>
      <p>
        <Link to="/contact">{t("footer.contact")}</Link> |{" "}
        <Link to="/whatwedo">{t("footer.services")}</Link>
      </p>
    </footer>
  );
};

export default Footer;