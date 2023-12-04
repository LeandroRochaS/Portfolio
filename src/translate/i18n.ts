import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { messages } from "./language";

i18n.use(LanguageDetector).init({
  debug: false,
  defaultNS: ["translations"],
  fallbackLng: "pt-BR",
  ns: ["translations"],
  resorces: messages,
});

export { i18n };
