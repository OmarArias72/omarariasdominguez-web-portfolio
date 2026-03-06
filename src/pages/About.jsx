const About = () => {
  return (
    // bg-[#fef1e6] simula el papel de la libreta
    <section
      id="about"
      className="py-24 px-6 bg-[#fef1e6] scroll-mt-24 relative overflow-hidden"
    >
      {/* Fondo de cuaderno de puntos */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#321d49 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>
      {/* Decoración: Círculo dibujado a mano en la esquina (Doodle) */}
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
        {/* Título con subrayado tipo resaltador (Highlighter) */}
        <div className="relative mb-12 inline-block">
          <h2 className="text-3xl md:text-5xl font-black text-[#190f24] relative z-10">
            About me
          </h2>
          {/* El "resaltador" es un div con color mint-cream-100 */}
          <div className="absolute bottom-1 left-0 w-full h-4 bg-[#ccffcc] -rotate-1 z-0"></div>

          {/* Flecha dibujada apuntando al texto (Solo en desktop) */}
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

        {/* Grid de dos columnas - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Columna Izquierda - Texto About Me */}
          <div className="space-y-8 text-lg md:text-xl text-[#53464b] leading-relaxed text-justify font-medium">
            <p className="relative">
              I am a{" "}
              <span className="text-[#7c49b6] font-black italic">
                Full Stack Developer
              </span>{" "}
              with two years of experience building solutions that integrate
              backend and frontend to deliver functional applications aligned
              with business needs.
            </p>
            <p>
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
              <span className="text-[#4a2c6d] font-bold border-b-2 border-dashed border-[#38c7bd]">
                Java, Python, Spring Boot, and React
              </span>{" "}
              to design complete flows from server logic to user experience.
            </p>
          </div>

          {/* COLUMNA DERECHA: LA FOTO / NOTA */}
          <div className="flex justify-center items-center relative group">
            {/* Elementos decorativos alrededor de la foto */}
            <div className="absolute -top-6 -left-6 text-[#fa7705] rotate-12 group-hover:scale-110 transition-transform z-10">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>

            {/* LA NOTA (Contenedor de la foto) */}
            <div className="relative bg-white p-4 pb-12 shadow-[8px_8px_0px_0px_rgba(25,15,36,1)] border-2 border-[#190f24] rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300 ease-in-out">
              {/* Efecto de viñeta / outline al hacer hover */}
              <div className="absolute inset-0 border-4 border-dashed border-[#7c49b6] opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 rounded-lg -z-10"></div>

              {/* Espacio para la foto */}
              <div className="w-64 h-64 md:w-72 md:h-72 bg-[#f3f4f6] overflow-hidden border border-[#190f24]">
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="Omar Arias"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Texto simulando pie de foto manuscrito */}
              <p className="absolute bottom-3 left-0 w-full text-center font-serif italic text-[#190f24] opacity-80">
                Omar.Arias()
              </p>

              {/* Cinta adhesiva decorativa (Tape) */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#38c7bd]/40 backdrop-blur-sm -rotate-2 border border-[#190f24]/10"></div>
            </div>

            {/* Garabato naranja inferior */}
            <div className="absolute -bottom-10 -right-4 text-[#fa7705] opacity-60">
              <svg width="80" height="40" viewBox="0 0 100 40">
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
        <div className="mt-20 flex justify-center opacity-40">
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
    </section>
  );
};

export default About;
