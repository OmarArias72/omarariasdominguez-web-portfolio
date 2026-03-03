const About = () => {
  return (
    // id="about" permite que el href="#about" del NavBar funcione.
    // scroll-mt-24 evita que el header fijo tape el título al hacer scroll.
    <section id="about" className="py-24 px-6 bg-white scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        {/* Título con línea decorativa */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 whitespace-nowrap">
            About me
          </h2>
          <div className="h-0-5 w-full bg-blue-100 rounded-full"></div>
        </div>

        {/* Contenido de texto */}
        <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-justify">
          <p>
            I am a{" "}
            <span className="text-blue-600 font-semibold">
              Full Stack Developer
            </span>{" "}
            with two years of experience building solutions that integrate
            backend and frontend to deliver functional applications aligned with
            business needs. My focus is on connecting systems, developing
            products, and creating tools that generate
            <span className="text-gray-900 font-medium"> real impact</span>,
            combining technologies such as{" "}
            <span className="font-medium text-gray-800 underline decoration-blue-200 decoration-2 underline-offset-4">
              Java, Python, Spring Boot, and React
            </span>{" "}
            to design complete flows from server logic to user experience.
          </p>

          <p>
            Throughout my journey, I have specialized in transforming complex
            requirements into scalable software. I am passionate about clean
            code and efficient architectures, ensuring that every line of code
            contributes to a robust and user-centric final product.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
