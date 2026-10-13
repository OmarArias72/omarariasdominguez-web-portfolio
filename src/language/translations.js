// Diccionario de textos de la interfaz.
// Para añadir un idioma: agrega una clave nueva con la misma estructura
// y regístrala en LANGUAGES.
export const LANGUAGES = ["es", "en"];
export const DEFAULT_LANGUAGE = "en";

export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      main: "Main navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Language",
    },
    header: {
      title: "FullStack Developer",
      introBefore:
        "I connect systems, develop products, and create tools that make a",
      introHighlight: "real impact.",
      downloadCv: "Download CV",
      scroll: "Scroll to explore",
      nodes: {
        1: "Idea",
        2: "Research",
        3: "System design",
        4: "Development",
        5: "Testing",
        6: "Configuration",
        7: "Deployment",
      },
      rotatingIdeas: [
        "Create my own ORM...",
        "Crafting clean code...",
        "Create my own messaging server...",
        "Solving complex problems...",
        "Connecting systems seamlessly...",
        "Creating digital products...",
        "Create a document designer...",
        "Developing full-stack apps...",
        "Optimizing performance...",
        "Bringing ideas to life...",
      ],
    },
    about: {
      title: "About me",
      p1Before: "I am a",
      p1Highlight: "Full Stack Developer",
      p1After:
        "with two years of experience building solutions that integrate backend and frontend to deliver functional applications aligned with business needs.",
      p2Before:
        "My focus is on connecting systems, developing products, and creating tools that generate",
      p2Impact: "real impact",
      p2Middle: ", combining technologies such as",
      p2Tech: "Java, Python, Spring Boot, and React",
      p2After:
        "to design complete flows from server logic to user experience.",
    },
    projects: {
  title: "Featured Projects",
  explore: "EXPLORE PROJECT",
  items: {
    1: {
      title: "Tech Zone E-commerce",
      description:
        "Full e-commerce platform with admin panel, manual shipping management and PayPal payment integration.",
    },
    2: {
      title: "POS-Gadgets",
      description:
        "System to manage inventory, sales, invoices, payroll processing and user management.",
    },
    3: {
      title: "TIC Inventario",
      description:
        "System for inventory control, computer lab inventory management and failure tracking, as well as lab scheduling for ordinary, extraordinary and thesis periods.",
    },
  },
},
    skills: {
      title: "Skills & Tools",
      backend: "Backend",
      frontend: "Frontend",
      tools: "Tools & DB",
    },
    contact: {
      title: "Let's Talk!",
      name: "Name:",
      namePlaceholder: "How should I call you?",
      email: "Email:",
      emailPlaceholder: "your@email.com",
      message: "Message:",
      messagePlaceholder: "Write your idea here...",
      send: "Send Message!",
      sending: "Sending...",
      success: "✨ Got it! I'll write back soon.",
      error: "Oops! Something failed. Try again?",
      quickTitle: "⚡ QUICK",
      quickText: "I usually reply in less than 24h!",
      availableTitle: "📅 AVAILABLE",
      availableText: "Full-time / Freelance / Remote",
      stackTitle: "🛠️ STACK",
      quote: "\"Code is poetry ✍️\"",
      endOfLine: "// End of line",
    },
  },
  es: {
    nav: {
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
      main: "Navegación principal",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      language: "Idioma",
    },
    header: {
      title: "Desarrollador FullStack",
      introBefore:
        "Conecto sistemas, desarrollo productos y creo herramientas que generan un",
      introHighlight: "impacto real.",
      downloadCv: "Descargar CV",
      scroll: "Desliza para explorar",
      nodes: {
        1: "Idea",
        2: "Investigación",
        3: "Diseño de sistemas",
        4: "Desarrollo",
        5: "Pruebas",
        6: "Configuración",
        7: "Despliegue",
      },
      rotatingIdeas: [
        "Crear mi propio ORM...",
        "Escribiendo código limpio...",
        "Crear mi propio servidor de mensajería...",
        "Resolviendo problemas complejos...",
        "Conectando sistemas sin esfuerzo...",
        "Creando productos digitales...",
        "Crear un diseñador de documentos...",
        "Desarrollando apps full-stack...",
        "Optimizando rendimiento...",
        "Dando vida a las ideas...",
      ],
    },
    about: {
      title: "Sobre mí",
      p1Before: "Soy",
      p1Highlight: "Desarrollador Full Stack",
      p1After:
        "con dos años de experiencia construyendo soluciones que integran backend y frontend para entregar aplicaciones funcionales alineadas con las necesidades del negocio.",
      p2Before:
        "Mi enfoque es conectar sistemas, desarrollar productos y crear herramientas que generen",
      p2Impact: "impacto real",
      p2Middle: ", combinando tecnologías como",
      p2Tech: "Java, Python, Spring Boot y React",
      p2After:
        "para diseñar flujos completos, desde la lógica del servidor hasta la experiencia de usuario.",
    },
    projects: {
  title: "Proyectos destacados",
  explore: "VER PROYECTO",
  items: {
    1: {
      title: "Tech Zone E-commerce",
      description:
        "Plataforma de comercio electrónico integral con panel administrativo, gestión de envíos marítimos e integración de pagos.",
    },
    2: {
      title: "POS-Gadgets",
      description:
        "Sistema para llevar el control de inventario, ventas, facturas, pago de nóminas y gestión de usuarios.",
    },
    3: {
      title: "TIC Inventario",
      description:
        "Sistema para llevar el control de inventarios, gestión de inventario de salas de cómputo y rastreo de fallos, así como la gestión de salas en periodos ordinario, extraordinario y título.",
    },
  },
},
    skills: {
      title: "Habilidades y herramientas",
      backend: "Backend",
      frontend: "Frontend",
      tools: "Herramientas y BD",
    },
    contact: {
      title: "¡Hablemos!",
      name: "Nombre:",
      namePlaceholder: "¿Cómo te llamo?",
      email: "Correo:",
      emailPlaceholder: "tu@correo.com",
      message: "Mensaje:",
      messagePlaceholder: "Escribe aquí tu idea...",
      send: "¡Enviar mensaje!",
      sending: "Enviando...",
      success: "✨ ¡Recibido! Te responderé pronto.",
      error: "¡Ups! Algo falló. ¿Intentas de nuevo?",
      quickTitle: "⚡ RÁPIDO",
      quickText: "¡Suelo responder en menos de 24h!",
      availableTitle: "📅 DISPONIBLE",
      availableText: "Tiempo completo / Freelance / Remoto",
      stackTitle: "🛠️ STACK",
      quote: "\"El código es poesía ✍️\"",
      endOfLine: "// Fin de línea",
    },
  },
};