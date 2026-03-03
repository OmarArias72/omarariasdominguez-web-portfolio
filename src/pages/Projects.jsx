import { projects } from "../data/projects";
import ProjectCard from "../components/common/ProjectCard";

const Projects = () => {
  return (
    // Usamos el fondo sandy-brown-50 para simular el papel crema de la libreta
    <section
      id="projects"
      className="py-24 px-6 bg-[#fef1e6] scroll-mt-24 relative overflow-hidden"
    >
      {/* Decoración: Garabato de fondo */}
      <div className="absolute top-10 right-10 text-[#cbb6e2] opacity-40 select-none">
        <svg width="120" height="120" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10 5"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-end gap-4 mb-16">
          <div>
            <span className="text-[#fa7705] font-black uppercase text-sm tracking-widest">
              Selected_Works
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#190f24] mt-1">
              Featured Projects
            </h2>
          </div>
          {/* Línea divisoria estilo rayado manual */}
          <div
            className="h-2 grow bg-repeat-x"
            style={{
              backgroundImage:
                "radial-gradient(circle, #b092d3 2px, transparent 2px)",
              backgroundSize: "12px 100%",
            }}
          ></div>
        </div>

        {/* Grid Responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
