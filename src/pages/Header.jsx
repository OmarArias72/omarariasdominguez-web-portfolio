import { FaLinkedin, FaGithub, FaFileDownload, FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useLanguage } from "../language/useLanguage";

const PATH_WIDTH = 1000;
const CIRCLE_CENTER_Y = 28;
const ACCENT_A = "#7c49b6";
const ACCENT_B = "#38c7bd";

const workflowNodes = [
  { id: 1, icon: "mind-svgrepo-com.svg", delay: 0, x: "10%", y: "20px" },
  { id: 2, icon: "design-studio-svgrepo-com.svg", delay: 0.2, x: "36.6%", y: "0px" },
  { id: 3, icon: "host-record-svgrepo-com.svg", delay: 0.4, x: "63.3%", y: "0px" },
  { id: 4, icon: "cloud-acceleration-svgrepo-com.svg", delay: 0.6, x: "90%", y: "20px" },
].map((node) => ({ ...node, color: node.id % 2 === 0 ? ACCENT_B : ACCENT_A }));

const getNodeCoordinates = (node) => ({
  x: (parseFloat(node.x) / 100) * PATH_WIDTH,
  y: parseInt(node.y, 10) + CIRCLE_CENTER_Y,
});

const nodePoints = workflowNodes.map(getNodeCoordinates);

const connectionPath = nodePoints.reduce((path, curr, i) => {
  if (i === 0) return `M ${curr.x},${curr.y}`;
  const prev = nodePoints[i - 1];
  const c1x = prev.x + (curr.x - prev.x) * 0.3;
  const c2x = curr.x - (curr.x - prev.x) * 0.3;
  return `${path} C ${c1x},${prev.y - 8} ${c2x},${curr.y - 8} ${curr.x},${curr.y}`;
}, "");

const FloatingCard = ({ icon, text, className, delay = "0s" }) => (
  <div
    className={`absolute z-20 flex items-center gap-2 rounded-xl border-2 border-[#190f24] bg-white px-3 py-2 shadow-[3px_3px_0px_0px_rgba(25,15,36,1)] animate-float-slow ${className}`}
    style={{ animationDelay: delay }}
  >
    <span aria-hidden="true" className="text-lg">
      {icon}
    </span>
    <span className="font-mono text-[10px] font-bold tracking-wide text-[#190f24] sm:text-xs">
      {text}
    </span>
  </div>
);

const MetricCard = ({ value, label, colorClass }) => (
  <div className={`flex flex-col items-center justify-center rounded-xl border-2 border-[#190f24]/20 p-3 text-center shadow-[2px_2px_0px_0px_rgba(25,15,36,0.1)] ${colorClass}`}>
    <span className="text-xl font-black text-[#190f24] sm:text-2xl">{value}</span>
    <span className="mt-0.5 text-[10px] font-bold text-[#53464b]">{label}</span>
  </div>
);

const NodeBubble = ({ node, title, tooltip, floating = false }) => (
  <div
    className={`group relative flex flex-col items-center ${floating ? "animate-float-node" : ""}`}
    style={floating ? { animationDelay: `${node.delay}s` } : undefined}
  >
    <div
      className="mb-2 flex h-14 w-14 items-center justify-center rounded-full border-2 bg-white/90 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-[#fa7705] md:h-16 md:w-16"
      style={{
        borderColor: node.color,
        backgroundColor: `${node.color}15`,
        boxShadow: `0 4px 12px ${node.color}40`,
      }}
    >
      <img
        src={`/svg-icons/${node.icon}`}
        alt=""
        width="32"
        height="32"
        loading="lazy"
        className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 md:h-8 md:w-8"
        style={{ filter: `drop-shadow(0 2px 4px ${node.color}80)` }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://via.placeholder.com/32/${node.color.replace("#", "")}/ffffff?text=${encodeURIComponent(title[0] ?? "")}`;
        }}
      />
    </div>
    <span
      className="w-max whitespace-nowrap rounded-full border border-transparent bg-white/90 px-3 py-1 text-center text-[10px] font-bold uppercase tracking-wider shadow-xs backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:border-[#190f24] group-hover:bg-white group-hover:text-[#190f24] motion-reduce:transform-none md:px-4 md:text-xs"
      style={{ color: node.color }}
    >
      {title}
    </span>

    <div className="absolute top-full mt-2 hidden w-48 rounded-lg border-2 border-[#190f24] bg-white p-2 text-center text-xs font-medium text-[#53464b] shadow-[3px_3px_0px_0px_rgba(25,15,36,1)] group-hover:block z-50">
      {tooltip}
    </div>

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
    // Cambiamos py-8 a pt-32 para evitar el solapamiento con el NavBar
    <section className="relative flex min-h-fit flex-col justify-center overflow-hidden px-4 pt-32 pb-12 sm:px-6 lg:pt-36 lg:pb-16">
      
      {/* --- Doodles de fondo --- */}
      <div aria-hidden="true" className="absolute top-20 left-10 hidden lg:block text-[#cbb6e2] opacity-30 -rotate-12">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="M8 21h8M12 17v4"/></svg>
      </div>
      <div aria-hidden="true" className="absolute bottom-1/4 right-10 hidden lg:block text-[#cbb6e2] opacity-30 rotate-6">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
      </div>
      <div aria-hidden="true" className="absolute top-1/3 right-20 hidden xl:block text-[#cbb6e2] opacity-20 rotate-12">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
      </div>
      <div aria-hidden="true" className="absolute bottom-10 right-10 hidden xl:block text-[#fa7705] opacity-40">
        <svg width="100" height="80" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M10,50 L90,50 L95,70 L5,70 Z" />
          <path d="M20,50 L20,10 L80,10 L80,50" />
          <path d="M25,45 L75,45 L75,15 L25,15 Z" strokeDasharray="4,2" />
          <path d="M35,35 L45,35 M50,30 L65,30 M35,40 L55,40" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="pointer-events-none absolute top-0 left-0 h-full w-full opacity-10" style={{ backgroundImage: "radial-gradient(#321d49 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>

      <div className="mx-auto w-full max-w-6xl relative z-10 flex flex-col gap-6">
        
        {/* --- HERO SPLIT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* COLUMNA IZQUIERDA */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            
            <div role="status" className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-[#38c7bd]/40 bg-[#d7f4f2] px-4 py-1.5 text-xs font-bold text-[#1e6f6a] shadow-sm sm:text-sm">
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-[#38c7bd]" />
              {t.header.available}
            </div>

            <h1 className="mb-6 flex flex-col items-center lg:items-start">
              <span className="text-4xl font-black text-[#190f24] sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
                Omar Arias Dominguez
              </span>
              <span className="mt-2 text-xl font-black italic text-[#7c49b6] sm:text-2xl md:text-3xl">
                {t.header.title}
              </span>
            </h1>

            <p className="mb-8 max-w-lg text-base text-[#53464b] leading-relaxed font-medium sm:text-lg md:text-xl">
              {t.header.subtitle}
            </p>

            <div className="flex w-full flex-wrap items-center justify-center gap-3 sm:justify-start">
              <a href="#contact" className="hand-drawn flex items-center justify-center gap-2 border-2 border-[#190f24] bg-[#7c49b6] px-6 py-3.5 font-black tracking-wider text-white uppercase no-underline shadow-[4px_4px_0px_0px_rgba(25,15,36,1)] transition-all duration-300 hover:scale-105 hover:bg-[#633a92] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7c49b6] active:scale-95 active:shadow-none">
                <FaFileDownload className="text-lg" aria-hidden="true" />
                {t.header.downloadCv}
              </a>
              <a href="#projects" className="hand-drawn flex items-center justify-center gap-2 border-2 border-[#321d49] bg-white px-6 py-3.5 font-bold text-[#321d49] no-underline transition-all duration-300 hover:scale-105 hover:bg-[#321d49] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#321d49] active:scale-95">
                {t.header.viewProjects}
                <FaArrowRight className="text-sm" aria-hidden="true" />
              </a>
              
              <div className="flex items-center gap-2 border-l-2 border-[#e5dbf0] pl-3">
                <a href="https://www.linkedin.com/in/omar-arias-dominguez-87b8833aa/" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#321d49] bg-white text-[#321d49] transition-all duration-300 hover:bg-[#321d49] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#321d49]">
                  <FaLinkedin className="text-xl" aria-hidden="true" />
                </a>
                <a href="https://github.com/OmarArias72" aria-label="GitHub" className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#321d49] bg-white text-[#321d49] transition-all duration-300 hover:bg-[#321d49] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#321d49]">
                  <FaGithub className="text-xl" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="relative mt-8 flex w-full flex-col items-center sm:items-start">
              <div className="flex w-full justify-center gap-3 sm:justify-start lg:gap-4">
                <MetricCard value={t.header.metrics.years} label={t.header.metrics.yearsLabel} colorClass="bg-[#e5dbf0]" />
                <MetricCard value={t.header.metrics.projects} label={t.header.metrics.projectsLabel} colorClass="bg-[#d7f4f2]" />
                <MetricCard value={t.header.metrics.quality} label={t.header.metrics.qualityLabel} colorClass="bg-[#fee4cd]" />
              </div>
              
              <div className="mt-6 hidden sm:flex flex-col items-center lg:items-start absolute -bottom-16 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0">
                 <span className="font-mono text-[10px] font-bold text-[#7c49b6] opacity-70 uppercase tracking-widest mb-1">
                   {t.header.processPrompt} ⤵
                 </span>
                 <svg width="30" height="40" viewBox="0 0 30 40" fill="none" stroke="currentColor" className="text-[#7c49b6] opacity-50" strokeWidth="2" strokeDasharray="4,4">
                   <path d="M15,0 Q30,20 15,35 M10,30 L15,35 L20,30" />
                 </svg>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Foto + Elementos de Confianza */}
          <div className="relative flex justify-center items-center min-h-[400px] lg:min-h-[500px] mt-16 lg:mt-0">
            
            {/* Tarjetas Flotantes - Reposicionadas para evitar solapamientos con la imagen y bordes */}
            <FloatingCard icon="🛠️" text={t.header.floatingCards.support} className="-top-4 -left-4 lg:-top-8 lg:-left-12" delay="0s" />
            <FloatingCard icon="⚡" text={t.header.floatingCards.agile} className="bottom-1/4 -left-9 lg:-left-8" delay="2s"  />
            <FloatingCard icon="📱" text={t.header.floatingCards.responsive} className="top-1/4 -right-12 lg:-right-10 lg:top-1/8" delay="1s" />
            

            {/* Avatar Principal */}
            <div className="relative group z-10 flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#cbb6e2] animate-spin-slow -z-10" style={{ animationDuration: '30s', transform: 'scale(1.15)' }}></div>
                <img
                  src="/perfil/Perfil-foto.jpg"
                  alt="Omar Arias"
                  width="300"
                  height="300"
                  loading="eager"
                  decoding="async"
                  className="h-56 w-56 rounded-full border-4 border-[#190f24] object-cover object-[center_25%] shadow-[8px_8px_0px_0px_rgba(25,15,36,1)] brightness-110 contrast-105 transition-transform duration-500 group-hover:scale-105 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80"
                />
              </div>
              
              {/* Prompter amarillo (con margen superior para que no choque con el badge de Soporte) */}
              <div className="relative z-20 mt-8 whitespace-nowrap rounded-full border-2 border-[#190f24] bg-[#ffeaa5] px-4 py-1.5 font-mono text-xs font-bold shadow-[3px_3px_0px_0px_rgba(25,15,36,1)] sm:px-5 sm:py-2 sm:text-sm">
                <span aria-hidden="true" className="mr-1 text-[#fa7705]">&gt;</span>
                {displayText}
                <span className="ml-0.5 animate-pulse text-[#fa7705]">|</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- WORKFLOW (4 PASOS) --- */}
        <div className="mt-20 lg:mt-24">
          <h2 className="mb-6 text-center text-xl font-black text-[#190f24] sm:text-2xl">
            {t.header.workflowTitle}
          </h2>
          
          {/* Móvil */}
          <ol className="mx-auto flex max-w-sm list-none flex-wrap justify-center gap-4 sm:max-w-none sm:flex-row sm:gap-8 md:hidden">
            {workflowNodes.map((node) => (
              <li key={node.id}>
                <NodeBubble node={node} title={t.header.nodes[node.id].label} tooltip={t.header.nodes[node.id].tooltip} />
              </li>
            ))}
          </ol>

          {/* Desktop */}
          <div className="relative mx-auto hidden w-full max-w-4xl md:block">
            <div className="relative h-[180px] w-full">
              <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox={`0 0 ${PATH_WIDTH} 180`}>
                <defs>
                  <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={ACCENT_A} stopOpacity="0.7" />
                    <stop offset="100%" stopColor={ACCENT_B} stopOpacity="0.7" />
                  </linearGradient>
                </defs>
                <path d={connectionPath} fill="none" stroke="#190f24" strokeWidth="6" strokeOpacity="0.1" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                <path d={connectionPath} fill="none" stroke="url(#pathGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="8 6" vectorEffect="non-scaling-stroke" className="animate-dash-slow" />
              </svg>

              {workflowNodes.map((node) => (
                <div key={node.id} className="absolute -translate-x-1/2" style={{ left: node.x, top: node.y }}>
                  <NodeBubble node={node} title={t.header.nodes[node.id].label} tooltip={t.header.nodes[node.id].tooltip} floating />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- INDICADOR DE SCROLL --- */}
        <div className="mt-2 flex justify-center pb-4">
          <a href="#projects" className="group flex animate-bounce-slow flex-col items-center gap-2 text-[#7c49b6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7c49b6]">
            <span className="hand-drawn rounded-full border border-[#cbb6e2]/30 bg-white/60 px-4 py-2 font-mono text-xs font-medium tracking-wider backdrop-blur-sm transition-all duration-300 group-hover:bg-[#7c49b6] group-hover:text-white md:text-sm">
              {t.header.scroll}
            </span>
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" className="transition-transform duration-300 group-hover:translate-y-2">
              <path d="M12 4v16m-6-6l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;