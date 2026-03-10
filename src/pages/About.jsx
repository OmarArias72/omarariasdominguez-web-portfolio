import { useState } from "react";

const About = () => {
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);

  // Configuración de iconos - REDUCIDOS a 4 puntos clave con opacidad baja
  const floatingIcons = [
    // Solo 4 iconos estratégicos con opacidad baja
    {
      id: 1,
      src: "/icons-animated/coffee-cup.gif",
      type: "gif",
      position: "top-left",
      delay: "0s",
    },
    {
      id: 2,
      src: "/icons-animated/rocket.gif",
      type: "gif",
      position: "top-right",
      delay: "0.2s",
    },
    {
      id: 3,
      src: "/icons-animated/physics.gif",
      type: "gif",
      position: "bottom-left",
      delay: "0.4s",
    },
    {
      id: 4,
      src: "/svg-icons/mind-svgrepo-com.svg",
      type: "svg",
      position: "bottom-right",
      delay: "0.6s",
    },
  ];

  const getPositionStyles = (position) => {
    const baseStyles = "absolute transition-all duration-700 z-0";
    // Opacidad mucho más baja: 20% cuando visible, 0% cuando oculto
    const hoverStyles = isPhotoHovered
      ? "opacity-20 scale-90 translate-x-0 translate-y-0 rotate-0"
      : "opacity-0 scale-0 translate-x-20 translate-y-20 rotate-45";

    // Posiciones responsivas
    const positionClasses = {
      "top-left":
        "max-md:-top-12 max-md:-left-8 -top-24 -left-16 xl:-top-32 xl:-left-20 rotate-[-12deg]",
      "top-right":
        "max-md:-top-12 max-md:-right-8 -top-24 -right-16 xl:-top-32 xl:-right-20 rotate-[12deg]",
      "bottom-left":
        "max-md:-bottom-12 max-md:-left-8 -bottom-24 -left-16 xl:-bottom-32 xl:-left-20 rotate-[12deg]",
      "bottom-right":
        "max-md:-bottom-12 max-md:-right-8 -bottom-24 -right-16 xl:-bottom-32 xl:-right-20 rotate-[-12deg]",
    };

    return `${baseStyles} ${positionClasses[position]} ${hoverStyles}`;
  };

  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 md:px-6 bg-[#fef1e6] scroll-mt-24 relative overflow-hidden"
    >
      {/* Fondo de cuaderno de puntos */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#321d49 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      {/* Decoración: Círculo dibujado a mano en la esquina */}
      <div className="absolute -top-10 -right-10 text-[#cbb6e2] opacity-30 hidden md:block">
        <svg width="200" height="200" viewBox="0 0 100 100">
          <path
            d="M20,50 C20,20 80,20 80,50 C80,80 20,80 20,50 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5,3"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Título con subrayado tipo resaltador */}
        <div className="relative mb-8 md:mb-12 inline-block">
          <h2 className="text-3xl md:text-5xl font-black text-[#190f24] relative z-10">
            About me
          </h2>
          <div className="absolute bottom-1 left-0 w-full h-4 bg-[#ccffcc] -rotate-1 z-0"></div>

          {/* Flecha dibujada apuntando al texto */}
          <div className="absolute -left-16 top-0 text-[#fa7705] hidden lg:block">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              className="-rotate-45"
            >
              <path
                d="M10,10 Q25,10 40,40 M40,40 L30,35 M40,40 L35,30"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Grid de dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Columna Izquierda - Texto About Me con tarjeta neo-brutalista MEJORADA */}
          <div className="space-y-6 md:space-y-8">
            {/* Tarjeta neo-brutalista con BORDE MÁS GRUESO y SOMBRA MÁS FUERTE */}
            <div className="relative bg-[#fef1e6] p-6 md:p-8 border-4 border-[#190f24] shadow-[10px_10px_0px_0px_rgba(25,15,36,1)] hover:shadow-[12px_12px_0px_0px_rgba(25,15,36,1)] transition-all duration-300 -rotate-1 hover:rotate-0">
              {/* Fondo de puntos sutil dentro de la tarjeta */}
              <div
                className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(#321d49 1px, transparent 1px)",
                  backgroundSize: "15px 15px",
                }}
              ></div>

              <div className="relative z-10">
                <p className="text-base md:text-lg lg:text-xl text-[#53464b] leading-relaxed text-justify font-medium mb-4">
                  I am a{" "}
                  <span className="text-[#7c49b6] font-black italic bg-[#fef1e6] px-1">
                    Full Stack Developer
                  </span>{" "}
                  with two years of experience building solutions that integrate
                  backend and frontend to deliver functional applications
                  aligned with business needs.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-[#53464b] leading-relaxed text-justify font-medium">
                  My focus is on connecting systems, developing products, and
                  creating tools that generate{" "}
                  <span className="text-[#190f24] font-bold relative">
                    real impact
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-2 text-[#fa7705]"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,5 Q5,0 10,5 T20,5 T30,5 T40,5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                  , combining technologies such as{" "}
                  <span className="text-[#4a2c6d] font-bold border-b-4 border-dashed border-[#38c7bd]">
                    Java, Python, Spring Boot, and React
                  </span>{" "}
                  to design complete flows from server logic to user experience.
                </p>
              </div>

              {/* Esquinas reforzadas - detalles neo-brutalistas */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#7c49b6] rotate-12 opacity-30"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#fa7705] rotate-12 opacity-30"></div>
            </div>

            {/* Elemento decorativo adicional */}
            <div className="flex justify-start opacity-40">
              <svg width="80" height="20" viewBox="0 0 80 20">
                <path
                  d="M0,10 Q20,0 40,10 T80,10"
                  fill="none"
                  stroke="#b092d3"
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>

          {/* COLUMNA DERECHA: LA FOTO CON ICONOS FLOTANTES (TEXTURA DE FONDO) */}
          <div
            className="flex justify-center items-center relative group min-h-75 md:min-h-100 mt-8 lg:mt-0"
            onMouseEnter={() => setIsPhotoHovered(true)}
            onMouseLeave={() => setIsPhotoHovered(false)}
          >
            {/* Elementos decorativos alrededor de la foto */}
            <div className="absolute -top-6 -left-6 text-[#fa7705] rotate-12 group-hover:scale-110 transition-transform z-10 opacity-40">
              <svg
                width="30"
                height="30"
                md-width="40"
                md-height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>

            {/* ICONOS FLOTANTES - SÓLO 4, COMO TEXTURA DE FONDO */}
            {floatingIcons.map((icon) => (
              <div
                key={icon.id}
                className={getPositionStyles(icon.position)}
                style={{
                  transitionDelay: icon.delay,
                  transitionProperty: "all",
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                <div className="relative">
                  <img
                    src={icon.src}
                    alt=""
                    className={`w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain ${
                      icon.type === "gif"
                        ? "animate-float-slow mix-blend-multiply"
                        : ""
                    }`}
                    style={{
                      filter:
                        "grayscale(0.5) drop-shadow(0 2px 4px rgba(124, 73, 182, 0.1))",
                    }}
                  />
                </div>
              </div>
            ))}

            {/* LA NOTA (Contenedor de la foto) - CON Z-INDEX ALTO Y BORDE GRUESO */}
            <div className="relative bg-white p-3 md:p-4 pb-8 md:pb-12 shadow-[10px_10px_0px_0px_rgba(25,15,36,1)] border-4 border-[#190f24] rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300 ease-in-out z-30">
              {/* Efecto de viñeta / outline al hacer hover */}
              <div className="absolute inset-0 border-4 border-dashed border-[#7c49b6] opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 rounded-lg -z-10"></div>

              {/* Espacio para la foto */}
              <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#f3f4f6] overflow-hidden border-2 border-[#190f24]">
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="Omar Arias"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Texto simulando pie de foto manuscrito */}
              <p className="absolute bottom-2 md:bottom-3 left-0 w-full text-center font-serif italic text-[#190f24] opacity-80 text-sm md:text-base">
                Omar.Arias()
              </p>

              {/* Cinta adhesiva decorativa (Tape) */}
              <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 w-16 md:w-24 h-6 md:h-8 bg-[#38c7bd]/40 backdrop-blur-sm -rotate-2 border-2 border-[#190f24]/20"></div>
            </div>

            {/* Garabato naranja inferior */}
            <div className="absolute -bottom-8 md:-bottom-10 -right-2 md:-right-4 text-[#fa7705] opacity-20 md:opacity-30 z-20">
              <svg
                width="60"
                height="30"
                md-width="80"
                md-height="40"
                viewBox="0 0 100 40"
              >
                <path
                  d="M10,30 Q30,10 50,30 T90,30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Rayado decorativo al final de la sección */}
        <div className="mt-16 md:mt-20 flex justify-center opacity-40">
          <svg width="100" height="20" viewBox="0 0 100 20">
            <path
              d="M0,10 Q10,0 20,10 T40,10 T60,10 T80,10 T100,10"
              fill="none"
              stroke="#b092d3"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>

      {/* Estilos adicionales para animaciones */}
      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-4px) rotate(1deg);
          }
          50% {
            transform: translateY(-8px) rotate(2deg);
          }
          75% {
            transform: translateY(-2px) rotate(1deg);
          }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
