const About = () => {
  return (
    // bg-[#fef1e6] simula el papel de la libreta
    <section
      id="about"
      className="py-24 px-6 bg-[#fef1e6] scroll-mt-24 relative overflow-hidden"
    >
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

      <div className="max-w-3xl mx-auto relative">
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

        {/* Contenido de texto con estilo de escritura */}
        <div className="space-y-8 text-lg md:text-xl text-[#53464b] leading-relaxed text-justify font-medium">
          <p className="relative">
            I am a{" "}
            <span className="text-[#7c49b6] font-black italic">
              Full Stack Developer
            </span>{" "}
            with two years of experience building solutions that integrate
            backend and frontend to deliver functional applications aligned with
            business needs.
            {/* Pequeño subrayado zigzag bajo "real impact" */}
            My focus is on connecting systems, developing products, and creating
            tools that generate{" "}
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

          <p className="border-l-4 border-[#e5dbf0] pl-6 py-2 italic bg-white/30 hand-drawn">
            Throughout my journey, I have specialized in transforming complex
            requirements into scalable software. I am passionate about clean
            code and efficient architectures, ensuring that every line of code
            contributes to a robust and user-centric final product.
          </p>
        </div>

        {/* Rayado decorativo al final de la sección */}
        <div className="mt-16 flex justify-center opacity-40">
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
