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
      subtitle: "I turn ideas and business needs into functional, fast, and easy-to-use web and mobile applications.",
      downloadCv: "Download CV",
      viewProjects: "View Projects",
      scroll: "Scroll to explore",
      available: "Open to work",
      metrics: {
        years: "+3 years",
        yearsLabel: "creating software",
        projects: "Web & Mobile",
        projectsLabel: "projects delivered",
        quality: "Quality",
        qualityLabel: "guaranteed impact",
      },
      floatingCards: {
        agile: "Agile Dev",
        responsive: "100% Responsive",
        support: "Support & Maint.",
      },
      workflowTitle: "How I work",
      nodes: {
        1: { label: "Idea & Analysis", tooltip: "We understand your business need" },
        2: { label: "Design & Prototype", tooltip: "You see the site before coding" },
        3: { label: "Development", tooltip: "Fast, secure, and adaptable development" },
        4: { label: "Launch", tooltip: "Your product published and ready to use" },
      },
            rotatingIdeas: [
        "Turning ideas into software...",
        "Creating digital solutions...",
        "Optimizing business processes...",
        "Developing custom products...",
        "Connecting your business to the future...",
        "Designing user experiences...",
        "Automating repetitive tasks...",
        "Driving digital growth...",
        "Building efficient tools...",
        "Bringing your projects to life...",
      ],
    },
    about: {
      title: "About me",
      photoCaption: "Software Eng. Omar Arias Domínguez",
      p1Before: "I am a",
      p1Highlight: "Full Stack Developer",
      p1After:
        "with two years of experience building solutions that integrate backend and frontend to deliver functional applications aligned with business needs.",
      p2Before:
        "My focus is on connecting systems, developing products, and creating tools that generate",
      p2Impact: "real impact",
      p2Middle: ", combining technologies such as",
      p2Tech: "Java, Python, Spring Boot, and React",
      p2After: "to design complete flows from server logic to user experience.",
    },
    projects: {
      title: "Featured Projects",
      explore: "EXPLORE PROJECT",
      preview: "PREVIEW",
      modal: {
        close: "Close preview",
        overview: "Overview",
        highlights: "Highlights",
        technologies: "Technologies",
        viewRepo: "View repository",
        gallery: "Project images",
        prev: "Previous image",
        next: "Next image",
        imageOf: "Image {current} of {total}",
        showImage: "Show image {n}",
      },
      items: {
        1: {
          title: "Tech Zone E-commerce",
          description:
            "Full e-commerce platform with admin panel, manual shipping management and PayPal payment integration.",
          details:
            "Tech Zone is a complete online store. It combines an administrative panel to manage the store, shipping management and online payments through the PayPal API. It is built with Laravel, React and MySQL.",
          highlights: [
            "Administrative panel to manage the store",
            "Shipping management",
            "PayPal payment integration",
          ],
        },
        2: {
          title: "POS-Gadgets",
          description:
            "System to manage inventory, sales, invoices, payroll processing and user management.",
          details:
            "POS-Gadgets is a point-of-sale system that brings inventory, sales, invoicing, payroll and user management together in a single application. It is built with Java and JavaFX, uses PostgreSQL for data storage and Maven to manage the build.",
          highlights: [
            "Inventory control",
            "Sales and invoices",
            "Payroll processing",
            "User management",
          ],
        },
        3: {
          title: "TIC Inventario",
          description:
            "System for inventory control, computer lab inventory management and failure tracking, as well as lab scheduling for ordinary, extraordinary and thesis periods.",
          details:
            "TIC Inventario is a web system for inventory control. It manages the inventory of computer labs, tracks failures and handles lab scheduling across ordinary, extraordinary and thesis periods. It is built with React, Spring Boot and Java, uses PostgreSQL and runs with Docker.",
          highlights: [
            "General inventory control",
            "Computer lab inventory and failure tracking",
            "Lab scheduling by period (ordinary, extraordinary, thesis)",
          ],
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
      subject: "Subject:", // <-- NUEVO
      subjectPlaceholder: "What is this about?", // <-- NUEVO
      message: "Message:",
      messagePlaceholder: "Write your idea here...",
      send: "Send Message!",
      sending: "Sending...",
      success: "✨ Got it! I'll write back soon.",
      error: "Oops! Something failed. Try again?",
      directEmail: "Or email me directly at:", // <-- NUEVO
      quickTitle: "⚡ QUICK",
      quickText: "I usually reply in less than 24h!",
      availableTitle: "📅 AVAILABLE",
      availableText: "Full-time / Freelance / Remote",
      stackTitle: "🛠️ STACK",
      quote: '"Code is poetry ✍️"',
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
      subtitle: "Transformo ideas y necesidades de negocio en aplicaciones web y móviles funcionales, rápidas y fáciles de usar.",
      downloadCv: "Descargar CV",
      viewProjects: "Ver Proyectos",
      scroll: "Desliza para explorar",
      available: "Disponible para trabajar",
      metrics: {
        years: "+3 años",
        yearsLabel: "creando software",
        projects: "Web y Móvil",
        projectsLabel: "proyectos entregados",
        quality: "Calidad",
        qualityLabel: "e impacto garantizado",
      },
      floatingCards: {
        agile: "Desarrollo Ágil",
        responsive: "100% Adaptable",
        support: "Soporte y Mantenimiento",
      },
      workflowTitle: "Así trabajo",
      nodes: {
        1: { label: "Idea & Análisis", tooltip: "Entendemos tu necesidad de negocio" },
        2: { label: "Diseño & Prototipo", tooltip: "Visualizas el sitio antes de programar" },
        3: { label: "Construcción", tooltip: "Desarrollo rápido, seguro y adaptable" },
        4: { label: "Lanzamiento", tooltip: "Tu producto publicado y listo para usar" },
      },
      rotatingIdeas: [
        "Transformando ideas en software...",
        "Creando soluciones digitales...",
        "Optimizando procesos de negocio...",
        "Desarrollando productos a medida...",
        "Conectando tu empresa con el futuro...",
        "Diseñando experiencias de usuario...",
        "Automatizando tareas repetitivas...",
        "Impulsando el crecimiento digital...",
        "Construyendo herramientas eficientes...",
        "Dando vida a tus proyectos...",
      ],
    },
    about: {
      title: "Sobre mí",
      photoCaption: "Ing. en Software Omar Arias Domínguez",
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
      preview: "VISTA PREVIA",
      modal: {
        close: "Cerrar vista previa",
        overview: "Descripción",
        highlights: "Características",
        technologies: "Tecnologías",
        viewRepo: "Ver repositorio",
        gallery: "Imágenes del proyecto",
        prev: "Imagen anterior",
        next: "Imagen siguiente",
        imageOf: "Imagen {current} de {total}",
        showImage: "Ver imagen {n}",
      },
      items: {
        1: {
          title: "Tech Zone E-commerce",
          description:
            "Plataforma de comercio electrónico integral con panel administrativo, gestión de envíos marítimos e integración de pagos.",
          details:
            "Tech Zone es una tienda en línea completa. Combina un panel administrativo para gestionar la tienda, la gestión de envíos y pagos en línea mediante la API de PayPal. Está construida con Laravel, React y MySQL.",
          highlights: [
            "Panel administrativo para gestionar la tienda",
            "Gestión de envíos",
            "Integración de pagos con PayPal",
          ],
        },
        2: {
          title: "POS-Gadgets",
          description:
            "Sistema para llevar el control de inventario, ventas, facturas, pago de nóminas y gestión de usuarios.",
          details:
            "POS-Gadgets es un sistema de punto de venta que reúne inventario, ventas, facturación, nóminas y gestión de usuarios en una sola aplicación. Está construido con Java y JavaFX, usa PostgreSQL para almacenar los datos y Maven para gestionar la compilación.",
          highlights: [
            "Control de inventario",
            "Ventas y facturas",
            "Pago de nóminas",
            "Gestión de usuarios",
          ],
        },
        3: {
          title: "TIC Inventario",
          description:
            "Sistema para llevar el control de inventarios, gestión de inventario de salas de cómputo y rastreo de fallos, así como la gestión de salas en periodos ordinario, extraordinario y título.",
          details:
            "TIC Inventario es un sistema web para el control de inventarios. Gestiona el inventario de las salas de cómputo, rastrea fallos y administra la asignación de salas en los periodos ordinario, extraordinario y de título. Está construido con React, Spring Boot y Java, usa PostgreSQL y se ejecuta con Docker.",
          highlights: [
            "Control general de inventarios",
            "Inventario de salas de cómputo y rastreo de fallos",
            "Gestión de salas por periodo (ordinario, extraordinario, título)",
          ],
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
      subject: "Asunto:", // <-- NUEVO
      subjectPlaceholder: "¿De qué se trata?", // <-- NUEVO
      message: "Mensaje:",
      messagePlaceholder: "Escribe aquí tu idea...",
      send: "¡Enviar mensaje!",
      sending: "Enviando...",
      success: "✨ ¡Recibido! Te responderé pronto.",
      error: "¡Ups! Algo falló. ¿Intentas de nuevo?",
      directEmail: "O escríbeme directamente a:", // <-- NUEVO
      quickTitle: "⚡ RÁPIDO",
      quickText: "¡Suelo responder en menos de 24h!",
      availableTitle: "📅 DISPONIBLE",
      availableText: "Tiempo completo / Freelance / Remoto",
      stackTitle: "🛠️ STACK",
      quote: '"El código es poesía ✍️"',
      endOfLine: "// Fin de línea",
    },
  },
};
