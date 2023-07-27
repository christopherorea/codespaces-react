import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import resources from './translations.json';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

const fallbackLng = ['en']

i18n
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // detect user language
  .init({
    resources,
    fallbackLng,
    detection: {
      checkWhitelist: true, // options for language detection
    },
    whitelist: Object.keys(resources),
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;