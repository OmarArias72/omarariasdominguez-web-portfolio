import { projects } from "../data/projects";
import ProjectCard from "../components/common/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured Projects
          </h2>
          <div className="h-0.5 grow bg-blue-100 rounded-full"></div>
        </div>

        {/* Grid Responsivo: 1 col móvil, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
