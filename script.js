/* ==========================================================================
   Gabriel Navarro Bazay — CV landing
   i18n (es/en/fr), navegación, revelado al hacer scroll y contacto.
   Sin dependencias. El sitio es legible y usable aunque este script falle.
   ========================================================================== */

(function () {
  "use strict";

  /* --- Traducciones ------------------------------------------------------ */

  var I18N = {
    es: {
      "meta.title": "Gabriel Navarro Bazay — Leader Técnico y Solution Manager",
      "meta.description": "Gabriel Navarro Bazay, Leader Técnico y Scrum Master con más de 20 años de experiencia liderando equipos, definiendo arquitecturas de software y gestionando soluciones cloud. Último puesto: Solution Manager, coordinando equipos entre Francia e Italia.",

      "a11y.skip": "Saltar al contenido",
      "a11y.navLabel": "Principal",
      "a11y.langLabel": "Idioma",
      "a11y.menu": "Abrir menú",

      "nav.profile": "Perfil",
      "nav.stack": "Stack",
      "nav.experience": "Experiencia",
      "nav.education": "Formación",
      "nav.contact": "Contacto",

      "hero.role": "Leader Técnico · Solution Manager",
      "hero.statement": "Arquitecturas sólidas, equipos que crecen y software que se sostiene en el tiempo.",
      "hero.summary": "Soy Gabriel Navarro Bazay, Leader Técnico y Scrum Master con más de veinte años en el desarrollo de software. He liderado equipos técnicos, definido arquitecturas y gestionado soluciones cloud; en mi último puesto, como Solution Manager, coordiné equipos entre Francia e Italia. Trabajo con foco en la calidad, la mejora continua y el desarrollo de las personas.",
      "hero.ctaContact": "Contactar",
      "hero.ctaCv": "Descargar CV",
      "hero.ctaCvNote": "PDF · FR",
      "hero.photoAlt": "Gabriel Navarro Bazay sonriendo al aire libre, con gorra, frente a un lago y montañas",

      "profile.label": "Perfil",
      "profile.title": "Del código a la estrategia técnica",
      "profile.lead": "Casi veinte años de recorrido, desde el desarrollo web hasta la dirección de soluciones: arquitecturas cloud, equipos distribuidos y una obsesión constante por la calidad.",
      "profile.statYears": "Años en tecnología",
      "profile.statCountries": "Países coordinados",
      "profile.statTeam": "Personas en equipo",
      "profile.statLangs": "Idiomas de trabajo",

      "stack.label": "Stack técnico",
      "stack.title": "Las herramientas del oficio",
      "stack.intro": "Backend, frontend, infraestructura y observabilidad: el conjunto con el que diseño y sostengo plataformas en producción.",

      "exp.label": "Trayectoria",
      "exp.title": "Experiencia profesional",
      "exp.job1.role": "Leader Técnico / Scrum Master → Solution Manager",
      "exp.job1.text": "Dos roles sucesivos. Primero como Technical Leader y Scrum Master, liderando el equipo y participando en el desarrollo e industrialización de plataformas cloud sobre AWS. Después, ya como Solution Manager, coordinación de soluciones, definición de la arquitectura y gestión de un equipo repartido entre Francia (5 personas) e Italia (1 persona).",
      "exp.job1.p1": "Definición e implementación de arquitecturas escalables, seguras y mantenibles, con desarrollo hands-on en infraestructura como código, CI/CD y back-end.",
      "exp.job1.p2": "Facilitación de todas las ceremonias Scrum y seguimiento de las métricas del equipo.",
      "exp.job1.p3": "Documentación y expediente de diseño bajo las normas ISO 13485 e ISO 27001, con sus planes de prueba, verificación y validación.",
      "exp.job2.role": "Leader Técnico / Scrum Master",
      "exp.job2.text": "Diseño de la arquitectura de software y supervisión técnica del proyecto, con la gestión de un equipo repartido entre Francia (3 personas) e India (2 personas). Referente de código del equipo y responsable de la calidad mediante herramientas de análisis.",
      "exp.job2.p1": "Implantación de la cadena CI/CD completa y despliegue de las soluciones en Google Cloud Platform.",
      "exp.job2.p2": "Acompañamiento y crecimiento técnico del equipo: revisiones de código, buenas prácticas y resolución de bloqueos.",
      "exp.job2.p3": "Como Scrum Master: planificación de sprints, animación de las ceremonias y reporting de avance a dirección.",
      "exp.job3.role": "Leader Técnico",
      "exp.job3.text": "Tres años en el programa del Urssaf (Acoss). Como leader técnico transversal, enlace entre los líderes técnicos de cinco equipos y los arquitectos, además de colaborador dentro del propio equipo de arquitectura. En la etapa anterior, pilotaje de un equipo de dos a cuatro desarrolladores sobre microservicios y aplicaciones legacy.",
      "exp.job3.p1": "Puesta en marcha y referencia técnica del proyecto de pruebas E2E con CodeceptJS, Postman y Newman.",
      "exp.job3.p2": "Homogeneización de los microservicios: librería común, externalización de los Swagger y los ficheros Avro, y stack completa en Docker para el entorno de desarrollo.",
      "exp.job3.p3": "Despliegue sobre AWS con charts de Helm, POC de trazabilidad distribuida con Jaeger y OpenTracing, y migración de las aplicaciones a la plataforma interna sobre Kubernetes.",
      "exp.job4.role": "Jefe de Proyecto IT",
      "exp.job4.text": "Consultoría técnica con la implantación de pruebas automatizadas y el diseño de la comunicación entre sistemas de información mediante servicios web.",
      "exp.job4.p1": "Migración y creación de los jobs de integración de datos de ODI a TALEND.",
      "exp.job5.role": "Ingeniero de Estudios",
      "exp.job5.text": "Desarrollo de nuevas funcionalidades en modo Scrum dentro del equipo de I+D, y responsable de equipo en modo Kanban para la cualificación de las incidencias de clientes y la corrección de errores.",
      "exp.job6.role": "Ingeniero de Desarrollo",
      "exp.job6.text": "Arquitectura, diseño técnico y desarrollo de componentes y servicios dentro del equipo de I+D, junto con la creación de pruebas automatizadas, el reporting y la documentación con el equipo funcional.",
      "exp.job7.role": "Desarrollador de Aplicaciones y Web",
      "exp.job7.text": "Seis años de desarrollo en España: aplicaciones de gestión a medida en Java y MySQL diseñadas sobre los patrones MVC y DAO, un módulo de contabilidad para un ERP, y desarrollo web con JSF e Hibernate para la Agencia de Innovación y Desarrollo de Andalucía.",

      "edu.label": "Formación",
      "edu.title": "Formación y certificaciones",
      "edu.cert": "Certificación",
      "edu.degree": "Ingeniería en Informática de Gestión",

      "int.label": "Fuera del trabajo",
      "int.title": "Intereses",
      "int.tech": "Tecnología: IoT, IA y robótica",
      "int.food": "Viajes gastronómicos",
      "int.crossfit": "Crossfit",
      "int.nutrition": "Nutrición cetogénica",
      "int.psy": "Psicología e inteligencia emocional",

      "contact.label": "Contacto",
      "contact.title": "¿Hablamos de tu próximo proyecto?",
      "contact.intro": "Abierto a conversaciones sobre liderazgo técnico, arquitectura cloud y equipos que quieren trabajar mejor.",
      "contact.email": "Email",
      "contact.phone": "Teléfono",
      "contact.phoneShow": "Mostrar número",

      "footer.built": "Hecho con HTML, CSS y JavaScript"
    },

    en: {
      "meta.title": "Gabriel Navarro Bazay — Technical Lead & Solution Manager",
      "meta.description": "Gabriel Navarro Bazay, Technical Lead and Scrum Master with over 20 years of experience leading teams, defining software architectures and managing cloud solutions. Most recently Solution Manager, coordinating teams across France and Italy.",

      "a11y.skip": "Skip to content",
      "a11y.navLabel": "Main",
      "a11y.langLabel": "Language",
      "a11y.menu": "Open menu",

      "nav.profile": "Profile",
      "nav.stack": "Stack",
      "nav.experience": "Experience",
      "nav.education": "Education",
      "nav.contact": "Contact",

      "hero.role": "Technical Lead · Solution Manager",
      "hero.statement": "Solid architectures, teams that grow and software that lasts.",
      "hero.summary": "I am Gabriel Navarro Bazay, a Technical Lead and Scrum Master with over twenty years in software development. I have led technical teams, defined architectures and managed cloud solutions; in my most recent role, as Solution Manager, I coordinated teams across France and Italy. I work with a strong focus on quality, continuous improvement and people development.",
      "hero.ctaContact": "Get in touch",
      "hero.ctaCv": "Download CV",
      "hero.ctaCvNote": "PDF · FR",
      "hero.photoAlt": "Gabriel Navarro Bazay smiling outdoors, wearing a cap, with a lake and mountains behind him",

      "profile.label": "Profile",
      "profile.title": "From code to technical strategy",
      "profile.lead": "Almost twenty years of experience, from web development to solution management: cloud architectures, distributed teams and a constant obsession with quality.",
      "profile.statYears": "Years in tech",
      "profile.statCountries": "Countries coordinated",
      "profile.statTeam": "People in the team",
      "profile.statLangs": "Working languages",

      "stack.label": "Tech stack",
      "stack.title": "The tools of the trade",
      "stack.intro": "Backend, frontend, infrastructure and observability: the toolset I use to design and keep platforms running in production.",

      "exp.label": "Career",
      "exp.title": "Professional experience",
      "exp.job1.role": "Technical Lead / Scrum Master → Solution Manager",
      "exp.job1.text": "Two successive roles. First as Technical Leader and Scrum Master, leading the team and taking part in the development and industrialisation of cloud platforms on AWS. Then as Solution Manager: solution coordination, architecture definition and management of a team split between France (5 people) and Italy (1 person).",
      "exp.job1.p1": "Defined and implemented scalable, secure and maintainable architectures, with hands-on development across infrastructure as code, CI/CD and back-end.",
      "exp.job1.p2": "Facilitated every Scrum ceremony and tracked the team's delivery metrics.",
      "exp.job1.p3": "Owned the documentation and design file under ISO 13485 and ISO 27001, including the test, verification and validation plans.",
      "exp.job2.role": "Technical Lead / Scrum Master",
      "exp.job2.text": "Software architecture design and technical supervision of the project, managing a team split between France (3 people) and India (2 people). Code referent for the team and responsible for quality through static analysis tooling.",
      "exp.job2.p1": "Built the full CI/CD pipeline and deployed the solutions on Google Cloud Platform.",
      "exp.job2.p2": "Grew the team technically: code reviews, best practices and unblocking.",
      "exp.job2.p3": "As Scrum Master: sprint planning, ceremony facilitation and progress reporting to management.",
      "exp.job3.role": "Technical Lead",
      "exp.job3.text": "Three years on the Urssaf (Acoss) programme. As cross-team technical lead, the link between the technical leads of five teams and the architects, as well as a contributor inside the architecture team itself. Earlier, leading a team of two to four developers on microservices and legacy applications.",
      "exp.job3.p1": "Set up and owned the end-to-end testing project with CodeceptJS, Postman and Newman.",
      "exp.job3.p2": "Harmonised the microservices: shared library, externalised Swagger and Avro files, and a full Docker stack for the development environment.",
      "exp.job3.p3": "Deployed on AWS with Helm charts, ran a distributed tracing proof of concept with Jaeger and OpenTracing, and migrated the applications to the internal Kubernetes platform.",
      "exp.job4.role": "IT Project Manager",
      "exp.job4.text": "Technical consulting, rolling out automated testing and designing the communication between information systems through web services.",
      "exp.job4.p1": "Migrated and built the data integration jobs from ODI to TALEND.",
      "exp.job5.role": "Design Engineer",
      "exp.job5.text": "Developed new features in Scrum within the R&D team, and led a team in Kanban handling the qualification of customer issues and bug fixing.",
      "exp.job6.role": "Development Engineer",
      "exp.job6.text": "Architecture, technical design and development of components and services within the R&D team, together with automated testing, reporting and documentation alongside the functional team.",
      "exp.job7.role": "Application and Web Developer",
      "exp.job7.text": "Six years of development in Spain: bespoke management applications in Java and MySQL designed around the MVC and DAO patterns, an accounting module for an ERP, and web development with JSF and Hibernate for the Andalusian Innovation and Development Agency.",

      "edu.label": "Education",
      "edu.title": "Education & certifications",
      "edu.cert": "Certification",
      "edu.degree": "Engineering in Management Information Systems",

      "int.label": "Beyond work",
      "int.title": "Interests",
      "int.tech": "Technology: IoT, AI and robotics",
      "int.food": "Food travel",
      "int.crossfit": "Crossfit",
      "int.nutrition": "Ketogenic nutrition",
      "int.psy": "Psychology and emotional intelligence",

      "contact.label": "Contact",
      "contact.title": "Shall we talk about your next project?",
      "contact.intro": "Open to conversations about technical leadership, cloud architecture and teams that want to work better.",
      "contact.email": "Email",
      "contact.phone": "Phone",
      "contact.phoneShow": "Show number",

      "footer.built": "Built with HTML, CSS and JavaScript"
    },

    fr: {
      "meta.title": "Gabriel Navarro Bazay — Leader Technique & Solution Manager",
      "meta.description": "Gabriel Navarro Bazay, Leader Technique et Scrum Master avec plus de 20 ans d'expérience dans l'encadrement d'équipes, la définition d'architectures logicielles et la gestion de solutions cloud. Dernier poste : Solution Manager, coordination d'équipes entre la France et l'Italie.",

      "a11y.skip": "Aller au contenu",
      "a11y.navLabel": "Principal",
      "a11y.langLabel": "Langue",
      "a11y.menu": "Ouvrir le menu",

      "nav.profile": "Profil",
      "nav.stack": "Stack",
      "nav.experience": "Expérience",
      "nav.education": "Formation",
      "nav.contact": "Contact",

      "hero.role": "Leader Technique · Solution Manager",
      "hero.statement": "Des architectures solides, des équipes qui progressent et des logiciels qui durent.",
      "hero.summary": "Je suis Gabriel Navarro Bazay, Leader Technique et Scrum Master avec plus de vingt ans dans le développement logiciel. J'ai dirigé des équipes techniques, défini des architectures et géré des solutions cloud ; dans mon dernier poste, en tant que Solution Manager, j'ai coordonné des équipes entre la France et l'Italie. Je travaille avec un fort accent sur la qualité, l'amélioration continue et le développement des personnes.",
      "hero.ctaContact": "Me contacter",
      "hero.ctaCv": "Télécharger le CV",
      "hero.ctaCvNote": "PDF · FR",
      "hero.photoAlt": "Gabriel Navarro Bazay souriant en plein air, casquette sur la tête, devant un lac et des montagnes",

      "profile.label": "Profil",
      "profile.title": "Du code à la stratégie technique",
      "profile.lead": "Près de vingt ans de parcours, du développement web au pilotage de solutions : architectures cloud, équipes distribuées et une obsession constante pour la qualité.",
      "profile.statYears": "Ans dans la tech",
      "profile.statCountries": "Pays coordonnés",
      "profile.statTeam": "Personnes dans l'équipe",
      "profile.statLangs": "Langues de travail",

      "stack.label": "Stack technique",
      "stack.title": "Les outils du métier",
      "stack.intro": "Backend, frontend, infrastructure et observabilité : l'ensemble avec lequel je conçois et maintiens des plateformes en production.",

      "exp.label": "Parcours",
      "exp.title": "Expérience professionnelle",
      "exp.job1.role": "Leader Technique / Scrum Master → Solution Manager",
      "exp.job1.text": "Deux rôles successifs. D'abord Technical Leader et Scrum Master, à la tête de l'équipe technique et impliqué dans le développement et l'industrialisation de plateformes cloud sur AWS. Puis Solution Manager : coordination des solutions, définition de l'architecture et management d'une équipe répartie entre la France (5 personnes) et l'Italie (1 personne).",
      "exp.job1.p1": "Définition et mise en œuvre d'architectures scalables, sécurisées et maintenables, avec du développement hands-on en infrastructure as code, CI/CD et back-end.",
      "exp.job1.p2": "Facilitation de toutes les cérémonies Scrum et suivi des métriques de l'équipe.",
      "exp.job1.p3": "Gestion de la documentation et du dossier de conception selon les normes ISO 13485 et ISO 27001, avec les plans de test, de vérification et de validation.",
      "exp.job2.role": "Leader Technique / Scrum Master",
      "exp.job2.text": "Conception de l'architecture logicielle et supervision technique du projet, avec le management d'une équipe répartie entre la France (3 personnes) et l'Inde (2 personnes). Référent code de l'équipe et garant de la qualité via des outils d'analyse.",
      "exp.job2.p1": "Mise en place de toute la chaîne CI/CD et déploiement des solutions sur Google Cloud Platform.",
      "exp.job2.p2": "Accompagnement et montée en compétences de l'équipe : revues de code, bonnes pratiques et levée des blocages.",
      "exp.job2.p3": "En tant que Scrum Master : planification des sprints, animation des cérémonies et reporting d'avancement au management.",
      "exp.job3.role": "Leader Technique",
      "exp.job3.text": "Trois ans sur le programme de l'Urssaf (Acoss). En tant que leader technique transverse, lien entre les leaders techniques de cinq équipes et les architectes, ainsi que collaborateur au sein même de l'équipe d'architecture. Auparavant, pilotage d'une équipe de deux à quatre développeurs sur des microservices et des applications legacy.",
      "exp.job3.p1": "Mise en place et référence technique du projet de tests E2E avec CodeceptJS, Postman et Newman.",
      "exp.job3.p2": "Homogénéisation des microservices : librairie commune, externalisation des Swagger et des fichiers Avro, et stack complète sous Docker pour l'environnement de développement.",
      "exp.job3.p3": "Déploiement sur AWS via des charts Helm, POC de traçabilité distribuée avec Jaeger et OpenTracing, et migration des applications vers la plateforme interne sur Kubernetes.",
      "exp.job4.role": "Chef de Projet IT",
      "exp.job4.text": "Conseil technique, mise en place des tests automatisés et conception de la communication entre systèmes d'information via des services web.",
      "exp.job4.p1": "Migration et création des jobs d'intégration de données depuis ODI vers TALEND.",
      "exp.job5.role": "Ingénieur d'Études",
      "exp.job5.text": "Développement de nouvelles fonctionnalités en Scrum au sein de l'équipe R&D, et responsable d'équipe en Kanban pour la qualification des interventions clients et la correction des anomalies.",
      "exp.job6.role": "Ingénieur de Développement",
      "exp.job6.text": "Architecture, conception technique et développement de composants et de services au sein de l'équipe R&D, avec la création de tests automatisés, le reporting et la documentation aux côtés de l'équipe MOA.",
      "exp.job7.role": "Développeur d'Applications et Web",
      "exp.job7.text": "Six ans de développement en Espagne : applications de gestion sur mesure en Java et MySQL conçues selon les modèles MVC et DAO, un module de comptabilité pour un ERP, et du développement web avec JSF et Hibernate pour l'Agence d'Innovation et de Développement d'Andalousie.",

      "edu.label": "Formation",
      "edu.title": "Formation et certifications",
      "edu.cert": "Certification",
      "edu.degree": "Ingénierie en Informatique de Gestion",

      "int.label": "Hors du travail",
      "int.title": "Centres d'intérêt",
      "int.tech": "Technologie : IoT, IA et robotique",
      "int.food": "Voyages gastronomiques",
      "int.crossfit": "Crossfit",
      "int.nutrition": "Nutrition cétogène",
      "int.psy": "Psychologie et intelligence émotionnelle",

      "contact.label": "Contact",
      "contact.title": "Et si nous parlions de votre prochain projet ?",
      "contact.intro": "Ouvert aux échanges sur le leadership technique, l'architecture cloud et les équipes qui veulent mieux travailler.",
      "contact.email": "E-mail",
      "contact.phone": "Téléphone",
      "contact.phoneShow": "Afficher le numéro",

      "footer.built": "Réalisé en HTML, CSS et JavaScript"
    }
  };

  var SUPPORTED = ["es", "en", "fr"];
  var FALLBACK = "en";
  var DEFAULT_LANG = "es";   // el idioma que sirve la URL sin parámetro
  var STORAGE_KEY = "gn-lang";

  /* --- i18n -------------------------------------------------------------- */

  function translate(key, lang) {
    var dict = I18N[lang] || I18N[FALLBACK];
    return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : null;
  }

  function applyTo(el, lang) {
    var key = el.getAttribute("data-i18n");
    if (key) {
      var value = translate(key, lang);
      if (value !== null) {
        // <meta> guarda el texto en content; el resto, en su contenido.
        if (el.tagName === "META") el.setAttribute("content", value);
        else el.textContent = value;
      }
    }

    var attrSpec = el.getAttribute("data-i18n-attr");
    if (attrSpec) {
      attrSpec.split(";").forEach(function (pair) {
        var parts = pair.split(":");
        if (parts.length !== 2) return;
        var attr = parts[0].trim();
        var attrValue = translate(parts[1].trim(), lang);
        if (attrValue !== null) el.setAttribute(attr, attrValue);
      });
    }
  }

  function setLang(lang, persist) {
    if (SUPPORTED.indexOf(lang) === -1) lang = FALLBACK;

    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-i18n], [data-i18n-attr]").forEach(function (el) {
      applyTo(el, lang);
    });

    document.querySelectorAll(".langswitch__btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === lang));
    });

    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* modo privado */ }
      syncUrl(lang);
    }
  }

  function langFromUrl() {
    var match = /[?&]lang=([a-zA-Z-]+)/.exec(window.location.search);
    if (!match) return null;
    var code = match[1].toLowerCase().slice(0, 2);
    return SUPPORTED.indexOf(code) !== -1 ? code : null;
  }

  // Cada idioma tiene una URL propia y compartible (?lang=en, ?lang=fr; el
  // español vive en la raíz). Los <link rel="alternate" hreflang> del HTML
  // apuntan a esas mismas direcciones, y el canonical se autorreferencia para
  // que Google trate cada variante como una página distinta, no duplicada.
  function syncUrl(lang) {
    var path = window.location.pathname + (lang === DEFAULT_LANG ? "" : "?lang=" + lang);

    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, "", path + window.location.hash);
    }

    var canonical = document.getElementById("canonical");
    if (canonical) canonical.setAttribute("href", window.location.origin + path);
  }

  function detectLang() {
    var fromUrl = langFromUrl();
    if (fromUrl) return fromUrl;

    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    } catch (e) { /* almacenamiento no disponible */ }

    var candidates = navigator.languages || [navigator.language || ""];
    for (var i = 0; i < candidates.length; i++) {
      var code = String(candidates[i]).toLowerCase().slice(0, 2);
      if (SUPPORTED.indexOf(code) !== -1) return code;
    }
    return FALLBACK;
  }

  var initialLang = detectLang();
  setLang(initialLang, false);
  // Si el idioma viene explícito en la URL, el canonical se autorreferencia.
  // La detección automática por navegador no lo toca: la URL sin parámetro
  // sigue siendo la versión en español que Google indexa.
  if (langFromUrl()) syncUrl(initialLang);

  document.querySelectorAll(".langswitch__btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(btn.getAttribute("data-lang"), true);
    });
  });

  /* --- Navegación -------------------------------------------------------- */

  var nav = document.getElementById("nav");
  var navLinks = document.getElementById("nav-links");
  var navToggle = document.getElementById("nav-toggle");

  function closeMenu() {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  navToggle.addEventListener("click", function () {
    var open = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  navLinks.addEventListener("click", function (event) {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && navLinks.classList.contains("is-open")) {
      closeMenu();
      navToggle.focus();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 900) closeMenu();
  });

  var sections = Array.prototype.slice.call(
    document.querySelectorAll("#perfil, #stack, #experiencia, #formacion, #contacto")
  );

  var links = {};
  navLinks.querySelectorAll("a").forEach(function (link) {
    links[link.getAttribute("href").slice(1)] = link;
  });

  // Se marca la última sección cuyo inicio ya ha pasado el primer tercio de la
  // ventana, de modo que solo haya un enlace activo en cada momento.
  function updateActiveLink() {
    var line = window.scrollY + window.innerHeight * 0.35;
    var current = null;

    sections.forEach(function (section) {
      if (section.offsetTop <= line) current = section;
    });

    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
      current = sections[sections.length - 1];
    }

    Object.keys(links).forEach(function (id) {
      links[id].classList.toggle("is-active", Boolean(current) && current.id === id);
    });
  }

  var onScroll = function () {
    nav.classList.toggle("is-scrolled", window.scrollY > 12);
    updateActiveLink();
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* --- Revelado al hacer scroll y enlace activo -------------------------- */

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if ("IntersectionObserver" in window && !reducedMotion.matches) {
    var revealTargets = document.querySelectorAll(
      ".hero__content, .hero__portrait, .section .eyebrow, .section__title, .section__intro, " +
      ".profile__lead, .stat, .tag, .timeline__item, .card--edu, .interest, .contact"
    );

    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var index = Number(entry.target.getAttribute("data-reveal-index")) || 0;
        entry.target.style.transitionDelay = Math.min(index, 8) * 45 + "ms";
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    revealTargets.forEach(function (el, i) {
      el.classList.add("reveal");
      // Escalonado por grupo: los hermanos entran uno tras otro.
      var siblings = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : i;
      el.setAttribute("data-reveal-index", String(siblings));
      revealObserver.observe(el);
    });
  }

  /* --- Contacto ---------------------------------------------------------- */

  // El número se compone en tiempo de ejecución: no viaja en el HTML servido.
  var PHONE_PARTS = ["+33", "6", "95", "79", "05", "73"];
  var phoneButton = document.getElementById("phone-reveal");

  if (phoneButton) {
    phoneButton.addEventListener("click", function () {
      var link = document.createElement("a");
      link.className = phoneButton.className;
      link.href = "tel:" + PHONE_PARTS.join("");
      link.innerHTML = phoneButton.innerHTML;

      var value = link.querySelector("#phone-value");
      value.removeAttribute("data-i18n");
      value.textContent = PHONE_PARTS.join(" ");

      phoneButton.replaceWith(link);
      link.focus();
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
