import { useState, useEffect } from "react";

const NavBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calcular progreso: 0 hasta 100px (máximo en 100px)
      const progress = Math.min(window.scrollY / 100, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Calcular valores basados en el progreso
  const maxWidth = 1024; // max-w-4xl en píxeles
  const minWidth = 576; // max-w-xl en píxeles
  const currentWidth = maxWidth - (maxWidth - minWidth) * scrollProgress;

  const paddingY = 12 - (12 - 4) * scrollProgress; // de py-3 (12px) a py-1 (4px)
  const scale = 1 - 0.05 * scrollProgress; // de scale-100 a scale-95
  const opacity = 0.9 + 0.1 * scrollProgress; // para el backdrop blur

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex flex-col items-center px-4">
      <nav
        className={`
        transition-all duration-300 ease-out
        flex items-center justify-between px-6
        hand-drawn bg-white shadow-[5px_5px_0px_0px_rgba(74,44,109,1)]
        gap-8
      `}
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
          className="text-xl font-black text-[#7c49b6] tracking-tighter italic whitespace-nowrap mr-4 transition-all duration-300"
          style={{
            transform: `scale(${1 - 0.05 * scrollProgress})`,
          }}
        >
          Omar.Arias()
        </div>

        <ul className="hidden md:flex space-x-8 lg:space-x-12">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <a
                href={link.href}
                className="text-[#321d49] font-bold hover:text-[#38c7bd] transition-colors duration-300"
              >
                {link.name}
              </a>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#fa7705] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#4a2c6d] p-1 hover:bg-[#f2edf8] rounded-lg transition-colors"
        >
          <svg
            className="w-8 h-8"
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
      </nav>

      {/* Mobile Menu con animación de entrada suave */}
      <div
        className={`
        md:hidden w-full max-w-sm mt-2 transition-all duration-500 ease-out transform
        ${isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95 pointer-events-none"}
      `}
      >
        <ul className="bg-white hand-drawn shadow-[5px_5px_0px_0px_rgba(74,44,109,1)] p-4 flex flex-col gap-4 text-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-[#321d49] font-bold text-lg hover:text-[#fa7705] py-2 border-b-2 border-dashed border-[#e5dbf0] last:border-none transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
