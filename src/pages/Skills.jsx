import {
  FaJava,
  FaPython,
  FaReact,
  FaGitAlt,
  FaJsSquare,
  FaDatabase,
} from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { useLanguage } from "../language/useLanguage";

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      titleKey: "backend",
      color: "bg-[#e5dbf0]", // wisteria-100
      // Clases completas y literales: Tailwind solo genera lo que encuentra escrito en el código
      border: "border-b-[#7c49b6]",
      skills: [
        { name: "Java", icon: <FaJava />, hoverColor: "#007396" },
        { name: "Spring Boot", icon: <SiSpringboot />, hoverColor: "#6DB33F" },
        { name: "Python", icon: <FaPython />, hoverColor: "#3776AB" },
      ],
    },
    {
      titleKey: "frontend",
      color: "bg-[#d7f4f2]", // strong-cyan-100
      border: "border-b-[#38c7bd]",
      skills: [
        { name: "React", icon: <FaReact />, hoverColor: "#61DAFB" },
        { name: "Javascript", icon: <FaJsSquare />, hoverColor: "#F7DF1E" },
      ],
    },
    {
      titleKey: "tools",
      color: "bg-[#fee4cd]", // sandy-brown-100
      border: "border-b-[#fa7705]",
      skills: [
        { name: "Git", icon: <FaGitAlt />, hoverColor: "#F05032" },
        { name: "MySQL", icon: <FaDatabase />, hoverColor: "#4479A1" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 md:py-24 px-4 sm:px-6 bg-[#fef1e6] scroll-mt-24 relative overflow-hidden"
    >
      {/* Decoración de fondo: Rayado de cuaderno extra */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#321d49 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="max-w-5xl mx-auto relative">
        {/* Título Estilo Sketch */}
        <div className="mb-10 md:mb-16 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#190f24] inline-block relative">
            {t.skills.title}
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-[#fa7705]"
              preserveAspectRatio="none"
            >
              <path
                d="M0,10 Q50,0 100,10"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
            </svg>
          </h2>
        </div>

        {/* Contenedor de Categorías - Ahora con hover effect como ProjectCard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-md mx-auto md:max-w-none">
          {skillCategories.map((cat, index) => (
            <div
              key={cat.titleKey}
              className={`group relative p-5 md:p-6 hand-drawn bg-white shadow-[8px_8px_0px_0px_rgba(42,44,109,0.1)] hover:shadow-[12px_12px_0px_0px_rgba(124,73,182,0.4)] transition-all duration-300 ${index % 2 === 0 ? "hover:-rotate-1" : "hover:rotate-1"} ${index % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
            >
              <h3
                className={`text-xl font-black mb-6 text-center py-1 border-b-2 border-dashed ${cat.border}`}
              >
                {t.skills[cat.titleKey]}
              </h3>

              <div className="flex flex-wrap justify-center gap-4">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    style={{ "--skill-color": skill.hoverColor }}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg border-2 border-transparent hover:border-[#321d49] hover:bg-white transition-all cursor-default group/skill"
                  >
                    <div
                      aria-hidden="true"
                      className="text-3xl text-[#4a2c6d] transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:rotate-6 group-hover/skill:text-(color:--skill-color)"
                    >
                      {skill.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-tighter text-[#53464b] group-hover/skill:text-[#321d49] transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Garabato inferior: Flecha o espiral */}
        <div className="mt-12 md:mt-20 flex justify-center text-[#cbb6e2]">
          <svg
            aria-hidden="true"
            width="60"
            height="60"
            viewBox="0 0 100 100"
            className="animate-pulse"
          >
            <path
              d="M50,10 Q90,10 90,50 T50,90 T10,50 T50,10"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray="10,5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Skills;