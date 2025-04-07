import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import contactImage from "../assets/contact.jpg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g0jhp3n",
        "template_vk1hjhc",
        form.current,
        "2aMx70AflPxW0cp80"
      )
      .then(
        () => {
          alert(t("contact.alertSuccess"));
          form.current.reset();
        },
        () => {
          alert(t("contact.alertError"));
        }
      );
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <motion.section className="contact-hero" {...fadeInUp}>
        <h1>{t("contact.title")}</h1>
        <p>{t("contact.subtitle")}</p>
      </motion.section>

      {/* Formulario */}
      <motion.section className="contact-form-section" {...fadeInUp}>
        <div className="form-container">
          <h2>{t("contact.formTitle")}</h2>
          <form ref={form} onSubmit={sendEmail}>
            <motion.div className="input-group" whileFocus={{ scale: 1.02 }}>
              <label>{t("contact.nameLabel")}</label>
              <input
                type="text"
                name="from_name"
                placeholder={t("contact.namePlaceholder")}
                required
              />
            </motion.div>
            <motion.div className="input-group" whileFocus={{ scale: 1.02 }}>
              <label>{t("contact.emailLabel")}</label>
              <input
                type="email"
                name="reply_to"
                placeholder={t("contact.emailPlaceholder")}
                required
              />
            </motion.div>
            <motion.div className="input-group" whileFocus={{ scale: 1.02 }}>
              <label>{t("contact.messageLabel")}</label>
              <textarea
                name="message"
                placeholder={t("contact.messagePlaceholder")}
                required
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              className="submit-button"
            >
              {t("contact.sendButton")}
            </motion.button>
          </form>
        </div>
      </motion.section>

      {/* WhatsApp */}
      <motion.section className="contact-whatsapp" {...fadeInUp}>
        <h2>{t("contact.whatsappTitle")}</h2>
        <p>{t("contact.whatsappText")}</p>
        <motion.a
          href="https://wa.me/+34688380432"
          className="whatsapp-button"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.05,
            backgroundColor: "#e600a8",
            color: "#fff"
          }}
        >
          {t("contact.whatsappButton")}
        </motion.a>
      </motion.section>

      {/* Imagen */}
      <motion.section className="contact-image-section" {...fadeInUp}>
        <motion.img
          src={contactImage}
          alt="Contacto"
          className="contact-image"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        />
      </motion.section>
    </div>
  );
};

export default Contact;
