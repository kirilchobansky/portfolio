export const translations = {
  en: {
    nav: { status: "SYSTEM ONLINE", toggleLang: "BG" },
    nodes: { about: "ABOUT_ME", projects: "PROJECTS", stack: "TECH_STACK", contact: "COMMS_LINK" },
    
    // 1. ABOUT CONTENT
    aboutSection: {
      intro: "I am Kiril Chobansky—a 20-year-old student driven by creativity and the ambition to build highly optimized, impactful systems. Chasing the title software engineer.",
      eduLabel: "🎓 Education",
      eduText: "B.Sc. Computer Science @ Sofia University (FMI) | Alumni of NPMG",
      passionLabel: "💡 The Drive",
      passionText: "Chasing 'big work'. I love architecting fast, clean systems from the ground up and never stop iterating. I do not encourage unfinished work and full of hot air conversations at work!",
      hobbiesLabel: "🏔️ Beyond the Screen",
      hobbiesText: "Advanced skier BPSI instructor, heavy strategy board game enthusiast, and dedicated to strength conditioning.",
      extraLabel: "🏎️ Interests",
      extraText: "Traveling, fitness, and strict lifestyle optimization."
    },

    // 2. TECH STACK CONTENT
    stackSection: {
      core: "Core & Systems: C++, CMake, SDL3, Docker, Tauri",
      web: "Web Frontend: React, TypeScript, Vite",
      backend: "Backend & DB: Node.js, Frappe"
    },

    // 3. PROJECTS CONTENT
    projectsSection: {
      list: [
        {
          title: "📓 German Vocabulary Notebook",
          tech: "Tauri // React // TypeScript // DeepL API",
          bullets: [
            "Built a lightweight, cross-platform desktop application utilizing the Tauri Store for 100% local data privacy.",
            "Integrated the DeepL REST API to enable real-time German-to-Bulgarian vocabulary translation."
          ],
          repoText: "[ VIEW_SOURCE ]",
          repoLink: "https://github.com/kirilchobansky/notebook"
        },
        {
          title: "🛒 Yum-Yum Market",
          tech: "Angular 16 // Node.js // MongoDB // PayPal // Leaflet.js",
          bullets: [
            "Developed a full-stack e-commerce app with dynamic tag filtering, search routing, and local shopping cart persistence.",
            "Implemented secure JWT authentication, custom route guards, and live coordinate mapping via Leaflet.js."
          ],
          repoText: "[ VIEW_SOURCE ]",
          repoLink: "https://github.com/kirilchobansky/yum-yum-market"
        },
        {
          title: "🏛️ Chobansky Design Portal",
          tech: "React // Node.js // Express // MongoDB // Mongoose // Multer",
          bullets: [
            "Created a full-stack registry to catalog and filter architectural, urban, and residential projects.",
            "Authored reusable custom React hooks (useAuth, useForm) and dynamic React Contexts for secure global states."
          ],
          repoText: "[ VIEW_SOURCE ]",
          repoLink: "https://github.com/kirilchobansky/chobansky-design-business"
        }
      ]
    },

    // 4. CONTACT CONTENT
    contactSection: {
      location: "Location: Sofia, Bulgaria",
      emailLabel: "Direct Comm: kirilchobansky@gmail.com"
    }
  },
  
  bg: {
    nav: { status: "СИСТЕМАТА Е ОНЛАЙН", toggleLang: "EN" },
    nodes: { about: "ЗА_МЕН", projects: "ПРОЕКТИ", stack: "ТЕХНОЛОГИИ", contact: "КОНТАКТИ" },
    
    aboutSection: {
      intro: "Аз съм Кирил Чобански — 20-годишен студент, носещ креативност и амбицията да изграждам високооптимизирани системи. Преследвайки титлата софтуерен инженер!",
      eduLabel: "🎓 Образование",
      eduText: "Бакалавър Компютърни науки @ ФМИ, СУ | Възпитаник на НПМГ",
      passionLabel: "💡 Мотивация",
      passionText: "Преследвам 'голямата работа'. Обичам да проектирам бързи и изчистени системи от нулата. Не обичам недовършената работа и не подкрепям празните приказки на работното място.",
      hobbiesLabel: "🏔️ Извън екрана",
      hobbiesText: "Страстен скиор от малък. BPSI инструктор по ски, фен на стратегически настолни игри и тренировки.",
      extraLabel: "🏎️ Интереси",
      extraText: "Пътуването не го отказвам както и стриктна оптимизация на начина на живот."
    },

    stackSection: {
      core: "Ядро и Системи: C++, CMake, SDL3, Docker, Tauri",
      web: "Уеб Frontend: React, TypeScript, Vite",
      backend: "Backend и Бази данни: Node.js, Frappe"
    },

    projectsSection: {
      list: [
        {
          title: "📓 Българо-Немски Речник",
          tech: "Tauri // React // TypeScript // DeepL API",
          bullets: [
            "Изградих леко, кросплатформено десктоп приложение, използващо Tauri Store за 100% локална поверителност на данните.",
            "Интегрирах DeepL REST API за превод на речников запас от немски на български в реално време."
          ],
          repoText: "[ ВИЖ_КОДА ]",
          repoLink: "https://github.com/kirilchobansky/notebook"
        },
        {
          title: "🛒 Yum-Yum Market",
          tech: "Angular 16 // Node.js // MongoDB // PayPal // Leaflet.js",
          bullets: [
            "Разработих full-stack e-commerce приложение с динамично филтриране по тагове, търсене и локално запазване на количката.",
            "Имплементирах сигурна JWT автентикация, custom route guards и live мапинг на координати чрез Leaflet.js."
          ],
          repoText: "[ ВИЖ_КОДА ]",
          repoLink: "https://github.com/kirilchobansky/yum-yum-market"
        },
        {
          title: "🏛️ Chobansky Design Portal",
          tech: "React // Node.js // Express // MongoDB // Mongoose // Multer",
          bullets: [
            "Създадох full-stack регистър за каталогизиране и филтриране на архитектурни, градоустройствени и жилищни проекти.",
            "Написах преизползваеми custom React hooks (useAuth, useForm) и динамични React Contexts за сигурен глобален state."
          ],
          repoText: "[ ВИЖ_КОДА ]",
          repoLink: "https://github.com/kirilchobansky/chobansky-design-business"
        }
      ]
    },

    contactSection: {
      location: "Локация: София, България",
      emailLabel: "Директна връзка: kirilchobansky@gmail.com"
    }
  }
};