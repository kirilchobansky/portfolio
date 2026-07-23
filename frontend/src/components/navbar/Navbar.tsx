import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import styles from './Navbar.module.css';

export default function Navbar(): React.JSX.Element {
  const { t, toggleLanguage } = useLanguage();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        
        {/* Left: System Status */}
        <div className={styles.status}>
          <span className={styles.statusDot} />
          <span className={styles.statusText}>{t.nav.status}</span>
        </div>

        {/* Center: Social Links */}
        <div className={styles.socials}>
          <a 
            href="https://github.com/kirilchobansky" 
            target="_blank" 
            rel="noreferrer" 
            title="GitHub"
            className={styles.socialIcon}
          >
            <FaGithub size={18} />
          </a>
          <a 
            href="https://linkedin.com/in/kiril-chobansky-57738a306" 
            target="_blank" 
            rel="noreferrer" 
            title="LinkedIn"
            className={styles.socialIcon}
          >
            <FaLinkedin size={18} />
          </a>
          <a 
            href="mailto:kirilchobansky@gmail.com" 
            title="Email"
            className={styles.socialIcon}
          >
            <FaEnvelope size={18} />
          </a>
          <a 
            href="https://instagram.com/kirochobansky" 
            target="_blank" 
            rel="noreferrer" 
            title="Instagram"
            className={styles.socialIcon}
          >
            <FaInstagram size={18} />
          </a>
        </div>

        {/* Right: Language Switcher */}
        <button onClick={toggleLanguage} className={styles.langBtn}>
          [{t.nav.toggleLang}]
        </button>

      </div>
    </nav>
  );
}