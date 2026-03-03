import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";

const Header = () => {
  return (
    <header className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-20 bg-linear-to-b from-white to-gray-50">
      {/* Título Principal */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
        FullStack Developer <br />
        <span className="text-blue-600">Omar Arias Dominguez</span>
      </h1>

      {/* Descripción */}
      <p className="max-w-2xl text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
        I connect systems, develop products, and create tools that make a
        <span className="font-semibold text-gray-800"> real impact</span>.
      </p>

      {/* Contenedor de Botones (CTA) */}
      <div className="flex flex-wrap justify-center items-center gap-6">
        {/* Botón Descargar CV */}
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all hover:-translate-y-1 active:scale-95">
          <FaFileDownload className="text-xl" />
          Download CV
        </button>

        {/* Botón LinkedIn (Solo Logo) */}
        <a
          href="https://linkedin.com/in/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-white border border-gray-200 text-[#0077B5] rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all hover:-translate-y-1"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin size={28} />
        </a>

        {/* Botón GitHub (Solo Logo) */}
        <a
          href="https://github.com/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-white border border-gray-200 text-[#181717] rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all hover:-translate-y-1"
          aria-label="GitHub Profile"
        >
          <FaGithub size={28} />
        </a>
      </div>
    </header>
  );
};

export default Header;
