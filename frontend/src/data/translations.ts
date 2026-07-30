export interface Project {
  title: string;
  tech: string;
  bullets: string[];
  githubUrl?: string;
  demoUrl?: string;
  downloadUrl?: string;
}

export const translations = {
  en: {
    nav: { status: "SYSTEM ONLINE", toggleLang: "BG" },
    nodes: {
      about: "ABOUT_ME",
      projects: "PROJECTS",
      stack: "TECH_STACK",
      contact: "COMMS_LINK",
    },

    hubIntro: {
      greeting: "HI, I'M KIRIL CHOBANSKY",
      role: "CS STUDENT & SOFTWARE ENGINEER",
      missionLeft:
        "Bridging the gap between low-level system architecture and modern web technologies. I build fast, scalable software.",
      missionRight:
        "Currently pursuing my Computer Science degree at Sofia University (FMI). Ready to join a professional engineering team.",
    },

    aboutSection: {
      intro:
        "I am a Computer Science student at Sofia University (FMI). My focus is split between low-level system mechanics in C++ and building responsive, full-stack web applications with React, TypeScript, and Node.js.",
      eduLabel: "🎓 Education",
      eduText:
        "B.Sc. Computer Science @ Sofia University (FMI) | Alumni of NPMG",
      passionLabel: "💡 The Drive",
      passionText:
        "I love architecting fast, clean systems from the ground up and never stop iterating. I do not encourage unfinished work and full of hot air conversations at work! Fan of AI because you don't use it - you fall behind.",
      hobbiesLabel: "🏔️ Beyond the Screen",
      hobbiesText:
        "Love skiing that's why I am BPSI ski instructor, board game enthusiast. Don't mind traveling around the world. Feeling great with daily exercise and healthy food.",
    },

    stackSection: {
      categories: [
        {
          title: "⚙️ Systems & Backend",
          desc: "Core logic and low-level architecture.",
          skills: ["C++", "Node.js", "Express"],
        },
        {
          title: "🎨 Frontend & Web",
          desc: "Interactive, type-safe user interfaces.",
          skills: ["React", "TypeScript", "Angular", "Vite", "HTML/CSS"],
        },
        {
          title: "🗄️ Architecture & Data",
          desc: "Deployment, databases, and local environments.",
          skills: ["Tauri", "MongoDB", "REST APIs"],
        },
      ],
    },

    projectsSection: {
      actions: {
        source: "SOURCE",
        demo: "LIVE DEMO",
        download: "DOWNLOAD .EXE",
      },
      list: [
        {
          title: "📓 German Vocabulary Notebook",
          tech: "Tauri // React // TypeScript // DeepL API",
          bullets: [
            "Built a lightweight, cross-platform desktop application utilizing the Tauri Store for 100% local data privacy.",
            "Integrated the DeepL REST API to enable real-time German-to-Bulgarian vocabulary translation.",
          ],
          githubUrl: "https://github.com/kirilchobansky/notebook",
          downloadUrl:
            "https://github.com/kirilchobansky/notebook/releases/download/v1.1/notebook_0.1.0_x64-setup.exe",
        },
        {
          title: "🛒 Yum-Yum Market",
          tech: "Angular 16 // Node.js // MongoDB // PayPal // Leaflet.js",
          bullets: [
            "Developed a full-stack e-commerce app with dynamic tag filtering, search routing, and local shopping cart persistence.",
            "Implemented secure JWT authentication, custom route guards, and live coordinate mapping via Leaflet.js.",
          ],
          githubUrl: "https://github.com/kirilchobansky/yum-yum-market",
          demoUrl: "https://yum-yum-market.vercel.app",
        },
        {
          title: "🏛️ Chobansky Design Portal",
          tech: "React // Node.js // Express // MongoDB // Mongoose // Multer",
          bullets: [
            "Created a full-stack registry to catalog and filter architectural, urban, and residential projects.",
            "Authored custom React hooks (useAuth, useForm) and dynamic React Contexts for secure global states.",
          ],
          githubUrl:
            "https://github.com/kirilchobansky/chobansky-design-business",
        },
      ] as Project[],
    },

    contactSection: {
      locationLabel: "📍 Base of Operations",
      locationText: "Sofia, Krasno Selo — Highly connected to the entire city.",
      formTitle: "DIRECT MSG",
      namePlaceholder: "YOUR_NAME",
      emailPlaceholder: "YOUR_EMAIL",
      msgPlaceholder: "ENTER_MESSAGE...",
      sendBtn: "[ TRANSMIT ]",
      submittingText: "[ TRANSMITTING... ]",
      successMessage: "MESSAGE_RECEIVED. I will get back to you shortly.",
      errorMessage: "TRANSMISSION_FAILED. Please try again later.",
    },
  },

  bg: {
    nav: { status: "СИСТЕМАТА Е ОНЛАЙН", toggleLang: "EN" },
    nodes: {
      about: "ЗА_МЕН",
      projects: "ПРОЕКТИ",
      stack: "ТЕХНОЛОГИИ",
      contact: "КОНТАКТИ",
    },

    hubIntro: {
      greeting: "ЗДРАВЕЙ, АЗ СЪМ КИРИЛ ЧОБАНСКИ",
      role: "СТУДЕНТ ПО КН & СОФТУЕРЕН ИНЖЕНЕР",
      missionLeft:
        "Свързвам системната архитектура на ниско ниво с модерните уеб технологии. Изграждам бърз и мащабируем софтуер.",
      missionRight:
        "Студент по Компютърни науки във ФМИ (Софийски университет). Активно търся реализация в професионален инженерен екип.",
    },

    aboutSection: {
      intro:
        "Аз съм Кирил Чобански — 20-годишен студент. Фокусът ми е разделен между ниско ниво системна механика в C++ и изграждане на адаптивни, пълнофункционални уеб приложения с React, TypeScript и Node.js. Нося креативност със себе си.",
      eduLabel: "🎓 Образование",
      eduText: "Бакалавър Компютърни науки @ ФМИ, СУ | Възпитаник на НПМГ",
      passionLabel: "💡 Работа",
      passionText:
        "Обичам да проектирам бързи и изчистени системи от нулата. Не обичам недовършената работа и не подкрепям празните приказки по време на работа. Подкрепям използването на изкуствен интелект, защото без него изоставаш.",
      hobbiesLabel: "🏔️ Извън екрана",
      hobbiesText:
        "Страстен скиор от малък, ето защо съм инструктор по ски. Фен на настолните игри. Обичам пътуванията и се чувствам добре с ежедневна актичност и здравословно хранене.",
    },

    stackSection: {
      categories: [
        {
          title: "⚙️ Системи & Backend",
          desc: "Основна логика и архитектура на ниско ниво.",
          skills: ["C++", "Node.js", "Express"],
        },
        {
          title: "🎨 Frontend & Web",
          desc: "Интерактивни потребителски интерфейси.",
          skills: ["React", "Angular", "TypeScript", "Vite", "HTML/CSS"],
        },
        {
          title: "🗄️ Архитектура & Данни",
          desc: "Среди за разработка и бази данни.",
          skills: ["Tauri", "MongoDB", "REST APIs"],
        },
      ],
    },

    projectsSection: {
      actions: {
        source: "КОД",
        demo: "ДЕМО",
        download: "ИЗТЕГЛИ .EXE",
      },
      list: [
        {
          title: "📓 Българо-Немски Речник",
          tech: "Tauri // React // TypeScript // DeepL API",
          bullets: [
            "Изградих леко, десктоп приложение, използващо Tauri Store за 100% локална поверителност на данните.",
            "Интегрирах DeepL REST API за превод на думи от немски на български в реално време.",
          ],
          githubUrl: "https://github.com/kirilchobansky/notebook",
          downloadUrl: "https://TODO-notebook-release-exe-url.example.com",
        },
        {
          title: "🛒 Yum-Yum Market",
          tech: "Angular 16 // Node.js // MongoDB // PayPal // Leaflet.js",
          bullets: [
            "Разработих full-stack e-commerce приложение с динамично филтриране по тагове, търсене и локално запазване на количката.",
            "Имплементирах сигурна JWT автентикация, custom route guards и live мапинг на координати чрез Leaflet.js.",
          ],
          githubUrl: "https://github.com/kirilchobansky/yum-yum-market",
          demoUrl: "https://TODO-yum-yum-market-demo-url.example.com",
        },
        {
          title: "🏛️ Chobansky Design Portal",
          tech: "React // Node.js // Express // MongoDB // Mongoose // Multer",
          bullets: [
            "Създадох full-stack регистър за каталогизиране и филтриране на различни архитектурни проекти.",
            "Написах custom React hooks (useAuth, useForm) и динамични React Contexts за сигурен глобален state.",
          ],
          githubUrl:
            "https://github.com/kirilchobansky/chobansky-design-business",
        },
      ] as Project[],
    },

    contactSection: {
      locationLabel: "📍 Локация",
      locationText:
        "София, Красно Село — С бърз достъп до всяка точка на града.",
      formTitle: "ДИРЕКТНО СЪОБЩЕНИЕ",
      namePlaceholder: "ТВОЕТО_ИМЕ",
      emailPlaceholder: "ТВОЯТ_ИМЕЙЛ",
      msgPlaceholder: "ВЪВЕДИ_СЪОБЩЕНИЕ...",
      sendBtn: "[ ИЗПРАТИ ]",
      submittingText: "[ ИЗПРАЩАНЕ... ]",
      successMessage: "СЪОБЩЕНИЕТО Е ПОЛУЧЕНО. Ще се свържа с вас скоро.",
      errorMessage: "ГРЕШКА ПРИ ИЗПРАЩАНЕ. Моля, опитайте по-късно.",
    },
  },
};
