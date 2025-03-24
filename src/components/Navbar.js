import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false); // Menú de idioma
  const { t, i18n } = useTranslation();

  // Función para cerrar menú al hacer clic
  const closeMenu = () => setMenuOpen(false);

  // Función para cambiar idioma
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLanguageOpen(false); // Cerrar selector al seleccionar idioma
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <span className="logo-main">XWP</span>
          <span className="logo-line">|</span>
          <span className="logo-sub">XpressWebPro</span>
        </Link>
      </div>

      {/* Menú de navegación */}
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/" onClick={closeMenu}>{t("menu.home")}</Link></li>
        <li><Link to="/about" onClick={closeMenu}>{t("menu.about")}</Link></li>
        <li><Link to="/whatwedo" onClick={closeMenu}>{t("menu.whatwedo")}</Link></li>
        <li><Link to="/process" onClick={closeMenu}>{t("menu.process")}</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>{t("menu.contact")}</Link></li>
      </ul>

      {/* Selector de idioma (fuera del menú en móviles) */}
      <div className="language-selector">
        <div onClick={() => setLanguageOpen(!languageOpen)} className="language-button">
          🌐 {i18n.language.toUpperCase()}
        </div>
        {languageOpen && (
          <div className="language-dropdown">
            <button onClick={() => handleLanguageChange('es')}>ES - Español</button>
            <button onClick={() => handleLanguageChange('en')}>EN - English</button>
            <button onClick={() => handleLanguageChange('ru')}>RU - Русский</button>
            <button onClick={() => handleLanguageChange('ua')}>UA - Українська</button>
          </div>
        )}
      </div>

      {/* Icono hamburguesa */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;