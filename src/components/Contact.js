import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import contactImage from "../assets/contact.jpg";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g0jhp3n", // Reemplaza con tu Service ID
        "template_vk1hjhc", // Reemplaza con tu Template ID
        form.current,
        "2aMx70AflPxW0cp80" // Reemplaza con tu Public Key
      )
      .then(
        (result) => {
          alert(t("contact.alertSuccess"));
          form.current.reset(); // Limpiar formulario después de enviar
        },
        (error) => {
          alert(t("contact.alertError"));
        }
      );
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>{t("contact.title")}</h1>
        <p>{t("contact.subtitle")}</p>
      </section>

      {/* Formulario de Contacto */}
      <section className="contact-form-section">
        <div className="form-container">
          <h2>{t("contact.formTitle")}</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="input-group">
              <label>{t("contact.nameLabel")}</label>
              <input type="text" name="from_name" placeholder={t("contact.namePlaceholder")} required />
            </div>
            <div className="input-group">
              <label>{t("contact.emailLabel")}</label>
              <input type="email" name="reply_to" placeholder={t("contact.emailPlaceholder")} required />
            </div>
            <div className="input-group">
              <label>{t("contact.messageLabel")}</label>
              <textarea name="message" placeholder={t("contact.messagePlaceholder")} required></textarea>
            </div>
            <button type="submit">{t("contact.sendButton")}</button>
          </form>
        </div>
      </section>

      {/* Contacto vía WhatsApp */}
      <section className="contact-whatsapp">
        <h2>{t("contact.whatsappTitle")}</h2>
        <p>{t("contact.whatsappText")}</p>
        <a
          href="https://wa.me/+34688380432" 
          className="whatsapp-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("contact.whatsappButton")}
        </a>
      </section>

      {/* Imagen de Contacto */}
      <section className="contact-image-section">
        <img src={contactImage} alt="Contacto" className="contact-image" />
      </section>
    </div>
  );
};

export default Contact;