export const translations = {
  en: {
    nav: { status: "SYSTEM ONLINE", toggleLang: "BG" },
    nodes: { about: "ABOUT_ME", projects: "PROJECTS", stack: "TECH_STACK", contact: "COMMS_LINK" },

    hubIntro: {
      greeting: "HI, I'M KIRIL CHOBANSKY",
      role: "CS STUDENT & SOFTWARE ENGINEER",
      missionLeft: "Bridging the gap between low-level system architecture and modern web technologies. I build fast, scalable software.",
      missionRight: "Currently pursuing my Computer Science degree at Sofia University (FMI). Ready to join a professional engineering team."
    },

    aboutSection: {
      intro: "I am Kiril Chobansky—a 20-year-old student driven by creativity and the ambition to build highly optimized, impactful systems. Chasing the title software engineer.",
      eduLabel: "🎓 Education",
      eduText: "B.Sc. Computer Science @ Sofia University (FMI) | Alumni of NPMG",
      passionLabel: "💡 The Drive",
      passionText: "Chasing 'big work'. I love architecting fast, clean systems from the ground up and never stop iterating. I do not encourage unfinished work and full of hot air conversations at work! Fan of AI because you don't use it - you fall behind.",
      hobbiesLabel: "🏔️ Beyond the Screen",
      hobbiesText: "Advanced skier BPSI instructor, heavy strategy board game enthusiast, and dedicated to strength conditioning.",
      extraLabel: "🏎️ Interests",
      extraText: "Traveling, fitness, and strict lifestyle optimization."
    },

    stackSection: {
      categories: [
        {
          title: "⚙️ Systems & Backend",
          desc: "Core logic and low-level architecture.",
          skills: ["C++", "CMake", "Node.js", "Express", "SDL3"]
        },
        {
          title: "🎨 Frontend & Web",
          desc: "Interactive, type-safe user interfaces.",
          skills: ["React", "TypeScript", "Angular", "Vite", "HTML/CSS"]
        },
        {
          title: "🗄️ Architecture & Data",
          desc: "Deployment, databases, and local environments.",
          skills: ["Docker", "Tauri", "Frappe", "MongoDB", "REST APIs"]
        }
      ]
    },

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
      errorMessage: "TRANSMISSION_FAILED. Please try again later."
    },
  },
  
  bg: {
    nav: { status: "СИСТЕМАТА Е ОНЛАЙН", toggleLang: "EN" },
    nodes: { about: "ЗА_МЕН", projects: "ПРОЕКТИ", stack: "ТЕХНОЛОГИИ", contact: "КОНТАКТИ" },

    hubIntro: {
      greeting: "ЗДРАВЕЙ, АЗ СЪМ КИРИЛ ЧОБАНСКИ",
      role: "СТУДЕНТ ПО КН & СОФТУЕРЕН ИНЖЕНЕР",
      missionLeft: "Свързвам системната архитектура на ниско ниво с модерните уеб технологии. Изграждам бърз и мащабируем софтуер.",
      missionRight: "Студент по Компютърни науки във ФМИ (Софийски университет). Активно търся реализация в професионален инженерен екип."
    },
    
    aboutSection: {
      intro: "Аз съм Кирил Чобански — 20-годишен студент, носещ креативност и амбицията да изграждам високооптимизирани системи. Преследвайки титлата софтуерен инженер!",
      eduLabel: "🎓 Образование",
      eduText: "Бакалавър Компютърни науки @ ФМИ, СУ | Възпитаник на НПМГ",
      passionLabel: "💡 Работа",
      passionText: "Преследвам 'голямата работа'. Обичам да проектирам бързи и изчистени системи от нулата. Не обичам недовършената работа и не подкрепям празните приказки на работното място. Подкрепям използването на изкуствен интелект, защото без него изоставаш.",
      hobbiesLabel: "🏔️ Извън екрана",
      hobbiesText: "Страстен скиор от малък. BPSI инструктор по ски, фен на стратегически настолни игри и тренировки.",
      extraLabel: "🏎️ Интереси",
      extraText: "Пътуването не го отказвам както и стриктна оптимизация на начина на живот."
    },

    stackSection: {
      categories: [
        {
          title: "⚙️ Системи & Backend",
          desc: "Основна логика и архитектура на ниско ниво.",
          skills: ["C++", "CMake", "Node.js", "Express", "SDL3"]
        },
        {
          title: "🎨 Frontend & Web",
          desc: "Интерактивни потребителски интерфейси.",
          skills: ["React", "Angular", "TypeScript", "Vite", "HTML/CSS"]
        },
        {
          title: "🗄️ Архитектура & Данни",
          desc: "Среди за разработка и бази данни.",
          skills: ["Docker", "Tauri", "Frappe", "MongoDB", "REST APIs"]
        }
      ]
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
      locationLabel: "📍 Локация",
      locationText: "София, Красно Село — С бърз достъп до всяка точка на града.",
      formTitle: "ДИРЕКТНО СЪОБЩЕНИЕ",
      namePlaceholder: "ТВОЕТО_ИМЕ",
      emailPlaceholder: "ТВОЯТ_ИМЕЙЛ",
      msgPlaceholder: "ВЪВЕДИ_СЪОБЩЕНИЕ...",
      sendBtn: "[ ИЗПРАТИ ]",
      submittingText: "[ ИЗПРАЩАНЕ... ]",
      successMessage: "СЪОБЩЕНИЕТО Е ПОЛУЧЕНО. Ще се свържа с вас скоро.",
      errorMessage: "ГРЕШКА ПРИ ИЗПРАЩАНЕ. Моля, опитайте по-късно."
    },
  }
};