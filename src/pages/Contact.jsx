import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // 'sending', 'success', 'error'

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(form.current);
    const data = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        form.current.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      console.error("Error:", error);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#fef1e6] scroll-mt-24 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Fondo de cuaderno de puntos */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#321d49 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      {/* DECORACIONES DE "MESA DE TRABAJO" - Versión más sólida */}

      {/* Esquina superior izquierda - Clip de papel (más sólido) */}
      <div className="absolute top-8 left-8 opacity-60 rotate-12 hidden md:block">
        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#7c49b6"
          strokeWidth="2"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <path d="M15 3h6v6" />
          <path d="M10 14L21 3" />
        </svg>
      </div>

      {/* Esquina superior derecha - Taza de café (más sólida) */}
      <div className="absolute top-8 right-8 opacity-60 -rotate-6 hidden md:block">
        <svg
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fa7705"
          strokeWidth="2"
        >
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="2" x2="6" y2="4" />
          <line x1="10" y1="2" x2="10" y2="4" />
          <line x1="14" y1="2" x2="14" y2="4" />
        </svg>
      </div>

      {/* STICKERS - Iconos vectoriales con grosor consistente */}

      {/* Sticker 1 - Logo Python (esquina izquierda media) */}
      <div className="absolute left-4 top-1/3 opacity-70 -rotate-3 hidden lg:block">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4a2c6d"
          strokeWidth="2"
        >
          <path d="M12 2C7 2 7 4 7 5v2h6v1H5c-2 0-3 1-3 5s1 5 3 5h2v-2c0-2 2-3 5-3h4c2 0 3-1 3-3V7c0-2-1-4-5-4z" />
          <path d="M12 17c5 0 5 2 5 3v2h-2v-1h-6v1H7v-2c0-2 2-3 5-3z" />
          <circle cx="8" cy="6" r="1" fill="#4a2c6d" />
          <circle cx="16" cy="12" r="1" fill="#4a2c6d" />
        </svg>
      </div>

      {/* Sticker 2 - Rayo (esquina derecha media) */}
      <div className="absolute right-4 top-1/2 opacity-70 rotate-6 hidden lg:block">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fa7705"
          strokeWidth="2"
        >
          <path d="M13 2L4 14h7l-2 8 9-12h-7l2-8z" />
        </svg>
      </div>

      {/* Sticker 3 - Terminal (esquina izquierda inferior) */}
      <div className="absolute left-8 bottom-20 opacity-70 -rotate-6 hidden lg:block">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#38c7bd"
          strokeWidth="2"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
          <path d="M7 9l3 3-3 3" />
          <path d="M14 15h4" />
        </svg>
      </div>

      {/* Sticker 4 - Cursor ratón (esquina derecha inferior) */}
      <div className="absolute right-8 bottom-32 opacity-70 rotate-12 hidden lg:block">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#7c49b6"
          strokeWidth="2"
        >
          <path d="M3 3l7 16 3-7 7-3-16-7z" />
          <path d="M14 10l4 4" />
        </svg>
      </div>

      {/* Sticker 5 - Corazón de código (posición flotante) */}
      <div className="absolute left-1/4 bottom-1/4 opacity-60 rotate-12 hidden xl:block">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fa7705"
          strokeWidth="2"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </div>

      {/* CONTENEDOR PRINCIPAL con posición relativa para los Post-its laterales */}
      <div className="max-w-5xl mx-auto relative z-10 w-full">
        {/* POST-IT IZQUIERDO - Respuesta rápida */}
        <div className="absolute -left-16 md:-left-24 top-1/4 -translate-y-1/2 -rotate-12 z-20 hidden lg:block">
          <div className="bg-[#38c7bd] p-4 w-40 shadow-[6px_6px_0px_0px_rgba(25,15,36,1)] border-2 border-[#190f24] rotate-3 hover:rotate-0 transition-all duration-300">
            <p className="font-bold text-[#190f24] text-xs uppercase tracking-widest mb-1">
              ⚡ RÁPIDO
            </p>
            <p className="text-[#321d49] text-sm font-medium leading-tight">
              ¡Suelo responder en menos de 24h!
            </p>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#fa7705] rotate-12 border border-[#190f24]"></div>
          </div>
        </div>

        {/* POST-IT DERECHO - Disponibilidad */}
        <div className="absolute -right-16 md:-right-24 top-2/3 -translate-y-1/2 rotate-12 z-20 hidden lg:block">
          <div className="bg-[#ccffcc] p-4 w-40 shadow-[6px_6px_0px_0px_rgba(25,15,36,1)] border-2 border-[#190f24] -rotate-3 hover:rotate-0 transition-all duration-300">
            <p className="font-bold text-[#190f24] text-xs uppercase tracking-widest mb-1">
              📅 AVAILABLE
            </p>
            <p className="text-[#321d49] text-sm font-medium leading-tight">
              Full-time / Freelance / Remote
            </p>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#7c49b6] rotate-12 border border-[#190f24]"></div>
          </div>
        </div>

        {/* POST-IT SUPERIOR - Tecnologías */}
        <div className="absolute -top-16 right-25 -translate-x-1/2 -rotate-3 z-20 hidden lg:block">
          <div className="bg-[#fee4cd] p-3 w-48 shadow-[6px_6px_0px_0px_rgba(25,15,36,1)] border-2 border-[#190f24] rotate-2 hover:rotate-0 transition-all duration-300">
            <p className="font-bold text-[#190f24] text-xs uppercase tracking-widest mb-1">
              🛠️ STACK
            </p>
            <div className="flex gap-2 justify-center">
              <span className="text-[#7c49b6] font-bold">React</span>
              <span className="text-[#fa7705] font-bold">Java</span>
              <span className="text-[#38c7bd] font-bold">Python</span>
            </div>
          </div>
        </div>

        {/* POST-IT INFERIOR - Mensaje personal */}
        <div className="absolute -bottom-16 left-1/3 rotate-6 z-20 hidden lg:block">
          <div className="bg-[#7c49b6] p-3 w-40 shadow-[6px_6px_0px_0px_rgba(25,15,36,1)] border-2 border-[#190f24] -rotate-2 hover:rotate-0 transition-all duration-300">
            <p className="text-white text-xs font-medium italic">
              "Code is poetry ✍️"
            </p>
            <p className="text-[#fee4cd] text-[10px] mt-1">- Omar Arias</p>
          </div>
        </div>

        {/* CONTENEDOR DEL FORMULARIO PRINCIPAL */}
        <div className="max-w-xl mx-auto">
          {/* Título Estilo Sketch */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-[#190f24] inline-block relative">
              Let's Talk!
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-[#fa7705]"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,10 Q50,0 100,10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
              </svg>
            </h2>
          </div>

          {/* Formulario Estilo Post-it - CON SOMBRA MÁS PROFUNDA */}
          <div className="relative bg-[#fee4cd] p-8 hand-drawn shadow-[16px_16px_0px_0px_rgba(25,15,36,0.8)] hover:shadow-[20px_20px_0px_0px_rgba(25,15,36,0.9)] -rotate-1 hover:rotate-0 transition-all duration-500 border-4 border-[#190f24]">
            {/* Cinta adhesiva en la parte superior - más notoria */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-36 h-10 bg-[#afe9e5]/80 border-2 border-[#190f24]/30 rotate-2 z-10"></div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6"
            >
              <div>
                <label className="block text-[#321d49] font-bold mb-1 ml-1">
                  Name:
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="How should I call you?"
                  className="w-full bg-white/80 border-3 border-[#190f24] p-3 rounded-lg focus:outline-none focus:bg-white transition-colors placeholder:text-gray-600 font-medium shadow-[2px_2px_0px_0px_rgba(25,15,36,0.3)]"
                />
              </div>

              <div>
                <label className="block text-[#321d49] font-bold mb-1 ml-1">
                  Email:
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="your@email.com"
                  className="w-full bg-white/80 border-3 border-[#190f24] p-3 rounded-lg focus:outline-none focus:bg-white transition-colors placeholder:text-gray-600 font-medium shadow-[2px_2px_0px_0px_rgba(25,15,36,0.3)]"
                />
              </div>

              <div>
                <label className="block text-[#321d49] font-bold mb-1 ml-1">
                  Message:
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Write your idea here..."
                  className="w-full bg-white/80 border-3 border-[#190f24] p-3 rounded-lg focus:outline-none focus:bg-white transition-colors resize-none placeholder:text-gray-600 font-medium shadow-[2px_2px_0px_0px_rgba(25,15,36,0.3)]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-[#7c49b6] text-white font-black py-4 px-8 hand-drawn shadow-[6px_6px_0px_0px_rgba(25,15,36,1)] hover:bg-[#633a92] active:scale-95 disabled:opacity-50 transition-all uppercase tracking-widest border-2 border-[#190f24]"
              >
                {status === "sending" ? "Sending..." : "Send Message!"}
              </button>

              {/* Mensajes de Estado */}
              {status === "success" && (
                <p className="text-center font-bold text-[#227772] animate-bounce">
                  ✨ Got it! I'll write back soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-center font-bold text-[#964803]">
                  Oops! Something failed. Try again?
                </p>
              )}
            </form>
          </div>

          {/* FIRMA MEJORADA */}
          <div className="mt-12 text-center">
            <div className="inline-block relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-[#7c49b6] opacity-50"></div>
              <p className="font-mono text-xl md:text-2xl tracking-widest uppercase text-[#7c49b6] font-bold">
                Omar_Arias_2026
              </p>
              <p className="font-mono text-sm md:text-base tracking-widest text-[#4a2c6d] opacity-80 mt-1">
                // End of line
              </p>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-[#fa7705] opacity-50"></div>
            </div>
          </div>

          {/* Micro-interacción */}
          <div className="mt-6 flex justify-center gap-2 opacity-50">
            <svg
              width="20"
              height="10"
              viewBox="0 0 20 10"
              className="animate-pulse"
            >
              <path
                d="M0,5 Q5,0 10,5 T20,5"
                fill="none"
                stroke="#7c49b6"
                strokeWidth="2"
              />
            </svg>
            <svg
              width="20"
              height="10"
              viewBox="0 0 20 10"
              className="animate-pulse delay-100"
            >
              <path
                d="M0,5 Q5,0 10,5 T20,5"
                fill="none"
                stroke="#fa7705"
                strokeWidth="2"
              />
            </svg>
            <svg
              width="20"
              height="10"
              viewBox="0 0 20 10"
              className="animate-pulse delay-200"
            >
              <path
                d="M0,5 Q5,0 10,5 T20,5"
                fill="none"
                stroke="#38c7bd"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Estilos adicionales */}
      <style jsx>{`
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .border-3 {
          border-width: 3px;
        }
      `}</style>
    </section>
  );
};

export default Contact;
