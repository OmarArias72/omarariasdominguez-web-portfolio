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
      className="py-24 px-6 bg-[#fef1e6] scroll-mt-24 relative"
    >
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#321d49 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>
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

        {/* Formulario Estilo Post-it */}
        <div className="relative bg-[#fee4cd] p-8 hand-drawn shadow-[10px_10px_0px_0px_rgba(50,29,73,0.1)] -rotate-1 hover:rotate-0 transition-transform duration-500">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
            <div>
              <label className="block text-[#321d49] font-bold mb-1 ml-1">
                Name:
              </label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="How should I call you?"
                className="w-full bg-white/50 border-2 border-[#190f24] p-3 rounded-lg focus:outline-none focus:bg-white transition-colors placeholder:text-gray-400 font-medium"
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
                className="w-full bg-white/50 border-2 border-[#190f24] p-3 rounded-lg focus:outline-none focus:bg-white transition-colors placeholder:text-gray-400 font-medium"
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
                className="w-full bg-white/50 border-2 border-[#190f24] p-3 rounded-lg focus:outline-none focus:bg-white transition-colors resize-none placeholder:text-gray-400 font-medium"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-[#7c49b6] text-white font-black py-4 px-8 hand-drawn shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#633a92] active:scale-95 disabled:opacity-50 transition-all uppercase tracking-widest"
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

        {/* Garabato final de la libreta */}
        <div className="mt-12 text-center text-[#cbb6e2] opacity-50">
          <p className="font-mono text-sm tracking-widest uppercase">
            Omar_Arias_2026 // End of line
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
