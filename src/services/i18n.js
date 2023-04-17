import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { defaultLanguage, supportedLanguages } from "../config/i18n";

// const resources = {
//   en: {
//     translation: {
//       app_name: "TRVL",
//     },
//   },

//   ua: {
//     translation: {
//       app_name: "ПОДОРОЖІ",
//     },
//   },
// };

i18next

  .use(initReactI18next)
  .use(HttpApi) // Регистрация внутреннего плагина
  .use(LanguageDetector)
  .init({
    // resources,

    // lng: "en",
    supportedLngs: supportedLanguages.map((lang) => lang.code),

    nonExplicitSupportedLngs: true,

    fallbackLng: defaultLanguage,

    interpolation: {
      escapeValue: false,
    },
    debug: process.env.NODE_ENV === "development",
  });

export default i18next;
