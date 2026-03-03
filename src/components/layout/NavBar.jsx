import { useState, useEffect } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Detectar el scroll para mostrar/estilizar la barra
  useEffect(() => {
    const handleScroll = () => {
      // Se activa después de bajar 50px
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    // Contenedor principal centrado y fijo
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`
          transition-all duration-300 ease-in-out flex items-center justify-between
          px-6 py-3 rounded-full border
          ${
            isScrolled
              ? "w-full max-w-2xl bg-white/70 backdrop-blur-md shadow-lg border-gray-200"
              : "w-full max-w-4xl bg-transparent border-transparent"
          }
        `}
      >
        {/* Logo */}
        <div className="text-lg font-bold text-blue-600">My Portfolio</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-600 p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white rounded-2xl shadow-xl border border-gray-100 md:hidden">
            <ul className="flex flex-col space-y-4 text-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-600 block py-2 hover:bg-blue-50 rounded-lg"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
