import { useLanguage } from "./useLanguage";

// Texto localizado de un proyecto. Los textos viven en translations.js (projects.items[id]);
// si falta alguno se usa el contenido de data/projects.js como respaldo.
export const useProjectText = (project) => {
  const { t } = useLanguage();
  const item = t.projects.items?.[project.id];
  return {
    title: item?.title ?? project.title,
    description: item?.description ?? project.description,
    details: item?.details ?? item?.description ?? project.description,
    highlights: item?.highlights ?? [],
  };
};
