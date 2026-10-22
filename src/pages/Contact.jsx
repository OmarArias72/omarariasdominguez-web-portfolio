import { useRef, useState } from "react";
import { useLanguage } from "../language/useLanguage";
import { FaPaperPlane, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // 'sending', 'success', 'error'
  const { t } = useLanguage();

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(form.current);
    const data = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      subject: formData.get("subject"), // <-- Nuevo campo
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
      className="py-16 md:py-24 px-4 sm:px-6 bg-[#fef1e6] scroll-mt-24 relative overflow-hidden min-h-dvh flex items-center"
    >
      {/* Fondo de cuaderno de puntos */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#321d49 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      {/* --- DECORACIONES DE FONDO --- */}
      <div className="absolute top-8 left-8 opacity-60 rotate-12 hidden md:block">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#7c49b6" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><path d="M15 3h6v6" /><path d="M10 14L21 3" /></svg>
      </div>
      <div className="absolute top-8 right-8 opacity-60 -rotate-6 hidden md:block">
        <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#fa7705" strokeWidth="2"><path d="M17 8h1a4 4 0 1 1 0 8h-1" /><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" /><line x1="6" y1="2" x2="6" y2="4" /><line x1="10" y1="2" x2="10" y2="4" /><line x1="14" y1="2" x2="14" y2="4" /></svg>
      </div>
      <div className="absolute left-4 top-1/3 opacity-70 -rotate-3 hidden lg:block">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4a2c6d" strokeWidth="2"><path d="M12 2C7 2 7 4 7 5v2h6v1H5c-2 0-3 1-3 5s1 5 3 5h2v-2c0-2 2-3 5-3h4c2 0 3-1 3-3V7c0-2-1-4-5-4z" /><path d="M12 17c5 0 5 2 5 3v2h-2v-1h-6v1H7v-2c0-2 2-3 5-3z" /><circle cx="8" cy="6" r="1" fill="#4a2c6d" /><circle cx="16" cy="12" r="1" fill="#4a2c6d" /></svg>
      </div>
      <div className="absolute right-4 top-1/2 opacity-70 rotate-6 hidden lg:block">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fa7705" strokeWidth="2"><path d="M13 2L4 14h7l-2 8 9-12h-7l2-8z" /></svg>
      </div>
      <div className="absolute left-8 bottom-20 opacity-70 -rotate-6 hidden lg:block">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#38c7bd" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" ry="2" /><path d="M7 9l3 3-3 3" /><path d="M14 15h4" /></svg>
      </div>
      <div className="absolute right-8 bottom-32 opacity-70 rotate-12 hidden lg:block">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#7c49b6" strokeWidth="2"><path d="M3 3l7 16 3-7 7-3-16-7z" /><path d="M14 10l4 4" /></svg>
      </div>

      {/* CONTENEDOR PRINCIPAL con posición relativa para los Post-its */}
      <div className="max-w-5xl mx-auto relative z-10 w-full mt-10 md:mt-0">
        
        {/* POST-ITS REUBICADOS: Agrupados para enmarcar el formulario */}
        <div className="absolute left-0 top-10 -rotate-12 z-20 hidden xl:block">
          <div className="bg-[#38c7bd] p-4 w-40 shadow-[6px_6px_0px_0px_rgba(25,15,36,1)] border-2 border-[#190f24] rotate-3 hover:rotate-0 transition-all duration-300">
            <p className="font-bold text-[#190f24] text-xs uppercase tracking-widest mb-1">{t.contact.quickTitle}</p>
            <p className="text-[#321d49] text-sm font-medium leading-tight">{t.contact.quickText}</p>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#fa7705] rotate-12 border border-[#190f24]"></div>
          </div>
        </div>

        <div className="absolute right-0 top-1/4 rotate-12 z-20 hidden xl:block">
          <div className="bg-[#ccffcc] p-4 w-40 shadow-[6px_6px_0px_0px_rgba(25,15,36,1)] border-2 border-[#190f24] -rotate-3 hover:rotate-0 transition-all duration-300">
            <p className="font-bold text-[#190f24] text-xs uppercase tracking-widest mb-1">{t.contact.availableTitle}</p>
            <p className="text-[#321d49] text-sm font-medium leading-tight">{t.contact.availableText}</p>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#7c49b6] rotate-12 border border-[#190f24]"></div>
          </div>
        </div>

        <div className="absolute right-12 bottom-20 -rotate-3 z-20 hidden xl:block">
          <div className="bg-[#fee4cd] p-3 w-48 shadow-[6px_6px_0px_0px_rgba(25,15,36,1)] border-2 border-[#190f24] rotate-2 hover:rotate-0 transition-all duration-300">
            <p className="font-bold text-[#190f24] text-xs uppercase tracking-widest mb-1">{t.contact.stackTitle}</p>
            <div className="flex gap-2 justify-center">
              <span className="text-[#7c49b6] font-bold">React</span>
              <span className="text-[#fa7705] font-bold">Java</span>
              <span className="text-[#38c7bd] font-bold">Python</span>
            </div>
          </div>
        </div>

        <div className="absolute left-12 bottom-0 rotate-6 z-20 hidden xl:block">
          <div className="bg-[#7c49b6] p-3 w-40 shadow-[6px_6px_0px_0px_rgba(25,15,36,1)] border-2 border-[#190f24] -rotate-2 hover:rotate-0 transition-all duration-300">
            <p className="text-white text-xs font-medium italic">{t.contact.quote}</p>
            <p className="text-[#fee4cd] text-[10px] mt-1">- Omar Arias</p>
          </div>
        </div>

        {/* FORMULARIO */}
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-[#190f24] inline-block relative">
              {t.contact.title}
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#fa7705]" preserveAspectRatio="none">
                <path d="M0,10 Q50,0 100,10" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </h2>
          </div>

          <div className="relative bg-[#fee4cd] p-5 sm:p-8 hand-drawn shadow-[8px_8px_0px_0px_rgba(25,15,36,0.8)] hover:shadow-[10px_10px_0px_0px_rgba(25,15,36,0.9)] sm:shadow-[16px_16px_0px_0px_rgba(25,15,36,0.8)] sm:hover:shadow-[20px_20px_0px_0px_rgba(25,15,36,0.9)] -rotate-1 hover:rotate-0 transition-all duration-500 border-4 border-[#190f24]">
            {/* Cinta adhesiva */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-36 h-10 bg-[#afe9e5]/80 border-2 border-[#190f24]/30 rotate-2 z-10"></div>

            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
              <div>
                <label htmlFor="user_name" className="block text-[#321d49] font-bold mb-1 ml-1">{t.contact.name}</label>
                <input type="text" id="user_name" name="user_name" required placeholder={t.contact.namePlaceholder} className="w-full bg-white/80 border-3 border-[#190f24] p-3 rounded-lg focus:outline-hidden focus:bg-white focus:ring-4 focus:ring-[#7c49b6]/40 transition-colors placeholder:text-gray-600 font-medium shadow-[2px_2px_0px_0px_rgba(25,15,36,0.3)]" />
              </div>

              <div>
                <label htmlFor="user_email" className="block text-[#321d49] font-bold mb-1 ml-1">{t.contact.email}</label>
                <input type="email" id="user_email" name="user_email" required placeholder={t.contact.emailPlaceholder} className="w-full bg-white/80 border-3 border-[#190f24] p-3 rounded-lg focus:outline-hidden focus:bg-white focus:ring-4 focus:ring-[#7c49b6]/40 transition-colors placeholder:text-gray-600 font-medium shadow-[2px_2px_0px_0px_rgba(25,15,36,0.3)]" />
              </div>

              {/* NUEVO CAMPO: ASUNTO */}
              <div>
                <label htmlFor="subject" className="block text-[#321d49] font-bold mb-1 ml-1">{t.contact.subject}</label>
                <input type="text" id="subject" name="subject" required placeholder={t.contact.subjectPlaceholder} className="w-full bg-white/80 border-3 border-[#190f24] p-3 rounded-lg focus:outline-hidden focus:bg-white focus:ring-4 focus:ring-[#7c49b6]/40 transition-colors placeholder:text-gray-600 font-medium shadow-[2px_2px_0px_0px_rgba(25,15,36,0.3)]" />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#321d49] font-bold mb-1 ml-1">{t.contact.message}</label>
                <textarea id="message" name="message" rows="3" required placeholder={t.contact.messagePlaceholder} className="w-full bg-white/80 border-3 border-[#190f24] p-3 rounded-lg focus:outline-hidden focus:bg-white focus:ring-4 focus:ring-[#7c49b6]/40 transition-colors resize-none placeholder:text-gray-600 font-medium shadow-[2px_2px_0px_0px_rgba(25,15,36,0.3)]"></textarea>
              </div>

              {/* BOTÓN MEJORADO CON ÍCONO Y HOVER */}
              <button type="submit" disabled={status === "sending"} className="group relative flex items-center justify-center gap-3 bg-[#7c49b6] text-white font-black py-4 px-6 sm:px-8 hand-drawn shadow-[6px_6px_0px_0px_rgba(25,15,36,1)] hover:bg-[#633a92] hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7c49b6] active:scale-95 active:shadow-none disabled:opacity-50 transition-all uppercase tracking-widest border-2 border-[#190f24] mt-2">
                {status === "sending" ? t.contact.sending : t.contact.send}
                {status !== "sending" && (
                  <FaPaperPlane className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                )}
              </button>

              <div aria-live="polite" role="status" className="contents">
                {status === "success" && <p className="text-center font-bold text-[#227772] animate-bounce">{t.contact.success}</p>}
                {status === "error" && <p className="text-center font-bold text-[#964803]">{t.contact.error}</p>}
              </div>
            </form>
          </div>

          {/* ALTERNATIVAS DIRECTAS (Email y Redes) */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <p className="text-[#53464b] font-medium text-sm sm:text-base text-center">
              {t.contact.directEmail}
            </p>
<<<<<<< HEAD
            <a href="mailto:omar@omararias.com" className="flex items-center gap-2 font-black text-[#7c49b6] hover:text-[#fa7705] text-lg sm:text-xl transition-colors">
=======
            <a href="mailto:omar.arias.dominguez2@gmail.com" className="flex items-center gap-2 font-black text-[#7c49b6] hover:text-[#fa7705] text-lg sm:text-xl transition-colors">
>>>>>>> contact/contactPage
              <FaEnvelope />
              omar.arias.dominguez2@gmail.com
            </a>
            <div className="flex items-center gap-4 mt-2">
              <a href="https://www.linkedin.com/in/omar-arias-dominguez-87b8833aa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#321d49] bg-white text-[#321d49] shadow-[3px_3px_0px_0px_rgba(25,15,36,1)] transition-all hover:-translate-y-1 hover:bg-[#321d49] hover:text-white">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="https://github.com/OmarArias72" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#321d49] bg-white text-[#321d49] shadow-[3px_3px_0px_0px_rgba(25,15,36,1)] transition-all hover:-translate-y-1 hover:bg-[#321d49] hover:text-white">
                <FaGithub className="text-2xl" />
              </a>
            </div>
          </div>

          {/* FIRMA */}
          <div className="mt-12 text-center">
            <div className="inline-block relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-[#7c49b6] opacity-50"></div>
              <p className="font-mono text-base sm:text-xl md:text-2xl tracking-wider sm:tracking-widest uppercase text-[#7c49b6] font-bold">Omar_Arias_2026</p>
              <p className="font-mono text-sm md:text-base tracking-widest text-[#4a2c6d] opacity-80 mt-1">{t.contact.endOfLine}</p>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-[#fa7705] opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;