import { useState, useEffect } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`
        transition-all duration-300 flex items-center justify-between px-6 py-2
        hand-drawn bg-white shadow-[5px_5px_0px_0px_rgba(74,44,109,1)]
        ${isScrolled ? "max-w-xl scale-95" : "max-w-4xl w-full"}
      `}
      >
        <div className="text-xl font-black text-[#7c49b6] tracking-tighter italic">
          Omar.Arias()
        </div>

        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <a
                href={link.href}
                className="text-[#321d49] font-bold hover:text-[#38c7bd] transition-colors"
              >
                {link.name}
              </a>
              {/* Rayado decorativo al hacer hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#fa7705] transition-all group-hover:w-full rounded-full"></span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#4a2c6d]"
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
    </header>
  );
};

export default NavBar;
