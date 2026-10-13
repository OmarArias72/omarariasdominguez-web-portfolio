import { useContext } from "react";

import { LanguageContext } from "./LanguageContext";

// Devuelve { lang, setLang, t }. `t` es el diccionario del idioma activo.
export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage debe usarse dentro de <LanguageProvider>");
  }
  return ctx;
};
