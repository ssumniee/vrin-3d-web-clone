import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationEN from "./en/translation.json";
import translationKO from "./ko/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: translationEN },
      ko: { translation: translationKO },
    },
    detection: {
      order: ["sessionStorage"],
      lookupSessionStorage: "i18nextLng",
      caches: ["sessionStorage"],
    },
  });

export default i18n;
