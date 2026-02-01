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

  // Descripción personal
  aboutMe: "👋 ¡Hola! Soy David Camuñez, Desarrollador FullStack, con experiencia tanto en el Frontend como en el Backend. En la parte visual me manejo bien con HTML, CSS, JavaScript, Vite y el uso del DOM, además de integrar API REST para conectar con datos externos. Recientemente terminé una formación en React y ahora estoy aprendiendo Angular para seguir ampliando mis herramientas. En el lado del servidor trabajo con Node.js, Express y MongoDB, construyendo APIs, gestionando bases de datos y desarrollando funcionalidades como autenticación con JWT o automatización de procesos con Puppeteer. Recientemente termine mi formacion en The Power Rock {TheCode} y, en paralelo, desarrollo proyectos propios como freelance, lo que me permite aplicar lo aprendido en situaciones reales. Me apasiona la tecnología y siempre estoy buscando nuevas formas de crecer, aprender y crear cosas útiles.",

  // Educación
  education: {
    // Educación básica
    estudies: "E.S.O.",
    institute: "I.E.S. Inmaculada Vieira",
    graduationYear: "1999 - 2013",

    // Bootcamp
    bootcamp: {
      name: "Bootcamp Full Stack Developer",
      school: "The Power {Rock The Code}",
      period: "2024",
      description: "Formación intensiva en desarrollo web FullStack con JavaScript, React, Node.js, Express y MongoDB",
      credential_frontend: "https://verified.sertifier.com/es/verify/54172128285415/",
      credential_backend: "https://verified.sertifier.com/es/verify/43974174310369/",
      credential_fullstack: "https://verified.sertifier.com/es/verify/87241237555149/?ref=email"
    },

    // Formación actual
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

  // Proyectos destacados
  projects: [
    {
      title: "Obrador y Heladería Heylum",
      description: "Desarrollo y despliegue de dos aplicaciones MERN independientes (web principal y carta digital), integradas bajo un único dominio. La carta incluye una REST API con Node.js y un frontend React con panel de admin (JWT). Despliegue desacoplado en Vercel y Netlify.",
      link: "Por motivos de confidencialidad con el cliente, el repositorio de este proyecto es privado. Sin embargo, estaré encantado de comentar la arquitectura y las decisiones técnicas.",
      livePrev: "https://www.heylum.es/",
      preview: "/assets/heylum.jpg"
    },
    {
      title: "Taller Mecánico AUTOBOX",
      description: "(En desarrollo) Sistema web fullstack para gestión de talleres mecánicos. Incluye landing page con animaciones premium, sistema de reservas con calendario interactivo, panel de administración completo (CRUD servicios, gestión citas, CMS editable) y arquitectura escalable. Frontend: React + Chakra UI + Framer Motion. Backend: Node.js + Express + MongoDB + JWT + Cloudinary.",
      link: "https://github.com/DavidCam87/AUTOBOX-Front.git",
      livePrev: "https://autoboxen.netlify.app/",
      preview: "/assets/autobox_icon1.jpg"
    },
    {
      title: "Taberna Cartie",
      description: "(En desarrollo) Aplicación web full-stack para la gestión de restaurantes con stack MERN. Incluye web pública responsive con menú dinámico, galería, reservas en tiempo real y contenido editable. Panel admin con dashboard, CMS sin código, gestión completa de menú, reservas e imágenes (Cloudinary). Stack: React 19 + Vite, Node.js, Express, MongoDB, Tailwind CSS, JWT. API RESTful con middleware de seguridad y arquitectura escalable.",
      link: "https://github.com/DavidCam87/Cartie-Front.git",
      livePrev: "https://tabernacartie.netlify.app/",
      preview: "/assets/cartielogo.jpg"
    },
    {
      title: "Clon Tien21",
      description: "Primer proyecto realizado usando HTML5 y CSS. Clonamos el sitio web de Tien21. Usamos una buena sintaxis y por supuesto también buenas prácticas.",
      link: "https://github.com/DavidCam87/Proyecto1-david.git",
      livePrev: "https://proyecto1dci.netlify.app",
      preview: "https://ariza.es/wp-content/uploads/2023/06/tien21.jpg"
    },
    {
      title: "Clon Electrocosto",
      description: "En este proyecto empezamos a ver JavaScript, copiamos la web de Electrocosto y vimos la cantidad de funcionalidad y vida que le puede dar a cualquier trabajo.",
      link: "https://github.com/DavidCam87/Proyecto2.git",
      livePrev: "https://proyecto2dci.netlify.app",
      preview: "https://www.idealo.es/images/opengraph/25b9909e-9b7c-46c5-b549-158f2a5741b7/electrocosto.jpg"
    },
    {
      title: "API Pinterest",
      description: "Este proyecto aprendí a consumir API's y cómo hacer peticiones. Fue un desafío interesante. El resultado me encantó y sentí que esto solo había empezado.",
      link: "https://github.com/DavidCam87/Proyecto3.git",
      livePrev: "https://proyecto3dci.netlify.app",
      preview: "https://www.impact5.es/wp-content/uploads/2016/04/Pinterest.jpg"
    },
    {
      title: "Mis Juegos",
      description: "Creo tres juegos básicos, consolidando los conocimientos DOM y JS. También usamos LocalStorage para guardar datos de algún juego.",
      link: "https://github.com/DavidCam87/Proyecto-5.git",
      livePrev: "https://proyecto5-gamehub.netlify.app",
      preview: "/assets/game.jpg"
    },
    {
      title: "Servidor y BBDD",
      description: "Backend. Usamos Node, Express y MongoDB para crear un servidor con acceso a BBDD y creamos la API. Hacemos un CRUD completo para BBDD. Simulamos un front con Insomnia para comprobar que está ok.",
      link: "https://github.com/DavidCam87/Proyecto-6.git",
      livePrev: "BackEnd, ver con Insomnia",
      preview: "/assets/backend1.png"
    },
    {
      title: "Seguridad en Backend",
      description: "Implementamos autenticación en Express con 3 modelos. Tokens basados en ID de usuario. Desarrollamos CRUD para usuarios, usando bcrypt y jsonwebtoken, middleware de autenticación, y isUser e isAdmin.",
      link: "https://github.com/DavidCam87/Proyecto-7.git",
      livePrev: "BackEnd, ver con Insomnia",
      preview: "https://static.vecteezy.com/system/resources/previews/014/453/726/non_2x/database-with-padlock-icon-flat-style-vector.jpg"
    },
    {
      title: "Gestión de Archivos en Backend",
      description: "Para este proyecto de Backend utilizamos las librerías multer y cloudinary para la gestión de archivos en nuestro back (texto, audio, video, etc.), por supuesto con todo lo aprendido anteriormente 👍",
      link: "https://github.com/DavidCam87/Proyecto-8.git",
      livePrev: "BackEnd, ver con Insomnia",
      preview: "/assets/backend3.png"
    },
    {
      title: "Scraping en Backend",
      description: "En este proyecto usamos la librería puppeteer para hacer scraping en otras webs y obtener la información que necesitamos.",
      link: "https://github.com/DavidCam87/Proyecto-9.git",
      livePrev: "BackEnd, ver con Insomnia",
      preview: "/assets/backend4.webp"
    },
    {
      title: "Taller de Motos",
      description: "Web para taller de motos con React y Chakra UI. Responsive, moderna, permite agendar citas y gestión administrativa eficiente.",
      link: "https://github.com/DavidCam87/Proyecto-13-Front.git",
      livePrev: "https://moto-works.netlify.app/",
      preview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4OKfwjaR1f-LSRM8RDRsxH5UHrwCPdPMR8w&s"
    }
  ]
}

export default data