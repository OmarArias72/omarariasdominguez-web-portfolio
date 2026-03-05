import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import { useState, useEffect } from "react";
import { rotatingIdeas } from "../data/ideas";

const Header = () => {
  const [currentIdeaIndex, setCurrentIdeaIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentIdea = rotatingIdeas[currentIdeaIndex];

      if (isDeleting) {
        // Borrando texto
        setDisplayText(currentIdea.substring(0, displayText.length - 1));
        setTypingSpeed(50); // Más rápido al borrar
      } else {
        // Escribiendo texto
        setDisplayText(currentIdea.substring(0, displayText.length + 1));
        setTypingSpeed(100); // Velocidad normal al escribir
      }

      // Si terminó de escribir
      if (!isDeleting && displayText === currentIdea) {
        setTimeout(() => setIsDeleting(true), 2000); // Pausa de 2 segundos
        setTypingSpeed(50);
      }

      // Si terminó de borrar
      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentIdeaIndex((prev) => (prev + 1) % rotatingIdeas.length);
        setTypingSpeed(100);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIdeaIndex, typingSpeed]);

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

      {/* Nota con animación de escritura encima del título */}
      <div className="mb-6 relative">
        {/* Nota adhesiva */}
        <div className="relative bg-[#ffeaa5] px-8 py-4 hand-drawn shadow-[6px_6px_0px_0px_rgba(250,119,5,0.3)] -rotate-2 hover:rotate-0 transition-all duration-300">
          {/* Círculo decorativo tipo chincheta */}
          <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#7c49b6] rounded-full border-2 border-white shadow-md animate-pulse"></div>

          {/* Texto animado */}
          <div className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-mono font-bold text-[#190f24]">
              &gt;
            </span>
            <span className="text-xl md:text-2xl font-mono text-[#4a2c6d] min-w-[300px] md:min-w-[400px] text-left">
              {displayText}
              <span className="animate-pulse ml-1 text-[#fa7705]">|</span>
            </span>
          </div>

          {/* Decoración de líneas de cuaderno */}
          <div className="absolute bottom-1 left-4 right-4 h-px bg-[#fa7705]/20"></div>
          <div className="absolute bottom-2 left-4 right-4 h-px bg-[#fa7705]/20"></div>
        </div>

        {/* Sombra de la nota (efecto de papel levantado) */}
        <div className="absolute -bottom-2 left-2 right-2 h-4 bg-[#fa7705]/10 -rotate-1 blur-sm -z-10"></div>
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
        <a
          href="../../public/CV_Omar_Arias_Dominguez.pdf"
          download="CV_Omar_Arias_Dominguez.pdf"
          className="flex items-center gap-2 bg-[#7c49b6] hover:bg-[#633a92] text-white font-bold py-4 px-8 hand-drawn shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:scale-105 active:scale-95 no-underline"
        >
          <FaFileDownload className="text-xl" />
          Download CV
        </a>

        {/* Botones Redes - Estilo Dibujo */}
        <a
          href="https://www.linkedin.com/in/omar-arias-dominguez-87b8833aa/"
          className="flex items-center gap-2 bg-[#0077B5] hover:bg-[#005e93] text-white font-bold py-4 px-8 hand-drawn shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:scale-105 active:scale-95 no-underline"
        >
          <FaLinkedin className="text-xl" />
          LinkedIn
        </a>

        {/* Botón GitHub - Mismo estilo que Download CV */}
        <a
          href="https://github.com/OmarArias72"
          className="flex items-center gap-2 bg-[#333] hover:bg-[#24292e] text-white font-bold py-4 px-8 hand-drawn shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:scale-105 active:scale-95 no-underline"
        >
          <FaGithub className="text-xl" />
          GitHub
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
