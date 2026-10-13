import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useLanguage } from "../language/useLanguage";

// Ancho de referencia del viewBox del SVG (1200 x 280)
const PATH_WIDTH = 1200;
// Centro vertical del círculo del nodo (círculo de 56px en md+)
const CIRCLE_CENTER_Y = 28;

// Datos independientes del idioma: el título se resuelve vía t.header.nodes[id]
const nodes = [
  {
    id: 1,
    icon: "mind-svgrepo-com.svg",
    color: "#fa7705",
    delay: 0,
    x: "5%",
    y: "40px",
  },
  {
    id: 2,
    icon: "exploration-zoom-magnify-svgrepo-com.svg",
    color: "#7c49b6",
    delay: 0.2,
    x: "20%",
    y: "20px",
  },
  {
    id: 3,
    icon: "design-studio-svgrepo-com.svg",
    color: "#38c7bd",
    delay: 0.4,
    x: "35%",
    y: "5px",
  },
  {
    id: 4,
    icon: "availability-svgrepo-com.svg",
    color: "#4a2c6d",
    delay: 0.6,
    x: "50%",
    y: "0px",
  },
  {
    id: 5,
    icon: "online-search-engine-computer-svgrepo-com.svg",
    color: "#79D6DB",
    delay: 0.8,
    x: "65%",
    y: "5px",
  },
  {
    id: 6,
    icon: "host-record-svgrepo-com.svg",
    color: "#ffb347",
    delay: 1,
    x: "80%",
    y: "20px",
  },
  {
    id: 7,
    icon: "cloud-acceleration-svgrepo-com.svg",
    color: "#e57373",
    delay: 1.2,
    x: "95%",
    y: "40px",
  },
];

// Coordenadas (en unidades del viewBox) por donde pasa la línea de cada nodo
const getNodeCoordinates = (node) => ({
  x: (parseFloat(node.x) / 100) * PATH_WIDTH,
  y: parseInt(node.y, 10) + CIRCLE_CENTER_Y,
});

const nodePoints = nodes.map(getNodeCoordinates);

// Path curvo que conecta todos los nodos en orden (se calcula una sola vez)
const connectionPath = nodePoints.reduce((path, curr, i) => {
  if (i === 0) return `M ${curr.x},${curr.y}`;
  const prev = nodePoints[i - 1];
  const c1x = prev.x + (curr.x - prev.x) * 0.3;
  const c2x = curr.x - (curr.x - prev.x) * 0.3;
  return `${path} C ${c1x},${prev.y - 8} ${c2x},${curr.y - 8} ${curr.x},${curr.y}`;
}, "");

// Burbuja de un nodo del proceso. `title` llega ya traducido desde el padre.
// La etiqueta usa `w-max whitespace-nowrap` para ajustarse al texto sin recortes.
const NodeBubble = ({ node, title, floating = false }) => (
  <div
    className={`group relative flex flex-col items-center ${floating ? "animate-float-node" : ""}`}
    style={floating ? { animationDelay: `${node.delay}s` } : undefined}
  >
    <div
      className="mb-2 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white/90 backdrop-blur-sm transition-transform duration-500 hover:scale-110 hover:rotate-6 md:h-14 md:w-14"
      style={{
        borderColor: node.color,
        backgroundColor: `${node.color}15`,
        boxShadow: `0 4px 12px ${node.color}40`,
      }}
    >
      <img
        src={`/svg-icons/${node.icon}`}
        alt=""
        width="28"
        height="28"
        loading="lazy"
        className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 md:h-7 md:w-7"
        style={{ filter: `drop-shadow(0 2px 4px ${node.color}80)` }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://via.placeholder.com/24/${node.color.replace("#", "")}/ffffff?text=${encodeURIComponent(title[0] ?? "")}`;
        }}
      />
    </div>
    <span
      className="w-max whitespace-nowrap rounded-full border border-[#190f24]/10 bg-white/80 px-2 py-1 text-center text-[10px] font-bold uppercase tracking-wider shadow-xs backdrop-blur-sm md:px-3 md:text-xs"
      style={{ color: node.color }}
    >
      {title}
    </span>
    <div
      className="pointer-events-none absolute -inset-3 -z-10 rounded-full opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-30"
      style={{ backgroundColor: node.color }}
    ></div>
  </div>
);

const Header = () => {
  const { t, lang } = useLanguage();
  const [currentIdeaIndex, setCurrentIdeaIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Al cambiar el idioma, reiniciamos el typewriter para evitar mezclar
  // caracteres del idioma anterior con la nueva lista de ideas.
  useEffect(() => {
    setCurrentIdeaIndex(0);
    setDisplayText("");
    setIsDeleting(false);
    setTypingSpeed(100);
  }, [lang]);

  useEffect(() => {
    const ideas = t.header.rotatingIdeas;
    const handleTyping = () => {
      const currentIdea = ideas[currentIdeaIndex] ?? "";

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
        setCurrentIdeaIndex((prev) => (prev + 1) % ideas.length);
        setTypingSpeed(100);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIdeaIndex, typingSpeed, t]);

  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-start overflow-hidden px-4 pt-28 pb-8 sm:px-6 md:pt-30">
      {/* Doodles técnicos laterales - Código dibujado a mano */}
      <div
        aria-hidden="true"
        className="absolute left-5 top-1/3 hidden -rotate-12 font-mono text-4xl text-[#cbb6e2] opacity-30 lg:block"
      >
        {"{ }"}
      </div>
      <div
        aria-hidden="true"
        className="absolute right-5 top-1/4 hidden rotate-6 font-mono text-4xl text-[#cbb6e2] opacity-30 lg:block"
      >
        {"< />"}
      </div>
      <div
        aria-hidden="true"
        className="absolute left-10 bottom-1/4 hidden rotate-45 font-mono text-3xl text-[#cbb6e2] opacity-30 lg:block"
      >
        {"[ ]"}
      </div>
      <div
        aria-hidden="true"
        className="absolute right-10 bottom-1/3 hidden -rotate-12 font-mono text-3xl text-[#cbb6e2] opacity-30 lg:block"
      >
        {"() =>"}
      </div>
      <div
        aria-hidden="true"
        className="absolute left-20 top-2/3 hidden rotate-12 font-mono text-2xl text-[#cbb6e2] opacity-20 lg:block"
      >
        {"// code"}
      </div>
      <div
        aria-hidden="true"
        className="absolute right-20 top-2/3 hidden -rotate-6 font-mono text-2xl text-[#cbb6e2] opacity-20 lg:block"
      >
        {"npm run"}
      </div>

      {/* Fondo de cuaderno de puntos */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-full w-full opacity-10"
        style={{
          backgroundImage: "radial-gradient(#321d49 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      {/* Ilustraciones de "Rayado" de fondo (Doodles) */}
      <div
        aria-hidden="true"
        className="absolute top-32 left-10 hidden -rotate-12 text-[#cbb6e2] opacity-50 md:block"
      >
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
      <div className="relative mb-8 w-full max-w-md md:w-auto md:max-w-none">
        <div className="hand-drawn relative -rotate-2 bg-[#ffeaa5] px-5 py-4 shadow-[6px_6px_0px_0px_rgba(250,119,5,0.3)] transition-all duration-300 hover:rotate-0 sm:px-8">
          <div className="absolute -top-2 -left-2 h-6 w-6 animate-pulse rounded-full border-2 border-white bg-[#7c49b6] shadow-md"></div>

          <div className="flex items-start gap-2">
            <span
              aria-hidden="true"
              className="font-mono text-xl font-bold text-[#190f24] md:text-3xl"
            >
              &gt;
            </span>
            {/* min-h evita que la nota cambie de alto cuando el texto salta de línea */}
            <span className="min-h-14 min-w-0 flex-1 text-left font-mono text-base break-words text-[#4a2c6d] sm:text-xl md:min-h-8 md:min-w-100 md:text-2xl">
              {displayText}
              <span className="ml-1 animate-pulse text-[#fa7705]">|</span>
            </span>
          </div>

          <div className="absolute bottom-1 left-4 right-4 h-px bg-[#fa7705]/20"></div>
          <div className="absolute bottom-2 left-4 right-4 h-px bg-[#fa7705]/20"></div>
        </div>

        <div className="absolute -bottom-2 left-2 right-2 -z-10 h-4 -rotate-1 bg-[#fa7705]/10 blur-sm"></div>
      </div>

      {/* Título Principal estilo Sketch - Unificado */}
      <h1 className="relative mb-6 inline-block text-center text-4xl font-black text-[#190f24] sm:text-5xl md:text-7xl">
        <span className="block -rotate-1">{t.header.title}</span>
        <span className="block -rotate-1 italic text-[#7c49b6]">
          Omar Arias Dominguez
        </span>
        <svg
          aria-hidden="true"
          className="absolute -bottom-4 left-0 h-4 w-full text-[#38c7bd]"
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

      <p className="mt-4 mb-10 max-w-xl text-center text-base font-medium text-[#53464b] sm:text-lg md:mb-12 md:text-2xl">
        {t.header.introBefore}
        <span className="ml-1 bg-[#ccffcc] px-2">{t.header.introHighlight}</span>
      </p>

      <div className="mb-14 flex w-full max-w-xs flex-col items-stretch gap-4 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-6 md:mb-20">
        {/* Botón CV */}
        <a
          href="/CV_Omar_Arias_Dominguez.pdf"
          download="CV_Omar_Arias_Dominguez.pdf"
          className="hand-drawn flex items-center justify-center gap-2 border border-[#7c49b6]/20 bg-[#e5dbf0] px-8 py-4 font-bold text-[#4a2c6d] no-underline shadow-[4px_4px_0px_0px_rgba(42,44,109,0.2)] transition-all duration-300 hover:scale-105 hover:bg-[#7c49b6] hover:text-white hover:shadow-[4px_4px_0px_0px_rgba(124,73,182,0.4)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7c49b6] active:scale-95"
        >
          <FaFileDownload className="text-xl" aria-hidden="true" />
          {t.header.downloadCv}
        </a>

        {/* Botón LinkedIn */}
        <a
          href="https://www.linkedin.com/in/omar-arias-dominguez-87b8833aa/"
          className="hand-drawn flex items-center justify-center gap-2 border border-[#38c7bd]/20 bg-[#d7f4f2] px-8 py-4 font-bold text-[#1e6f6a] no-underline shadow-[4px_4px_0px_0px_rgba(42,44,109,0.2)] transition-all duration-300 hover:scale-105 hover:bg-[#38c7bd] hover:text-white hover:shadow-[4px_4px_0px_0px_rgba(56,199,189,0.4)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#38c7bd] active:scale-95"
        >
          <FaLinkedin className="text-xl" aria-hidden="true" />
          LinkedIn
        </a>

        {/* Botón GitHub */}
        <a
          href="https://github.com/OmarArias72"
          className="hand-drawn flex items-center justify-center gap-2 border border-[#fa7705]/20 bg-[#fee4cd] px-8 py-4 font-bold text-[#b35804] no-underline shadow-[4px_4px_0px_0px_rgba(42,44,109,0.2)] transition-all duration-300 hover:scale-105 hover:bg-[#fa7705] hover:text-white hover:shadow-[4px_4px_0px_0px_rgba(250,119,5,0.4)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fa7705] active:scale-95"
        >
          <FaGithub className="text-xl" aria-hidden="true" />
          GitHub
        </a>
      </div>

      {/* Proceso de trabajo.
          - Móvil (< md): lista que se ajusta en filas; 7 nodos no caben en una sola línea.
          - md+: nodos posicionados sobre la curva dibujada a lápiz. */}
      <ol className="mx-auto flex max-w-sm list-none flex-wrap justify-center gap-x-5 gap-y-6 md:hidden">
        {nodes.map((node) => (
          <li key={node.id}>
            <NodeBubble node={node} title={t.header.nodes[node.id]} />
          </li>
        ))}
      </ol>

      <div className="relative mx-auto mt-4 hidden w-full max-w-5xl px-4 md:block">
        <div className="relative h-70 w-full">
          {/* La línea ocupa todo el contenedor; el viewBox se estira en horizontal,
              por eso los trazos usan non-scaling-stroke para no deformarse. */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
            viewBox="0 0 1200 280"
          >
            <defs>
              <linearGradient
                id="pathGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#fa7705" stopOpacity="0.6" />
                <stop offset="20%" stopColor="#7c49b6" stopOpacity="0.7" />
                <stop offset="40%" stopColor="#38c7bd" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#4a2c6d" stopOpacity="0.7" />
                <stop offset="80%" stopColor="#ffb347" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#e57373" stopOpacity="0.5" />
              </linearGradient>
            </defs>

            {/* Sombra difusa debajo de la línea */}
            <path
              d={connectionPath}
              fill="none"
              stroke="#190f24"
              strokeWidth="6"
              strokeOpacity="0.1"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />

            {/* Línea principal */}
            <path
              d={connectionPath}
              fill="none"
              stroke="url(#pathGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="8 6"
              vectorEffect="non-scaling-stroke"
              className="animate-dash-slow"
            />
          </svg>

          {/* Puntos de unión: son divs (no <circle>) para no deformarse con el viewBox estirado */}
          {nodes.map((node, index) => {
            const { x, y } = nodePoints[index];
            return (
              <span
                key={`dot-${node.id}`}
                aria-hidden="true"
                className="pointer-events-none absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full border border-[#190f24]"
                style={{
                  left: `${(x / PATH_WIDTH) * 100}%`,
                  top: `${y}px`,
                  backgroundColor: node.color,
                  animationDelay: `${index * 0.2}s`,
                }}
              />
            );
          })}

          {/* Nodos: el centrado horizontal va en un wrapper estático para que
              no choque con la animación de flotado (que anima transform). */}
          {nodes.map((node) => (
            <div
              key={node.id}
              className="absolute -translate-x-1/2"
              style={{ left: node.x, top: node.y }}
            >
              <NodeBubble
                node={node}
                title={t.header.nodes[node.id]}
                floating
              />
            </div>
          ))}
        </div>
      </div>

      {/* Indicador de scroll: en el flujo (mt-auto) para no superponerse al contenido
          en pantallas bajas, y centrado sin offsets manuales. */}
      <a
        href="#projects"
        className="group mt-auto flex animate-bounce-slow flex-col items-center gap-2 pt-10 text-[#7c49b6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7c49b6]"
      >
        <span className="hand-drawn rounded-full border border-[#cbb6e2]/30 bg-white/60 px-4 py-2 font-mono text-xs font-medium tracking-wider backdrop-blur-sm transition-all duration-300 group-hover:bg-[#7c49b6] group-hover:text-white md:text-sm">
          {t.header.scroll}
        </span>
        <svg
          aria-hidden="true"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          className="transition-transform duration-300 group-hover:translate-y-2"
        >
          <path
            d="M15,5 L15,20 M10,15 L15,20 L20,15"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="text-[#7c49b6] transition-colors group-hover:text-[#fa7705]"
          />
          <circle
            cx="15"
            cy="15"
            r="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 3"
            className="text-[#38c7bd] transition-colors group-hover:text-[#7c49b6]"
          />
        </svg>
      </a>
    </section>
  );
};

export default Header;