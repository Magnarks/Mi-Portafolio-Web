// i18n.js - Sistema de internacionalización simple
const i18n = {
    currentLanguage: 'es',
    translations: {
        'es': {
            "nav": {
                "start": "Inicio",
                "downloadCV": "Descargar mi CV",
                "about": "Sobre mi",
                "skills": "Mis Habilidades",
                "projects": "Mis Proyectos",
                "workProjects": "Proyectos en el campo laboral",
                "contact": "Contactame"
            },
            "hero": {
                "welcome": "Hola, Bienvenido a",
                "title": "Mi Portafolio",
                "description": "Aqui podras encontrar mi información, ver mis proyectos, mi experencia y me podras contactar",
                "scrollDown": "Scroll Down"
            },
            "about": {
                "title": "Sobre mi",
                "question": "¿Quién soy yo?",
                "description": "Mi nombre es <strong>Diego Gutierrez Torres</strong> y soy <strong>Desarrollador</strong> en areas como el Backend, pero tambien en el area de <strong>Inteligencia Artificial.</strong>",
                "bio": "Soy un desarrollador apasionado por la tecnología y la innovación. Me encanta resolver problemas complejos y crear soluciones elegantes. Tengo experiencia en desarrollo web, aplicaciones móviles y IA.",
                "projects": "Proyectos",
                "courses": "Cursos",
                "years": "Años Desarrollando",
                "team": "Equipo como Scrum Master",
                "certifications": "Certificaciones"
            },
            "skills": {
                "title": "Mis Habilidades",
                "subtitle": "¿Que sé hacer?",
                "pythonDesc": "El lenguaje de programación que mas domino, lo he usado para desarrollo web con flask y django. Tambien para Machine-Learning. Uso librerias como Selenium, OpenCv, Sklearn, Skimage y demás.",
                "javascriptDesc": "Lenguaje con el que actualmente trabajo y tambien con el framework de AngularJS",
                "phpDesc": "Tambien trabajo con el actualmente. para las vistas de un proyecto, como complemento a JavaScript en el frontend. Y para el backend para generar informes de excel con PhpSpreadsheet y PDF con DOMPDF. Crear ApIs REST, y Asi mismo para consumir APIs REST con cURL.",
                "csharpDesc": "Lenguaje que vi para estructura de datos en la universidad y aprendí tambien interfaces gráficas con Windows Forms",
                "javaDesc": "Java lo vi hace mucho, pero lo retome hace poco para un curso de desarrollo web, donde use SpringBoot, Maven y Eclipse.",
                "ai": "Inteligencia Artificial",
                "aiDesc": "Una de mis areas favoritas, he realizado proyectos de Machine-Learning y visión por computadora.",
                "html5Desc": "HTML5 es el lenguaje de marcado que utilizo para estructurar el contenido de mis páginas web.",
                "css3Desc": "CSS3 es el lenguaje de estilos que utilizo para diseñar y dar formato a mis páginas web, creando interfaces atractivas y responsivas.",
                "gitDesc": "El control de versiones GIT, tambien lo aprendí en la universidad y me ah sido util al desarrollar.",
                "databases": "Bases de Datos",
                "databasesDesc": "Tengo experiencia trabajando con bases de datos relacionales como MySQL y SQLite3, así como con bases de datos NoSQL como Firebase Realtime Database y MongoDB. He utilizado estas tecnologías para almacenar y gestionar datos de manera eficiente en mis proyectos."
            },
            "projects": {
                "title": "Mis Proyectos",
                "subtitle": "¿Que yo he hecho?",
                "agentes": "Agentes de IA",
                "agentesDesc": "Desarrollo de agentes inteligentes usando Python y modelos de IA locales, con LangChain o OpenAI desplegados en entornos web con Flask o FastAPI.",
                "clasificador": "Clasificador de Imagenes usando Machine-Learning",
                "clasificadorDesc": "Clasificador de imagenes hecho con Python usando sklearn y skimage, desplegado en aplicación web con Flask en render.",
                "descargador": "Descargador de videos de YouTube",
                "descargadorDesc": "Un programa realizado en Python usando la libreria pytube, zipfile y Flask.",
                "bot": "Bot con Selenium que compara imagenes",
                "botDesc": "Bot hecho con Selenium, Python, Opencv y Skimage, que busca una imagen en el sitio y halla las diferencias",
                "asistente": "Asistente de Voz",
                "asistenteDesc": "Un asistente de voz creado en Python usando varias librerias, incluida pyttsx3, speech_recognition y demás para crear un asistente similar a Siri o Alexa.",
                "convertidor": "Convertidor Texto a Voz y Visceversa",
                "convertidorDesc": "Pequeño script en Python que usando la api de gtts y speech-recognition puede convertir el texto y leerlo, además tambien tiene la opción de hacer lo contrario convertir la voz a texto.",
                "filtros": "Aplicador de Filtros",
                "filtrosDesc": "Este es un programa que puede aplicar diversos filtros a imagenes desde dibujo hasta fusion de imagenes en tiempo real usando opencv.",
                "luces": "Proyecto luces con sensor de luz en Java y Arduino",
                "lucesDesc": "Proyecto que controla luces mediante un sensor de luz las cuales se encienden o apagan según la cantidad de luz ambiente, desarrollado en Java y Arduino.",
                "javaPoo": "Trabajo de la universidad en Java aplicando POO",
                "javaPooDesc": "Proyecto hecho en Java para la universidad, donde se aplican conceptos de Programación Orientada a Objetos (POO) para desarrollar una aplicación funcional.",
                "demo": "Demo",
                "proyecto": "Proyecto",
                "github": "GitHub"
            },
            "workProjects": {
                "title": "Proyectos en el campo laboral",
                "subtitle": "¿Que yo he hecho?",
                "telemedicina": "Software de Telemedicina",
                "telemedicinaDesc": "Software de telemedicina desarrollado en Python-Django, ReactJS y Redis, que permite la consulta médica a distancia.",
                "ambulancia": "URL para seguimiento de ambulancias en tiempo real",
                "ambulanciaDesc": "Un programa realizado en Python-Flask, ReactJS, Here-Maps, y Socket.IO, que permite el seguimiento de ambulancias en tiempo real.",
                "facial": "Sistema de reconocimiento facial para inicio de sesión",
                "facialDesc": "Software de reconocimiento facial para inicio de sesión en aplicaciones web.",
                "rda": "Visor Web RDA",
                "rdaDesc": "Software para consultar el Resumen Digital de Atención (RDA) en Colombia según Resolución 1888 de 2025. Esta aplicación permite a los usuarios acceder a la información del RDA de manera rápida y segura. Esta desarrollada en Python con el framework Flask para el backend, y ReactJS para el frontend. Utiliza autenticación segura y cumple con los estándares de privacidad de datos para garantizar la protección de la información del usuario.",
                "visor": "Visor"
            },
            "contact": {
                "title": "Contactame",
                "subtitle": "¡En un solo toque!",
                "copyright": "2022 Copyright: Diego Gutierrez",
                "name": "Nombre",
                "email": "Email",
                "message": "Mensaje",
                "send": "Enviar"
            },
            "languageSelector": "Idioma"
        },
        'en': {
            "nav": {
                "start": "Home",
                "downloadCV": "Download my CV",
                "about": "About me",
                "skills": "My Skills",
                "projects": "My Projects",
                "workProjects": "Work Projects",
                "contact": "Contact me"
            },
            "hero": {
                "welcome": "Hello, Welcome to",
                "title": "My Portfolio",
                "description": "Here you can find my information, see my projects, my experience and you can contact me",
                "scrollDown": "Scroll Down"
            },
            "about": {
                "title": "About me",
                "question": "Who am I?",
                "description": "My name is <strong>Diego Gutierrez Torres</strong> and I am a <strong>Developer</strong> in areas such as Backend, but also in the area of <strong>Artificial Intelligence.</strong>",
                "bio": "I am a developer passionate about technology and innovation. I love solving complex problems and creating elegant solutions. I have experience in web development, mobile applications and AI.",
                "projects": "Projects",
                "courses": "Courses",
                "years": "Years Developing",
                "team": "Team as Scrum Master",
                "certifications": "Certifications"
            },
            "skills": {
                "title": "My Skills",
                "subtitle": "What can I do?",
                "pythonDesc": "The programming language that I master the most, I have used it for web development with flask and django. Also for Machine-Learning. I use libraries like Selenium, OpenCv, Sklearn, Skimage and others.",
                "javascriptDesc": "Language that I currently work with and also with the AngularJS framework",
                "phpDesc": "I also work with it currently. for the views of a project, as a complement to JavaScript in the frontend. And for the backend to generate excel reports with PhpSpreadsheet and PDF with DOMPDF. Create REST APIs, and Likewise to consume REST APIs with cURL.",
                "csharpDesc": "Language that I saw for data structure in the university and I also learned graphical interfaces with Windows Forms",
                "javaDesc": "Java I saw it a long time ago, but I took it up again recently for a web development course, where I used SpringBoot, Maven and Eclipse.",
                "ai": "Artificial Intelligence",
                "aiDesc": "One of my favorite areas, I have done Machine-Learning and computer vision projects.",
                "html5Desc": "HTML5 is the markup language I use to structure the content of my web pages.",
                "css3Desc": "CSS3 is the style language I use to design and format my web pages, creating attractive and responsive interfaces.",
                "gitDesc": "The GIT version control, I also learned it in the university and it has been useful to me when developing.",
                "databases": "Databases",
                "databasesDesc": "I have experience working with relational databases like MySQL and SQLite3, as well as NoSQL databases like Firebase Realtime Database and MongoDB. I have used these technologies to store and manage data efficiently in my projects."
            },
            "projects": {
                "title": "My Projects",
                "subtitle": "What have I done?",
                "agentes": "AI Agents",
                "agentesDesc": "Development of intelligent agents using Python and local AI models, with LangChain or OpenAI deployed in web environments with Flask or FastAPI.",
                "clasificador": "Image Classifier using Machine-Learning",
                "clasificadorDesc": "Image classifier made with Python using sklearn and skimage, deployed in web application with Flask on render.",
                "descargador": "YouTube Video Downloader",
                "descargadorDesc": "A program made in Python using the pytube, zipfile and Flask library.",
                "bot": "Bot with Selenium that compares images",
                "botDesc": "Bot made with Selenium, Python, Opencv and Skimage, which searches for an image on the site and finds the differences",
                "asistente": "Voice Assistant",
                "asistenteDesc": "A voice assistant created in Python using various libraries, including pyttsx3, speech_recognition and others to create an assistant similar to Siri or Alexa.",
                "convertidor": "Text to Speech and Vice Versa Converter",
                "convertidorDesc": "Small script in Python that using the gtts and speech-recognition api can convert text and read it, plus it also has the option to do the opposite convert speech to text.",
                "filtros": "Filter Applier",
                "filtrosDesc": "This is a program that can apply various filters to images from drawing to image fusion in real time using opencv.",
                "luces": "Light project with light sensor in Java and Arduino",
                "lucesDesc": "Project that controls lights using a light sensor which turn on or off according to the amount of ambient light, developed in Java and Arduino.",
                "javaPoo": "University work in Java applying OOP",
                "javaPooDesc": "Project made in Java for the university, where concepts of Object-Oriented Programming (OOP) are applied to develop a functional application.",
                "demo": "Demo",
                "proyecto": "Project",
                "github": "GitHub"
            },
            "workProjects": {
                "title": "Work Projects",
                "subtitle": "What have I done?",
                "telemedicina": "Telemedicine Software",
                "telemedicinaDesc": "Telemedicine software developed in Python-Django, ReactJS and Redis, which allows remote medical consultation.",
                "ambulancia": "URL for real-time ambulance tracking",
                "ambulanciaDesc": "A program made in Python-Flask, ReactJS, Here-Maps, and Socket.IO, which allows real-time ambulance tracking.",
                "facial": "Facial recognition system for login",
                "facialDesc": "Facial recognition software for login in web applications.",
                "rda": "RDA Web Viewer",
                "rdaDesc": "Software to consult the Digital Health Summary (RDA) in Colombia according to Resolution 1888 of 2025. This application allows users to access RDA information quickly and securely. It is developed in Python with the Flask framework for the backend, and ReactJS for the frontend. It uses secure authentication and complies with data privacy standards to ensure protection of user information.",
                "visor": "Viewer"
            },
            "contact": {
                "title": "Contact me",
                "subtitle": "Just one click away!",
                "copyright": "2022 Copyright: Diego Gutierrez",
                "name": "Name",
                "email": "Email",
                "message": "Message",
                "send": "Send"
            },
            "languageSelector": "Language"
        }
    },
    
    // Mapeo de elementos por su selector y clave de traducción
    elementMappings: {
        'es': {
            '.welcome-first': 'hero.welcome',
            '.welcome-title': 'hero.title',
            '.scroll-down span': 'hero.scrollDown',
            '[data-menuanchor="slide02"] a': 'nav.about',
            '[data-menuanchor="slide03"] a': 'nav.skills',
            '[data-menuanchor="slide04"] a': 'nav.projects',
            '[data-menuanchor="slide05"] a': 'nav.workProjects',
            '[data-menuanchor="slide06"] a': 'nav.contact'
        }
    },
    
    // Inicializar i18n
    init() {
        // Detectar idioma guardado o del navegador
        this.currentLanguage = this.getStoredLanguage() || this.detectBrowserLanguage();
        
        // Aplicar traducciones
        this.updatePage();
        
        // Actualizar href del CV con el idioma correspondiente
        const cvLink = document.getElementById('cv-download');
        if (cvLink) {
            const cvPath = cvLink.getAttribute(`data-cv-${this.currentLanguage}`);
            if (cvPath) {
                cvLink.href = cvPath;
            }
        }
        
        // Agregar selector de idioma
        this.createLanguageSelector();
    },
    
    // Detectar idioma del navegador
    detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        const lang = browserLang.split('-')[0]; // Obtener solo el código de idioma (es, en, etc)
        return (lang === 'es' || lang === 'en') ? lang : 'es';
    },
    
    // Obtener idioma guardado en localStorage
    getStoredLanguage() {
        return localStorage.getItem('preferredLanguage');
    },
    
    // Guardar idioma preferido
    saveLanguage(lang) {
        localStorage.setItem('preferredLanguage', lang);
    },
    
    // Obtener traducción
    t(key, defaultValue = key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLanguage];
        
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return defaultValue;
            }
        }
        
        return value || defaultValue;
    },
    
    // Actualizar página con nuevas traducciones
    updatePage() {
        // Actualizar elementos con data-i18n o data-i18n-html
        document.querySelectorAll('[data-i18n], [data-i18n-html]').forEach(element => {
            const key = element.getAttribute('data-i18n') || element.getAttribute('data-i18n-html');
            const translation = this.t(key);
            
            if (element.hasAttribute('data-i18n-html')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        });
        
        // Actualizar placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.t(key);
        });
        
        // Actualizar atributo title
        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            element.title = this.t(key);
        });
        
        // Mapeo automático de elementos comunes (sin necesidad de modificar HTML)
        const mappings = {
            'es': {
                '.welcome-first': 'hero.welcome',
                '.welcome-title': 'hero.title',
                '.scroll-down span': 'hero.scrollDown',
                'span[class="Sobre mi"]': 'about.title',
                'h2:contains("¿Quién soy yo?")': 'about.question',
                'span[class="Mis Habilidades"]': 'skills.title',
                'span[class="Mis Proyectos"]': 'projects.title',
                'h2:contains("¿Que yo he hecho?")': 'projects.subtitle'
            },
            'en': {
                '.welcome-first': 'hero.welcome',
                '.welcome-title': 'hero.title',
                '.scroll-down span': 'hero.scrollDown',
                'span[class="Sobre mi"]': 'about.title',
                'h2:contains("¿Quién soy yo?")': 'about.question',
                'span[class="Mis Habilidades"]': 'skills.title',
                'span[class="Mis Proyectos"]': 'projects.title',
                'h2:contains("¿Que yo he hecho?")': 'projects.subtitle'
            }
        };
        
        // Aplicar selectores simples sin :contains
        const simpleMappings = {
            '.welcome-first': 'hero.welcome',
            '.welcome-title': 'hero.title',
            '.scroll-down span': 'hero.scrollDown'
        };
        
        Object.entries(simpleMappings).forEach(([selector, key]) => {
            const element = document.querySelector(selector);
            if (element) {
                element.textContent = this.t(key);
            }
        });
    },
    
    // Cambiar idioma
    setLanguage(lang) {
        if (lang === 'es' || lang === 'en') {
            this.currentLanguage = lang;
            this.saveLanguage(lang);
            this.updatePage();
            document.documentElement.lang = lang;
            
            // Actualizar el href del CV según el idioma
            const cvLink = document.getElementById('cv-download');
            if (cvLink) {
                const cvPath = cvLink.getAttribute(`data-cv-${lang}`);
                if (cvPath) {
                    cvLink.href = cvPath;
                }
            }
        }
    },
    
    // Crear selector de idioma
    createLanguageSelector() {
        // Buscar botones existentes en el HTML
        const langBtns = document.querySelectorAll('.lang-btn');
        
        if (langBtns.length === 0) return; // Si no existen, salir
        
        // Establecer el botón activo según el idioma actual
        langBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === this.currentLanguage) {
                btn.classList.add('active');
            }
        });
        
        // Agregar event listeners a los botones
        langBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.getAttribute('data-lang');
                this.setLanguage(lang);
                
                // Actualizar botones activos
                langBtns.forEach(b => {
                    b.classList.remove('active');
                });
                e.target.classList.add('active');
            });
        });
    }
};

// Inicializar cuando el documento esté listo
document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});
