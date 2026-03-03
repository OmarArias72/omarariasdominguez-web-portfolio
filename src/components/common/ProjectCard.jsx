const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-white hand-drawn shadow-[8px_8px_0px_0px_rgba(42,44,109,0.1)] hover:shadow-[12px_12px_0px_0px_rgba(124,73,182,0.4)] transition-all duration-300 hover:-rotate-1">
      {/* Detalle decorativo: "Cinta adhesiva" simulada */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-8 bg-[#afe9e5]/60 -rotate-2 z-10 border border-[#88ddd8]/30"></div>

      {/* Imagen del Proyecto con marco de dibujo */}
      <div className="m-4 aspect-video overflow-hidden border-2 border-[#190f24] rounded-lg bg-[#f2edf8]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-30 group-hover:grayscale-0"
        />
      </div>

      {/* Contenido */}
      <div className="p-6 pt-2">
        <h3 className="text-xl font-black text-[#190f24] mb-2 font-mono">
          {project.title}
        </h3>
        <p className="text-[#53464b] text-sm mb-4 line-clamp-3 text-justify font-medium leading-relaxed">
          {project.description}
        </p>

        {/* Tags de Tecnología - Estilo burbuja de texto */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-0.5 border border-[#321d49] text-[#4a2c6d] text-[10px] font-bold uppercase tracking-wider bg-[#e5dbf0] rounded-sm rotate-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Enlace con flecha dibujada */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-black text-[#7c49b6] hover:text-[#fa7705] transition-colors group/link"
        >
          EXPLORE_PROJECT
          <svg
            className="w-5 h-5 ml-2 transform group-hover/link:translate-x-2 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {/* Path estilo "Sketch" */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
