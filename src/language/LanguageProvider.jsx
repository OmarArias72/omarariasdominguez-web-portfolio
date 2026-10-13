import { useCallback, useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { DEFAULT_LANGUAGE, LANGUAGES, translations } from "./translations";

const STORAGE_KEY = "portfolio-lang";

// Prioridad: idioma guardado > idioma del navegador > idioma por defecto
const getInitialLanguage = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGUAGES.includes(saved)) return saved;
  } catch {
    /* localStorage no disponible (modo privado, SSR) */
  }
  if (typeof navigator !== "undefined") {
    const browser = navigator.language?.slice(0, 2);
    if (LANGUAGES.includes(browser)) return browser;
  }
  return DEFAULT_LANGUAGE;
};

const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(getInitialLanguage);

  const setLang = useCallback((next) => {
    if (LANGUAGES.includes(next)) setLangState(next);
  }, []);

  // Mantiene <html lang> sincronizado (lectores de pantalla, SEO, traductores) y persiste la elección
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignorar */
    }
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, t: translations[lang] }),
    [lang, setLang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};

export default LanguageProvider;
