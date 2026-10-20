import { useLanguage } from "../../language/useLanguage";
import { useProjectText } from "../../language/useProjectText";

const ProjectCard = ({ project, onPreview }) => {
  const { t } = useLanguage();
  const { title, description } = useProjectText(project);

  return (
    <article className="group relative flex h-full flex-col bg-white hand-drawn shadow-[8px_8px_0px_0px_rgba(42,44,109,0.1)] hover:shadow-[12px_12px_0px_0px_rgba(124,73,182,0.4)] transition-all duration-300 hover:-rotate-1">
      {/* Imagen del Proyecto con marco de dibujo */}
      <div className="m-4 aspect-video overflow-hidden border-2 border-[#190f24] rounded-lg bg-[#f2edf8]">
        <img
          src={project.image}
          alt={title}
          width="600"
          height="400"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-30 group-hover:grayscale-0"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col p-5 pt-2 sm:p-6 sm:pt-2">
        <h3 className="text-xl font-black text-[#190f24] mb-2 font-mono">
          {title}
        </h3>
        <p className="text-[#53464b] text-sm mb-4 line-clamp-3 text-left sm:text-justify font-medium leading-relaxed">
          {description}
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

        {/* Acciones: vista previa (modal) y enlace externo */}
        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3">
          <button
            type="button"
            onClick={() => onPreview?.(project)}
            aria-haspopup="dialog"
            className="inline-flex items-center gap-2 rounded-sm border-2 border-[#321d49] bg-[#e5dbf0] px-3 py-1.5 text-xs font-black tracking-wider text-[#4a2c6d] shadow-[3px_3px_0px_0px_rgba(25,15,36,1)] transition-all hover:bg-[#7c49b6] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7c49b6] active:translate-y-px active:shadow-none"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            {t.projects.preview}
          </button>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-sm text-sm font-black text-[#7c49b6] hover:text-[#fa7705] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7c49b6] transition-colors group/link"
          >
            {t.projects.explore}
            <svg
              aria-hidden="true"
              className="w-5 h-5 ml-2 group-hover/link:translate-x-2 transition-transform"
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
    </article>
  );
};

export default ProjectCard;
