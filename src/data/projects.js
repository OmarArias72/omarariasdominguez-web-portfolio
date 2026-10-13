// src/data/projects.js

// 1. Importa las imágenes al inicio del archivo
import techZoneImg from '../../public/project-icons/techzone.png';
import posGadgetsImg from '../../public/project-icons/pos-gadgets.png';
import ticInventarioImg from '../../public/project-icons/tic-inventario.png';

export const projects = [
  {
    id: 1,
    title: "Tech Zone E-commerce",
    description:
      "Plataforma de comercio electrónico integral con panel administrativo, gestión de envíos marítimos y integración de pagos.",
    tags: ["Laravel", "React", "MySQL", "PayPal API"],
    link: "https://github.com/OmarArias72/sesionEjemplo", // Enlace a GitHub o Demo
    image: techZoneImg,
  },
  {
    id: 2,
    title: "POS-Gadgets",
    description:
      "Sistema para llevar el control de inventario, ventas, facturas, pago de nóminas y gestión de usuarios.",
    tags: ["Java", "JavaFX", "Postgres", "Maven"],
    link: "https://github.com/OmarArias72/POS-Gadgets",
    image: posGadgetsImg,
  },
  {
    id: 3,
    title: "TIC Inventario",
    description:
      "Sistema para llevar el control de inventarios, gestión de inventario de salas de cómputo y rastreo de fallos, así como la gestión de salas en periodos ordinario, extraordinario y título.",
    tags: ["React", "Spring Boot", "Java","Postgres","Docker"],
    link: "https://github.com/OmarArias72/TIC-UAEMEX-WEB",
    image: ticInventarioImg,
  },
];