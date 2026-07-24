import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FaTerminal, FaCodeBranch, FaCopy, FaCheck } from 'react-icons/fa';
import styles from './Sections.module.css';

export default function Sections(): React.JSX.Element {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kirilchobansky@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      {/* 1. ABOUT SECTION */}
      <section id="about" className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t.aboutSection.title}</h2>
          <div className={styles.headerLine} />
        </div>
        <div className={styles.terminalCard}>
          <h3 style={{ color: 'var(--hud-text)', marginBottom: '0.8rem' }}>{t.aboutSection.subtitle}</h3>
          <p className={styles.textBio}>{t.aboutSection.bio}</p>
          <h4 className={styles.subHeading}>{t.aboutSection.educationTitle}</h4>
          <ul className={styles.eduList}>
            <li className={styles.eduItem}>
              <FaTerminal size={12} color="var(--hud-green)" />
              <span>{t.aboutSection.edu1}</span>
            </li>
            <li className={styles.eduItem}>
              <FaTerminal size={12} color="var(--hud-green)" />
              <span>{t.aboutSection.edu2}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 2. TECH STACK SECTION */}
      <section id="stack" className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t.stackSection.title}</h2>
          <div className={styles.headerLine} />
        </div>
        <div className={styles.stackGrid}>
          <div className={styles.terminalCard}>
            <h3 className={styles.subHeading}>{t.stackSection.languages}</h3>
            <div className={styles.badgeContainer}>
              <span className={styles.techBadge}>C++</span>
              <span className={styles.techBadge}>JavaScript</span>
              <span className={styles.techBadge}>TypeScript</span>
              <span className={styles.techBadge}>HTML5 / CSS3</span>
            </div>
          </div>

          <div className={styles.terminalCard}>
            <h3 className={styles.subHeading}>{t.stackSection.frontend}</h3>
            <div className={styles.badgeContainer}>
              <span className={styles.techBadge}>React.js</span>
              <span className={styles.techBadge}>Angular</span>
              <span className={styles.techBadge}>Vite</span>
              <span className={styles.techBadge}>CSS Modules</span>
            </div>
          </div>

          <div className={styles.terminalCard}>
            <h3 className={styles.subHeading}>{t.stackSection.backend}</h3>
            <div className={styles.badgeContainer}>
              <span className={styles.techBadge}>Node.js</span>
              <span className={styles.techBadge}>Git & GitHub</span>
              <span className={styles.techBadge}>REST APIs</span>
              <span className={styles.techBadge}>Docker</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t.projectsSection.title}</h2>
          <div className={styles.headerLine} />
        </div>
        <div className={styles.projectsGrid}>
          
          <div className={styles.projectCard}>
            <div>
              <h3 className={styles.projectTitle}>German-Bulgarian Notebook</h3>
              <p className={styles.projectDesc}>
                Custom translation, vocabulary tracking, and dictionary notebook software application.
              </p>
              <div className={styles.badgeContainer}>
                <span className={styles.techBadge}>React</span>
                <span className={styles.techBadge}>TypeScript</span>
              </div>
            </div>
            <div className={styles.projectLinks}>
              <a href="https://github.com/kirilchobansky" target="_blank" rel="noreferrer" className={styles.projectBtn}>
                <FaCodeBranch size={14} /> {t.projectsSection.viewCode}
              </a>
            </div>
          </div>

          <div className={styles.projectCard}>
            <div>
              <h3 className={styles.projectTitle}>Enterprise Management App</h3>
              <p className={styles.projectDesc}>
                Local database and enterprise operations management system for an architecture firm.
              </p>
              <div className={styles.badgeContainer}>
                <span className={styles.techBadge}>Docker</span>
                <span className={styles.techBadge}>Frappe</span>
              </div>
            </div>
            <div className={styles.projectLinks}>
              <a href="https://github.com/kirilchobansky" target="_blank" rel="noreferrer" className={styles.projectBtn}>
                <FaCodeBranch size={14} /> {t.projectsSection.viewCode}
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CONTACT SECTION */}
      <section id="contact" className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t.contactSection.title}</h2>
          <div className={styles.headerLine} />
        </div>
        <div className={styles.terminalCard} style={{ textAlign: 'center' }}>
          <h3 style={{ color: 'var(--hud-green)', marginBottom: '0.5rem' }}>{t.contactSection.subtitle}</h3>
          <p style={{ color: 'var(--hud-muted)' }}>kirilchobansky@gmail.com | {t.contactSection.locationValue}</p>
          <button onClick={handleCopyEmail} className={styles.copyBtn}>
            {copied ? <><FaCheck /> {t.contactSection.copied}</> : <><FaCopy /> {t.contactSection.copyEmail}</>}
          </button>
        </div>
      </section>
    </div>
  );
}