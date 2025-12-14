// ================= TRADUCCIONES =================
const translations = {
    es: {
        role: "Junior Multiplatform Developer",
        intro: "Desarrollador junior con experiencia en Java y PHP. Interesado en backend, programación orientada a objetos y bases de datos.",
        technologies: "Tecnologías",
        projects: "Proyectos",
        about: "Sobre mí",
        aboutText: "Soy desarrollador junior con formación en programación y experiencia en proyectos académicos. Me interesa especialmente el desarrollo backend y seguir aprendiendo buenas prácticas de desarrollo de software.",
        levelAdvanced: "Nivel: Avanzado",
        levelIntermediate: "Nivel: Medio",
        levelCompetent: "Nivel: Competente",
        levelBasic: "Nivel: Básico",
        linkedin: "https://www.linkedin.com/in/%C3%A1lvaro-e-420940136/",
        catWeb: "WEB",
        catJava: "Java",
        catMobile: "Móvil"
    },
    en: {
        role: "Junior Multiplatform Developer",
        intro: "Junior developer with experience in Java and PHP. Interested in backend development, object-oriented programming, and databases.",
        technologies: "Technologies",
        projects: "Projects",
        about: "About me",
        aboutText: "I am a junior developer with a background in programming and experience in academic projects. I am especially interested in backend development and continuous learning of software best practices.",
        levelAdvanced: "Level: Advanced",
        levelIntermediate: "Level: Medium",
        levelCompetent: "Level: Competent",
        levelBasic: "Level: Basic",
        linkedin: "https://www.linkedin.com/in/%C3%A1lvaro-e-420940136/?locale=en_US",
        catWeb: "WEB",
        catJava: "Java",
        catMobile: "Mobile"
    }
};

function setLanguage(lang) {
    document.querySelector('[data-i18n="role"]').textContent = translations[lang].role;
    document.querySelector('[data-i18n="intro"]').textContent = translations[lang].intro;
    document.querySelector('[data-i18n="technologies"]').textContent = translations[lang].technologies;
    document.querySelector('[data-i18n="projects"]').textContent = translations[lang].projects;
    document.querySelector('[data-i18n="catWeb"]').textContent = translations[lang].catWeb;
    document.querySelector('[data-i18n="catJava"]').textContent = translations[lang].catJava;
    document.querySelector('[data-i18n="catMobile"]').textContent = translations[lang].catMobile;
    document.querySelector('[data-i18n="about"]').textContent = translations[lang].about;
    document.querySelector('[data-i18n="aboutText"]').textContent = translations[lang].aboutText;

    localStorage.setItem('lang', lang);
}

// Idioma por defecto
const savedLang = localStorage.getItem('lang') || 'es';
setLanguage(savedLang);

