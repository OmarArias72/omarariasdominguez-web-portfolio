import { useLanguage } from "../../language/useLanguage";

const OPTIONS = [
  { code: "es", label: "ES", name: "Español" },
  { code: "en", label: "EN", name: "English" },
];

const LanguageToggle = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className="flex shrink-0 overflow-hidden rounded-full border-2 border-[#321d49] bg-white text-xs font-black"
    >
      {OPTIONS.map((opt) => {
        const active = lang === opt.code;
        return (
          <button
            key={opt.code}
            type="button"
            lang={opt.code}
            aria-label={opt.name}
            aria-pressed={active}
            onClick={() => setLang(opt.code)}
            className={`min-w-9 px-2.5 py-1.5 transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#fa7705] ${
              active
                ? "bg-[#7c49b6] text-white"
                : "text-[#4a2c6d] hover:bg-[#e5dbf0]"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageToggle;
