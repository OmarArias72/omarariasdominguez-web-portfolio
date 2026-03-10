import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import { useState, useEffect } from "react";
import { rotatingIdeas } from "../data/ideas";

const Header = () => {
  const [currentIdeaIndex, setCurrentIdeaIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const nodes = [
    {
      id: 1,
      title: "Idea",
      icon: "mind-svgrepo-com.svg",
      color: "#fa7705",
      delay: 0,
      x: "5%",
      y: "40px",
    },
    {
      id: 2,
      title: "Research",
      icon: "exploration-zoom-magnify-svgrepo-com.svg",
      color: "#7c49b6",
      delay: 0.2,
      x: "20%",
      y: "20px",
    },
    {
      id: 3,
      title: "System design",
      icon: "design-studio-svgrepo-com.svg",
      color: "#38c7bd",
      delay: 0.4,
      x: "35%",
      y: "5px",
    },
    {
      id: 4,
      title: "Development",
      icon: "availability-svgrepo-com.svg",
      color: "#4a2c6d",
      delay: 0.6,
      x: "50%",
      y: "0px",
    },
    {
      id: 5,
      title: "Testing",
      icon: "online-search-engine-computer-svgrepo-com.svg",
      color: "#79D6DB",
      delay: 0.8,
      x: "65%",
      y: "5px",
    },
    {
      id: 6,
      title: "Configuration",
      icon: "host-record-svgrepo-com.svg",
      color: "#ffb347",
      delay: 1,
      x: "80%",
      y: "20px",
    },
    {
      id: 7,
      title: "Deployment",
      icon: "cloud-acceleration-svgrepo-com.svg",
      color: "#e57373",
      delay: 1.2,
      x: "95%",
      y: "40px",
    },
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentIdea = rotatingIdeas[currentIdeaIndex];

      if (isDeleting) {
        setDisplayText(currentIdea.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(currentIdea.substring(0, displayText.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && displayText === currentIdea) {
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(50);
      }

      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentIdeaIndex((prev) => (prev + 1) % rotatingIdeas.length);
        setTypingSpeed(100);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIdeaIndex, typingSpeed]);

  // Función para obtener coordenadas precisas de cada nodo
  const getNodeCoordinates = (node) => {
    // Convertir porcentaje a píxeles relativos al contenedor
    const containerWidth = 1200; // Ancho de referencia para el cálculo
    const baseX = (parseFloat(node.x) / 100) * containerWidth;
    const baseY = parseInt(node.y);

    // Ajustes finos para que la línea toque exactamente cada círculo
    const adjustments = {
      1: { x: 0, y: 0 }, // Idea
      2: { x: 5, y: -2 }, // Research
      3: { x: 10, y: -5 }, // System design
      4: { x: 15, y: -8 }, // Development
      5: { x: 10, y: -5 }, // Testing
      6: { x: 5, y: -2 }, // Configuration
      7: { x: 0, y: 0 }, // Deployment
    };

    return {
      x: baseX + adjustments[node.id].x,
      y: baseY + 25 + adjustments[node.id].y, // +25 para centrar en el círculo
    };
  };

  // Generar el path que conecta todos los nodos en orden
  const generateConnectionPath = () => {
    const points = nodes.map((node) => getNodeCoordinates(node));

    // Crear un path curvo que pase por todos los puntos
    let path = `M ${points[0].x},${points[0].y}`;

    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];

      // Calcular puntos de control para una curva suave
      const midX = (prev.x + curr.x) / 2;
      const midY = (prev.y + curr.y) / 2;

      // Ajustar la curva para que pase cerca de los puntos intermedios
      const controlX1 = prev.x + (curr.x - prev.x) * 0.3;
      const controlY1 = prev.y - 8; // Curva hacia arriba
      const controlX2 = curr.x - (curr.x - prev.x) * 0.3;
      const controlY2 = curr.y - 8; // Curva hacia arriba

      path += ` C ${controlX1},${controlY1} ${controlX2},${controlY2} ${curr.x},${curr.y}`;
    }

    return path;
  };

  return (
    <header className="relative min-h-screen flex flex-col items-center justify-start pt-30 px-6 overflow-hidden">
      {/* Doodles técnicos laterales - Código dibujado a mano */}
      <div className="absolute left-5 top-1/3 text-[#cbb6e2] opacity-30 text-4xl font-mono transform -rotate-12 hidden lg:block">
        {"{ }"}
      </div>
      <div className="absolute right-5 top-1/4 text-[#cbb6e2] opacity-30 text-4xl font-mono transform rotate-6 hidden lg:block">
        {"< />"}
      </div>
      <div className="absolute left-10 bottom-1/4 text-[#cbb6e2] opacity-30 text-3xl font-mono transform rotate-45 hidden lg:block">
        {"[ ]"}
      </div>
      <div className="absolute right-10 bottom-1/3 text-[#cbb6e2] opacity-30 text-3xl font-mono transform -rotate-12 hidden lg:block">
        {"() =>"}
      </div>
      <div className="absolute left-20 top-2/3 text-[#cbb6e2] opacity-20 text-2xl font-mono transform rotate-12 hidden lg:block">
        {"// code"}
      </div>
      <div className="absolute right-20 top-2/3 text-[#cbb6e2] opacity-20 text-2xl font-mono transform -rotate-6 hidden lg:block">
        {"npm run"}
      </div>

      {/* Fondo de cuaderno de puntos */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#321d49 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      {/* Ilustraciones de "Rayado" de fondo (Doodles) */}
      <div className="absolute top-32 left-10 text-[#cbb6e2] opacity-50 -rotate-12 hidden md:block">
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
      <div className="mb-8 relative">
        <div className="relative bg-[#ffeaa5] px-8 py-4 hand-drawn shadow-[6px_6px_0px_0px_rgba(250,119,5,0.3)] -rotate-2 hover:rotate-0 transition-all duration-300">
          <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#7c49b6] rounded-full border-2 border-white shadow-md animate-pulse"></div>

          <div className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-mono font-bold text-[#190f24]">
              &gt;
            </span>
            <span className="text-xl md:text-2xl font-mono text-[#4a2c6d] min-w-75 md:min-w-100 text-left">
              {displayText}
              <span className="animate-pulse ml-1 text-[#fa7705]">|</span>
            </span>
          </div>

          <div className="absolute bottom-1 left-4 right-4 h-px bg-[#fa7705]/20"></div>
          <div className="absolute bottom-2 left-4 right-4 h-px bg-[#fa7705]/20"></div>
        </div>

        <div className="absolute -bottom-2 left-2 right-2 h-4 bg-[#fa7705]/10 -rotate-1 blur-sm -z-10"></div>
      </div>

      {/* Título Principal estilo Sketch - Unificado */}
      <h1 className="text-5xl md:text-7xl font-black text-[#190f24] mb-6 relative inline-block">
        <span className="block transform -rotate-1">FullStack Developer</span>
        <span className="block text-[#7c49b6] transform -rotate-1 italic">
          Omar Arias Dominguez
        </span>
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

      <p className="max-w-xl text-lg md:text-2xl text-[#53464b] mt-4 mb-12 font-medium text-center">
        I connect systems, develop products, and create tools that make a
        <span className="bg-[#ccffcc] px-2 ml-1">real impact.</span>
      </p>

      <div className="flex flex-wrap justify-center items-center gap-6 mb-20">
        {/* Botón CV */}
        <a
          href="/CV_Omar_Arias_Dominguez.pdf"
          download="CV_Omar_Arias_Dominguez.pdf"
          className="flex items-center gap-2 bg-[#e5dbf0] hover:bg-[#7c49b6] text-[#4a2c6d] hover:text-white font-bold py-4 px-8 hand-drawn shadow-[4px_4px_0px_0px_rgba(42,44,109,0.2)] hover:shadow-[4px_4px_0px_0px_rgba(124,73,182,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 no-underline border border-[#7c49b6]/20"
        >
          <FaFileDownload className="text-xl" />
          Download CV
        </a>

        {/* Botón LinkedIn */}
        <a
          href="https://www.linkedin.com/in/omar-arias-dominguez-87b8833aa/"
          className="flex items-center gap-2 bg-[#d7f4f2] hover:bg-[#38c7bd] text-[#1e6f6a] hover:text-white font-bold py-4 px-8 hand-drawn shadow-[4px_4px_0px_0px_rgba(42,44,109,0.2)] hover:shadow-[4px_4px_0px_0px_rgba(56,199,189,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 no-underline border border-[#38c7bd]/20"
        >
          <FaLinkedin className="text-xl" />
          LinkedIn
        </a>

        {/* Botón GitHub */}
        <a
          href="https://github.com/OmarArias72"
          className="flex items-center gap-2 bg-[#fee4cd] hover:bg-[#fa7705] text-[#b35804] hover:text-white font-bold py-4 px-8 hand-drawn shadow-[4px_4px_0px_0px_rgba(42,44,109,0.2)] hover:shadow-[4px_4px_0px_0px_rgba(250,119,5,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 no-underline border border-[#fa7705]/20"
        >
          <FaGithub className="text-xl" />
          GitHub
        </a>
      </div>

      {/* Nodos conectados físicamente por una línea de lápiz */}
      <div className="relative w-full max-w-5xl mx-auto mt-4 px-4">
        {/* SVG con la línea que conecta físicamente los nodos */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ minHeight: "280px", width: "100%", height: "100%" }}
          preserveAspectRatio="none"
          viewBox="0 0 1200 280"
        >
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fa7705" stopOpacity="0.6" />
              <stop offset="20%" stopColor="#7c49b6" stopOpacity="0.7" />
              <stop offset="40%" stopColor="#38c7bd" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#4a2c6d" stopOpacity="0.7" />
              <stop offset="80%" stopColor="#ffb347" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#e57373" stopOpacity="0.5" />
            </linearGradient>

            {/* Filtro para efecto de lápiz/textura */}
          </defs>

          {/* Sombra difusa debajo de la línea */}
          <path
            d={generateConnectionPath()}
            fill="none"
            stroke="#190f24"
            strokeWidth="6"
            strokeOpacity="0.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Línea principal con efecto de lápiz */}
          <path
            d={generateConnectionPath()}
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="8 6"
            filter="url(#pencilTexture)"
            className="animate-dash-slow"
          />

          {/* Puntos decorativos en las uniones (simulando notas adhesivas) */}
          {nodes.map((node, index) => {
            const coords = getNodeCoordinates(node);
            return (
              <circle
                key={`dot-${node.id}`}
                cx={coords.x}
                cy={coords.y}
                r="4"
                fill={node.color}
                stroke="#190f24"
                strokeWidth="1.5"
                className="animate-pulse"
                style={{ animationDelay: `${index * 0.2}s` }}
              />
            );
          })}

          {/* Pequeñas líneas cruzadas simulando "cinta adhesiva" en cada unión */}
          {nodes.map((node) => {
            const coords = getNodeCoordinates(node);
            return (
              <g key={`tape-${node.id}`}>
                <line
                  x1={coords.x - 8}
                  y1={coords.y - 8}
                  x2={coords.x - 2}
                  y2={coords.y - 2}
                  stroke="#190f24"
                  strokeWidth="1.5"
                  strokeOpacity="0.2"
                  strokeLinecap="round"
                />
                <line
                  x1={coords.x + 8}
                  y1={coords.y - 8}
                  x2={coords.x + 2}
                  y2={coords.y - 2}
                  stroke="#190f24"
                  strokeWidth="1.5"
                  strokeOpacity="0.2"
                  strokeLinecap="round"
                />
              </g>
            );
          })}
        </svg>

        {/* Nodos posicionados en la curva - CONECTADOS FÍSICAMENTE POR LA LÍNEA */}
        <div className="relative w-full h-70">
          {nodes.map((node) => (
            <div
              key={node.id}
              className="absolute group flex flex-col items-center transform -translate-x-1/2"
              style={{
                left: node.x,
                top: node.y,
                animation: `floatCustom 4s ease-in-out infinite ${node.delay}s`,
              }}
            >
              {/* Círculo contenedor del icono */}
              <div
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 flex items-center justify-center mb-2 transition-all duration-500 hover:scale-110 hover:rotate-6 bg-white/90 backdrop-blur-sm"
                style={{
                  borderColor: node.color,
                  backgroundColor: `${node.color}15`,
                  boxShadow: `0 4px 12px ${node.color}40`,
                }}
              >
                {/* Icono SVG */}
                <img
                  src={`/svg-icons/${node.icon}`}
                  alt={node.title}
                  className="w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:scale-110"
                  style={{ filter: `drop-shadow(0 2px 4px ${node.color}80)` }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/24/${node.color.replace("#", "")}/ffffff?text=${node.title[0]}`;
                  }}
                />
              </div>

              {/* Título del nodo */}
              <span
                className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-center max-w-20 bg-white/80 px-2 py-1 rounded-full backdrop-blur-sm border border-[#190f24]/10 shadow-sm"
                style={{ color: node.color }}
              >
                {node.title}
              </span>

              {/* Efecto de brillo en hover */}
              <div
                className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-lg"
                style={{ backgroundColor: node.color }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll to explore - Elemento animado y centrado */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-16 animate-bounce-slow ml-29">
        <div className="flex flex-col items-center gap-2 text-[#7c49b6] group cursor-pointer">
          <span className="text-xs md:text-sm font-mono font-medium tracking-wider bg-white/60 px-4 py-2 rounded-full hand-drawn backdrop-blur-sm border border-[#cbb6e2]/30 group-hover:bg-[#7c49b6] group-hover:text-white transition-all duration-300">
            Scroll to explore
          </span>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            className="group-hover:translate-y-2 transition-transform duration-300"
          >
            <path
              d="M15,5 L15,20 M10,15 L15,20 L20,15"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className="text-[#7c49b6] group-hover:text-[#fa7705] transition-colors"
            />
            <circle
              cx="15"
              cy="15"
              r="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="4 3"
              className="text-[#38c7bd] group-hover:text-[#7c49b6] transition-colors"
            />
          </svg>
        </div>
      </div>

      {/* Estilos adicionales para animaciones */}
      <style jsx>{`
        @keyframes floatCustom {
          0%,
          100% {
            transform: translateX(-50%) translateY(0px);
          }
          50% {
            transform: translateX(-50%) translateY(-8px);
          }
        }
        @keyframes dash-slow {
          to {
            stroke-dashoffset: -40;
          }
        }
        .animate-dash-slow {
          stroke-dashoffset: 0;
          animation: dash-slow 25s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce 2s ease-in-out infinite;
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
