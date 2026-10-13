import { useState, useEffect } from "react";
import { useLanguage } from "../../language/useLanguage";
import LanguageToggle from "./LanguageToggle";

const NavBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Calcular progreso: 0 hasta 100px (máximo en 100px)
      const progress = Math.min(window.scrollY / 100, 1);
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { key: "about", href: "#about" },
    { key: "skills", href: "#skills" },
    { key: "projects", href: "#projects" },
    { key: "contact", href: "#contact" },
  ];

  // Calcular valores basados en el progreso
  const maxWidth = 1024; // max-w-4xl en píxeles
  // Los textos en español son más largos: 720px evita que la barra se comprima de más
  const minWidth = 720;
  const currentWidth = maxWidth - (maxWidth - minWidth) * scrollProgress;

  const paddingY = 12 - (12 - 4) * scrollProgress; // de py-3 (12px) a py-1 (4px)
  const scale = 1 - 0.05 * scrollProgress; // de scale-100 a scale-95
  const opacity = 0.9 + 0.1 * scrollProgress; // para el backdrop blur

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex flex-col items-center px-4">
      <nav
        className={`
        transition-all duration-300 ease-out
        pointer-events-auto flex items-center justify-between px-4 sm:px-6
        hand-drawn bg-white shadow-[5px_5px_0px_0px_rgba(74,44,109,1)]
        gap-4 md:gap-8
      `}
        aria-label={t.nav.main}
        style={{
          maxWidth: `${currentWidth}px`,
          width: "100%",
          paddingTop: `${paddingY}px`,
          paddingBottom: `${paddingY}px`,
          transform: `scale(${scale})`,
          backgroundColor: `rgba(255, 255, 255, ${opacity})`,
          backdropFilter: scrollProgress > 0 ? "blur(8px)" : "none",
          WebkitBackdropFilter: scrollProgress > 0 ? "blur(8px)" : "none",
        }}
      >
        <div
          className="text-lg sm:text-xl font-black text-[#7c49b6] tracking-tighter italic whitespace-nowrap sm:mr-4 transition-all duration-300"
          style={{
            transform: `scale(${1 - 0.05 * scrollProgress})`,
          }}
        >
          Omar.Arias()
        </div>

        <ul className="hidden md:flex md:space-x-4 lg:space-x-10">
          {navLinks.map((link) => (
            <li key={link.key} className="relative group">
              <a
                href={link.href}
                className="rounded-sm text-[#321d49] font-bold hover:text-[#38c7bd] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7c49b6] transition-colors duration-300"
              >
                {t.nav[link.key]}
              </a>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#fa7705] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="md:hidden text-[#4a2c6d] p-2 -mr-2 hover:bg-[#f2edf8] rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#7c49b6]"
          >
            <svg
              className="w-7 h-7"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu con animación de entrada suave */}
      <div
        id="mobile-menu"
        aria-hidden={!isOpen}
        className={`
        md:hidden w-full max-w-sm mt-2 transition-all duration-500 ease-out
        ${isOpen ? "pointer-events-auto opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95"}
      `}
      >
        <ul className="bg-white hand-drawn shadow-[5px_5px_0px_0px_rgba(74,44,109,1)] p-4 flex flex-col gap-4 text-center">
          {navLinks.map((link) => (
            <li key={link.key}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                tabIndex={isOpen ? 0 : -1}
                className="block text-[#321d49] font-bold text-lg hover:text-[#fa7705] py-3 border-b-2 border-dashed border-[#e5dbf0] last:border-none transition-colors"
              >
                {t.nav[link.key]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
