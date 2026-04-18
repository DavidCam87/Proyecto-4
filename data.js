/**
 * Data configuration for David Camuñez Portfolio
 * Centraliza toda la información personal, proyectos y experiencia
 */

export const data = {
  // Información personal
  name: "David Camuñez",
  address: "C/ Andres Martinez Leon, Nº1, Portal 4, 6ªC. C.P. 41019. Sevilla",
  email: "davidcamuneziglesias@gmail.com",
  phone: "+32 635 25 98 73",

  // Enlaces sociales
  github: "https://github.com/DavidCam87",
  linkedin: "https://www.linkedin.com/in/david-camu%C3%B1ez-iglesias-b9b7a1273/",
  twitter: "https://twitter.com/DaCamdev",

  // Avatar
  avatar: "/assets/david_link.jpg",

  // CV (pon aquí la ruta a tu PDF una vez lo subas a /public/assets/)
  cv: "/assets/cv_David2024.pdf",

  // Descripción personal
  // NOTA: las llaves { } se han sustituido por (TheCode) para evitar que JSX las interprete como expresiones
  aboutMe: "👋 ¡Hola! Soy David Camuñez, Desarrollador FullStack, con experiencia tanto en el Frontend como en el Backend. En la parte visual me manejo bien con HTML, CSS, JavaScript, Vite y el uso del DOM, además de integrar API REST para conectar con datos externos. Recientemente terminé una formación en React y ahora estoy aprendiendo Angular para seguir ampliando mis herramientas. En el lado del servidor trabajo con Node.js, Express y MongoDB, construyendo APIs, gestionando bases de datos y desarrollando funcionalidades como autenticación con JWT o automatización de procesos con Puppeteer. Recientemente terminé mi formación en The Power Rock (TheCode) y, en paralelo, desarrollo proyectos propios como freelance, lo que me permite aplicar lo aprendido en situaciones reales. Me apasiona la tecnología y siempre estoy buscando nuevas formas de crecer, aprender y crear cosas útiles.",

  // Educación
  education: {
    estudies: "E.S.O.",
    institute: "I.E.S. Inmaculada Vieira",
    graduationYear: "1999 - 2013",

    bootcamp: {
      name: "Bootcamp Full Stack Developer",
      school: "The Power Rock (TheCode)",
      period: "2024",
      description: "Formación intensiva en desarrollo web FullStack con JavaScript, React, Node.js, Express y MongoDB",
      credential_frontend: "https://verified.sertifier.com/es/verify/54172128285415/",
      credential_backend: "https://verified.sertifier.com/es/verify/43974174310369/",
      credential_fullstack: "https://verified.sertifier.com/es/verify/87241237555149/?ref=email"
    },

    actualCourses: "Angular"
  },

  // Experiencia laboral
  workExperience: [
    {
      position: "Desarrollador FullStack (Freelance / Proyectos Propios)",
      company: "Proyectos Propios / Freelance",
      startDate: "Mar-2024",
      endDate: "Actualidad",
      workday: "Fulltime",
      description: "• Diseño y desarrollo de aplicaciones web FullStack, gestionando el ciclo completo desde el boceto inicial hasta la puesta en producción.\n• Creación de interfaces de usuario (FrontEnd) interactivas y responsivas con React, React Router DOM, Vite y librerías de componentes como Chakra UI.\n• Construcción de BackEnd con Node.js y Express, desarrollando API's REST robustas e implementando bases de datos NoSQL (MongoDB) y autenticación segura (JWT).\n• Integración de servicios de terceros (Cloudinary, Puppeteer) y manejo de herramientas de IA para optimizar el ciclo de desarrollo y el despliegue en producción.\n• Uso de Git y GitHub para el control de versiones, gestión de ramas y colaboración en el ciclo de vida de los proyectos."
    }
  ],

  // Habilidades técnicas
  skills: [
    { name: "HTML5", icon: "/assets/html5.svg" },
    { name: "CSS3", icon: "/assets/css.svg" },
    { name: "SCSS", icon: "/assets/scss.svg" },
    { name: "JavaScript", icon: "/assets/js.svg" },
    { name: "VS Code", icon: "/assets/vscode.svg" },
    { name: "GitHub", icon: "/assets/git.svg" },
    { name: "Node.js", icon: "/assets/node.svg" },
    { name: "MongoDB", icon: "/assets/mongo.png" },
    { name: "Vite", icon: "/assets/vite.svg" },
    { name: "React", icon: "/assets/react.webp" },
    { name: "Chakra UI", icon: "/assets/chakra.svg" },
    { name: "Express", icon: "/assets/Express.svg" },
    { name: "Cloudinary", icon: "/assets/cloudinary.svg" }
  ],

  // Proyectos profesionales — se muestran destacados al inicio
  professionalProjects: [
    {
      title: "Helena Delvando - Peritaje Social",
      description: "Desarrollo de sitio web corporativo y marca personal para peritaje social. Optimización de Core Web Vitals, arquitectura de información y diseño responsive. Gestión de contenidos dinámica y SEO on-page.",
      link: "https://github.com/DavidCam87/helena.git",
      livePrev: "http://www.helenadelvandoperitajesocial.es/",
      preview: "/assets/peritaje-social.webp",
      tags: ["HTML5", "CSS3", "JavaScript", "SEO"]
    },
    {
      title: "Obrador y Heladería Heylum",
      description: "Dos aplicaciones MERN independientes (web principal y carta digital) integradas bajo un único dominio. La carta incluye una REST API con Node.js y un frontend React con panel de admin protegido con JWT. Despliegue desacoplado en Vercel y Netlify.",
      link: "Por motivos de confidencialidad con el cliente, el repositorio de este proyecto es privado. Sin embargo, estaré encantado de comentar la arquitectura y las decisiones técnicas.",
      livePrev: "https://www.heylum.es/",
      preview: "/assets/heylum.jpg",
      tags: ["React", "Node.js", "MongoDB", "JWT", "Vercel"]
    },
    {
      title: "Taller Mecánico AUTOBOX",
      description: "(En desarrollo) Sistema web fullstack para gestión de talleres mecánicos. Landing page con animaciones premium, sistema de reservas con calendario interactivo y panel de administración completo. Stack: React + Chakra UI + Framer Motion / Node.js + Express + MongoDB + JWT + Cloudinary.",
      link: "https://github.com/DavidCam87/AUTOBOX-Front.git",
      livePrev: "https://autoboxen.netlify.app/",
      preview: "/assets/autobox_icon1.jpg",
      tags: ["React", "Chakra UI", "Framer Motion", "Node.js", "MongoDB"]
    },
    {
      title: "Taberna Cartie",
      description: "(En desarrollo) Aplicación web full-stack para gestión de restaurantes. Web pública responsive con menú dinámico, galería, reservas en tiempo real y panel admin con CMS sin código. Stack: React 19 + Vite + Tailwind CSS / Node.js + Express + MongoDB + JWT.",
      link: "https://github.com/DavidCam87/Cartie-Front.git",
      livePrev: "https://tabernacartie.netlify.app/",
      preview: "/assets/cartielogo.jpg",
      tags: ["React 19", "Tailwind CSS", "Node.js", "MongoDB", "JWT"]
    },
    {
      title: "Taller de Motos",
      description: "Web para taller de motos con React y Chakra UI. Responsive, moderna, permite agendar citas y gestión administrativa eficiente.",
      link: "https://github.com/DavidCam87/Proyecto-13-Front.git",
      livePrev: "https://moto-works.netlify.app/",
      preview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4OKfwjaR1f-LSRM8RDRsxH5UHrwCPdPMR8w&s",
      tags: ["React", "Chakra UI", "Node.js", "Express"]
    }
  ],

  // Proyectos de formación — se muestran en sección secundaria colapsable
  trainingProjects: [
    {
      title: "Clon Tien21",
      description: "Primer proyecto: clon del sitio web de Tien21 con HTML5 y CSS. Énfasis en semántica correcta y buenas prácticas.",
      link: "https://github.com/DavidCam87/Proyecto1-david.git",
      livePrev: "https://proyecto1dci.netlify.app",
      preview: "https://ariza.es/wp-content/uploads/2023/06/tien21.jpg",
      tags: ["HTML5", "CSS3"]
    },
    {
      title: "Clon Electrocosto",
      description: "Clon de Electrocosto introduciendo JavaScript: manipulación del DOM y funcionalidades interactivas.",
      link: "https://github.com/DavidCam87/Proyecto2.git",
      livePrev: "https://proyecto2dci.netlify.app",
      preview: "https://www.idealo.es/images/opengraph/25b9909e-9b7c-46c5-b549-158f2a5741b7/electrocosto.jpg",
      tags: ["HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "API Pinterest",
      description: "Consumo de API externa con fetch. Renderizado dinámico de resultados y manejo de promesas.",
      link: "https://github.com/DavidCam87/Proyecto3.git",
      livePrev: "https://proyecto3dci.netlify.app",
      preview: "https://www.impact5.es/wp-content/uploads/2016/04/Pinterest.jpg",
      tags: ["JavaScript", "API REST", "Fetch"]
    },
    {
      title: "Mis Juegos",
      description: "Tres juegos básicos consolidando DOM y JS. Uso de LocalStorage para persistencia de datos.",
      link: "https://github.com/DavidCam87/Proyecto-5.git",
      livePrev: "https://proyecto5-gamehub.netlify.app",
      preview: "/assets/game.jpg",
      tags: ["JavaScript", "DOM", "LocalStorage"]
    },
    {
      title: "Servidor y BBDD",
      description: "Backend con Node, Express y MongoDB. CRUD completo sobre base de datos. API probada con Insomnia.",
      link: "https://github.com/DavidCam87/Proyecto-6.git",
      livePrev: "BackEnd",
      preview: "/assets/backend1.png",
      tags: ["Node.js", "Express", "MongoDB"]
    },
    {
      title: "Autenticación Backend",
      description: "Autenticación con bcrypt y JWT. CRUD de usuarios con middleware isUser e isAdmin.",
      link: "https://github.com/DavidCam87/Proyecto-7.git",
      livePrev: "BackEnd",
      preview: "https://static.vecteezy.com/system/resources/previews/014/453/726/non_2x/database-with-padlock-icon-flat-style-vector.jpg",
      tags: ["Node.js", "JWT", "bcrypt"]
    },
    {
      title: "Gestión de Archivos",
      description: "Gestión de archivos en backend con multer y cloudinary (texto, audio, video).",
      link: "https://github.com/DavidCam87/Proyecto-8.git",
      livePrev: "BackEnd",
      preview: "/assets/backend3.png",
      tags: ["Node.js", "Multer", "Cloudinary"]
    },
    {
      title: "Scraping con Puppeteer",
      description: "Web scraping con Puppeteer para extracción automatizada de datos de sitios externos.",
      link: "https://github.com/DavidCam87/Proyecto-9.git",
      livePrev: "BackEnd",
      preview: "/assets/backend4.webp",
      tags: ["Node.js", "Puppeteer"]
    }
  ]
}

export default data
