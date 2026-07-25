export const translations = {
  en: {
    nav: { status: "SYSTEM ONLINE", toggleLang: "BG" },
    nodes: { about: "ABOUT_ME", projects: "PROJECTS", stack: "TECH_STACK", contact: "COMMS_LINK" },
    
    // 1. ABOUT CONTENT
    aboutSection: {
      bio: "Computer Science student at Sofia University (FMI). Passionate about building fast, reliable software architecture from low-level systems to responsive frontends.",
      edu1: "B.Sc. Computer Science - FMI, Sofia University",
      edu2: "NPMG - National High School of Mathematics and Science"
    },

    // 2. TECH STACK CONTENT
    stackSection: {
      core: "Core & Systems: C++, CMake, SDL3, Docker, Tauri",
      web: "Web Frontend: React, TypeScript, Vite",
      backend: "Backend & DB: Node.js, Frappe"
    },

    // 3. PROJECTS CONTENT
    projectsSection: {
      proj1_title: "Vertex Engine",
      proj1_desc: "Custom C++ desktop graphics and game window framework utilizing CMake and SDL3.",
      proj2_title: "Enterprise Architecture DB",
      proj2_desc: "Localized database management environment built with Frappe and Docker to securely track business contracts.",
      proj3_title: "German-Bulgarian Notebook",
      proj3_desc: "React application designed to store, translate, and track vocabulary word pairs.",
      repoText: "[ VIEW_SOURCE ]"
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
      bio: "Студент по Компютърни науки в Софийски университет (ФМИ). Ориентиран към изграждането на бърза и надеждна софтуерна архитектура - от системи на ниско ниво до responsive потребителски интерфейси.",
      edu1: "Бакалавър Компютърни науки - ФМИ, СУ",
      edu2: "НПМГ - Национална природо-математическа гимназия"
    },

    stackSection: {
      core: "Ядро и Системи: C++, CMake, SDL3, Docker, Tauri",
      web: "Уеб Frontend: React, TypeScript, Vite",
      backend: "Backend и Бази данни: Node.js, Frappe"
    },

    projectsSection: {
      proj1_title: "Vertex Engine",
      proj1_desc: "Собствен C++ десктоп графичен енджин, използващ CMake и SDL3.",
      proj2_title: "Enterprise Architecture DB",
      proj2_desc: "Локализирана система за управление на бази данни, изградена с Frappe и Docker за сигурно проследяване на бизнес договори.",
      proj3_title: "Българо-Немски Речник",
      proj3_desc: "React приложение, създадено за съхранение, превод и проследяване на речникови двойки.",
      repoText: "[ ВИЖ_КОДА ]"
    },

    contactSection: {
      location: "Локация: София, България",
      emailLabel: "Директна връзка: kirilchobansky@gmail.com"
    }
  }
};