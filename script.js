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
      "exp.job1.text": "Liderazgo del equipo técnico como Lead Developer y Scrum Master, con ascenso a Solution Manager: coordinación de soluciones, arquitectura y gestión de un equipo repartido entre Francia (5 personas) e Italia (1 persona). Plataformas cloud sobre AWS.",
      "exp.job2.role": "Leader Técnico / Scrum Master",
      "exp.job2.text": "Diseño de arquitecturas de software y supervisión de un equipo de 5 personas entre Francia e India. Implantación de una cadena CI/CD completa en GCP.",
      "exp.job3.role": "Leader Técnico",
      "exp.job3.text": "Enlace entre los líderes técnicos y los arquitectos del programa, con supervisión de un equipo de 3 ingenieros. Desarrollo orientado a microservicios.",
      "exp.job3.chip1": "Microservicios",
      "exp.job4.role": "Jefe de Proyecto IT",
      "exp.job4.text": "Consultoría técnica, automatización de pruebas y migración de ODI a TALEND.",
      "exp.job5.role": "Ingeniero de Estudios",
      "exp.job6.role": "Ingeniero de Desarrollo",
      "exp.job7.role": "Desarrollador Web",

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
      "exp.job1.text": "Led the technical team as Lead Developer and Scrum Master, then promoted to Solution Manager: solution coordination, architecture and management of a team split between France (5 people) and Italy (1 person). Cloud platforms on AWS.",
      "exp.job2.role": "Technical Lead / Scrum Master",
      "exp.job2.text": "Software architecture design and supervision of a 5-person team across France and India. Full CI/CD pipeline on GCP.",
      "exp.job3.role": "Technical Lead",
      "exp.job3.text": "Liaison between technical leads and program architects, supervising a team of 3 engineers. Microservices-oriented development.",
      "exp.job3.chip1": "Microservices",
      "exp.job4.role": "IT Project Manager",
      "exp.job4.text": "Technical consulting, test automation and migration from ODI to TALEND.",
      "exp.job5.role": "Design Engineer",
      "exp.job6.role": "Development Engineer",
      "exp.job7.role": "Web Developer",

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
      "exp.job1.text": "Direction de l'équipe technique en tant que Lead Developer et Scrum Master, puis promotion au poste de Solution Manager : coordination des solutions, architecture et gestion d'une équipe répartie entre la France (5 personnes) et l'Italie (1 personne). Plateformes cloud sur AWS.",
      "exp.job2.role": "Leader Technique / Scrum Master",
      "exp.job2.text": "Conception d'architectures logicielles et supervision d'une équipe de 5 personnes entre la France et l'Inde. Chaîne CI/CD complète sur GCP.",
      "exp.job3.role": "Leader Technique",
      "exp.job3.text": "Interface entre les leaders techniques et les architectes du programme, avec la supervision d'une équipe de 3 ingénieurs. Développement orienté microservices.",
      "exp.job3.chip1": "Microservices",
      "exp.job4.role": "Chef de Projet IT",
      "exp.job4.text": "Conseil technique, automatisation des tests et migration d'ODI vers TALEND.",
      "exp.job5.role": "Ingénieur d'Études",
      "exp.job6.role": "Ingénieur de Développement",
      "exp.job7.role": "Développeur Web",

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
