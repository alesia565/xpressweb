import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Para cargar archivos desde public/locales
  .use(LanguageDetector) // Detectar idioma del navegador
  .use(initReactI18next)
  .init({
    supportedLngs: ['es', 'en', 'ru', 'ua'],
    fallbackLng: 'es',
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    react: { useSuspense: false }
  });

export default i18n;