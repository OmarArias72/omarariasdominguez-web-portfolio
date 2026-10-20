import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../language/useLanguage";
import { useProjectText } from "../../language/useProjectText";

// Rellena marcadores {clave} de los textos de translations.js
const fill = (str, vars) => str.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");

const ArrowIcon = ({ direction }) => (
  <svg
    aria-hidden="true"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
  </svg>
);

// Galería con imagen principal, flechas, miniaturas, autoplay y navegación con teclado.
const Gallery = ({ images, title }) => {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  
  const total = images.length;
  const multiple = total > 1;

  const go = (step) => {
    setIndex((i) => (i + step + total) % total);
    // Si el usuario interactúa, pausamos el autoplay temporalmente reiniciando el estado
    setIsUserInteracting(true); 
  };

  const selectImage = (i) => {
    setIndex(i);
    setIsUserInteracting(true);
  };

  // Efecto de Autoplay
  useEffect(() => {
    if (!multiple || isHovered || isUserInteracting) return;
    
    // Respetar la preferencia de movimiento reducido del sistema
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 4000); // 4 segundos por imagen

    return () => clearInterval(interval);
  }, [multiple, isHovered, isUserInteracting, total]);

  // Temporizador para reanudar el autoplay después de la interacción manual
  useEffect(() => {
    if (!isUserInteracting) return;
    const timeout = setTimeout(() => setIsUserInteracting(false), 8000); // Reanuda tras 8s de inactividad
    return () => clearTimeout(timeout);
  }, [isUserInteracting, index]);

  const handleKeyDown = (e) => {
    if (!multiple) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    }
  };

  const label = fill(t.projects.modal.imageOf, { current: index + 1, total });
  
  // Botones de navegación más grandes y accesibles
  const navButton =
    "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#190f24] bg-white text-[#190f24] shadow-[4px_4px_0px_0px_rgba(25,15,36,1)] transition-all hover:bg-[#7c49b6] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fa7705] active:translate-y-1 active:shadow-none disabled:opacity-50 disabled:pointer-events-none";

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={t.projects.modal.gallery}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="space-y-4"
    >
      {/* Contenedor Flex: Flecha - Imagen - Flecha */}
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Flecha Izquierda */}
        {multiple && (
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={t.projects.modal.prev}
            className={navButton}
          >
            <ArrowIcon direction="left" />
          </button>
        )}

        {/* Imagen Principal */}
        <div className="relative min-w-0 flex-1 overflow-hidden border-2 border-[#190f24] bg-[#f2edf8]">
          <img
            key={images[index]}
            src={images[index]}
            alt={`${title} - ${label}`}
            /* Ajuste de tamaño: limitamos la altura para que nunca desborde la pantalla */
            className="mx-auto aspect-video w-full max-h-[45vh] md:max-h-[55vh] object-contain"
          />

          {/* Contador de imágenes (solo si hay más de una) */}
          {multiple && (
            <span
              aria-hidden="true"
              className="absolute right-3 bottom-3 rounded-full border-2 border-[#190f24] bg-white/90 px-3 py-1 font-mono text-xs font-bold shadow-[2px_2px_0px_0px_rgba(25,15,36,1)]"
            >
              {index + 1} / {total}
            </span>
          )}
        </div>

        {/* Flecha Derecha */}
        {multiple && (
          <button
            type="button"
            onClick={() => go(1)}
            aria-label={t.projects.modal.next}
            className={navButton}
          >
            <ArrowIcon direction="right" />
          </button>
        )}
      </div>

      {/* Anuncio para lectores de pantalla */}
      <p className="sr-only" aria-live="polite">
        {label}
      </p>

      {/* Miniaturas */}
      {multiple && (
        <ul className="grid grid-cols-4 gap-2 sm:grid-cols-5">
          {images.map((src, i) => (
            <li key={`${src}-${i}`}>
              <button
                type="button"
                onClick={() => selectImage(i)}
                aria-label={fill(t.projects.modal.showImage, { n: i + 1 })}
                aria-current={i === index}
                className={`block w-full overflow-hidden border-2 bg-[#f2edf8] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fa7705] ${
                  i === index
                    ? "border-[#7c49b6] ring-2 ring-[#7c49b6]/40 shadow-[2px_2px_0px_0px_rgba(124,73,182,0.5)]"
                    : "border-[#190f24]/40 opacity-60 hover:opacity-100 hover:border-[#190f24]"
                }`}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="aspect-video w-full object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ProjectDetails = ({ project, onClose }) => {
  const { t } = useLanguage();
  const { title, details, highlights } = useProjectText(project);
  const images = project.gallery?.length ? project.gallery : [project.image];
  const hasLink = project.link && project.link !== "#";
  const sectionTitle =
    "mb-2 font-mono text-xs font-black tracking-widest text-[#7c49b6] uppercase";

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex items-start justify-between gap-4 border-b-4 border-[#190f24] bg-[#e5dbf0] px-5 py-4 sm:px-6">
        <h2
          id="project-modal-title"
          className="font-mono text-xl font-black wrap-break-word sm:text-2xl"
        >
          {title}
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label={t.projects.modal.close}
          className="-my-1 flex h-10 w-10 shrink-0 items-center justify-center border-2 border-[#190f24] bg-white shadow-[3px_3px_0px_0px_rgba(25,15,36,1)] transition-colors hover:bg-[#fa7705] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c49b6] active:scale-95"
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            viewBox="0 0 24 24"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="overflow-y-auto overscroll-contain p-5 sm:p-6">
        <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
          {/* Columna de la galería */}
          <div className="min-w-0 lg:col-span-3">
            <Gallery key={project.id} images={images} title={title} />
          </div>

          {/* Columna de detalles */}
          <div className="min-w-0 space-y-5 lg:col-span-2">
            <section>
              <h3 className={sectionTitle}>{t.projects.modal.overview}</h3>
              <p className="leading-relaxed font-medium text-[#53464b]">
                {details}
              </p>
            </section>

            {highlights.length > 0 && (
              <section>
                <h3 className={sectionTitle}>{t.projects.modal.highlights}</h3>
                <ul className="list-disc space-y-1 pl-5 font-medium text-[#53464b] marker:text-[#fa7705]">
                  {highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            <section>
              <h3 className={sectionTitle}>{t.projects.modal.technologies}</h3>
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-sm border border-[#321d49] bg-[#e5dbf0] px-3 py-0.5 text-[10px] font-bold tracking-wider text-[#4a2c6d] uppercase"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </section>

            {hasLink && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-[#190f24] bg-[#7c49b6] px-5 py-3 text-sm font-black tracking-wider text-white uppercase shadow-[4px_4px_0px_0px_rgba(25,15,36,1)] transition-all hover:bg-[#633a92] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7c49b6] active:scale-95"
              >
                {t.projects.modal.viewRepo}
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 17L17 7M8 7h9v9" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Modal sobre <dialog> nativo
const ProjectModal = ({ project, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = previous;
    };
  }, [project]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-modal-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
      className="m-auto max-h-[92dvh] w-[min(94vw,68rem)] border-4 border-[#190f24] bg-[#fef1e6] p-0 text-[#190f24] shadow-[10px_10px_0px_0px_rgba(25,15,36,1)] backdrop:bg-[#190f24]/60 backdrop:backdrop-blur-sm open:flex open:flex-col"
    >
      {project && (
        <ProjectDetails
          project={project}
          onClose={() => dialogRef.current?.close()}
        />
      )}
    </dialog>
  );
};

export default ProjectModal;