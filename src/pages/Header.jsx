import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";

const Header = () => {
  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Ilustraciones de "Rayado" de fondo (Doodles) */}
      <div className="absolute top-20 left-10 text-[#cbb6e2] opacity-50 -rotate-12 hidden md:block">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <path
            d="M10,50 Q40,10 90,50 T10,90"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Título Principal estilo Sketch */}
      <h1 className="text-5xl md:text-7xl font-black text-[#190f24] mb-4 relative inline-block">
        FullStack Developer
        <span className="block text-[#7c49b6] transform -rotate-1 italic">
          Omar Arias Dominguez
        </span>
        {/* Rayado debajo del nombre */}
        <svg
          className="absolute -bottom-4 left-0 w-full h-4 text-[#38c7bd]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,10 Q50,0 100,10 T200,10"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />
        </svg>
      </h1>

      <p className="max-w-xl text-lg md:text-2xl text-[#53464b] mb-10 font-medium">
        I connect systems, develop products, and create tools that make a
        <span className="bg-[#ccffcc] px-2 ml-1">real impact.</span>
      </p>

      <div className="flex flex-wrap justify-center items-center gap-6">
        {/* Botón CV - Estilo Sticker */}
        <button className="flex items-center gap-2 bg-[#7c49b6] hover:bg-[#633a92] text-white font-bold py-4 px-8 hand-drawn shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:scale-105 active:scale-95">
          <FaFileDownload />
          Download CV
        </button>

        {/* Botones Redes - Estilo Dibujo */}
        <a
          href="#"
          className="p-4 bg-white hand-drawn text-[#4a2c6d] shadow-[3px_3px_0px_0px_rgba(56,199,189,1)] hover:rotate-6 transition-transform"
        >
          <FaLinkedin size={28} />
        </a>

        <a
          href="#"
          className="p-4 bg-white hand-drawn text-[#190f24] shadow-[3px_3px_0px_0px_rgba(250,119,5,1)] hover:-rotate-6 transition-transform"
        >
          <FaGithub size={28} />
        </a>
      </div>

      {/* Decoración inferior: Un "Squiggle" */}
      <div className="absolute bottom-10 right-20 text-[#fa7705] hidden md:block">
        <svg width="150" height="40">
          <path
            d="M0,20 C20,0 40,40 60,20 C80,0 100,40 120,20"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </header>
  );
};
export default Header;
